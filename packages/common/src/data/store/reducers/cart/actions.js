import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, FETCH_SESSION_CART, BULK_INSERT, TOGGLE_CART, REMOVE_PAGE_PARAMS, SET_PAGE_PARAMS, TOGGLE_LOCATION_PICKER, LOCATION_ADDED, TOGGLE_MAP_VIEW, TOGGLE_MODAL_VIEW } from '../../constants/index';
import API from '../../../../data/restaurants'

export const addtoCartAction = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    };
 };
 
 export const bulkInsertAction = (item) => {
    return {
        type: BULK_INSERT,
        payload: item
    };
 };

 export const removeFromCartAction = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    };
 };

 export const clearCartAction = (id) => {
    return {
        type: CLEAR_CART,
        payload: id
    };
 };

 export const fetchSessionCartAction = (items) => {
    return {
        type: FETCH_SESSION_CART,
        payload: items
    };
 };

export const toggleCart = () => {
    return {
        type: TOGGLE_CART,
        payload: null
    };
};

export const toggleModal = (payload) => {
    return {
        type: TOGGLE_MODAL_VIEW,
        payload
    };
};

export const togglePicker = () => {
    return {
        type: TOGGLE_LOCATION_PICKER,
        payload: null
    };
};
export const toggleMap = () => {
    return {
        type: TOGGLE_MAP_VIEW,
        payload: null
    };
};
export const notifyLocationAdded = (payload) => {
    return {
        type: LOCATION_ADDED,
        payload
    };
};
export const setParams = payload => {
    return {
        type: SET_PAGE_PARAMS,
        payload: payload
    };
};

export const removeParams = payload => {
    return {
        type: REMOVE_PAGE_PARAMS,
        payload: payload
    };
};

export const fetchSessionCart = sessionId => dispatch => {
    API.getMenuItemsFromFirebaseDB(sessionId).then(data=> {
        dispatch(fetchSessionCartAction(data));
    })
};
export const removeFromCart = (item) => (dispatch) => dispatch(removeFromCartAction(item));
export const addToCart = (item) => (dispatch) => dispatch(addtoCartAction(item));
export const clearCart = (payload) => (dispatch) => dispatch(clearCartAction(payload));
export const bulkInsert = (payload) => (dispatch) => dispatch(bulkInsertAction(payload));
export const setPageParams = (payload) => (dispatch) => dispatch(setParams(payload));
export const removePageParams = (payload) => (dispatch) => dispatch(removeParams(payload));
export const toggleCartState = () => (dispatch) => dispatch(toggleCart());
export const toggleLocationPickerState = () => (dispatch) => dispatch(togglePicker());
export const notifyAddressAdded = (payload) => (dispatch) => dispatch(notifyLocationAdded(payload));
export const toggleMapView = () => (dispatch) => dispatch(toggleMap());
export const toggleModalView = (payload) => (dispatch) => dispatch(toggleModal(payload));
