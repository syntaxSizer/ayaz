import React from 'react';
import { GroceryCardsWrapper } from './style';
import choose from 'common/src/assets/image/app/choose.png';
import monitor from 'common/src/assets/image/app/monitor.jpg';
import delivery from 'common/src/assets/image/app/delivery.jpg';
import { toast, Zoom } from 'react-toastify';

const GroceryCards = () => {
  const alertUser = message =>
    toast.info(message, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false,
      transition: Zoom,
      delay: 800,
    });
  return (
    <div>
      <GroceryCardsWrapper id="services">
        <h2 className="title">Grocery delivery you can afford</h2>
        <div className="cardsHolder">
          <div className="card">
            <div className="top">
              <h3 className="subHeader">Choose what you need</h3>
              <p className="info">
                Select items from the most affordable online grocery store at
                Ayazona.com or in the app.
              </p>
            </div>
            <picture>
              <img
                srcSet={`${choose} 1x, ${choose} 2x`}
                src={`${choose}`}
                className="img"
              />
            </picture>
          </div>
          <div className="card">
            <div className="top">
              <h3 className="subHeader">See real-time updates</h3>
              <p className="info">
                Personal shoppers pick items with care. Monitor as they shop and
                manage your order.
              </p>
            </div>
            <picture>
              <img
                srcSet={`${monitor} 1x, ${monitor} 2x`}
                src={`${monitor}`}
                className="img"
              />
            </picture>
          </div>
          <div className="card">
            <div className="top">
              <h3 className="subHeader">Receive your delivery</h3>
              <p className="info">
                Pick a convenient time for you. Enjoy Ayazona’s low-price
                guarantee on every order.
              </p>
            </div>
            <picture>
              <img
                srcSet={`${delivery} 1x, ${delivery} 2x`}
                src={`${delivery}`}
                className="img"
              />
            </picture>
          </div>
        </div>
      </GroceryCardsWrapper>
    </div>
  );
};

export default GroceryCards;
