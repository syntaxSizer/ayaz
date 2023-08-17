import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../../layout/elements/Text';
import Heading from '../../../../layout/elements/Heading';
import Link from '../../../../layout/elements/Link';
import { FeatureSectionWrapper, SectionWrapper } from './featureSection.style';

const FeatureSection = ({ row, brand, branchCount }) => {
  return (
    <SectionWrapper>
      <Heading
        className="header"
        content={`Find ${brand.text} Location Near You`}
      />
      <FeatureSectionWrapper>
        <Link className="locations" href={`${brand.link}/nairobi`}>
          <Text className="locationText" content="Nairobi" />
          <Text content={`${branchCount.restaurant_count} location(s)`} />
        </Link>
      </FeatureSectionWrapper>
    </SectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  row: PropTypes.object,
};

FeatureSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
};

export default FeatureSection;
