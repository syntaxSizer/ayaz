import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Container from './style';
import { API } from '../../../data/Account';
import profileme from 'common/src/assets/image/app/profileme.png';
import { toggleLocationPickerState } from '../../../data/store/reducers/cart/actions';

let mounted = false;
const FeatureSection = () => {
  const dispatch = useDispatch();
  const { user, auth } = useSelector(({ auth }) => ({ user: auth.user, auth }));
  const [imgSrc, setAvatarImg] = React.useState(profileme);
  React.useEffect(() => {
    setAvatarImg(
      !!user.profile_img && user.profile_img.length
        ? `https://r.cdn.ayazona.com/${user.profile_img}`
        : profileme
    );
    API.getWalletBalance(user.user_id).then(res => {
      if (mounted) {
        dispatch(
          authenticateAction({ ...auth, user: { ...user, ...res.wallet } })
        );
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const locationToggleHandler = () => dispatch(toggleLocationPickerState());

  const [error, setError] = React.useState(null);

  const [state, setState] = React.useState({});

  const Profile = styled.div`
    position: absolute;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transition: opacity 0.4s linear;
    transition: opacity 0.4s linear;
    background-image: url(${imgSrc});
    opacity: 1;
  `;

  const [inputState, setInputState] = React.useState({
    first_name: user.first_name,
    last_name: user.last_name,
    phone: user.phone,
  });

  const updateInputState = e => {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  };
  const toggleEditState = target => setState({ ...state, [target]: true });
  const saveChanges = items =>
    items.forEach(item => {
      if (['first_name', 'last_name'].includes(item)) {
        setState({ ...state, name: false });
        return;
      }
      setState({ ...state, [item]: false });
    });

  React.useEffect(() => {
    if (!!user.profile_img && user.profile_img.length) {
      setAvatarImg(`https://r.cdn.ayazona.com/${user.profile_img}`);
    }
  }, []);

  const handlePreviewAndUpload = target => {
    let reader = new FileReader();
    reader.onloadend = () => {
      setAvatarImg(reader.result);
      API.uploadImage({
        profile_img: [{ file_data: reader.result }],
        user_id: user.user_id,
      });
    };
    reader.readAsDataURL(target.files[0]);
  };

  const onChange = ({ target }) => {
    const FileSize = target.files[0].size / 1024 / 1024;
    if (FileSize > 5) {
      setError('Maximum 5MB image size');
      setTimeout(() => {
        setError(null);
      }, 5000);
      return;
    }
    let formData = new FormData();
    const files = Array.from(target.files);

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    handlePreviewAndUpload(target);
  };
  return (
    <Container>
      <div className="sectionHeader">
        <div className="innerSection">
          <div className="mainHeader">
            <h1 className="title">Account</h1>
          </div>
        </div>
      </div>
      <main className="mainSection">
        <div className="container">
          <div className="avatar">
            <div className="css-avatar">
              <div className="imageSection">
                <Profile />
                <div className="sec" />
              </div>
              <div className="myName">{`${user.first_name} ${user.last_name}`}</div>
              <button className="button">
                <span className="innerIcon">
                  <div className="icon">
                    <svg width="25" height="19">
                      <defs>
                        <path
                          id="icon-camera-plus_svg__a"
                          d="M3 7h18v12H3V7zm9 2a4 4 0 100 8 4 4 0 000-8zm0 1a3 3 0 110 6 3 3 0 010-6zM7 4h10v2H7V4z"
                        ></path>
                      </defs>
                      <g fill="none" fill-rule="evenodd">
                        <g transform="translate(-3)">
                          <mask id="icon-camera-plus_svg__b" fill="#fff">
                            <use xlinkHref="#icon-camera-plus_svg__a"></use>
                          </mask>
                          <use
                            fill="#222"
                            xlinkHref="#icon-camera-plus_svg__a"
                          ></use>
                          <g fill="#222" mask="url(#icon-camera-plus_svg__b)">
                            <path d="M0 0h24v24H0z"></path>
                          </g>
                        </g>
                        <path fill="#222" d="M17 3h8v2h-8z"></path>
                        <path fill="#222" d="M22 0v8h-2V0z"></path>
                      </g>
                    </svg>
                  </div>
                  <span>Change Photo</span>
                </span>
                <input
                  type="file"
                  id="single"
                  onChange={onChange}
                  className="css-1p25"
                ></input>
              </button>
            </div>
          </div>
          <div className="account">
            <div>
              <div className="infox">
                <div>
                  <div className="wllts-container">
                    <div className="wllt">
                      <div className="wllt-preview">
                        <h6>BETA2</h6>
                        <h2 className="wllt-name">Wallet</h2>
                        <a href="#">
                          Ayazona Pay <i className="fas fa-chevron-right"></i>
                        </a>
                      </div>
                      <div className="wllt-info">
                        <div className="progress-container">
                          <span className="progress-text">KES</span>
                        </div>
                        <h6>Balance</h6>
                        <h2 className="balance">{user.wallet}.00</h2>
                        <a href="/wallet">
                          <button className="btnw">Topup</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="accountDetails">
                <div className="css-accountDetails">
                  <span>Account Details</span>
                </div>
              </div>
              <div className="info">
                <div className="name">
                  <form className="field">
                    <input
                      name="fieldValue"
                      className="css-a6w00"
                      placeholder="Name"
                      value={`${user.first_name} ${user.last_name}`}
                      disabled=""
                    />
                    <button className="btn">
                      <span>Edit</span>
                    </button>
                  </form>
                </div>
                <div className="name">
                  <form className="field">
                    <input
                      name="fieldValue"
                      className="css-a6w00"
                      placeholder="Phone number"
                      value={user.phone}
                      disabled=""
                    />
                    <button className="btn">
                      <span>Edit</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div>
              <div className="accountDetails">
                <div className="css-accountDetails">
                  <span>Profiles</span>
                </div>
              </div>
              <div className="info">
                <div className="personal">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    className="e1v11p8r4"
                  >
                    <path
                      d="M12.02 10.465a2.53 2.53 0 100-5.06 2.53 2.53 0 000 5.06zM18.47 19.594a6.339 6.339 0 000-.76 6.56 6.56 0 00-6.45-6.64 6.559 6.559 0 00-6.49 6.64 6.339 6.339 0 000 .76h12.94z"
                      fill="#2D3138"
                    ></path>
                  </svg>
                  <div>
                    <div className="subH">Personal</div>
                    <div className="email">{user.email}</div>
                  </div>
                </div>
                <div className="personal">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="e1v11p8r4"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 7h4v1h-4V7zM9 8V6h6v2h4v11H5V8h4z"
                      fill="#2D3138"
                    ></path>
                  </svg>
                  <div>
                    <div className="subH">Ayazona for Office</div>
                    <div className="email">Add work email</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="promos">
              <div style={{ marginBottom: '32px' }} className="accountDetails">
                <div className="css-accountDetails">
                  <span>Promos and Credits</span>
                </div>
              </div>
              <div className="code">
                <div className="codeInner">
                  <input
                    placeholder="Add a promo or gift code"
                    autocorrect="off"
                    autocomplete="off"
                    className="css-6q"
                    value=""
                  />
                  <button className="apply">
                    <span>Apply</span>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="accountDetails">
                <div className="css-accountDetails">
                  <span>Addresses</span>
                </div>
              </div>
              <div className="addressAction">
                <div className="addressInner">
                  <div className="adr">
                    <div onClick={locationToggleHandler} className="newAdr">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        className="add"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M1 13c0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12C6.372 1 1 6.372 1 13z"
                            stroke="#DDD"
                          ></path>
                          <path
                            d="M12 12H9v2h3v3h2v-3h3v-2h-3V9h-2v3z"
                            fill="#222"
                          ></path>
                        </g>
                      </svg>
                      <span>Add new address</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default FeatureSection;
