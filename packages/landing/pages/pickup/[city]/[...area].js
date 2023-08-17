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
import PickupFooter from 'common/src/containers/App/PickupFooter';

import StoreBanner from 'common/src/containers/delivery/StoreBanner';
import PickupFixedBanner from 'common/src/containers/delivery/PickupFixedBanner';
import MobileNavBar from 'common/src/containers/delivery/FixedBannerMobile';
import Slider from 'common/src/containers/cuisines/cuisine-components/Slider';

import FeatureSection from 'common/src/containers/App/PlaceholderPanel';
import LocationDescription from 'common/src/containers/delivery/LocationDescription';
import MobileToggle from 'common/src/containers/delivery/MobileToggle';
import BreadCrums from 'common/src/containers/App/Breadcrums';
import styled from 'styled-components';


import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { cuisines } from 'common/src/data/cuisines';
import { locations } from 'common/src/data/delivery'
import FAQ from 'common/src/containers/FAQ';
import LocationBlock from 'common/src/containers/delivery/FeatureSection';
import API from 'common/src/data/restaurants';
import Feature from 'common/src/containers/store/FeatureSection';

import RestaurantSlider from 'common/src/containers/cuisines/cuisine-components/RestaurantsSlider';
import PromoSlider from 'common/src/containers/cuisines/cuisine-components/PromoSlider';

import Error from '../../404'
import CityCuisinePage from 'common/src/excluded-pages/pickup-city-cuisine';
import CityAreaCuisinePage from 'common/src/excluded-pages/pickup-city-area-cuisine';
import { setCookie } from 'common/src/data/store/utils/cookie';
import MapView from 'common/src/containers/pickup/MapView';
import { useSelector } from 'react-redux';



import {
  getCommonJsonld,
  getJSONLDBusinesslisting
} from 'common/src/utils';

const cities = Object.keys(locations);

export async function getServerSideProps({params}) {
  const { city, area } = params;
  const key = city[0].toUpperCase() + city.substr(1);
  let areas = [];
  if (cities.includes(key)) {
    areas = locations[key].areas
  }
  const areaData = areas.filter(a=> a.name.toLocaleLowerCase() === area[0].toLocaleLowerCase());
  const cuisineData = [...cuisines, {name: 'affordable'}].filter(c=> c.name.toLocaleLowerCase() === area[0].split('-'). join(' '));

  let locationJsonldData = null;
  let location = area[0];
  let longLat = null;
  let cuisine = '';

  if (areaData.length) {
    location = areaData[0].name
    longLat = areaData[0].longLat
  }

  if (area.length > 1) {
    cuisine = area[1];
  }
  else if (cuisineData.length) {
    cuisine = cuisineData[0].name
  }
  let listItems = await API.getAisles(longLat);
  let cuisineMerchantItems = await API.getRestaurantsByCuisine(cuisine, longLat);
  let restaurants = listItems.map(r=> r.Aisle);

  return {
    props: {
      restaurants,
      cuisineMerchantItems,
      locationJsonldData,
      listItems,
      cuisine,
      location,
      cuisines,
      areaData,
      cuisineData,
      longLat,
      areas,
      city: key,
    },
  }
}


const Area = ({
  restaurants,
  cuisines,
  location,
  city,
  cuisine,
  areaData,
  cuisineData,
  areas,
  longLat,
  cuisineMerchantItems,
  listItems,
  locationJsonldData }) => {

  const [isValidLocation, setIsValidLocation] = React.useState(cities.includes(city));
  if (!cuisineData.length && !areaData.length) {
    // return <Error />
    areaData = [{}]
  }
  const { mapViewIsOpen } = useSelector(({toggles})=> toggles);
  const [isLoading, setIsloading] = React.useState(true);

  if (cuisine.length) {
    cuisine = cuisine[0].toLocaleUpperCase() + cuisine.substr(1);
    setCookie('_cuisine', {cuisine: {name: cuisine.toLocaleLowerCase()}});
    if (areaData.length) {
      return <CityAreaCuisinePage
        cuisineItems={cuisineMerchantItems}
        jsonldUrl={
          `https://www.ayazona.com/pickup/${city.toLocaleLowerCase()}/${location.toLocaleLowerCase().toLocaleLowerCase()}/${cuisine.toLocaleLowerCase().split(' ').join('-')}`}
        sliderItemsBaseUrl={
          `/pickup/${city.toLocaleLowerCase()}/${location.toLocaleLowerCase()}`}
        bannerTitle={`${cuisine.split('-').join(' ')} Takeout in ${location.split('-').join(' ')}.`} restaurants={restaurants}
        location={location}
        city={city}
        isValidLocation={isValidLocation}
        longLat={areaData[0].longLat}
        cuisine={cuisine}
        restaurants={restaurants}
        cuisines={cuisines} />
    }
    return <CityCuisinePage
      cuisineItems={cuisineMerchantItems}
      jsonldUrl={
        `https://www.ayazona.com/pickup/${city.toLocaleLowerCase()}/${cuisine.toLocaleLowerCase().split(' ').join('-')}`}
      longLat={locations[city].longLat}
      sliderItemsBaseUrl={`/pickup/${city.toLocaleLowerCase()}`}
      bannerTitle={`${cuisine.split('-').join(' ')} Takeout in ${city.split('-').join(' ')}.`} restaurants={restaurants}
      location={location}
      city={city}
      isValidLocation={isValidLocation}
      cuisine={cuisine}
      cuisines={cuisines} />
  }

  if (location && !cities.includes(city)) {
    return <Error />
  }
  location = location.replace(/\b\w/g, c => c.toUpperCase()).split('-').join(' ');
  setCookie('_cuisine', null);

  const items = listItems;
  let businessListing = []
  if (items.length) {
    businessListing = 
    <script
      key={`delivery-listing-${city}-${location}-index`}
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getJSONLDBusinesslisting(items))}}
    />
  }
  const questions = [
    {
      question: 'Does Ayazona deliver to '+`${location}`+'?',
      answer: 'Check Ayazona in '+`${location}`+' and discover areas and product available for delivery on Ayazona'
    },
    {
      question: 'How many products can I order on Ayazona in '+`${location}`+' deliver on Ayazona?',
      answer: 'Check Ayazona in '+`${location}`+' and discover products available for delivery on Ayazona. With 2000+ carefully curated products, we\'ve got everything you need for your household. No minimum or maximum order.'
    },
    {
      question: 'Does Ayazona offer contact-free delivery in '+`${location}`+'?',
      answer: 'Yes, all orders and products have an option for contact-free delivery via Ayazona in '+`${location}`+'.'
    },
    {
      question: 'What kind of food can I order for delivery?',
      answer: 'We\'re a revolutionary grocery service that delivers quality products in minutes. With 2000+ carefully curated products, we\'ve got everything you need: from bananas to baby food, to biscuits and toiletries.'
    },
    {
      question: 'What are the best Food Takeout deals in '+`${location}`+'?',
      answer: 'Find the most affordable Food Takeout in '+`${location}`+' on Ayazona.'
    }
  ]

  const links = [
    {
      name: 'Ayazona',
      itemtype: 'http://schema.org/ListItem',
      href: '/',
      itemprop: 'item',
      position: 1
    },
    {
      name: 'pickup',
      itemtype: 'http://schema.org/ListItem',
      href: '/pickup',
      itemprop: 'name',
      position: 2
    },
    {
      name: `${city.split('-').join(' ')}`,
      itemtype: 'http://schema.org/ListItem',
      href: `/pickup/${city.toLocaleLowerCase()}`,
      itemprop: 'name',
      position: 3
    },
    {
      name: `${location.split('-').join(' ')}`,
      itemtype: 'http://schema.org/ListItem',
      href: `/pickup/${city.toLocaleLowerCase()}/${location.toLocaleLowerCase().split(' ').join('-')}`,
      itemprop: 'name',
      position: 4
    }
  ];

  const BC = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: auto;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
  `;

  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Order Food Takeout in {location} • Ayazona</title>
          <meta
            name='description'
            content={`Order food takeout, groceries and essentials in ${location}. You want it fresh, you want it affordable, and sometimes you're down to pick it up yourself. `}
          />
          <link rel='canonical' href={`https://www.ayazona.com/pickup/${city.toLocaleLowerCase().split(' ').join('-')}/${location.split(' ').join('-').toLocaleLowerCase()}/${cuisine.toLocaleLowerCase()}`} />
          <meta name='title' content={`Order Food Takeout in ${location} • Ayazona`} />
          <meta property='og:title' content={`Order Food Takeout in ${location} • Ayazona`} />
          <meta property='og:image' content='/static/scripts/herooooooooo.jpg' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='628' />
          <meta property='og:url' content={`https://www.ayazona.com/pickup/${city.toLocaleLowerCase().split(' ').join('-')}/${location.split(' ').join('-').toLocaleLowerCase()}/${cuisine.toLocaleLowerCase()}`} />
          <meta property='og:type' content='website' />
          <meta property='og:description' content={`Order food takeout, groceries and essentials in ${location}. You want it fresh, you want it affordable, and sometimes you're down to pick it up yourself. `} />
          <meta name='twitter:title' content={`Order Food Takeout in ${location} • Ayazona`} />
          <meta name='twitter:description' content={`Order food takeout, groceries and essentials in ${location}. You want it fresh, you want it affordable, and sometimes you're down to pick it up yourself. `} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content='/static/scripts/herooooooooo.jpg' />
          <meta name='twitter:site' content='@getayazona' />
          <meta name='twitter:creator' content='@getayazona' />
          <meta name='twitter:url' content={`https://www.ayazona.com/pickup/${city.toLocaleLowerCase().split(' ').join('-')}/${location.split(' ').join('-').toLocaleLowerCase()}/${cuisine.toLocaleLowerCase()}`} />
          <meta name='theme-color' content='#002524'/>
          <script
			      key={`pickup-${city}-${location}-${cuisine}-index`}
			      type='application/ld+json'
			      dangerouslySetInnerHTML={{ __html: JSON.stringify(
              getCommonJsonld(`https://www.ayazona.com/pickup/${city.toLocaleLowerCase().split(' ').join('-')}/${location.toLocaleLowerCase().split(' ').join('-')}/${cuisine.toLocaleLowerCase()}`),
              `Order food takeout, groceries and essentials in ${location}. You want it fresh, you want it affordable, and sometimes you're down to pick it up yourself. `)}}
		      />
          { businessListing }
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <div
            style={{display: mapViewIsOpen? 'none': 'initial'}}>
            <Sticky
              enabled={true}
              enableTransforms={false}
              top={0}
              innerZ={9999}
              className='mainNavBar sticky-inner-wrap'
              activeClass='delivery-sticky-nav-active'
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
                  logoNumber={0}/>
              </DrawerProvider>
            </Sticky>
            <MobileToggle />
              <PickupFixedBanner url={`/delivery/${city.toLocaleLowerCase().split(' ').join('-')}/${location.toLocaleLowerCase().split(' ').join('-')}`} secondUrl={`/dine-in/${city.toLocaleLowerCase().split(' ').join('-')}/${location.toLocaleLowerCase().split(' ').join('-')}`} location={location.split('-').join(' ')} />
              <StoreBanner title={`Order food takeout in ${location.split('-').join(' ')}.`} />
              <span style={{ marginTop: 10 }}>&nbsp;</span>
              <Feature
                style={{ display: isLoading ? 'none' : 'flex' }}
                titleText={''}
                isValidLocation={isValidLocation}
                key={areaData[0].longLat.lat}
                longLat={areaData[0].longLat}
              />
              <Slider
                baseUrl={`/pickup/${city.toLocaleLowerCase().split(' ').join('-')}/${location.toLocaleLowerCase().split(' ').join('-')}`}
                header='Browse by Cuisine' cuisines={cuisines} />
              <LocationDescription 
                header={`${location} affordable local food for takeout.`}
                description={`Get food delivery, grocery delivery, home essentials delivery, and drinks delivery or takeout around ${location} from our local distribution centers, cafes, grocery stores, and bakeries. Life is too short for bad food—therefore, we’d never compromise on our produce’s quality. Changing the access to essential needs, we are also on a mission to lead the change for more conscious and sustainable consumption. Having on-demand access to groceries means that 1) storing food is a thing of the past which drastically reduces food waste and 2) we can set new standards of freshness when it comes to what we eat. Local farmers help us provide the freshest produce and ensure short supply chains while supporting local communities. Being the most affordable and the first local delivery app, we are on a mission to make it affordable for low-income households to access food and basic home essentials.`}/>
              <FAQ questions={questions}/>
              <BC className="breadCrums"><BreadCrums links={links}/></BC>
              <LocationBlock city={`${city.split(' ').join('-').toLocaleLowerCase()}`} baseUrl={'/pickup'} urlExtention={cuisine || ''} locations={areas} currentLocation={city} header={`Explore more areas near ${location}`} />
              <PickupFooter title={`Order takeaway in ${location.split('-').join(' ')}`} intro={`Order affordable food, and utilities from anywhere in ${location.split('-').join(' ')}, ${city.split('-').join(' ')}. From fresh groceries to baby products, Ayazona is your local food delivery, grocery delivery, home essentials delivery app.`} outro={'Order from the local delivery app with the most affordable merchants and stores with the lowest delivery fees guaranteed. Just enter your address, find something affordable you like, add it to your basket and we will get it.'}/>
          </div>
          <div style={{display: !mapViewIsOpen? 'none': 'initial'}}>
            <Sticky
              enabled={true}
              enableTransforms={false}
              top={0}
              innerZ={9999}
              className='mapNavBar'
              activeClass='delivery-sticky-nav-active'
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
                  logoNumber={0}/>
              </DrawerProvider>
            </Sticky>
            <PickupFixedBanner url={`/delivery/${city.toLocaleLowerCase().split(' ').join('-')}/${location.toLocaleLowerCase().split(' ').join('-')}`} none={'none'} secondUrl={`/dine-in/${city.toLocaleLowerCase().split(' ').join('-')}/${location.toLocaleLowerCase().split(' ').join('-')}`} none={'none'} location={location.split('-').join(' ')} />
            <MapView rawItems={listItems} items={restaurants} center={longLat} />
          </div>
        </AppWrapper> 
      </>
    </ThemeProvider>
  );
};

export default Area;
