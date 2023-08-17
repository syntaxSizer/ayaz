import React from 'react';
import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Link from '../../../layout/elements/Link';
import FeatureSectionWrapper, {
  BackgroundWrapper,
} from './featureSection.style';
import styled from 'styled-components';
import ContentLoader from 'react-content-loader';
import { formateDate } from 'common/src/data/blog';
import API from 'common/src/data/blog';
import Image from 'next/image';

const ImageContainer = styled.div`
  transition: opacity 0.4s linear 0s;
  position: relative;
  height: 205px;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 280px;
  }
  @media screen and (max-width: 441px) {
    height: 180px;
  }
  .images {
    object-fit: contain;
    border-radius: 12px;
  }
`;

const FeatureSection = ({ tag, path }) => {
  const [posts, setPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    API.getPostsByTag(tag)
      .then(items =>
        setPosts(items.sort(() => 0.5 - Math.random()).slice(0, 3))
      )
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <BackgroundWrapper bg="rgb(246, 246, 248)">
      <FeatureSectionWrapper>
        <div className="headerWrapper">
          <p className="topHeader">
            More from<span> {tag[0].toUpperCase() + tag.substr(1)}</span>
          </p>
          <Link href={`/${path}`}>
            <Text className="text" content={'Browse more'} />
          </Link>
        </div>
        <div className="cards">
          {isLoading ? (
            <>
              <ContentLoader className="cardWrapper" height={280}>
                <rect x="3" y="3" rx="0" ry="0" width="500" height="180" />
                <rect x="6" y="190" rx="0" ry="0" width="119" height="9" />
                <rect x="4" y="215" rx="0" ry="0" width="271" height="9" />
              </ContentLoader>
              <ContentLoader className="cardWrapper" height={280}>
                <rect x="3" y="3" rx="0" ry="0" width="500" height="180" />
                <rect x="6" y="190" rx="0" ry="0" width="119" height="9" />
                <rect x="4" y="215" rx="0" ry="0" width="271" height="9" />
              </ContentLoader>
              <ContentLoader className="cardWrapper" height={280}>
                <rect x="3" y="3" rx="0" ry="0" width="500" height="180" />
                <rect x="6" y="190" rx="0" ry="0" width="119" height="9" />
                <rect x="4" y="215" rx="0" ry="0" width="271" height="9" />
              </ContentLoader>
            </>
          ) : (
            posts.map(c => (
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
                    className="time"
                    content={`${formateDate(
                      c.published_at || c.created_at
                    )} • ${c.reading_time} MIN READ`}
                  />
                </Link>
              </div>
            ))
          )}
        </div>
      </FeatureSectionWrapper>
    </BackgroundWrapper>
  );
};

export default FeatureSection;
