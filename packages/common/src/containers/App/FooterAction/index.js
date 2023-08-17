import React from 'react';
 import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import { FeatureSectionWrapper, BackgroundWrapper, PageWidth } from './style';
import { SearchBar } from '../../App/GeoLocation';

const FooterAction = ({title, bg}) => {
  return (
    <PageWidth bg={bg}>
        <FeatureSectionWrapper>
            <BackgroundWrapper>
                <div className="joinAyazonaBlock">
                <Heading className="header" content={title} />
                <Text
                    className="borderedBoxText"
                    content="With 2000+ carefully curated products, we've got what you need: from bananas to baby food, to biscuits and toiletries."
                />
                <SearchBar className="search" extraStyles = {{pt: 0, pb: 0, mb: 60, width: '100%'}} onlySearchBar={true} />
                </div>
            </BackgroundWrapper>
        </FeatureSectionWrapper>
    </PageWidth>
  );
};

export default FooterAction;
