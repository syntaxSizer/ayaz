import React from 'react';
import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Link from '../../../layout/elements/Link';
import FeatureSectionWrapper from './featureSection.style';
import styled from 'styled-components';
import API from 'common/src/data/restaurants';
import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';
import { getCookie } from 'common/src/data/store/utils/cookie';
import Image from 'next/image';
import NotYet from 'common/src/containers/cuisines/cuisine-components/NotThereYet';
import OverlayStar from '../../App/FavoriteItem';
const ImageContainer = styled.div`
  background-color: rgb(247, 247, 248);
  transition: opacity 0.4s linear 0s;
  position: relative;
  height: 200px;
  width: 100%;
  @media screen and (max-width: 1200px) {
    height: 150px;
  }
  @media screen and (max-width: 800px) {
    height: 140px;
  }
  @media screen and (max-width: 441px) {
    height: 90px;
  }
`;

const FeatureSection = ({
  titleText,
  restaurants = [],
  isValidLocation,
  padding,
  longLat,
}) => {
  const [isLoading, setIsloading] = React.useState(true);
  const [items, setItems] = React.useState(restaurants);
  const [isValid, setIsValid] = React.useState(isValidLocation);
  const { cuisine } = useSelector(({ _proxy }) => _proxy.feed);
  const { isLoggedIn, user } = useSelector(({ auth }) => auth);
  let mounted = false;

  React.useEffect(() => {
    setIsValid(isValidLocation);
  }, [longLat, isValidLocation]);
  const getRestaurantsData = () => {
    API.getAisles(longLat).then(data => {
      setItems(data.map(r => r.Aisle));
      setIsloading(false);
    });
  };

  React.useEffect(() => {
    getRestaurantsData();
  }, [cuisine, longLat]);

  React.useEffect(() => {
    mounted = true;
    if (isValid) {
      mounted && getRestaurantsData();
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <FeatureSectionWrapper pt={padding}>
      <div style={{ display: isLoading ? 'initial' : 'none' }}>
        <ContentLoader speed={1} width={340} height={84} viewBox="0 0 340 84">
          <rect x="9" y="4" rx="0" ry="0" width="320" height="22" />
          <rect x="18" y="14" rx="0" ry="0" width="303" height="6" />
          <rect x="11" y="33" rx="0" ry="0" width="108" height="13" />
          <rect x="129" y="33" rx="0" ry="0" width="60" height="13" />
          <rect x="196" y="33" rx="0" ry="0" width="60" height="13" />
        </ContentLoader>
        <div className="mainSection">
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
        </div>
      </div>

      <div style={{ display: items.length > 0 ? 'initial' : 'none' }}>
        <div className="mainSection">
          {items.map(aisle => {
            return (
              <div className="cardWrapper">
                <Link href={`/categories/${aisle.slug}`}>
                  <div className="info">
                    <Heading className="header" content={`${aisle.name}`} />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <span
        key={items.length}
        style={{ display: items.length === 0 ? 'intial' : 'none' }}
      >
        <NotYet />
      </span>
    </FeatureSectionWrapper>
  );
};

export default FeatureSection;
