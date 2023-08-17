import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/src/theme/about';
import {
  GlobalStyle,
  AppWrapper,
  PageWrapper,
} from 'common/src/containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/App/Navbar';
import Footer from 'common/src/containers/App/Footer';
import Router from 'next/router';

import StoreBanner from 'common/src/containers/delivery/StoreBanner';
import FixedBanner from 'common/src/containers/delivery/StoreFixedBanner';
import MobileNavBar from 'common/src/containers/delivery/FixedBannerMobile';
import Slider from 'common/src/containers/cuisines/cuisine-components/Slider';
import { AboutAyazona } from 'common/src/data/FAQ';
import FAQ from 'common/src/containers/FAQ';
import RestaurantSlider from 'common/src/containers/cuisines/cuisine-components/RestaurantsSlider';
import PromoSlider from 'common/src/containers/cuisines/cuisine-components/PromoSlider';

import FeatureSection from 'common/src/containers/store/FeatureSection';

import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { cuisines } from 'common/src/data/cuisines';
import { locations } from 'common/src/data/delivery';
const cities = Object.keys(locations);

import { setCookie, getCookie } from 'common/src/data/store/utils/cookie';
import { useSelector } from 'react-redux';

const Feed = () => {
  const [cityOrArea, setCityOrArea] = React.useState('Nairobi');
  const [isAnArea, setIsAnArea] = React.useState(false);
  const [longLat, setLongLat] = React.useState({
    lat: -1.283329,
    long: 36.81666,
  });
  const [isLoading, setIsloading] = React.useState(true);
  const [isValidLocation, setIsValidLocation] = React.useState(true);
  const { store } = useSelector(({ _proxy }) => _proxy);
  let areas = Object.values(locations);

  const getAreas = cOrA => {
    const findAreaGroup = c =>
      Object.values(locations).filter(item => {
        return item.areas.filter(({ name }) => name === c).length;
      });
    if (cOrA in cities) {
      return locations[cOrA].areas;
    } else {
      const finds = findAreaGroup(cOrA);
      return finds.length ? finds[0].areas : [];
    }
  };
  const fetchData = () => {
    setCookie('_cuisine', null);
    let params =
      window.JSON.parse(getCookie('_store_p') || 'null') || store.location;
    if (params) {
      if (params.cityOrArea) {
        const cOrA = params.cityOrArea.split(' ')[0];
        setCityOrArea(cOrA);
        areas = getAreas(cOrA);
        const areaData = areas.filter(
          a => a.name.toLocaleLowerCase() === cityOrArea.toLocaleLowerCase()
        );
        if (areaData.length) {
          setIsAnArea(true);
        }
      }
      if (params.lat) {
        setLongLat({
          lat: params.lat,
          long: params.lng,
        });
      }
    }
    setIsloading(false);
    // setIsValidLocation(true);
  };

  React.useEffect(() => {
    if (!!store && !!store.location) {
      setCityOrArea(store.location.cityOrArea);
      setLongLat({
        lat: store.location.lat,
        long: store.location.lng,
      });
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    if (
      !!store &&
      !!store.location &&
      store.location.cityOrArea !== cityOrArea
    ) {
      fetchData();
    }
  }, [store]);

  const handleUnmount = () => {
    setCookie('_store_p', null);
  };

  React.useEffect(() => {
    window.addEventListener('beforeunload', handleUnmount);
    return () => {
      window.removeEventListener('beforeunload', handleUnmount);
    };
  });

  const links = [
    {
      name: 'Ayazona',
      itemtype: 'http://schema.org/ListItem',
      href: '/',
      itemprop: 'item',
      position: 1,
    },
    {
      name: 'store',
      itemtype: 'http://schema.org/ListItem',
      href: '/store',
      itemprop: 'name',
      position: 2,
    },
  ];

  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>
            Order Quality Food &amp; Fresh Groceries Delivery Online | Ayazona
          </title>
          <meta
            name="description"
            content="Best local affordable restaurants now deliver. Get breakfast, lunch, dinner and more delivered from your favorite restaurants right to your doorstep."
          />
          <link rel="canonical" href="https://www.ayazona.com/store" />
          <meta
            name="title"
            content="Order Quality Food &amp; Fresh Groceries Delivery Online | Ayazona"
          />
          <meta
            property="og:title"
            content="Order Quality Food &amp; Fresh Groceries Delivery Online | Ayazona"
          />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://www.ayazona.com/store" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Best local affordable restaurants now deliver. Get breakfast, lunch, dinner and more delivered from your favorite restaurants right to your doorstep."
          />
          <meta
            name="twitter:title"
            content="Order Quality Food &amp; Fresh Groceries Delivery Online | Ayazona"
          />
          <meta
            name="twitter:description"
            content="Best local affordable restaurants now deliver. Get breakfast, lunch, dinner and more delivered from your favorite restaurants right to your doorstep."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getAyazona" />
          <meta name="twitter:creator" content="@getAyazona" />
          <meta name="twitter:url" content="https://www.ayazona.com/store" />
          <meta name="theme-color" content="#002524" />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky
            enabled={true}
            enableTransforms={false}
            top={0}
            innerZ={9999}
            className="mainNavBar sticky-inner-wrap"
            activeClass="delivery-sticky-nav-active"
          >
            <DrawerProvider>
              <Navbar
                highlightItem="essentials"
                bgColor="#ffffff"
                btnBackgroundColor="#2F3137"
                borderColor="rgba(45,49,56,0.15)"
                textColor="#2D3138"
                secondTextColor="#FFF"
                showSearch={true}
                logoNumber={0}
              />
            </DrawerProvider>
          </Sticky>
          <FixedBanner location={cityOrArea} />
          <StoreBanner title={'Quality groceries delivered in minutes.'} />
          <span style={{ marginTop: 10 }}>&nbsp;</span>
          <FeatureSection
            style={{ display: isLoading ? 'none' : 'flex' }}
            titleText={''}
            isValidLocation={isValidLocation}
            key={longLat.lat}
            longLat={longLat}
          />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default Feed;
