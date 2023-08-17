import React from 'react';
import Heading from '../../../layout/elements/Heading';
import FeatureSectionWrapper from './style';
import FeatureSection from '../ITemsShowComponent';
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
        <span className="none" style={{ color: '#099b09' }}>
          Browse more
        </span>
        <Icon
          icon={chevronRight}
          size={15}
          style={{ color: '#099b09' }}
          className="icon"
        />
      </Link>
    ) : (
      false
    )}
  </div>
);

export default ({ menu, viewAll, aisle, display, url, currency }) => {
  return (
    <FeatureSectionWrapper>
      {(menu || []).map(row => {
        const items = [...(row.AisleListItem || [])];
        return items.length ? (
          <div key={row.id} id={row.id} className="rowWrapper">
            <FeatureSection
              aisle={aisle}
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
                      : row.AisleListItem.length > 0
                  }
                />
              }
              items={typeof viewAll === 'boolean' ? items : items.splice(0, 6)}
            />
          </div>
        ) : (
          false
        );
      })}
    </FeatureSectionWrapper>
  );
};
