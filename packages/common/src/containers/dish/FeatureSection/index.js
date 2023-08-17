import React from 'react';
 import Heading from '../../../layout/elements/Heading';
import FeatureSectionWrapper from './style';
import FeatureSection from 'common/src/containers/cuisines/cuisine-components/FeatureSection';
import Link from '../../../layout/elements/Link';
import { chevronRight } from 'react-icons-kit/ionicons/chevronRight';
import { Icon } from 'react-icons-kit';



const Header = ({cuisine="", area=""}) =>(
    <div className="headerWrapper">
        <Heading content={`Best ${cuisine.replace(/\b\w/g, c => c.toUpperCase())} in ${area.replace(/\b\w/g, c => c.toUpperCase())}`}/>
            <Link className="linkWrapper" href={`/delivery/nairobi/${area.toLocaleLowerCase()}`}>
                <span className="none">Browse more</span>
                <Icon icon={chevronRight} size={15} className="icon" />
            </Link>
    </div>
)

export default ({rows, cuisine}) => {
    return (
      <FeatureSectionWrapper>
          {
              rows.map(row=>(row.restaurants.length ?
                <div className="rowWrapper">
                    <FeatureSection padding="30px 0 10px" TitleComponent={<Header area={row.area} cuisine={cuisine}/>} restaurants={row.restaurants.splice(0, 3)} />
                </div>: false))
          }
      </FeatureSectionWrapper>
    );
}