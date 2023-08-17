import React from 'react';
import Drawer from '../../../layout/elements/Drawer';
import { useSelector, useDispatch } from 'react-redux';
import Image from '../../../layout/elements/Image';
import Box from '../../../layout/elements/Box';
import styled from 'styled-components';
import Wrapper from './style';
import closeIcon from 'common/src/assets/image/app/x.svg';
import { SearchBar as LocationPicker, Map } from '../../App/GeoLocation';
import {
  toggleLocationPickerState,
  notifyAddressAdded,
} from '../../../data/store/reducers/cart/actions';
import { API } from 'common/src/data/Account';
import Input from '../../../layout/elements/Input';

const MobileNavWrapper = styled(Box)`
  display: flex;
  height: 100%;
  padding-bottom: 35px;
  flex-flow: column;
  padding: 0px 32px 32px;
  a {
    color: #202125;
    margin-top: 10px;
    transition: all 0.2s;
    font-weight: 600;
    font-size: 17px;
    line-height: 1.295;
  }
`;
const Offset = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => dispatch(toggleLocationPickerState());
  const { locationPickerIsOpen } = useSelector(({ toggles }) => toggles);
  const [markerLocation, setMarkerLocation] = React.useState(null);
  const [aptDetails, setAptDetails] = React.useState(null);
  const [instructions, setInstructions] = React.useState(null);
  const [error, setError] = React.useState(null);
  const { user } = useSelector(({ auth }) => auth);

  const addLocation = () => {
    if (!markerLocation || !markerLocation.lat) {
      return;
    }
    API.addAddress({
      street: markerLocation.address,
      long: markerLocation.lng,
      lat: markerLocation.lat,
      apartment: aptDetails,
      user_id: user.user_id,
      instructions,
    }).then(data => {
      if (typeof data === '') {
        setError(data);
        return;
      }
      dispatch(notifyAddressAdded(true));
    });
  };
  const setInstructionsData = e => {
    setInstructions(e.target.value);
  };
  const setAptData = val => {
    setAptDetails(val);
  };

  return (
    <Drawer
      key={locationPickerIsOpen}
      className="addressNav"
      placement="left"
      width="480px"
      includeHandler={false}
      open={locationPickerIsOpen}
      toggleHandler={toggleHandler}
    >
      <MobileNavWrapper>
        <Wrapper>
          {error && <span style={{ color: 'red' }}> {error} </span>}
          <div className="row">
            <span className="header">Add delivery address</span>
            <Image
              className="closeBtn"
              alt="address location picker close button"
              onClick={toggleHandler}
              src={closeIcon}
            />
          </div>
          <div className="input-group">
            <label className="locationLabel">
              STREET ADDRESS AND BUILDING NUMBER:
            </label>
            <LocationPicker
              // map marker location
              newLocation={markerLocation}
              mWidth="forcedWidth"
              style={{ maxWidth: '100%' }}
              // input text location setter
              newAddress={true}
              setOnLocationChange={setMarkerLocation}
              iconPositionLeft={false}
              iconStyle={{ 'margin-left': '-30px' }}
              extraStyles={{ pt: 0, pb: 0, mb: 0, mt: 0, maxWidth: '100%' }}
              showButton={false}
              onlySearchBar
            />
          </div>
          <div className="input-group">
            <label className="locationLabel">
              DETAILS (DOOR, APARTMENT NUMBER)
            </label>
            <Input onChange={setAptData} placeholder="B 23" />
          </div>
          <div className="input-group">
            <label className="locationLabel">PHONE NUMBER</label>
            <br />
            <span> {!!user ? user.phone : ''} </span>
          </div>
          <div className="input-group">
            <label className="locationLabel">
              ADDITIONAL INSTRUCTIONS FOR THE COURIER:
            </label>
            <textarea
              className="textArea"
              onChange={setInstructionsData}
              rows="3"
              placeholder="For example door code 1234, 2nd floor"
            />
          </div>
          <div className="row btn-wrapper">
            <button onClick={addLocation} className="button">
              {' '}
              Save address
            </button>
          </div>
        </Wrapper>
      </MobileNavWrapper>
    </Drawer>
  );
};

export default Offset;
