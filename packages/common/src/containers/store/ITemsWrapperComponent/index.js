import React from 'react';
import Text from '../../../layout/elements/Text';
import Button from '../../../layout/elements/Button';
import Heading from '../../../layout/elements/Heading';
import FeatureSectionWrapper from './featureSection.style';
import MenuModal from '../../restaurants/subMenuModal';
import { OpenLocationModal } from 'common/src/containers/App/GeoLocation';
import { openModal, closeModal } from '@redq/reuse-modal';
import styled from 'styled-components';
import { formatPrice } from '../../../utils';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { toggleModalView } from '../../../data/store/reducers/cart/actions';

const ImageContainer = styled.div`
  background-color: transparent;
  transition: opacity 0.4s linear 0s;
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 200px;
  margin-bottom: 16px;
  margin: auto;
  @media screen and (max-width: 768px) {
    height: 160px;
    width: 160px;
  }
  @media screen and (max-width: 350px) {
    height: 100px;
    width: 100px;
  }
  .images {
    object-fit: contain;
  }
`;

const FeatureSection = ({
  items,
  titleText,
  TitleComponent,
  padding,
  aisle,
  currency,
}) => {
  const { userLocation } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  // menu modal handler
  const handleMenuModal = (data, restaurant, currency) => {
    dispatch(
      toggleModalView({ component: 'MenuModal', data, restaurant, currency })
    );
  };
  return (
    <FeatureSectionWrapper pt={padding}>
      {titleText ? (
        <Heading className="conditionalHeader" content={titleText} />
      ) : (
        false
      )}
      {TitleComponent ? TitleComponent : false}
      <FeatureSectionWrapper style={{ padding: '0' }}>
        {items.map(item => {
          return (
            <div
              onClick={() => handleMenuModal(item, aisle, currency)}
              className="cardWrapper"
            >
              <ImageContainer>
                <Image
                  className="images"
                  layout="fill"
                  src={`https://b.cdn.ayazona.com/${item.image}`}
                  alt={item.name}
                />
              </ImageContainer>
              <Text
                className="text"
                content={`${currency.symbol}${formatPrice(item.price)}`}
              />
              <Text
                className="header"
                content={item.name
                  .replace(/&amp;/g, '&')
                  .replace(/&#039;/g, "'")}
              />
              <Text
                className="info"
                content={item.description
                  .replace(/&amp;/g, '&')
                  .replace(/&#039;/g, "'")}
              />
              <button className="but">
                <div className="css-bjcmdk">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    color="systemGrayscale70"
                    class="css-12efcmn"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3.5A1.5 1.5 0 0113.5 5v5.5H19a1.5 1.5 0 011.493 1.355L20.5 12a1.5 1.5 0 01-1.5 1.5h-5.5V19a1.5 1.5 0 01-1.355 1.493L12 20.5a1.5 1.5 0 01-1.5-1.5v-5.5H5a1.5 1.5 0 01-1.493-1.355L3.5 12A1.5 1.5 0 015 10.5h5.5V5a1.5 1.5 0 011.355-1.493L12 3.5z"
                    ></path>
                  </svg>
                  <span class="css-1euo17n">Add</span>
                  <div className="select" data-radium="true" />
                </div>
              </button>
            </div>
          );
        })}
      </FeatureSectionWrapper>
    </FeatureSectionWrapper>
  );
};

export default FeatureSection;
