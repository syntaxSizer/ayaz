import {RESTORE_AUTH_STATE, AUTHENTICATE, DEAUTHENTICATE, SET_LOADER, AUTH_ERROR, SET_USER_LOCATION, SET_FAVOURITE_ITEMS} from "../../constants";

import {getCookie, setCookie, removeCookie, generateSessionId} from '../../utils/cookie';

let initialState;
if (typeof localStorage !== "undefined") {
    const authCookie = getCookie("auth");
    const location = getCookie("userLocation");
    if (authCookie) {
        const auth = JSON.parse(decodeURIComponent(authCookie));
        const sessionId = generateSessionId(auth)
	const userLocation = {
	    userLocation: location ? JSON.parse(decodeURIComponent(location))
	    : null};

        initialState = {
            ...userLocation,
            ...auth,
            sessionId,
            favouriteItems: []
        }
    } else {
        initialState = {
            isLoggedIn: false,
            user: {},
            sessionId: null,
            favouriteItems: []
        }
    }
} else {
    initialState = {
        isLoggedIn: false,
        user: {},
        sessionId: null,
        favouriteItems: []
    };
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DEAUTHENTICATE:
            removeCookie("auth");
            removeCookie("session")
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                sessionId: null
            };
        case AUTHENTICATE:
            const authObj = {
                ...state,
                ...action.payload
            };
            if (action.payload.rememberMe) {
                setCookie("auth", authObj);
            }
            setCookie("session", { sessionId: action.payload.sessionId });
            return authObj;
        case RESTORE_AUTH_STATE:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user
            };
        case SET_LOADER:
            return {
                ...state,
                loading: action.payload
            }
        case AUTH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SET_USER_LOCATION:
            return {
                ...state,
                userLocation: action.payload
            }
        case SET_FAVOURITE_ITEMS:
            return {
                ...state,
                favouriteItems: action.payload
            }
        default:
            return state;
    }
};

export default reducer;
