import React from 'react';
import Heading from '../../../layout/elements/Heading';
import FeatureSectionWrapper from './style';
import FeatureSection from '../ITemsWrapperComponent';
import Link from '../../../layout/elements/Link';
import { chevronRight } from 'react-icons-kit/ionicons/chevronRight';
import { Icon } from 'react-icons-kit';

const Header = ({ id, name, showViewAll, display, url }) => (
  <div className="headerWrapper" style={{ display: display }}>
    <Heading
      className="header"
      id={`${name.split(' ').join('-')}`}
      content={name.replace(/&amp;/g, '&').replace(/&#039;/g, "'")}
    />
    {showViewAll ? (
      <Link className="linkWrapper" href={`${url}/${id}`}>
        <span className="none">Browse more</span>
        <Icon icon={chevronRight} size={15} className="icon" />
      </Link>
    ) : (
      false
    )}
  </div>
);

export default ({ menu, viewAll, restaurant, display, url, currency }) => {
  return (
    <FeatureSectionWrapper>
      {(menu || []).map(row => {
        const items = [...(row.RestaurantMenuItem || [])];
        return items.length ? (
          <div key={row.id} id={row.id} className="rowWrapper">
            <FeatureSection
              restaurant={restaurant}
              padding="0"
              currency={currency}
              TitleComponent={
                <Header
                  display={display}
                  url={url}
                  id={row.id}
                  name={typeof viewAll === 'boolean' ? '' : row.name}
                  showViewAll={
                    typeof viewAll === 'boolean'
                      ? viewAll
                      : row.RestaurantMenuItem.length > 0
                  }
                />
              }
              items={typeof viewAll === 'boolean' ? items : items.splice(0, 8)}
            />
          </div>
        ) : (
          false
        );
      })}
    </FeatureSectionWrapper>
  );
};
