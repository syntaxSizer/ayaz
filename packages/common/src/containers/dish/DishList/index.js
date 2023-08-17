import React from 'react';
import Heading from '../../../layout/elements/Heading';
import Text from '../../../layout/elements/Text';
 import Link from '../../../layout/elements/Link';
import SectionWrapper from './featureSection.style';

const FeatureSection = ({
  dishes,
  header,
  textPositionTop = true,
  textBlockHeader,
  textBlockContent,
  marginTop = '-100',
}) => {
  const [items, setItems] = React.useState([...dishes].slice(0, 20));
  const toggleView = () => {
    setItems(items.length > 20 ? [...dishes].slice(0, 20) : [...dishes]);
  };

  return (
    <SectionWrapper key={items.length} mt={marginTop}>
      {textPositionTop ? (
        <>
          <Heading className="header" content={header} />
          <div className="wrapper">
            {items.map(l => {
              return (
                <Link
                  className="item"
                  href={`/delivery/dish/${l.link.toLowerCase()}`}
                >
                  <Heading
                    className="textList"
                    content={l.name.split('-').join(' ')}
                  />
                </Link>
              );
            })}
            <button onClick={toggleView} className="bigBtn">
              {items.length > 20 ? 'VIEW LESS' : 'VIEW MORE'}
            </button>
          </div>
          <div className="description" {...{ mt: 40 }}>
            <Heading className="header" content={textBlockHeader} />
            <Text
              className="text"
              {...{ pt: 20 }}
              content="When you’re hungry for good food, you might search “favorite restaurants near me” — but what about nearby restaurants that will deliver? Thanks to the Ayazona website and mobile app, it’s super easy to find any cuisine you crave. Just enter your address, and hit “>” to find a treasure trove of food near you. Whether you want an eatery serving up that authentic favorite restaurants or you’re on the hunt for the best neighborhood choma, at Ayazona, you’ll find nearby restaurants that offer pickup and delivery."
            />
          </div>
        </>
      ) : (
        <>
          <div className="description" {...{ mt: 40, mb: 100 }}>
            <Heading
              className="header"
              content="Favorite local dishes delivery and takeout near me"
            />
            <Text
              className="text"
              {...{ pt: 20 }}
              content="When you’re hungry for good food, you might search “favorite restaurants near me” — but what about nearby restaurants that will deliver? Thanks to the Ayazona website and mobile app, it’s super easy to find any cuisine you crave. Just enter your address, and hit “>” to find a treasure trove of food near you. Whether you want an eatery serving up that authentic favorite restaurants or you’re on the hunt for the best neighborhood choma, at Ayazona, you’ll find nearby restaurants that offer pickup and delivery."
            />
          </div>
          <Heading className="header" content={header} />
          <div className="wrapper">
            {items.map(l => {
              return (
                <Link
                  className="item"
                  href={`/delivery/dish/${l.link.toLowerCase()}`}
                >
                  <Heading
                    className="textList"
                    content={l.name.split('-').join(' ')}
                  />
                </Link>
              );
            })}
            <button onClick={toggleView} className="bigBtn">
              {items.length > 20 ? 'VIEW LESS' : 'VIEW MORE'}
            </button>
          </div>
        </>
      )}
    </SectionWrapper>
  );
};

export default FeatureSection;
