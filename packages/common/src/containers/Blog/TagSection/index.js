import React from 'react';
import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Link from '../../../layout/elements/Link';
import FeatureSectionWrapper from './style';
import styled from 'styled-components';
import { formateDate } from 'common/src/data/blog';
import Image from 'next/image';

const ImageContainer = styled.div`
  transition: opacity 0.4s linear 0s;
  position: relative;
  height: 205px;
  width: 100%;
  @media screen and (max-width: 1000px) {
    height: 220px;
  }
  @media screen and (max-width: 768px) {
    height: 350px;
  }
  @media screen and (max-width: 520px) {
    height: 250px;
  }
  @media screen and (max-width: 441px) {
    height: 200px;
  }
  .images {
    object-fit: contain;
    border-radius: 12px;
  }
`;

const FeatureSection = ({ posts, tag }) => {
  return (
    <FeatureSectionWrapper>
      {posts.map(c => (
        <div className="cardWrapper">
          <Link href={`/blog/${c.slug}`}>
            <ImageContainer>
              <Image
                className="images"
                layout="fill"
                src={c.feature_image}
                alt={c.title}
              />
            </ImageContainer>
            <Heading className="header" content={c.title} />
            <Text className="text" content={c.excerpt} />
            <Text
              className="date"
              content={`${formateDate(c.published_at || c.created_at)} • ${
                c.reading_time
              } MIN READ`}
            />
          </Link>
        </div>
      ))}
    </FeatureSectionWrapper>
  );
};

export default FeatureSection;
