import React from 'react';
import Container from './style';
import Card from '../../../layout/elements/Card';
import { useSelector, useDispatch } from 'react-redux';
import { API } from '../../../data/Account';
import { makeFlatterwavePayment } from '../../../utils';
import { authenticateAction } from '../../../data/store/reducers/auth/actions';

const Section = () => {
  const dispatch = useDispatch();
  const { auth, user } = useSelector(({ auth }) => ({ auth, user: auth.user }));
  const [amount, setAmount] = React.useState('');
  const [records, setRecords] = React.useState([]);
  const onChange = ({ target }) => {
    if (!target.value.length) {
      setAmount('');
    }
    if (!/\D/.test(target.value)) {
      setAmount(target.value);
    }
  };

  React.useEffect(() => {
    API.getTopupHistory(user.user_id).then(
      data => data.length && setRecords(data)
    );
  }, []);

  const wrapperFunc = async data => {
    if (data.status !== 'successful') {
      return;
    }
    const res = await API.topupWallet({
      user_id: user.user_id,
      amount: data.amount,
      transaction: data.transaction_id,
      payment_method: data.payment_type || 'mpesa',
    });
    dispatch(
      authenticateAction({
        ...auth,
        user: { ...user, ...res.User, ...res.UserInfo },
      })
    );
    await API.getTopupHistory(user.user_id).then(
      data => data.length && setRecords(data)
    );
    setAmount('');
  };

  const topUp = async () => {
    makeFlatterwavePayment('KES', amount, user, wrapperFunc, {
      title: 'Ayazona Pay',
      description: 'Topup wallet',
    });
  };

  return (
    <Container>
      <div className="sectionHeader">
        <div className="innerSection">
          <div className="mainHeader">
            <h1 className="title">
              Welcome to your new Wallet, {user.first_name}
            </h1>
            <p className="description">
              A convinient way to plan and get your weekly meals delivered
            </p>
          </div>
        </div>
      </div>
      <div className="tabWrapper">
        <div className="formSection">
          <h6>TOP UP</h6>
          <input
            className="inputFiled"
            onChange={onChange}
            value={amount.toLocaleString()}
            placeholder="MIN KES: 50"
          />
          <button onClick={topUp} className="btnw">
            Topup
          </button>
        </div>
        <Card className="recordsSection">
          <div className="cardBox">
            <div className="walletCard">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="topupHistory">
              <h6>PREVIOUS TRANSACTIONS</h6>
              {records.map(item => (
                <div className="transactionItem">
                  <span className="date">{item.created}</span>
                  <div className="paymentMethod">
                    <span> {`+${item.amount}`}</span>
                    <span className="method"> {`${item.payment_method}`}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </Container>
  );
};
export default Section;
