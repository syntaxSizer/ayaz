const loadGoogleMapScript = callback => {
  if (
    typeof window.google === 'object' &&
    typeof window.google.maps === 'object'
  ) {
    callback();
    return
  }
  const googleMapScript = document.createElement('script');
  googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB6Fq4TJJJf9WNnwVs5fgC0if4CHR9cUIQ&libraries=places`;
  window.document.body.appendChild(googleMapScript);
  googleMapScript.addEventListener('load', callback);
};

const getLocation = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

const getCurrentLocation = () =>
  getLocation()
    .then(async position => {
      const crd = await position.coords;
      const location = {
        latitude: crd.latitude,
        longitude: crd.longitude,
        altitude: crd.altitude,
        altitudeAccuracy: crd.altitudeAccuracy,
        heading: crd.heading,
        speed: crd.speed,
        accuracy: crd.accuracy,
        timestamp: position.timestamp,
        error: {
          code: 0,
          message: '',
        },
      };

      return location;
    })
    .catch(error => {
      let position = true;

      if (error.message.toLowerCase() === 'user denied geolocation') {
        position = false;
      }

      return {
        error: {
          code: error.code,
          message: error.message,
          position,
        },
      };
    });

export { loadGoogleMapScript, getCurrentLocation };
