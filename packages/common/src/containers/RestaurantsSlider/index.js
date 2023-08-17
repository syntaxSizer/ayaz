import React from 'react';
import Heading from '../../layout/elements/Heading';
import {HeaderSection, FeatureSectionWrapper, Section} from './style';
import MerchantSlider from 'common/src/containers/cuisines/cuisine-components/MerchantSlider';
import Link from '../../layout/elements/Link';
import { chevronRight } from 'react-icons-kit/ionicons/chevronRight';
import { Icon } from 'react-icons-kit';


const Header = ({cuisine="", area="", baseUrl}) =>(
    <div className="headerWrapper">
        <Heading className="title" content={`Best ${cuisine.replace(/\b\w/g, c => c.toUpperCase())} in ${area.replace(/\b\w/g, c => c.toUpperCase())}`}/>
        <Link className="linkWrapper" href={`${baseUrl}/nairobi/${area.toLocaleLowerCase()}/${cuisine.toLocaleLowerCase()}`}>
            <span className="none">Browse more</span>
            <Icon icon={chevronRight} size={15} className="icon" />
        </Link>
    </div>
)

export default ({rows, cuisine, baseUrl}) => {
    const reference = React.useRef(null);
    return (
      <FeatureSectionWrapper>
          {
              rows.map(row=>(row.restaurants.length ?
                <Section>
                    <HeaderSection>
                        <Header area={row.area} cuisine={cuisine} baseUrl={baseUrl}/>
                    </HeaderSection>
                    <div className="rowWrapper">
                        <MerchantSlider padding="30px 0 10px" restaurants={row.restaurants} />
                    </div>
                </Section>: false))
          }
      </FeatureSectionWrapper>
    );
}