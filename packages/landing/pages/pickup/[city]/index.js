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
import MobileToggle from 'common/src/containers/delivery/MobileToggle';
import Slider from 'common/src/containers/cuisines/cuisine-components/Slider';
import BreadCrums from 'common/src/containers/App/Breadcrums';
import styled from 'styled-components';

import FeatureSection from 'common/src/containers/App/PlaceholderPanel';
import LocationBlock from 'common/src/containers/delivery/FeatureSection';
import FAQ from 'common/src/containers/FAQ';
import LocationDescription from 'common/src/containers/delivery/LocationDescription';
import API from 'common/src/data/restaurants';
import PromoSlider from 'common/src/containers/cuisines/cuisine-components/PromoSlider';
import Feature from 'common/src/containers/store/FeatureSection';


import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { cuisines } from 'common/src/data/cuisines';
import { locations } from 'common/src/data/delivery';
import MapView from 'common/src/containers/pickup/MapView';
import { useSelector } from 'react-redux';

import {
  getDeliveryPageSchema,
  getJSONLDBusinesslisting
} from 'common/src/utils';
import { setCookie } from 'common/src/data/store/utils/cookie';

const cities = Object.keys(locations);

export async function getStaticProps({params}) {
  const { city } = params;
  const key = city[0].toUpperCase() + city.substr(1);
  let areas = [];
  const cityData = locations[key];
  if (cities.includes(key)) {
    areas = cityData.areas
  }
  const longLat = cityData.longLat;

  // get restaurants by location
  let listItems = await API.getAisles(longLat);
  let restaurants = listItems.map(r=> r.Aisle);
  return {
    props: {
      cuisines,
      cities,
      restaurants,
      listItems,
      city,
      areas
    },
  }
}

export async function getStaticPaths() {
  const paths = cities.map(city => ({ params: { city: city.toLocaleLowerCase() } }))
  return { paths, fallback: true }
}

const City = ({ cuisines, city, cities, restaurants, jsonldData, areas, listItems }) => {
  if (!city) {return <></>}
  setCookie('_cuisine', null);
  city = city[0].toLocaleUpperCase() + city.substr(1);
  const [isValidLocation, setIsValidLocation] = React.useState(cities.includes(city));
  const [longLat, setLongLat] = React.useState(locations[city.split(' ').join('-')].longLat);
  const [isLoading, setIsloading] = React.useState(true);
  // const [areas, setAreas] = React.useState([]);
  const { mapViewIsOpen } = useSelector(({toggles})=> toggles);

  React.useEffect(()=>{
    if (cities.includes(city)) {
      // setAreas(locations[city].areas);
    }
  }, []);

  city = city.split('-').join(' ');

  const questions = [
    {
      question: 'Does Ayazona deliver to '+`${city}`+'?',
      answer: 'Check Ayazona in '+`${city}`+' and discover areas and cuisines delivered via Ayazona'
    },
    {
      question: 'How many products can I order on Ayazona in '+`${city}`+' deliver on Ayazona?',
      answer: 'Check Ayazona in '+`${city}`+' and discover products available for delivery on Ayazona. With 2000+ carefully curated products, we\'ve got everything you need for your household. No minimum or maximum order.'
    },
    {
      question: 'Does Ayazona offer contact-free delivery in '+`${city}`+'?',
      answer: 'Yes, all orders and products have an option for contact-free delivery via Ayazona in '+`${city}`+'.'
    },
    {
      question: 'What kind of food can I order for delivery?',
      answer: 'We\'re a revolutionary grocery service that delivers quality products in minutes. With 2000+ carefully curated products, we\'ve got everything you need: from bananas to baby food, to biscuits and toiletries.'
    },
    {
      question: 'What are the best Food Takeout deals in '+`${city}`+'?',
      answer: `Find the most affordable Food Takeout in ${city} on Ayazona.`
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
      href: `/pickup/${city.toLocaleLowerCase().split(' ').join('-')}`,
      itemprop: 'name',
      position: 3
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
  const items = listItems;
  let businessListing = []
  if (items.length) {
    businessListing = 
    <script
      key={`delivery-listing-${city}-index`}
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getJSONLDBusinesslisting(items))}}
    />
  }


  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Order Food Takeout in {city} • Ayazona</title>
          <meta
            name='description'
            content={`Order food takeout, groceries and essentials in ${city}. You want it fresh, you want it affordable, and sometimes you're down to pick it up yourself.`}
          />
          <link rel='canonical' href={`https://www.ayazona.com/${city.toLowerCase().split(' ').join('-')}`} />
          <meta name='title' content={`Order Food Takeout in ${city} • Ayazona`} />
          <meta property='og:title' content={`Order Food Takeout in ${city} • Ayazona`} />
          <meta property='og:image' content='/static/scripts/herooooooooo.jpg' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='628' />
          <meta property='og:url' content={`https://www.ayazona.com/${city.toLowerCase().split(' ').join('-')}`} />
          <meta property='og:type' content='website' />
          <meta property='og:description' content={`Order food takeout, groceries and essentials in ${city}. You want it fresh, you want it affordable, and sometimes you're down to pick it up yourself.`} />
          <meta name='twitter:title' content={`Order Food Takeout in ${city} • Ayazona`} />
          <meta name='twitter:description' content={`Order food takeout, groceries and essentials in ${city}. You want it fresh, you want it affordable, and sometimes you're down to pick it up yourself.`} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content='/static/scripts/herooooooooo.jpg' />
          <meta name='twitter:site' content='@getayazona' />
          <meta name='twitter:creator' content='@getayazona' />
          <meta name='twitter:url' content={`https://www.ayazona.com/${city.toLowerCase().split(' ').join('-')}`} />
          <meta name='theme-color' content='#002524'/>
          <script
			      key={`pickup-${city}-index`}
			      type='application/ld+json'
			      dangerouslySetInnerHTML={{ __html: JSON.stringify(getDeliveryPageSchema(city))}}
		      />
          { businessListing }
        </Head>

        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <div style={{display: mapViewIsOpen? 'none': 'initial'}}>
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
              <PickupFixedBanner url={`/delivery/${city.split(' ').join('-').toLocaleLowerCase()}`} secondUrl={`/dine-in/${city.split(' ').join('-').toLocaleLowerCase()}`} location={city} />
              <StoreBanner title={`Order food takeout in ${city.split('-').join(' ')}.`} />
              <PromoSlider longLat={longLat} header='Local Deals' />
              <span style={{ marginTop: 10 }}>&nbsp;</span>
              <Feature
                style={{ display: isLoading ? 'none' : 'flex' }}
                titleText={''}
                isValidLocation={isValidLocation}
                key={longLat.lat}
                longLat={longLat}
              />
              <Slider baseUrl={`/pickup/${city.toLocaleLowerCase().split(' ').join('-')}`} header='Browse by Cuisine' cuisines={cuisines} />
              <LocationDescription 
                header={`${city} affordable local food for takeout.`}
                description={`Get food delivery, grocery delivery, home essentials delivery, and drinks delivery or takeout around ${city} from our local distribution centers, cafes, grocery stores, and bakeries. Life is too short for bad food—therefore, we’d never compromise on our produce’s quality. Changing the access to essential needs, we are also on a mission to lead the change for more conscious and sustainable consumption. Having on-demand access to groceries means that 1) storing food is a thing of the past which drastically reduces food waste and 2) we can set new standards of freshness when it comes to what we eat. Local farmers help us provide the freshest produce and ensure short supply chains while supporting local communities. Being the most affordable and the first local delivery app, we are on a mission to make it affordable for low-income households to access food and basic home essentials.`}/>
              <FAQ questions={questions}/>
              <BC className="breadCrums"><BreadCrums links={links}/></BC>
              <LocationBlock city={`${city.split(' ').join('-').toLocaleLowerCase()}`} baseUrl={'/pickup'} locations={areas} header={`Explore More Areas in ${city}`} city={city}/>
              <PickupFooter title={`Order takeaway in ${city.split('-').join(' ')}`} intro={`Order affordable food, and utilities from anywhere in ${city.split('-').join(' ')}, ${city.split('-').join(' ')}. From fresh groceries to baby products, Ayazona is your local food delivery, grocery delivery, home essentials delivery app.`} outro={'Order from the local delivery app with the most affordable merchants and stores with the lowest delivery fees guaranteed. Just enter your address, find something affordable you like, add it to your basket and we will get it.'}/>
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
            <PickupFixedBanner url={`/delivery/${city.split(' ').join('-').toLocaleLowerCase()}`} secondUrl={`/dine-in/${city.split(' ').join('-').toLocaleLowerCase()}`} location={city.split('-').join(' ')} />
            <MapView rawItems={listItems} items={restaurants} center={longLat} />
          </div>
        </AppWrapper> 
      </>
    </ThemeProvider>
  );
};

export default City;
