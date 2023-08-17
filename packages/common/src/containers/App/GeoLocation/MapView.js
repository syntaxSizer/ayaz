import React from 'react';
import { loadGoogleMapScript } from './utils';
import { MapWrapper } from './styles';

const setMarkers = async (map, locations, disableInterections) => {
  function CustomMarker(latlng, map, imageSrc, anchorLink, textContent) {
    this.latlng_ = latlng;
    this.imageSrc = imageSrc;
    this.anchorLink = anchorLink;
    this.textContent = textContent;
    // Once the LatLng and text are set, add the overlay to the map.  This will
    // trigger a call to panes_changed which should in turn call draw.
    this.setMap(map);
  }

  CustomMarker.prototype = new google.maps.OverlayView();

  CustomMarker.prototype.draw = function() {
    // Check if the div has been created.
    let div = this.div_;
    if (!div) {
      // Create a overlay text DIV
      div = this.div_ = document.createElement('div');
      // Create the DIV representing the CustomMarker
      div.className = 'customMarker';
      // create tooltip DIV
      let tooltip = document.createElement('span');
      tooltip.className = 'tooltiptext';
      tooltip.textContent = this.textContent;
      let img = document.createElement('img');
      img.src = this.imageSrc;
      let anchor = document.createElement(disableInterections ? 'span' : 'a');
      anchor.href = this.anchorLink;
      anchor.appendChild(tooltip);
      anchor.appendChild(img);
      div.appendChild(anchor);
      google.maps.event.addDomListener(div, 'click', function(event) {
        google.maps.event.trigger(anchor, 'click');
      });

      // Then add the overlay to the DOM
      var panes = this.getPanes();
      panes.overlayImage.appendChild(div);
    }

    // Position the overlay
    var point = this.getProjection().fromLatLngToDivPixel(this.latlng_);
    if (point) {
      div.style.left = point.x + 'px';
      div.style.top = point.y + 'px';
    }
  };

  CustomMarker.prototype.remove = function() {
    // Check if the overlay was on the map and needs to be removed.
    if (this.div_) {
      this.div_.parentNode.removeChild(this.div_);
      this.div_ = null;
    }
  };

  CustomMarker.prototype.getPosition = function() {
    return this.latlng_;
  };

  for (let idx = 0; idx < locations.length; idx++) {
    let { AisleLocation, Aisle } = locations[idx];
    new CustomMarker(
      new window.google.maps.LatLng(
        parseFloat(AisleLocation.lat),
        parseFloat(AisleLocation.long)
      ),
      map,
      `https://b.cdn.ayazona.com/${Aisle.image || Aisle.cover_image}`,
      `/store/${Aisle.slug}`,
      'Store'
    );
  }
};

const MapView = ({
  location,
  customClassName,
  mapHeight = `100%`,
  restaurants = [],
  disableInterections = false,
  center,
  zoom = 15,
  setOnLocationChange,
}) => {
  const mapRef = React.useRef(null);
  const [mapLoaded, setLoadMap] = React.useState(false);
  const [marker, setMarker] = React.useState(null);
  const [map, setMapInstance] = React.useState(null);
  React.useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true);
    });
  }, []);

  React.useEffect(() => {
    if (!mapLoaded) return;
    initMap();
  }, [mapLoaded]);

  React.useEffect(() => {
    if (!location || !location.lat) return;
    setMarkerLocation();
  }, [location]);

  const initMap = async () => {
    const selectedLocation = {
      lng: parseFloat(center.long),
      lat: parseFloat(center.lat),
    };
    const map = new window.google.maps.Map(mapRef.current, {
      zoom,
      center: selectedLocation,
      // mapId: '638534482ec13e0b',
      scrollwheel: false,
      styles: [
        {
          featureType: 'all',
          elementType: 'geometry.fill',
          stylers: [
            {
              visibility: 'on',
            },
          ],
        },
        {
          featureType: 'administrative',
          elementType: 'all',
          stylers: [
            {
              color: '#f2f2f2',
            },
          ],
        },
        {
          featureType: 'administrative',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#686868',
            },
            {
              visibility: 'on',
            },
          ],
        },
        {
          featureType: 'landscape',
          elementType: 'all',
          stylers: [
            {
              color: '#f2f2f2',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'all',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'all',
          stylers: [
            {
              saturation: -100,
            },
            {
              lightness: 45,
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'all',
          stylers: [
            {
              visibility: 'simplified',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [
            {
              lightness: '-22',
            },
            {
              visibility: 'on',
            },
            {
              color: '#b4b4b4',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            {
              saturation: '-51',
            },
            {
              lightness: '11',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text',
          stylers: [
            {
              saturation: '3',
            },
            {
              lightness: '-56',
            },
            {
              visibility: 'simplified',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [
            {
              lightness: '-52',
            },
            {
              color: '#9094a0',
            },
            {
              visibility: 'simplified',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              weight: '6.13',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.icon',
          stylers: [
            {
              weight: '1.24',
            },
            {
              saturation: '-100',
            },
            {
              lightness: '-10',
            },
            {
              gamma: '0.94',
            },
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.fill',
          stylers: [
            {
              visibility: 'on',
            },
            {
              color: '#b4b4b4',
            },
            {
              weight: '5.40',
            },
            {
              lightness: '7',
            },
          ],
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'labels.text',
          stylers: [
            {
              visibility: 'simplified',
            },
            {
              color: '#231f1f',
            },
          ],
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'labels.text.fill',
          stylers: [
            {
              visibility: 'simplified',
            },
            {
              color: '#595151',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [
            {
              lightness: '-16',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry.fill',
          stylers: [
            {
              visibility: 'on',
            },
            {
              color: '#d7d7d7',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.text',
          stylers: [
            {
              color: '#282626',
            },
            {
              visibility: 'simplified',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.text.fill',
          stylers: [
            {
              saturation: '-41',
            },
            {
              lightness: '-41',
            },
            {
              color: '#2a4592',
            },
            {
              visibility: 'simplified',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              weight: '1.10',
            },
            {
              color: '#ffffff',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'on',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'geometry.fill',
          stylers: [
            {
              lightness: '-16',
            },
            {
              weight: '0.72',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [
            {
              lightness: '-37',
            },
            {
              color: '#2a4592',
            },
          ],
        },
        {
          featureType: 'transit',
          elementType: 'all',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry.fill',
          stylers: [
            {
              visibility: 'off',
            },
            {
              color: '#eeed6a',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry.stroke',
          stylers: [
            {
              visibility: 'off',
            },
            {
              color: '#0a0808',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [
            {
              color: '#b7e4f4',
            },
            {
              visibility: 'on',
            },
          ],
        },
      ],
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      zoomControl: disableInterections ? false : true,
      draggable: disableInterections ? false : true,
      scrollwheel: disableInterections ? false : true,
      disableDoubleClickZoom: disableInterections,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP,
      },
    });
    const geocoder = new google.maps.Geocoder();
    setMapInstance(map);
    if (restaurants.length && !!map) {
      setMarkers(map, restaurants, disableInterections);
      return;
    }

    // update location when marker dragged
    window.google.maps.event.addListener(marker, 'dragend', marker => {
      const latLng = marker.latLng;
      const currentLatitude = latLng.lat();
      const currentLongitude = latLng.lng();
      geocoder.geocode(
        {
          latLng: latLng,
        },
        (results, status) => {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              setOnLocationChange &&
                setOnLocationChange({
                  lat: currentLatitude,
                  lng: currentLongitude,
                  address: results[0].formatted_address,
                });
            }
          }
        }
      );
    });
  };

  const setMarkerLocation = () => {
    if (restaurants.length) {
      return;
    }
    if (!mapLoaded) {
      initMap();
      return;
    }
    marker.setPosition(location);
    map.setCenter(marker.position);
    marker.setMap(map);
  };
  return (
    <MapWrapper
      className={customClassName || 'customClass'}
      style={{ height: mapHeight || `100%`, width: `100%`, borderRadius: `0` }}
      ref={mapRef}
    />
  );
};

export default MapView;
