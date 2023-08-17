import { toast, Zoom } from 'react-toastify';

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  FETCH_SESSION_CART,
  BULK_INSERT,
} from '../../constants/index';
import { getCookie, setCookie, removeCookie } from '../../utils/cookie';

import API from '../../../../data/restaurants';

const notify = item => {
  toast.success(
    `${item.list_item_name
      .replace(/&amp;/g, '&')
      .replace(/&#039;/g, "'")} added to your basket`,
    {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false,
      transition: Zoom,
    }
  );
  delay: 500;
};

const alertUser = message =>
  toast.info(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    closeButton: false,
    transition: Zoom,
    delay: 800,
  });

const menuItemsCompare = (a, b) => {
  const currentItem = a.list_extra_item || [];
  const nextItem = b.list_extra_item || [];
  if (currentItem.length < nextItem.length) {
    return -1;
  } else if (currentItem.length > nextItem.length) {
    return 1;
  }
  return 0;
};

const compare = (a, b) => {
  const idA = parseInt(a.id);
  const idB = parseInt(b.id);
  if (idA > idB) {
    return 1;
  } else if (idA < idB) {
    return -1;
  }
  return 0;
};

const constructId = item => {
  const ids = (item.list_extra_item || []).sort(compare);
  return `${item.id}-${ids.map(option => option.id).join('_')}`;
};

let initialState;
if (typeof localStorage !== 'undefined') {
  const cartCookie = getCookie('cart');
  if (cartCookie) {
    const cart = JSON.parse(decodeURIComponent(cartCookie));
    initialState = {
      ...cart,
    };
  } else {
    initialState = {};
  }
} else {
  initialState = {};
}

const reducer = (state = initialState, action) => {
  let newState = { ...state };
  let newStateData = [];
  let previousState = { ...state };
  // const previousItemsList = Object.values(previousState);

  switch (action.type) {
    case BULK_INSERT:
      const items = Object.values(state);
      if (!items.length) return state;
      API.addItemToFirebaseDB(items, action.payload.sessionId);
      return state;

    case FETCH_SESSION_CART:
      newStateData = action.payload.sort(menuItemsCompare);
      newStateData.forEach(item => {
        newState[constructId(item)] = item;
      });
      return newState;

    case ADD_TO_CART:
      let newItem = action.payload.item;
      const item = previousState[constructId(newItem)];
      // if (
      //   previousItemsList.length &&
      //   (!!newItem.restaurant_id && newItem.restaurant_id !== previousItemsList[0].restaurant_id)) {
      //     alertUser("We started a new basket! As of now, you can only make an order from one merchant at a time. Thank you.")
      //     newState = {}
      //     previousState = {}
      //   }

      if (item) {
        // group similar items
        newItem = {
          ...item,
          list_item_quantity:
            parseInt(newItem.list_item_quantity) +
            parseInt(item.list_item_quantity),
          totalPrice:
            parseInt(item.list_item_price) *
            (parseInt(newItem.list_item_quantity) +
              parseInt(item.list_item_quantity)),
        };
        delete previousState[constructId(newItem)];
      }

      newStateData = [...Object.values(previousState), newItem];

      newStateData.forEach(item => {
        newState[constructId(item)] = item;
      });

      if (action.payload.sessionId) {
        API.addItemToFirebaseDB(newStateData, action.payload.sessionId);
        removeCookie('cart');
      } else {
        setCookie('cart', newState);
      }
      // notify(newItem);
      return newState;

    case REMOVE_FROM_CART:
      delete previousState[constructId(action.payload.item)];
      if (action.payload.sessionId) {
        API.addItemToFirebaseDB(
          Object.values(previousState),
          action.payload.sessionId
        );
      } else {
        setCookie('cart', previousState);
      }
      return previousState;

    case CLEAR_CART:
      action.payload.sessionId &&
        API.addItemToFirebaseDB([], action.payload.sessionId);
      removeCookie('cart');
      return {};
    default:
      return state;
  }
};

export default reducer;
