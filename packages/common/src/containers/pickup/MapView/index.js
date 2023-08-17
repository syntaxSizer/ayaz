import Box from '../../../layout/elements/Box';
import Link from '../../../layout/elements/Link';
import Heading from '../../../layout/elements/Heading';
import Text from '../../../layout/elements/Text';
import Image from 'next/image';
import { Map } from 'common/src/containers/App/GeoLocation';

import { Wrapper, ImageContainer } from './style';

const MapView = ({ rawItems, items, center }) => {
  if (center == null) {
    center = { long: 11.5015246, lat: 3.8303023 };
  }
  return (
    <Wrapper>
      <div className="cardItems">
        {items.map(Aisle => {
          return (
            <div className="cardWrapper">
              <Link href={`/store/${Aisle.slug}`}>
                <ImageContainer>
                  <Image
                    className="images"
                    layout="fill"
                    src={`https://b.cdn.ayazona.com/${Aisle.cover_image}`}
                    alt={Aisle.name}
                  />
                </ImageContainer>
                <div className="info">
                  <Heading className="header" content={`${Aisle.name}`} />
                </div>
              </Link>
            </div>
          );
        })}
        {!items.length && (
          <div className="errorMsg">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="imageIcon"
            >
              <path
                d="M11.75 10.335l3.32 3.322-1.413 1.414-3.322-3.32A6.48 6.48 0 016.5 13a6.5 6.5 0 115.25-2.665zM6.5 11a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
                fill="#d9dbe0"
                opacity=".9"
                fill-rule="evenodd"
              ></path>
            </svg>
            <Heading className="title" content="No results in this area" />
            <Text
              className="info"
              content="There are no merchants available in this area. try a new address or explore a new area of the map "
            />
          </div>
        )}
      </div>
      <div className="mapView">
        <Map restaurants={rawItems} center={center} />
        <div className="searchButton">
          <div className="buttonAction">
            <span>Search in this area</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MapView;
