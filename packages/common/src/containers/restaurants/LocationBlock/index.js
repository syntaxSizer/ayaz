import React from 'react';
import Heading from '../../../layout/elements/Heading';
 import Link from '../../../layout/elements/Link';
import SectionWrapper from './featureSection.style';

const LocationBlock = ({
  locations,
  header,
  city,
  urlExtention="",
  baseUrl}) => {

  const [items, setItems] = React.useState([...locations].slice(0, 20))
  return (
    <SectionWrapper>
    {items.length > 0 ? (
      <>
      <Heading className="header" content={header} />
      <div className="wrapper">
        {
          items.map(l=>{
            return (
              <Link className="link" href={`${baseUrl}/${city.toLowerCase().split(' ').join('-')}/${l.name.toLowerCase().split(' ').join('-')}/${urlExtention}`} >
                <Heading className="text" content={l.name.split('-').join(' ')} />
              </Link>
            )
          })
        }
      </div>
        </>
      ): ( false )}
    </SectionWrapper>
  );
};


export default LocationBlock;
