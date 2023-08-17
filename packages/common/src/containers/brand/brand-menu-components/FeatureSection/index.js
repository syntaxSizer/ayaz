import React from 'react';
import Box from '../../../../layout/elements/Box';
import Text from '../../../../layout/elements/Text';
import Heading from '../../../../layout/elements/Heading';
import { FeatureSectionWrapper } from './featureSection.style';
import styled from 'styled-components';
import Image from 'next/image';

const ImageContainer = styled.div`
  transition: opacity 0.4s linear 0s;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  width: 128px;
  height: 128px;
  .images {
    object-fit: cover;
  }
`;

const FeatureSection = ({ menu, currency } = []) => {
  const parsePrice = n => `${currency.symbol}` + n.toLocaleString();
  return (
    <FeatureSectionWrapper id="itemsWrapper">
      {menu.map(menu => (
        <div className="menuWrapper">
          <Heading
            className="sectionId"
            id={`${menu.id}`}
            content={menu.name.replace(/&amp;/g, '&').replace(/&#039;/g, "'")}
          />
          <div className="menu">
            {menu.RestaurantMenuItem.map(menuItem => (
              <div className="menuCard">
                <div className="textContent">
                  <Heading
                    className="header"
                    content={menuItem.name
                      .replace(/&amp;/g, '&')
                      .replace(/&#039;/g, "'")}
                  />
                  <Text
                    className="description"
                    content={menuItem.description
                      .replace(/&amp;/g, '&')
                      .replace(/&#039;/g, "'")}
                  />
                  <Text
                    className="price"
                    content={parsePrice(menuItem.price)}
                  />
                </div>
                {menuItem.image && (
                  <ImageContainer>
                    <Image
                      className="images"
                      layout="fill"
                      src={`https://r.cdn.ayazona.com/${menuItem.image}`}
                      alt={menuItem.name
                        .replace(/&amp;/g, '&')
                        .replace(/&#039;/g, "'")}
                    />
                  </ImageContainer>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </FeatureSectionWrapper>
  );
};

export default FeatureSection;
