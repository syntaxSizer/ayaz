import React from 'react';
 import Heading from '../../../layout/elements/Heading';
import Image from '../../../layout/elements/Image';
import Text from '../../../layout/elements/Text';
import { CardWrapper, InfoWrapper } from './banner.style';
import prepTime from '../../../assets/image/restaurants/prepTime.svg';
import addressIcon from '../../../assets/image/restaurants/addressIcon.svg';
import backArrow from '../../../assets/image/app/back.png';

const DomainSection = ({
  data,
  location,
  tax,
  currency,
  toggle,
  infoIsOpen,
}) => {
  const range = parseInt(data.preparation_time) + 15;
  const [isOpen, setIsOpen] = React.useState(parseInt(data.open));
  return (
    <CardWrapper rotate={infoIsOpen}>
      <div className="textCardWrapper">
        <div className="bonusSection">
          <span className="fee">
            {`${currency.symbol} ${tax.delivery_fee_per_km}`} DELIVERY
          </span>
          <div>
            {/* {!isOpen && <div className="closed">AVAILABLE LATER</div>} */}
            {/* <div className="status">POPULAR</div> */}
            <a
              className="cuisine"
              href={`/delivery/${location.city
                .toLowerCase()
                .split(' ')
                .join('-')}/${location.state
                .toLowerCase()
                .split(' ')
                .join('-')}/${data.speciality
                .toLowerCase()
                .split(' ')
                .join('-')}`}
            >
              {data.speciality}
            </a>
          </div>
        </div>
        <h1 className="header">{data.name}</h1>
        {/* <Text className="about" content={data.about} /> */}
        <InfoWrapper>
          <div className="slogan">
            <Image className="imageIcon" alt="ayazona asset" src={prepTime} />
            <span>
              {data.preparation_time} - {range} MIN
            </span>
          </div>
          <div className="slogan">
            <Image
              className="imageIcon"
              alt="ayazona asset"
              src={addressIcon}
            />
            <span>{data.address}</span>
          </div>
          <div className="slogan" onClick={toggle}>
            <span className="name">MORE INFO</span>
            <Image className="backArrow" alt="ayazona asset" src={backArrow} />
            <svg width="3" height="11" class="mobileInfo">
              <path
                d="M0 3.797h2.25v6.25H0zM0 0h2.25v2.25H0z"
                fill="#2D3138"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
        </InfoWrapper>
      </div>
    </CardWrapper>
  );
};

export default DomainSection;
