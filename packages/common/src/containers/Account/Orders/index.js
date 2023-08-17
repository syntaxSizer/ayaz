import React from 'react';
import Container from './style';
import Text from '../../../layout/elements/Text';
import Card from '../../../layout/elements/Card';
import { Icon } from 'react-icons-kit';
import {user as userIcon} from 'react-icons-kit/icomoon/user';
import {phone as phoneIcon} from 'react-icons-kit/icomoon/phone';
import {location as locationIcon} from 'react-icons-kit/icomoon/location';
import {notification} from 'react-icons-kit/icomoon/notification';
import {arrowLeft2} from 'react-icons-kit/icomoon/arrowLeft2';
import {office as officeIcon} from 'react-icons-kit/icomoon/office';
import {useSelector} from 'react-redux';
import { API } from '../../../data/Account'

const statusMap = {
  '0': 'Pending',
  '1': 'Processing',
  '2': 'Cancelled'
}

const Section = () => {
    let mounted = true;
    const [orderHistory, setOrderHistory] = React.useState([]);
    const [currentOrderDetails, setCurrentOrderDetails] = React.useState(null);
    const [orderDetails, setOrderDetails] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);

    const { isLoggedIn, user } = useSelector(({auth})=> auth);

    React.useEffect(()=>{
        isLoggedIn && API.getOrdersHistory(user.user_id).then(items=>{
            if (mounted) {
              setOrderHistory(items);
              setIsLoading(false);
            }
        });
        return () => {
          setIsLoading(false);
          mounted = false;
        }
    }, []);

    const getOrderDetails = (id) => {
        if (orderDetails[id]) {
            setCurrentOrderDetails(orderDetails[id])
        }
        else {
            API.getOrderDetails(id).then(data=> {
            const key = data.Order.id
            setCurrentOrderDetails(data)
            setOrderDetails({ ...orderDetails, [key]: data })
            })
        }
    }
    
    return (
        <Container>
            <div className="sectionHeader">
              <div className="innerSection">
                <div className="header">
                  <h1 className="title">Orders</h1>
                </div>
              </div>
            </div>
            <div>
            {orderHistory.length ?
                  <>
                  {currentOrderDetails ?
                  <div className="msnWrapper">
                    <div className="orderDetails orderHistoryCard">
                      <Icon className="backArrow" onClick={()=>{
                        setCurrentOrderDetails(null);
                      }} icon={arrowLeft2} size={22} />
                      <div>
                        <h3 style={{textAlign: 'center', fontSize: '30px', letterSpacing: '-2px', margin: '8px 0'}}>{`Order #${currentOrderDetails.Order.id}`} </h3>
                        <Card className="userDetailsWrapper">
                          <div className="userDetails">
                            <div className="row">
                              <Icon icon={userIcon} />
                              <Text content={`${currentOrderDetails.UserInfo.first_name} ${currentOrderDetails.UserInfo.last_name}`} />
                            </div>
                            <div className="row">
                              <Icon icon={phoneIcon} />
                              <Text content={currentOrderDetails.UserInfo.phone} />
                            </div>
                            <div className="row">
                              <Icon icon={locationIcon} />
                              <Text content={currentOrderDetails.Address.street} />
                            </div>
                            <hr/>
                            <h3>Merchant</h3>
                            <div className="row">
                              <Icon icon={officeIcon} />
                              <Text content={`${currentOrderDetails.Aisle.name}`} />
                            </div>
                            <div className="row">
                              <Icon icon={notification} />
                              <Text content={`${currentOrderDetails.Address.instructions || "no instructions provided"}`} />
                            </div>
                          </div>
                          <div className="flex-column">
                            <Card className="menuDetails orderHistoryCard">
                              <div className="menuHeader"> 
                                <div className="row">
                                  <h4 className=""> Item</h4>
                                </div>
                                <div className="row">
                                  <h4 className=""> Price</h4>
                                </div>
                              </div>
                            {currentOrderDetails.OrderListItem.map(m=>(
                              <div className="menuHeader"> 
                                <div className="row">
                                  <Text content = {`${m.quantity}X ${m.name}`} />
                                </div>
                                <div className="row">
                                  <Text content = {`KSH. ${m.price}`} />
                                </div>
                              </div>
                              ))}
                              <div className="menuWrapper">
                                <div className="spaced-row">
                                  <Text content="Sub-total"/>
                                  <Text content={`${currentOrderDetails.Order.sub_total}`}/>
                                </div>
                                <div className="spaced-row">
                                  <Text content="Rider Tip"/>
                                  <Text content={`${currentOrderDetails.Order.rider_tip}`}/>
                                </div>
                                <div className="spaced-row">
                                  <Text content="Delivery Fee"/>
                                  <Text content={`${currentOrderDetails.Order.delivery_fee}`}/>
                                </div>
                                <div className="spaced-row">
                                  <Text content="Tax"/>
                                  <Text content={`${currentOrderDetails.Order.tax}`}/>
                                </div>
                                <div className="spaced-row">
                                  <Text content="Total (KSH.)"/>
                                  <Text content={`${currentOrderDetails.Order.price}`}/>
                                </div>
                              </div>
                            </Card>
                  
                            </div>
                        </Card>
                      </div>
                    </div>
                  </div>:
                  <div className="listContainer">
                    <div className="listWrapper">
                      <div className="cards orderHistoryCard">
                          {orderHistory.map(({Order}) => (
                          <div onClick={(e)=>{getOrderDetails(Order.id)}} className="odas-container">
                            <div className="oda">
                              <div className={`oda-preview${statusMap[Order.hotel_accepted]}`}>
                                <h6>No.</h6>
                                <h2>{`#${Order.id}`}</h2>
                                <a className="status" href="#">{statusMap[Order.hotel_accepted]} <i className="fas fa-chevron-right"></i></a>
                              </div>
                              <div className="oda-info">
                                <div className="progress-container">
                                  <span className="progress-text"></span>
                                </div>
                                <h6>{`${Order.created}`}</h6>
                                <h2>{`${Order.name}`}</h2>
                                <button onClick={(e)=>{getOrderDetails(Order.id)}} className="btnX">See details</button>
                              </div>
                            </div>
                          </div>
                            ))}
                        </div>
                    </div>
                  </div>
                  }</>:
                <div style={{paddingTop: '50px', paddingBottom: '50px', textAlign: 'center'}} className="emptyWrapper textCenter">
                  <Text className="noHeader" content="You haven't placed any orders yet!" />
                  <Text className="noDescription" content="Your orders will appear here." />
                  
                </div>}

            </div>
        </Container>
    )
}
export default Section
