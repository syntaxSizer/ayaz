import React from 'react';
 import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Link from '../../../layout/elements/Link';
import FeatureSectionWrapper from './style';
import styled from 'styled-components';
import { formateDate } from 'common/src/data/blog';
import Image from 'next/image';

const FeatureSection = ({ posts }) => {
  return (
    <FeatureSectionWrapper>
      {posts.map(c => (
        <div className="cardWrapper">
          <Link href={`/blog/${c.slug}`}>
            <div className="imageBox">
              <Image
                className="images"
                layout="fill"
                src={c.feature_image}
                alt={c.title}
              />
            </div>
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
