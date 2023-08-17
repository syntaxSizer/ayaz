import React from 'react';
import Heading from '../../../layout/elements/Heading';
 import Link from '../../../layout/elements/Link';
import SectionWrapper from './featureSection.style';

const CityBlock = ({
  locations,
  header,
  urlExtention="",
  baseUrl}) => {

    const [items, setItems] = React.useState([...locations].slice(0, 20))

    const toggleView = () => {
      setItems(items.length > 20 ? [...locations].slice(0, 20): [...locations]);
    }
  return (
    <SectionWrapper>
      <Heading className="header" content={header} />
      <div className="wrapper">
        {
          items.map(city=>{
            return (
              <Link className="link" href={`${baseUrl}/${city.toLowerCase().split(' ').join('-')}/${urlExtention}`} >
                <Heading className="text" content={city.split('-').join(' ')} />
              </Link>
            )
          })
        }
      </div>
      <button onClick={toggleView} className="bigBtn">{ items.length > 20 ? "VIEW LESS": "VIEW MORE"}</button>
    </SectionWrapper>
  );
};


export default CityBlock;
