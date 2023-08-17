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

import StoreBanner from 'common/src/containers/delivery/StoreBanner';
import FixedBanner from 'common/src/containers/delivery/FixedBanner';
import BreadCrums from 'common/src/containers/App/Breadcrums';
import styled from 'styled-components';
import Slider from 'common/src/containers/cuisines/cuisine-components/Slider';

import FeatureSection from 'common/src/containers/App/PlaceholderPanel';
import LocationBlock from 'common/src/containers/delivery/FeatureSection';
import LocationDescription from 'common/src/containers/delivery/LocationDescription';


import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { cuisines } from 'common/src/data/cuisines';
import { locations } from 'common/src/data/delivery'
import FAQ from 'common/src/containers/FAQ';
import API from 'common/src/data/restaurants';
import PromoSlider from 'common/src/containers/cuisines/cuisine-components/PromoSlider';

import Error from '../../404'
import CityCuisinePage from 'common/src/excluded-pages/delivery-city-cuisine';
import CityAreaCuisinePage from 'common/src/excluded-pages/delivery-city-area-cuisine';
import { setCookie } from 'common/src/data/store/utils/cookie';
import Feature from 'common/src/containers/store/FeatureSection';

import {
  getCommonJsonld,
  getJSONLDBusinesslisting
} from 'common/src/utils';

const cities = Object.keys(locations);

export async function getServerSideProps({params}) {
  const { city, area} = params;
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
  else if (cuisineData.length && !areaData.length) {
    cuisine = cuisineData[0].name
  }
  
  let listItems = await API.getRestaurants(longLat);
  let cuisineMerchantItems = await API.getRestaurantsByCuisine(cuisine, longLat);
  let restaurants = listItems.map(r=> r.Restaurant);

  return {
    props: {
      restaurants,
      locationJsonldData,
      listItems,
      cuisineMerchantItems,
      cuisine,
      location,
      cuisines,
      city: key,
      areas,
      areaData,
      cuisineData
    },
  }
}


const Area = ({
  restaurants,
  cuisines,
  areaData,
  city,
  areas,
  cuisine,
  location,
  cuisineData,
  listItems,
  cuisineMerchantItems,
  locationJsonldData
}) => {

  const [isValidLocation, setIsValidLocation] = React.useState(cities.includes(city));
  const [isLoading, setIsloading] = React.useState(true);

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
  if (!cuisineData.length && !areaData.length) {
    // return <Error />
    areaData = [{}]
  }
  if (cuisine.length) {
    setCookie('_cuisine', {cuisine: {name: cuisine.toLocaleLowerCase()}});
    cuisine = cuisine.replace(/\b\w/g, c => c.toUpperCase());
    if (areaData.length) {
      return <CityAreaCuisinePage
        cuisineItems={cuisineMerchantItems}
        jsonldUrl={
          `https://www.ayazona.com/delivery/${city.toLocaleLowerCase()}/${location.toLocaleLowerCase()}/${cuisine.toLocaleLowerCase().split(' ').join('-')}`}
        sliderItemsBaseUrl={
          `/delivery/${city.toLocaleLowerCase()}/${location.toLocaleLowerCase()}`}
        bannerTitle={`${cuisine.split('-').join(' ')} Delivery in ${location.split('-').join(' ')}.`} restaurants={restaurants}
        location={location}
        longLat={areaData[0].longLat}
        city={city}
        isValidLocation={isValidLocation}
        cuisine={cuisine}
        cuisines={cuisines} />
    }
    return <CityCuisinePage
      cuisineItems={cuisineMerchantItems}
      longLat={locations[city].longLat}
      jsonldUrl={
        `https://www.ayazona.com/delivery/${city.toLocaleLowerCase()}/${cuisine.toLocaleLowerCase().split(' ').join('-')}`}
      sliderItemsBaseUrl={`/delivery/${city.toLocaleLowerCase()}`}
      bannerTitle={`${cuisine.split('-').join(' ')} Delivery in ${city.split('-').join(' ')}.`} restaurants={restaurants}
      location={location}
      city={city}
      isValidLocation={isValidLocation}
      cuisine={cuisine}
      cuisines={cuisines} />
  }

  location = (location[0].toUpperCase() + location.substr(1)).split('-').join(' ');
  setCookie('_cuisine', null);

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
  let items = restaurants;
  let businessListing = []
  if (items.length) {
    businessListing = 
    <script
      key={`delivery-listing-${city}-${location}-index`}
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getJSONLDBusinesslisting(items))}}
    />
  }

  const links = [
    {
      name: 'Ayazona',
      itemtype: 'http://schema.org/ListItem',
      href: '/',
      itemprop: 'item',
      position: 1
    },
    {
      name: 'delivery',
      itemtype: 'http://schema.org/ListItem',
      href: '/delivery',
      itemprop: 'name',
      position: 2
    },
    {
      name: `${city.split('-').join(' ')}`,
      itemtype: 'http://schema.org/ListItem',
      href: `/delivery/${city.toLocaleLowerCase()}`,
      itemprop: 'name',
      position: 3
    },
    {
      name: `${location.split('-').join(' ')}`,
      itemtype: 'http://schema.org/ListItem',
      href: `/delivery/${city.toLocaleLowerCase()}/${location.toLocaleLowerCase().split(' ').join('-')}`,
      itemprop: 'name',
      position: 4
    }
  ];

  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Food Delivery in {location} • Ayazona</title>
          <meta
            name='description'
            content={`Get food delivery, groceries and essentials in ${location} with one easy click. Ayazona is the app that delivers in minutes.`}
          />
          <link rel='canonical' href={`https://www.ayazona.com/delivery/${city.toLocaleLowerCase().split(' ').join('-')}/${location.split(' ').join('-').toLocaleLowerCase()}`} />
          <meta name='title' content={`Food Delivery in ${location} • Ayazona`} />
          <meta property='og:title' content={`Food Delivery in ${location} • Ayazona`} />
          <meta property='og:image' content='/static/scripts/herooooooooo.jpg' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='628' />
          <meta property='og:url' content={`https://www.ayazona.com/delivery/${city.toLocaleLowerCase().split(' ').join('-')}/${location.split(' ').join('-').toLocaleLowerCase()}`} />
          <meta property='og:type' content='website' />
          <meta property='og:description' content={`Get food delivery, groceries and essentials in ${location} with one easy click. Ayazona is the app that delivers in minutes.`} />
          <meta name='twitter:title' content={`Food Delivery in ${location} • Ayazona`} />
          <meta name='twitter:description' content={`Get food delivery, groceries and essentials in ${location} with one easy click. Ayazona is the app that delivers in minutes.`} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content='/static/scripts/herooooooooo.jpg' />
          <meta name='twitter:site' content='@getayazona' />
          <meta name='twitter:creator' content='@getayazona' />
          <meta name='twitter:url' content={`https://www.ayazona.com/delivery/${city.toLocaleLowerCase().split(' ').join('-')}/${location.split(' ').join('-').toLocaleLowerCase()}`} />
          <meta name='theme-color' content='#002524'/>
          <script
			      key={`delivery-${city}-${location}-${cuisine}-index`}
			      type='application/ld+json'
			      dangerouslySetInnerHTML={{ __html: JSON.stringify(
              getCommonJsonld(`https://www.ayazona.com/delivery/${city.toLocaleLowerCase().split(' ').join('-')}/${location.toLocaleLowerCase().split(' ').join('-')}/${cuisine.toLocaleLowerCase()}`),
              `Get food delivery, groceries and essentials in ${location} with one easy click. Ayazona is the app that delivers in minutes.`)}}
		      />
          {businessListing}
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
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
                  showSearch={true}
                  btnBackgroundColor="#2F3137"
                  borderColor="rgba(45,49,56,0.15)"
                  textColor="#2D3138"
                  secondTextColor="#FFF"
                  logoNumber={0}/>
            </DrawerProvider>
          </Sticky>
            <FixedBanner url={`/pickup/${city.toLocaleLowerCase().split(' ').join('-')}/${location.toLocaleLowerCase().split(' ').join('-')}`} secondUrl={`/dine-in/${city.toLocaleLowerCase().split(' ').join('-')}/${location.toLocaleLowerCase().split(' ').join('-')}`} location={location.split('-').join(' ')} />
            <StoreBanner title={`Get food delivery in ${location.split('-').join(' ')}.`} />
            <PromoSlider longLat={areaData[0].longLat} header='Local Deals' />
            <span style={{ marginTop: 10 }}>&nbsp;</span>
            <Feature
              style={{ display: isLoading ? 'none' : 'flex' }}
              titleText={''}
              isValidLocation={isValidLocation}
              key={areaData[0].longLat.lat}
              longLat={areaData[0].longLat}
            />
            <Slider 
              baseUrl={`/delivery/${city.toLocaleLowerCase().split(' ').join('-')}/${location.toLocaleLowerCase().split(' ').join('-')}`} 
              header='Browse by Cuisine' cuisines={cuisines} />
            <LocationDescription 
              header={`${location} affordable local fresh food and grocery delivery.`}
              description={`Get food delivery, grocery delivery, home essentials delivery, and drinks delivery or takeout around ${location} from our local distribution centers, cafes, grocery stores, and bakeries. Life is too short for bad food—therefore, we’d never compromise on our produce’s quality. Changing the access to essential needs, we are also on a mission to lead the change for more conscious and sustainable consumption. Having on-demand access to groceries means that 1) storing food is a thing of the past which drastically reduces food waste and 2) we can set new standards of freshness when it comes to what we eat. Local farmers help us provide the freshest produce and ensure short supply chains while supporting local communities. Being the most affordable and the first local delivery app, we are on a mission to make it affordable for low-income households to access food and basic home essentials.`}/>
            <FAQ questions={questions}/>
            <BC className="breadCrums"><BreadCrums links={links}/></BC>
            <LocationBlock city={`${city.split(' ').join('-').toLocaleLowerCase()}`} baseUrl={'/delivery'} urlExtention={cuisine || ''} locations={areas} currentLocation={city} header={`Explore more areas near ${location}`} />
            <Footer title={`Delivery in ${location.split('-').join(' ')}`} intro={`Order affordable food, and utilities from anywhere in ${location.split('-').join(' ')}, ${city.split('-').join(' ')}. From fresh groceries to baby products, Ayazona is your local food delivery, grocery delivery, home essentials delivery app.`} outro={'Order from the local delivery app with the most affordable merchants and stores with the lowest delivery fees guaranteed. Just enter your address, find something affordable you like, add it to your basket and we will get it.'}/>
        </AppWrapper> 
      </>
    </ThemeProvider>
  );
};

export default Area;
