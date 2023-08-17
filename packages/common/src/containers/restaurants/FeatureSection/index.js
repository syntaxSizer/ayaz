import React from 'react';
import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import { FeatureSectionWrapper } from './featureSection.style';
import Button from '../../../layout/elements/Button';
import MenuModal from '../subMenuModal';
import { openModal, closeModal } from '@redq/reuse-modal';
import BreadCrums from '../../App/Breadcrums';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Image from 'next/image';
import { toggleModalView } from '../../../data/store/reducers/cart/actions';

const ImageContainer = styled.div`
  background-color: transparent;
  transition: opacity 0.4s linear 0s;
  position: relative;
  overflow: hidden;
  width: 128px;
  height: 128px;
  .images {
    object-fit: cover;
  }
`;

const FeatureSection = ({ menu, restaurantData, location, currency }) => {
  const parsePrice = n => `${currency.symbol}` + n.toLocaleString();

  const links = [
    {
      name: 'Ayazona',
      itemtype: 'http://schema.org/ListItem',
      href: '/',
      itemprop: 'item',
      position: 1,
    },
    {
      name: `restaurants`,
      itemtype: 'http://schema.org/ListItem',
      href: `/delivery`,
      itemprop: 'name',
      position: 2,
    },
    {
      name: `${location.city}`,
      itemtype: 'http://schema.org/ListItem',
      href: `/delivery/${location.city
        .toLowerCase()
        .split(' ')
        .join('-')}`,
      itemprop: 'name',
      position: 3,
    },
    {
      name: `${location.state}`,
      itemtype: 'http://schema.org/ListItem',
      href: `/delivery/${location.city
        .toLowerCase()
        .split(' ')
        .join('-')}/${location.state
        .toLowerCase()
        .split(' ')
        .join('-')}`,
      itemprop: 'name',
      position: 4,
    },
    {
      name: `${restaurantData.speciality}`,
      itemtype: 'http://schema.org/ListItem',
      href: `/delivery/${location.city
        .toLowerCase()
        .split(' ')
        .join('-')}/${location.state
        .toLowerCase()
        .split(' ')
        .join('-')}/${restaurantData.speciality
        .toLowerCase()
        .split(' ')
        .join('-')}`,
      itemprop: 'name',
      position: 5,
    },
    {
      href: `/merchant/${restaurantData.id}`,
      itemtype: 'http://schema.org/ListItem',
      name: `${restaurantData.name}`,
      itemprop: 'name',
      position: 6,
    },
  ];

  const CloseModalButton = () => (
    <button
      style={{ border: 'none', cursor: 'pointer' }}
      className="modalCloseBtn"
      variant="fab"
      onClick={() => closeModal()}
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

  const { userLocation } = useSelector(({ auth }) => auth);
  const [isOpen, setIsOpen] = React.useState(parseInt(restaurantData.open));
  const dispatch = useDispatch();

  // Authentication modal handler
  const handleMenuModal = (data, restaurant, currency) => {
    dispatch(
      toggleModalView({ component: 'MenuModal', data, restaurant, currency })
    );
  };

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
              <div
                // onClick={() =>
                //   isOpen && handleMenuModal(menuItem, restaurantData, currency)
                // }
                className="menuCard"
              >
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
                      .replace(/&quot;/g, '"')
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
      <span className="breadCrums" style={{ marginTop: '60px' }}>
        <BreadCrums links={links} />
      </span>
    </FeatureSectionWrapper>
  );
};

export default FeatureSection;
