import {SET_USER_LOCATION, RESTORE_AUTH_STATE, AUTHENTICATE, DEAUTHENTICATE, SET_LOADER, AUTH_ERROR, SET_FAVOURITE_ITEMS} from "../../constants";
import API from '../../../auth';
import {API as restaurantAPI} from '../../../Account';
import { fetchSessionCart, bulkInsert } from "../cart/actions";
import { generateSessionId } from '../../utils/cookie';


export const authenticateAction = (user) => {
   return {
       type: AUTHENTICATE,
       payload: user
   };
};

export const setLocationAction = (location) => {
    return {
        type: SET_USER_LOCATION,
        payload: location
    };
 };


export const deAuthenticateAction = () => {
   return {
       type: DEAUTHENTICATE,
   };
};


export const restoreState = (authState) => {
   return {
       type: RESTORE_AUTH_STATE,
       payload: authState
   }
};

export const authErrorAction = (msg) => {
    return {
        type: AUTH_ERROR,
        payload: msg
    }
 };

 export const loaderAction = (bool) => {
    return {
        type: SET_LOADER,
        payload: bool
    }
 };

 export const setFavouiteItems = (items) => {
    return {
        type: SET_FAVOURITE_ITEMS,
        payload: items
    }
 };


 export const fetchFavorites = id => dispatch => {
     try {
        restaurantAPI.getFavorites({
            user_id: id
        }).then(items=>{
            dispatch(setFavouites(items))
        })

     } catch {

     }
 }
export const login = (credentials) => (dispatch) => {
    const {rememberMe} = credentials;
    try {
        dispatch(setLoader(true))
        dispatch(deAuthenticateAction());
        dispatch(authenticationError(false))
        API.authenticate(credentials.data)
        .then(({data}) => {
            dispatch(setLoader(false))
            if (parseInt(data.code) !== 200) {
                dispatch(authenticationError(data.msg))
                return
            }

            const user = {...data.msg.UserInfo, ...data.msg.User}
            const sessionId = generateSessionId({user});
            dispatch(fetchFavorites(user.user_id))
            dispatch(authenticateAction({ isLoggedIn: true, user, rememberMe, sessionId }));
            dispatch(fetchSessionCart(sessionId))
            dispatch(bulkInsert(sessionId))            
            dispatch(authenticationError(null))
        })
        .catch((err)=>{
            console.log(err)
            dispatch(setLoader(false))
        })
    } catch (e) {
        dispatch(deAuthenticateAction());
        dispatch(setLoader(false))
        dispatch(authenticationError(true))
    }
};


export const signUp = ({data}) => {
   return dispatch => {
       try {
           API.register(data)
           .then(({data}) => {
                dispatch(setLoader(false))
                if (parseInt(data.code) !== 200) {
                    dispatch(authenticationError(data.msg));
                    dispatch(deAuthenticateAction());
                    return
                }
                else {
                    const { UserInfo, User } = data.msg;
                    dispatch(authenticateAction({ isLoggedIn: true, user: {...UserInfo, ...User}, rememberMe: true }));
                    dispatch(authenticationError(null))
                    dispatch(fetchFavorites(User.user_id))
                }
           })
           .catch(()=>{
               dispatch(setLoader(false));
               dispatch(deAuthenticateAction());
           })
       } catch (error) {
           dispatch(deAuthenticateAction());
           dispatch(setLoader(false))
       }
   };
};


export const logout = () => {
   return dispatch => {
       dispatch(deAuthenticateAction())
   }
};


export const restore = (savedState) => {
   return dispatch => {
       dispatch(restoreState(savedState));
   };
};

export const setLoader = (bool) => dispatch => dispatch(loaderAction(bool));
export const setFavouites = (items) => dispatch => dispatch(setFavouiteItems(items));
export const authenticationError = (msg) => dispatch => dispatch(authErrorAction(msg));

export const setUserLocation = (location) => {
    return dispatch => {
        dispatch(setLocationAction(location))
    }
};
