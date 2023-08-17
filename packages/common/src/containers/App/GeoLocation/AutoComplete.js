import React from 'react';
import styled from 'styled-components';
import { loadGoogleMapScript } from './utils';
import locationImage from '../../../assets/image/app/locationImage.svg';

const SharpBordersInput = styled.input`
  background: #fff;
  box-shadow: 2px 8px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(45, 49, 56, 0.08);
  padding: 8px 45px;
  line-height: 34px;
  width: 100%;
  color: #202125;
  font-size: 15px;
  border-radius: 12px;
  // border-start-start-radius: 12px;
  // border-end-start-radius: 12px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: Ayazona, 'Helvetica Neue', Helvetica;
  @media screen and (max-width: 350px) {
    padding-right: 5px;
    font-size: 13px;
  }
`;
const Search = styled.div`
  width: 100%;
`;

const Img = styled.img`
  position: absolute;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-left: 16px;
  color: #00188e;
  font-size: 20px;
`;

const AutoCompleteSearchInput = ({
  style,
  locationIcon,
  iconPositionLeft,
  iconImgSrc,
  iconStyle,
  setLocation,
  location,
  width,
  placeholder = 'Where do you need it delivered?',
}) => {
  const placeInputRef = React.useRef(null);
  const [mapLoaded, setLoadMap] = React.useState(false);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true);
    });
  }, []);

  React.useEffect(() => {
    location && setQuery(location.address);
  }, [location]);

  React.useEffect(() => {
    if (mapLoaded) {
      initPlaceAPI();
    }
  }, [mapLoaded]);

  const initPlaceAPI = () => {
    let autocomplete = new window.google.maps.places.Autocomplete(
      placeInputRef.current
    );
    autocomplete.setComponentRestrictions({
      country: ['ke'],
    });
    new window.google.maps.event.addListener(
      autocomplete,
      'place_changed',
      function() {
        let place = autocomplete.getPlace();
        setLocation({
          address: place.formatted_address,
          cityOrArea: place.name,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
        setQuery(place.formatted_address);
      }
    );
  };

  return (
    <Search>
      {iconPositionLeft && (
        <Img
          className="locationIcon"
          src={locationImage}
          style={iconStyle}
          alt="ayazona asset"
        />
      )}
      <SharpBordersInput
        ref={placeInputRef}
        placeholder={placeholder}
        onChange={e => setQuery(e.target.value)}
        value={query}
        {...style}
      />
      {!iconPositionLeft && (
        <Img
          className="locationIcon"
          src={locationImage}
          style={iconStyle}
          alt="ayazona asset"
        />
      )}
    </Search>
  );
};

export default AutoCompleteSearchInput;
