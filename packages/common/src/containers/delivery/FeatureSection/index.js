import React from 'react';
import Heading from '../../../layout/elements/Heading';
 import Link from '../../../layout/elements/Link';
import SectionWrapper from './featureSection.style';

const FeatureSection = ({
  locations,
  header,
  city,
  urlExtention="",
  baseUrl}) => {

    const [items, setItems] = React.useState([...locations].slice(0, 20))

    const toggleView = () => {
      setItems(items.length > 20 ? [...locations].slice(0, 20): [...locations]);
    }
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
      <button onClick={toggleView} className="bigBtn">{ items.length > 20 ? "VIEW LESS": "VIEW MORE"}</button>
        </>
      ): ( false )}
    </SectionWrapper>
  );
};


export default FeatureSection;
