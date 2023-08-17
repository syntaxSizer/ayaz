import React from 'react';
import Box from '../../../../layout/elements/Box';
import Text from '../../../../layout/elements/Text';
import Heading from '../../../../layout/elements/Heading';
import Link from '../../../../layout/elements/Link';
import MerchantSliderWrapper from './merchantSlider.style';
import styled from 'styled-components';
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
    border-radius: 0px;
  }
`;

const MerchantSlider = ({
  restaurants,
  titleText,
  TitleComponent,
  padding,
}) => {
  return (
    <MerchantSliderWrapper pt={padding}>
      {titleText ? (
        <Heading className="conditionalHeader" content={titleText} />
      ) : (
        false
      )}
      {TitleComponent ? TitleComponent : false}
      {restaurants.map(restaurant => {
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
                <Heading className="header" content={`${restaurant.name}`} />
                <Text className="text" content={restaurant.slogan} />
                <div className="rest-badges">
                  <div className="restaurant-info__badge">
                    <svg width="16" height="16" className="rest-badge__icon">
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
    </MerchantSliderWrapper>
  );
};

export default MerchantSlider;
