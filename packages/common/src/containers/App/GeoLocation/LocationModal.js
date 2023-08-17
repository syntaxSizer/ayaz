import React from 'react';
import Button from '../../../layout/elements/Button';
import { Container } from './styles';
import { SearchBar, Map } from './';
import { closeModal, openModal } from '@redq/reuse-modal';
import { setUserLocation } from '../../../data/store/reducers/auth/actions';
import { useDispatch, useSelector } from 'react-redux';

// Default close button for modal
const CloseModalButton = () => (
  <button
    style={{ border: 'none', cursor: 'pointer' }}
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
  >
    <svg
      width="15px"
      height="15px"
      className="ais-SearchBox-resetIcon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      {' '}
      <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>{' '}
    </svg>
  </button>
);

const LocationModal = ({ setNewAddress }) => {
  const [markerLocation, setMarkerLocation] = React.useState(null);
  const dispatch = useDispatch();
  const { userLocation } = useSelector(({ auth }) => auth);

  const setAddress = () => {
    // set the browser address of the user
    if ((userLocation && userLocation.address) || !markerLocation.address) {
      return;
    }

    // add a new delivery address
    if (setNewAddress) {
      setNewAddress(location);
      return;
    }
    dispatch(setUserLocation(markerLocation));
  };

  React.useEffect(() => {
    if (userLocation && userLocation.address) {
      closeModal();
    }
  }, [userLocation]);

  return (
    <Container>
      <div className="modalWrapper">
        <SearchBar
          // map marker location
          newLocation={markerLocation}
          // input text location setter
          setOnLocationChange={setMarkerLocation}
          showButton={false}
          extraStyles={{ pb: 20, pt: 20, p: 20, mb: 0, m: 10, width: '100%' }}
          onlySearchBar
        />
        {markerLocation && markerLocation.lat ? (
          <Button
            className="button"
            onClick={setAddress}
            {...{ m: `5px 0`, p: `6px 12px` }}
            variant="textButton"
            title="Set Address"
          />
        ) : (
          false
        )}
      </div>
    </Container>
  );
};

const openLocationModal = setNewAddress => {
  openModal({
    config: {
      className: 'location-modal',
      disableDragging: false,
      default: {
        width: '500px',
        height: '500',
        x: 0,
        y: 0,
      },
    },
    component: LocationModal,
    componentProps: { setNewAddress },
    closeComponent: CloseModalButton,
    closeOnClickOutside: false,
  });
};

// Navbar style props

export default openLocationModal;
