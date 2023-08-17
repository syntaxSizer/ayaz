import React from 'react';
import Wrapper from './style.js';
 import Images from '../../../layout/elements/Image';
import Heading from '../../../layout/elements/Heading';
import Link from '../../../layout/elements/Link';
import Text from '../../../layout/elements/Text';
import imgSrc from '../../../assets/image/cuisines/arrow-left.svg';
import { scroll } from '../../../utils';
import styled from 'styled-components';
import API from '../../../data/restaurants';
import { useSelector } from 'react-redux';
import Image from 'next/image';

const ImageContainer = styled.div`
  background-color: rgb(247, 247, 248);
  transition: opacity 0.4s linear 0s;
  position: relative;
  height: 193px;
  width: 100%;
  @media screen and (max-width: 1059px) and (min-width: 768px) {
    height: 293px;
  }
  @media screen and (max-width: 900px) and (min-width: 768px) {
    height: 224px;
  }
  @media screen and (max-width: 767px) {
    height: 380px;
  }
  @media screen and (max-width: 680px) {
    height: 280px;
  }
  @media screen and (max-width: 500px) {
    height: 200px;
  }
  .images {
    background-color: rgb(247,247,248);
    object-fit: cover;
    border-radius: 12px;
  }
`;

export default ({ dish, header }) => {
  const [restaurants, setRestaurants] = React.useState([]);
  let mounted = false;
  const { userLocation, user } = useSelector(({ auth }) => auth);

  React.useEffect(() => {
    mounted = true;
    let longLat = {
      lat: -1.283329,
      long: 36.81666,
    };
    API.getRestaurantsByDish(dish, longLat).then(data => {
      if (mounted) {
        setRestaurants(data);
      }
    });
    return _ => {
      mounted = false;
    };
  }, []);

  const reference = React.useRef(null);
  return (
    <Wrapper>
      { restaurants.length > 0 ? (
      <>
      <div>
        <div className="headerWrapper">
          <div className="track" />
          <Heading className="heading" content={header} />
          <div className="info">
            Nutritious dishes from your favorite restaurants!{' '}
          </div>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div className="left" onClick={() => scroll('left', reference)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ flexShrink: '0' }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.2071 7.29289C14.5976 7.68342 14.5976 8.31658 14.2071 8.70711L10.9142 12L14.2071 15.2929C14.5976 15.6834 14.5976 16.3166 14.2071 16.7071C13.8166 17.0976 13.1834 17.0976 12.7929 16.7071L8.79289 12.7071C8.60536 12.5196 8.5 12.2652 8.5 12C8.5 11.7348 8.60536 11.4804 8.79289 11.2929L12.7929 7.29289C13.1834 6.90237 13.8166 6.90237 14.2071 7.29289Z"
              fill="#191919"
            ></path>
          </svg>
        </div>
        <div ref={reference} className="sliderWrapper">
          {(restaurants || []).map(restaurant => {
            const range = parseInt(restaurant.preparation_time) + 15;
            return (
              <div className="cardWrapper">
                <Link href={`/merchant/${restaurant.id}`}>
                  <ImageContainer>
                    <Image
                      className="images"
                      layout="fill"
                      src={`https://r.cdn.ayazona.com/${restaurant.cover_image}`}
                      alt={restaurant.name}
                    />
                  </ImageContainer>
                  <div className="info">
                    <Heading
                      className="header"
                      content={`${restaurant.name}`}
                    />
                    <Text className="text" content={restaurant.slogan} />
                    <div className="rest-badges">
                      <div className="restaurant-info__badge">
                        <svg
                          width="16"
                          height="16"
                          className="rest-badge__icon"
                        >
                          <path
                            d="M10.5 12.25a.75.75 0 01-.648.743L9.75 13h-3.5a.75.75 0 01-.743-.648L5.5 12.25h5zM13 7.985v.25c0 1.331-.66 2.568-1.753 3.31l-.186.12-.144.085H5.082l-.143-.085a4.002 4.002 0 01-1.933-3.21L3 8.236v-.25h10zM11 3c.541.096 1 .559 1 1.059 0 .709-1.271 1.687-1.271 2.348 0 .195.075.396.271.593-.541-.096-1-.559-1-1.059 0-.709 1.271-1.687 1.271-2.348 0-.195-.074-.396-.271-.593zM8 3c.541.096 1 .559 1 1.059 0 .709-1.271 1.687-1.271 2.348 0 .195.075.396.271.593-.541-.096-1-.559-1-1.059 0-.709 1.271-1.687 1.271-2.348 0-.195-.074-.396-.271-.593zM5 3c.541.096 1 .559 1 1.059 0 .709-1.271 1.687-1.271 2.348 0 .195.074.396.271.593-.541-.096-1-.559-1-1.059 0-.709 1.271-1.687 1.271-2.348 0-.195-.075-.396-.271-.593z"
                            fill="#5e5e61"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                        <span>
                          {restaurant.preparation_time}-{range} mins
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="right" onClick={() => scroll('right', reference)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ flexShrink: '0' }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.79289 16.7071C9.40237 16.3166 9.40237 15.6834 9.79289 15.2929L13.0858 12L9.79289 8.70711C9.40237 8.31658 9.40237 7.68342 9.79289 7.29289C10.1834 6.90237 10.8166 6.90237 11.2071 7.29289L15.2071 11.2929C15.3946 11.4804 15.5 11.7348 15.5 12C15.5 12.2652 15.3946 12.5196 15.2071 12.7071L11.2071 16.7071C10.8166 17.0976 10.1834 17.0976 9.79289 16.7071Z"
              fill="#191919"
            ></path>
          </svg>
        </div>
      </div>
        </>
      ): ( false )}
    </Wrapper>
  );
};
