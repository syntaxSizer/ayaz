import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Link from '../../../layout/elements/Link';
import Input from '../../../layout/elements/Input';
import Button from '../../../layout/elements/Button';
import {
  LoginModalWrapper,
  InfoArea,
  ModalFooter,
  ActionArea,
  AuthContent,
} from './body.style';
import { ModalBlock, ModalOverlay } from '../Modal/styles';
import 'rc-tabs/assets/index.css';
import {
  login,
  signUp,
  authenticationError,
} from '../../../data/store/reducers/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { API } from '../../../data/Account';
import validator from 'validator';
import { toggleModalView } from '../../../data/store/reducers/cart/actions';
import { toast, Zoom } from 'react-toastify';

const defaultCredentials = {
  email: '',
  password: '',
};

const defaultUser = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  referral_code: '',
};

const LoginModal = ({
  row,
  col,
  btnStyle,
  titleStyle,
  contentWrapper,
  outlineBtnStyle,
}) => {
  // Default close button for modal
  const CloseModalButton = () => (
    <button
      style={{ border: 'none', cursor: 'pointer', zIndex: 400 }}
      className="modalCloseBtn"
      variant="fab"
      onClick={hideModal}
    >
      <svg
        width="15px"
        height="15px"
        className="ais-SearchBox-resetIcon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        {' '}
        <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>{' '}
      </svg>
    </button>
  );

  const { isLoggedIn, error } = useSelector(({ auth }) => auth);
  const { modalIsOpen, metadata } = useSelector(({ toggles }) => toggles);

  const dispatch = useDispatch();

  React.useEffect(() => setErrorMsg(error), [error]);
  React.useEffect(() => {
    if (isLoggedIn) {
      // dispatch(bulkInsert(sessionId))
      hideModal();
    } else if (error) {
    }
  }, [isLoggedIn]);

  const [credentials, setCredentials] = React.useState({
    ...defaultCredentials,
  });
  const [userData, setUserData] = React.useState({ ...defaultUser });
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [successMsg, setSuccessMsg] = React.useState(null);
  const [rememberMe] = React.useState(true);
  const [forgotPassowrd, setForgotPassword] = React.useState(false);
  const [registerUp, setRegisterUp] = React.useState(
    modalIsOpen &&
      !!metadata &&
      metadata.component === 'LoginModal' &&
      !metadata.isLogIn
  );
  const [recoveryEmail, setRecoveryEmail] = React.useState('');
  const [verificationCode, setVerificationCode] = React.useState('');
  const [
    awaitingPhonVerification,
    setAwaitingPhoneVirification,
  ] = React.useState(false);

  const alertUser = message =>
    toast.info(message, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 10000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false,
      transition: Zoom,
      delay: 800,
    });

  React.useEffect(() => {
    setAwaitingPhoneVirification(false);
    setShowPhone(false);
    setCredentials({ ...defaultCredentials });
    setUserData({ ...defaultUser });
    setRegisterUp(
      modalIsOpen &&
        !!metadata &&
        metadata.component === 'LoginModal' &&
        !metadata.isLogIn
    );
  }, [modalIsOpen]);

  React.useEffect(() => {
    setErrorMsg(null);
  }, [JSON.stringify(credentials), JSON.stringify(userData)]);

  const hideModal = () => {
    dispatch(toggleModalView());
    setAwaitingPhoneVirification(false);
    setShowPhone(false);
  };

  const isValide = ({ data }) => {
    delete data.referral_code;
    const isNotEmptyOrSpace = v => {
      return v.trim().length > 0;
    };
    if (!Object.values(data).every(isNotEmptyOrSpace)) {
      setErrorMsg('Please fill all the input fileds and try again');
      return false;
    }
    if (!validator.isEmail(data.email)) {
      setErrorMsg('Please enter a valid email address');
      return false;
    }
    if (data.phone && !validator.isMobilePhone(data.phone)) {
      setErrorMsg('Invalid phone number, please try again');
      return false;
    }
    return true;
  };

  const LoginButtonGroup = data => {
    return (
      <Fragment>
        <Button
          onClick={() => {
            if (!isValide(data)) {
              return;
            }
            dispatch(authenticationError(null));
            dispatch(login({ ...data, rememberMe }));
          }}
          className="default"
          title="LOGIN"
          {...btnStyle}
        />
        <Button
          title="CAN'T SIGN IN?"
          variant="textButton"
          onClick={() => setForgotPassword(true)}
          {...outlineBtnStyle}
        />
      </Fragment>
    );
  };

  const [showPhoneInput, setShowPhone] = React.useState(false);

  const sendVerificationCode = () => {
    setErrorMsg(null);
    API.verifyPhoneNumber({
      phone_no: userData.phone,
      verify: 0,
    }).then(() => {
      dispatch(authenticationError(null));
      setAwaitingPhoneVirification(true);
      setShowPhone(false);
    });
  };

  const SignupButtonGroup = ({ data }) => {
    return (
      <Fragment>
        <Button
          onClick={() => {
            if (!isValide({ data })) {
              return;
            }
            if (!data.phone) {
              setShowPhone(true);
              return;
            }
            sendVerificationCode();
          }}
          className="default"
          title="CONTINUE"
          {...btnStyle}
        />
      </Fragment>
    );
  };

  const verifyCode = () => {
    API.verifyPhoneNumber({
      phone_no: userData.phone,
      code: verificationCode,
      verify: '1',
    }).then(({ data }) => {
      if (data.code === 200) {
        dispatch(signUp({ data: userData }));
      } else {
        setErrorMsg(data.msg);
      }
    });
  };

  const VerifyPhoneNumberButton = () => {
    return (
      <Fragment>
        <Button
          onClick={() => {
            verifyCode();
          }}
          className="default"
          title="VERIFY"
          {...{ ...btnStyle, marginBottom: 30 }}
        />
      </Fragment>
    );
  };
  const RecoverEmailButton = () => {
    return (
      <Fragment>
        <Button
          onClick={() => {
            if (!validator.isEmail(recoveryEmail)) {
              setErrorMsg('Please enter a valid email address');
              return false;
            }
            setErrorMsg(null);
            API.resetPassword(recoveryEmail).then(msg => {
              setSuccessMsg(msg);
              alertUser(
                'New password instructions have been sent to your email.'
              );
              setForgotPassword(false);
            });
          }}
          className="default"
          title="RECOVER"
          {...btnStyle}
        />
        <Button
          title="LOGIN"
          variant="textButton"
          onClick={() => setForgotPassword(false)}
          {...outlineBtnStyle}
        />
      </Fragment>
    );
  };

  return (
    <Fragment>
      {modalIsOpen && !!metadata && metadata.component === 'LoginModal' && (
        <ModalBlock>
          <ModalOverlay />
          <CloseModalButton />
          <LoginModalWrapper>
            <div className="row" {...row}>
              <div className="col tabCol" {...col}>
                <div {...contentWrapper}>
                  {forgotPassowrd ? (
                    <Tabs
                      defaultActiveKey="loginForm"
                      renderTabBar={() => <ScrollableInkTabBar />}
                      renderTabContent={() => <TabContent />}
                    >
                      <TabPane tab="" key="forgotPasswordForm">
                        <AuthContent style={{ paddingBottom: '30px' }}>
                          <Heading content="Recover Password" {...titleStyle} />
                          <p className="terms">
                            Enter the email address you registered with and
                            we'll send you instructions to reset your password.
                          </p>
                          <Input
                            onChange={v => setRecoveryEmail(v)}
                            inputType="email"
                            isMaterial
                            placeholder="Registered Email"
                          />
                          <Text className="errorText" content={errorMsg} />
                          <RecoverEmailButton data={userData} />
                        </AuthContent>
                      </TabPane>
                    </Tabs>
                  ) : awaitingPhonVerification ? (
                    <Tabs
                      defaultActiveKey="loginForm"
                      renderTabBar={() => <ScrollableInkTabBar />}
                      renderTabContent={() => <TabContent />}
                    >
                      <TabPane tab="" key="forgotPasswordForm">
                        <AuthContent>
                          <Heading
                            content="Phone Verification"
                            {...titleStyle}
                          />
                          <p className="terms">
                            {errorMsg === 'Account already exist.' ? (
                              <>
                                &nbsp;
                                <Link
                                  href="#"
                                  onClick={e => {
                                    setShowPhone(false);
                                    setUserData({ ...userData, password: '' });
                                    setAwaitingPhoneVirification(false);
                                    setErrorMsg(null);
                                    e.preventDefault();
                                  }}
                                >
                                  <span>Edit Email</span>
                                </Link>
                                &nbsp;
                              </>
                            ) : (
                              <>
                                We sent a verification code to{' '}
                                <span style={{ color: '#2d3138' }}>
                                  {userData.phone}
                                </span>
                                , if you haven't received a message within 1
                                minute click&nbsp;<br></br>
                                <Link
                                  href="#"
                                  onClick={e => {
                                    sendVerificationCode();
                                    e.preventDefault();
                                  }}
                                >
                                  <span>Resend</span>
                                </Link>
                                &nbsp;|&nbsp;
                                <Link
                                  href="#"
                                  onClick={e => {
                                    setShowPhone(true);
                                    setAwaitingPhoneVirification(false);
                                    e.preventDefault();
                                  }}
                                >
                                  <span>Edit Phone number</span>
                                </Link>
                                &nbsp;
                              </>
                            )}
                          </p>
                          <Input
                            onChange={v => setVerificationCode(v)}
                            inputType="text"
                            placeholder="0000"
                            isMaterial
                          />
                          <Text className="errorText" content={errorMsg} />
                          <Text className="successText" content={successMsg} />
                          <VerifyPhoneNumberButton />
                        </AuthContent>
                      </TabPane>
                    </Tabs>
                  ) : registerUp ? (
                    <Tabs
                      defaultActiveKey="registerForm"
                      renderTabBar={() => <ScrollableInkTabBar />}
                      renderTabContent={() => <TabContent />}
                    >
                      <TabPane tab="" key="registerForm">
                        <AuthContent className="signUp">
                          <Heading
                            content={
                              showPhoneInput ? 'Phone Number' : 'Sign Up'
                            }
                            {...titleStyle}
                          />
                          {showPhoneInput ? (
                            <Input
                              onChange={v =>
                                setUserData({ ...userData, phone: v })
                              }
                              inputType="tel"
                              value={userData.phone}
                              isMaterial
                              placeholder="+254 700 000 000"
                            />
                          ) : (
                            <>
                              <span
                                className="regNameForm"
                                style={{ display: 'flex' }}
                              >
                                <Input
                                  style={{ marginRight: '8px' }}
                                  onChange={v =>
                                    setUserData({ ...userData, first_name: v })
                                  }
                                  value={userData.first_name}
                                  isMaterial
                                  placeholder="First Name"
                                />
                                <Input
                                  value={userData.last_name}
                                  onChange={v =>
                                    setUserData({ ...userData, last_name: v })
                                  }
                                  isMaterial
                                  placeholder="Last Name"
                                />
                              </span>
                              <Input
                                onChange={v =>
                                  setUserData({ ...userData, email: v })
                                }
                                value={userData.email}
                                inputType="email"
                                isMaterial
                                placeholder="Email Address"
                              />
                              <Input
                                value={userData.password}
                                onChange={v =>
                                  setUserData({ ...userData, password: v })
                                }
                                inputType="password"
                                passwordShowHide
                                isMaterial
                                placeholder="Secure Password"
                              />
                              <Input
                                onChange={v =>
                                  setUserData({ ...userData, referral_code: v })
                                }
                                inputType="text"
                                isMaterial
                                value={userData.referral_code}
                                placeholder="Referral Code (Optional)"
                              />
                            </>
                          )}
                          <Text className="errorText" content={errorMsg} />
                          <p className="terms">
                            By clicking the CONTINUE, you agree to our{' '}
                            <a href="/terms">Terms of Service</a> and{' '}
                            <a href="/privacy">Privacy Policy</a>.
                          </p>
                          <div>
                            <SignupButtonGroup data={userData} />
                          </div>
                        </AuthContent>
                        <ModalFooter>
                          <InfoArea>
                            <span>Already have an account?</span>
                          </InfoArea>
                          <ActionArea
                            className="button"
                            onClick={() => setRegisterUp(false)}
                          >
                            <span>Login</span>
                          </ActionArea>
                        </ModalFooter>
                      </TabPane>
                    </Tabs>
                  ) : (
                    <Tabs
                      defaultActiveKey="loginForm"
                      renderTabBar={() => <ScrollableInkTabBar />}
                      renderTabContent={() => <TabContent />}
                    >
                      <TabPane className="loginForm" tab="" key="loginForm">
                        <AuthContent>
                          <Heading content="Login" {...titleStyle} />
                          <Input
                            onChange={v =>
                              setCredentials({ ...credentials, email: v })
                            }
                            inputType="email"
                            isMaterial
                            placeholder="Email Address"
                            value={credentials.email}
                          />
                          <Input
                            onChange={v =>
                              setCredentials({ ...credentials, password: v })
                            }
                            passwordShowHide
                            inputType="password"
                            isMaterial
                            placeholder="Password"
                            value={credentials.password}
                          />
                          <Text className="errorText" content={errorMsg} />
                          <div>
                            <LoginButtonGroup data={credentials} />
                          </div>
                        </AuthContent>
                        <ModalFooter>
                          <InfoArea>
                            <span>New to Ayazona?</span>
                          </InfoArea>
                          <ActionArea
                            className="button"
                            onClick={() => setRegisterUp(true)}
                          >
                            <span>Sign Up</span>
                          </ActionArea>
                        </ModalFooter>
                      </TabPane>
                    </Tabs>
                  )}
                </div>
              </div>
            </div>
          </LoginModalWrapper>
        </ModalBlock>
      )}
    </Fragment>
  );
};

// LoginModal style props
LoginModal.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
  googleButtonStyle: PropTypes.object,
};

LoginModal.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    height: 'auto',
    ml: '15px',
  },
  col: {
    width: '100%',
  },
  // Title default style
  titleStyle: {
    color: '#20201D',
    fontSize: '24px',
    mb: '25px',
    letterSpacing: '-1.16px',
    fontWeight: '600',
    lineHeight: 'normal',
    textAlign: 'center',
  },
  // Description default style
  descriptionStyle: {
    color: 'rgba(52, 61, 72, 0.8)',
    fontSize: '15px',
    lineHeight: '26px',
    letterSpacing: '-0.025em',
    mb: '23px',
    ml: '1px',
  },
  // Content wrapper style
  contentWrapper: {
    pt: ['20px'],
    pl: ['0px'],
    pr: '0px',
    pb: ['10px'],
  },
  // Default button style
  btnStyle: {
    width: '100%',
    fontSize: '14px',
    fontWeight: '500',
  },
  // Outline button outline style
  outlineBtnStyle: {
    width: '100%',
    fontSize: '13px',
    letterSpacing: 'initial',
    fontWeight: '600',
    textTransform: 'uppercase',
    lineHeight: 'normal',
    color: 'rgb(180, 184, 193)',
    textAlign: 'center',
    marginTop: '20px',
  },
};

export const defaultProps = {
  defaultProps: LoginModal.defaultProps,
};
export default LoginModal;
