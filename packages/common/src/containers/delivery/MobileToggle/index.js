import React from 'react';
import { Container } from './mobile.style';
import { toggleMapView } from '../../../data/store/reducers/cart/actions'
import { useDispatch } from 'react-redux';

const MobileToggle = () => {

  const dispatch = useDispatch();
  const toggleMap = () => dispatch(toggleMapView());

  return (
      <Container onClick={toggleMap}>
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 20c-4.667-4-7-7.667-7-11a7 7 0 017-7c3.866 0 7 3 7 7 0 3.333-2.333 7-7 11zm0-8a3 3 0 100-6 3 3 0 000 6z" fill="currentColor" fill-rule="evenodd"></path></svg>
      </Container>
  );
};

export default MobileToggle;
