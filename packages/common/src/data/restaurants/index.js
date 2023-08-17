import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth'; // for authentication
import 'firebase/storage'; // for storage
import 'firebase/database'; // for realtime database
import 'firebase/firestore'; // for cloud firestore
import 'firebase/messaging'; // for cloud messaging
import 'firebase/functions'; // for cloud functions
import { data } from '../App/Footer';

// Set the configuration for your app
// TODO: Replace with your project's config object
const config = {
  apiKey: 'AIzaSyB6Fq4TJJJf9WNnwVs5fgC0if4CHR9cUIQ',
  authDomain: 'ayazona-bf585.firebaseapp.com',
  databaseURL: 'https://ayazona-bf585.firebaseio.com',
  storageBucket: 'bucket.appspot.com',
};

const parseRestaurantsData = (data = []) => data.map(r => r.Restaurant);
const parseAislesData = (data = []) => data.map(r => r.Aisle);
const parseSearchData = (data = []) => data.map(r => r.AisleListItem);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// Get a reference to the database service
const database = firebase.database();

const API = {
  async getAisles(longLat) {
    return await axios
      .post('https://api.ayazona.com/v2/customers/showAisles', {
        ...{
          lat: -1.283329,
          long: 36.81666,
          current_time: new Date().toISOString(),
        },
        ...longLat,
      })
      .then(({ data }) => (data.code == 200 ? data.msg : []))
      .catch(err => {
        console.log('Error ::', err);
        return [];
        // TODO: handle error
      });
  },
  async getAisle(payload) {
    return await axios
      .post('https://api.ayazona.com/v2/customers/showAislesList', {
        ...payload,
        current_time: new Date().toISOString(),
      })
      .then(({ data }) => {
        return data.code == 200 ? data.msg[0] : null;
      })
      .catch(err => {
        console.log('Error ::', err);
        return [];
        // TODO: handle error
      });
  },
  async searchProducts(payload) {
    return await axios
      .post('https://api.ayazona.com/v2/customers/searchProducts', payload)
      .then(({ data }) => parseSearchData(data.msg))
      .catch(err => {
        console.log('Error ::', err);
        return [];
        // TODO: handle error
      });
  },
  async getRestaurantsByDish(dish, longLat = {}) {
    const payload = {
      ...{
        dish: dish
          .split('-')
          .join(' ')
          .toLowerCase(),
      },
      ...longLat,
    };

    return await axios
      .post(
        'https://x1.ayazona.com/v1/api/showRestaurantsAgainstDishes',
        payload
      )
      .then(({ data }) => parseRestaurantsData(data.msg))
      .catch(err => {
        console.log('Error ::', err);
        return [];
      });
  },
  async getRestaurant(id) {
    return await axios
      .post('https://x1.ayazona.com/v1/api/showRestaurantsMenu', {
        id,
        current_time: new Date().toISOString(),
      })
      .then(({ data }) => (data.code == 200 ? data.msg[0] : null))
      .catch(err => {
        console.log('Error ::', err);
        return [];
        // TODO: handle error
      });
  },
  async getCampaign(id) {
    return await axios
      .post('https://x1.ayazona.com/v1/api/showCampaign', {
        id,
      })
      .then(({ data }) => (data.code == 200 ? data.message[0] : null))
      .catch(err => {
        console.log('Error ::', err);
        return [];
        // TODO: handle error
      });
  },
  async getRestaurants(longLat) {
    // if (!longLat) {
    //     return [];
    // }
    return await axios
      .post('https://x1.ayazona.com/v1/api/showRestaurants', {
        ...{
          lat: -1.283329,
          long: 36.81666,
          current_time: new Date().toISOString(),
        },
        ...longLat,
      })
      .then(({ data }) => (data.code == 200 ? data.msg : []))
      .catch(err => {
        console.log('Error ::', err);
        return [];
        // TODO: handle error
      });
  },
  async getDailyDeals(longLat) {
    // if (!longLat) {
    //     return [];
    // }
    return await axios
      .post('https://x1.ayazona.com/v1/api/showRestaurants', {
        ...{
          lat: -1.283329,
          long: 36.81666,
          current_time: new Date().toISOString(),
        },
        ...longLat,
      })
      .then(({ data }) => (data.code == 200 ? data.promoted : []))
      .catch(err => {
        console.log('Error ::', err);
        return [];
        // TODO: handle error
      });
  },
  async getPromoSlides(longLat) {
    return axios
      .post('https://api.ayazona.com/v2/customers/showAppSliderImages', {
        ...{
          lat: -1.283329,
          long: 36.81666,
        },
        ...longLat,
      })
      .then(({ data }) => (data.code == 200 ? data.msg : []))
      .catch(err => {
        console.log('Error ::', err);
        return [];
        // TODO: handle error
      });
  },
  async getReactRestaurants(longLat = {}) {
    return await axios
      .post('https://x1.ayazona.com/v1/api/showReactRestaurants', {
        ...{
          lat: -1.283329,
          long: 36.81666,
          current_time: new Date().toISOString(),
        },
        ...longLat,
      })
      .then(({ data }) => (data.code == 200 ? data.msg : []))
      .catch(err => {
        console.log('Error ::', err);
        return [];
        // TODO: handle error
      });
  },
  async getRestaurantsByCuisine(cuisine, longLat = {}) {
    const payload = {
      ...{
        speciality: cuisine
          .split('-')
          .join(' ')
          .toLowerCase(),
      },
      ...longLat,
    };

    return await axios
      .post(
        'https://x1.ayazona.com/v1/api/showRestaurantsAgainstSpeciality',
        payload
      )
      .then(({ data }) => parseRestaurantsData(data.msg))
      .catch(err => {
        console.log('Error ::', err);
        return [];
      });
  },
  async getAllRestaurantsByCuisine(cuisine, longLat = {}) {
    const payload = {
      ...{
        speciality: cuisine
          .split('-')
          .join(' ')
          .toLowerCase(),
      },
      ...longLat,
    };

    return await axios
      .post(
        'https://x1.ayazona.com/v1/api/showAllRestaurantsAgainstSpeciality',
        payload
      )
      .then(({ data }) => parseRestaurantsData(data.msg))
      .catch(err => {
        console.log('Error ::', err);
        return [];
      });
  },
  async addItemToFirebaseDB(items, sessionId) {
    database.ref(`Cart/${sessionId}`).set(items);
  },
  async getMenuItemsFromFirebaseDB(sessionId) {
    return await database
      .ref(`/Cart/${sessionId}`)
      .once('value')
      .then(snapshot => snapshot.val() || []);
  },
  async makeOrder(payload) {
    return await axios
      .post('https://api.ayazona.com/v2/customers/addOrderSession', {
        created: new Date().toISOString(),
        ...payload,
      })
      .then(({ data }) => {
        return data.msg;
      })
      .catch(err => {
        console.log('Error ::', err);
        return [];
      });
  },
  async getOrderSession(id) {
    return await axios
      .post('https://api.ayazona.com/v2/customers/showOrderSession', { id })
      .then(({ data }) => {
        if (data.code === 200) return data.msg['OrderSession'];
        throw Error();
      })
      .catch(err => {
        console.log('Error ::', err);
        return [];
        // TODO: handle error
      });
  },
  async placeOrder(payload) {
    return await axios
      .post('https://api.ayazona.com/v2/customers/placeOrder', {
        created: new Date().toISOString(),
        ...payload,
      })
      .then(({ data }) => {
        return data.code === 200 && data.msg;
      })
      .catch(err => {
        console.log('Error ::', err);
        return [];
      });
  },
};

export default API;
