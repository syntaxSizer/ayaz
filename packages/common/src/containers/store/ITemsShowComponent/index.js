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
            <div className="cardWrapper">
              <ImageContainer>
                <Image
                  className="images"
                  layout="fill"
                  src={`https://b.cdn.ayazona.com/${item.image}`}
                  alt={item.name}
                />
              </ImageContainer>
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
            </div>
          );
        })}
      </FeatureSectionWrapper>
    </FeatureSectionWrapper>
  );
};

export default FeatureSection;
