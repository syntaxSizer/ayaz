import hydrate from './hydrate';
import auth from './auth';
import cart from './cart';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import {
  TOGGLE_CART,
  SET_PAGE_PARAMS,
  REMOVE_PAGE_PARAMS,
  TOGGLE_LOCATION_PICKER,
  LOCATION_ADDED,
  TOGGLE_MAP_VIEW,
  TOGGLE_MODAL_VIEW,
} from '../constants';
import { toast, Zoom } from 'react-toastify';

const toggles = (
  state = {
    locationPickerIsOpen: false,
    cartIsOpen: false,
    mapViewIsOpen: false,
    loginModalIsOpen: false,
    modalIsOpen: false,
    menuModalIsOpen: false,
    locationId: null,
  },
  action
) => {
  const clone = { ...state };
  switch (action.type) {
    case TOGGLE_CART:
      state = { ...clone, cartIsOpen: !clone['cartIsOpen'] };
      return state;
    case TOGGLE_LOCATION_PICKER:
      state = {
        ...clone,
        locationPickerIsOpen: !clone['locationPickerIsOpen'],
      };
      return state;
    case TOGGLE_MAP_VIEW:
      state = { ...clone, mapViewIsOpen: !clone['mapViewIsOpen'] };
      return state;
    case TOGGLE_MODAL_VIEW:
      state = {
        ...clone,
        modalIsOpen: !clone['modalIsOpen'],
        metadata: action.payload,
      };
      return state;
    case LOCATION_ADDED:
      state = {
        ...clone,
        locationPickerIsOpen: false,
        locationId: action.payload,
      };
      toast.success('Address added successfully', {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: false,
        transition: Zoom,
        delay: 500,
      });
      return state;
  }
  return state;
};

const _proxy = (
  state = { store: { cuisine: null, location: null } },
  action
) => {
  let key = null;
  switch (action.type) {
    case SET_PAGE_PARAMS:
      key = action.payload.page;
      state[key] = {
        ...state[key],
        ...action.payload.params,
      };
      return state;
    case REMOVE_PAGE_PARAMS:
      key = action.payload.page;
      delete state[key];
      return state;
  }
  return state;
};
const rootReducer = combineReducers({
  toggles,
  hydrate,
  _proxy,
  auth,
  cart,
});

const middleware =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunkMiddleware)
    : applyMiddleware(thunkMiddleware, logger);
export const initStore = (initialState = {}) => {
  return createStore(rootReducer, middleware);
};

export default initStore;
