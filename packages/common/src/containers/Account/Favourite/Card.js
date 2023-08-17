import React from 'react';
import Link from '../../../layout/elements/Link';
import Image from 'next/image';
import Heading from '../../../layout/elements/Heading';
import Box from '../../../layout/elements/Box';
import styled from 'styled-components';
import OverlayStar from '../../App/FavoriteItem';

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
`;

const Card = ({ aisle }) => {
  return (
    <Box className="cardWrapper">
      <OverlayStar aisleId={aisle.id} />
      <Link href={`/store/${aisle.slug}`}>
        <ImageContainer>
          <Image
            className="images"
            layout="fill"
            src={`https://b.cdn.ayazona.com/${aisle.cover_image}`}
            alt={aisle.name}
          />
        </ImageContainer>
        <Box className="info">
          <Heading className="header" content={`${aisle.name}`} />
        </Box>
      </Link>
    </Box>
  );
};

export default Card;
