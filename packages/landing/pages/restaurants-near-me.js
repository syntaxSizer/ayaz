import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/src/theme/about';
import {
  GlobalStyle,
  AppWrapper,
} from 'common/src/containers/App/app.style.js';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/App/Navbar';
import PickupFooter from 'common/src/containers/App/PickupFooter';

import Banner from 'common/src/containers/delivery-near-me/Banner';
import FloatingCards from 'common/src/containers/App/FloatingCards';

import { ContainerWithBackgroundImage } from 'common/src/containers/App/app.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import CityBlock from 'common/src/containers/delivery-near-me/CityBlock';
import { locations } from 'common/src/data/delivery';
import { getCommonJsonld } from 'common/src/utils';
import Steps from 'common/src/containers/dish/OrderSteps';
import FAQ from 'common/src/containers/FAQ';
import LocationDescription from 'common/src/containers/delivery/LocationDescription';
import { AboutAyazona } from 'common/src/data/FAQ';
import { getRestaurantsNearMePageSchema } from 'common/src/utils';
import MobileDownloadApp from 'common/src/containers/mobile-download-app';

const cities = Object.keys(locations);

export async function getStaticProps() {
  return {
    props: {
      cities,
    },
  };
}

const RestaurantsNearMe = ({ cities }) => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Restaurants Near Me • Ayazona</title>
          <meta
            name="description"
            content="The best restaurants near you deliver with Ayazona! Order delivery or takeout from Kenyan favorites and local favorites! Help support your neighborhood restaurants."
          />
          <link
            rel="canonical"
            href="https://www.ayazona.com/restaurants-near-me"
          />
          <meta name="title" content="Restaurants Near Me • Ayazona" />
          <meta property="og:title" content="Restaurants Near Me • Ayazona" />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta
            property="og:url"
            content="https://www.ayazona.com/restaurants-near-me"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="The best restaurants near you deliver with Ayazona! Order delivery or takeout from Kenyan favorites and local favorites! Help support your neighborhood restaurants."
          />
          <meta name="twitter:title" content="Restaurants Near Me • Ayazona" />
          <meta
            name="twitter:description"
            content="The best restaurants near you deliver with Ayazona! Order delivery or takeout from Kenyan favorites and local favorites! Help support your neighborhood restaurants."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta
            name="twitter:url"
            content="https://www.ayazona.com/restaurants-near-me"
          />
          <meta name="theme-color" content="#002524" />
          <script
            key={'restaurants-near-me-page-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getRestaurantsNearMePageSchema()),
            }}
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <ContainerWithBackgroundImage height="580px" url="" urlmobile="">
            <Sticky
              enabled={false}
              top={0}
              innerZ={9999}
              activeClass="sticky-nav-active"
            >
              <DrawerProvider>
                <Navbar
                  logoNumber={1}
                  secondTextColor="#002524"
                  btnBackgroundColor="#FFF"
                  borderColor="hsla(0,0%,100%,0.3)"
                  searchColor="rgb(186 187 188)"
                  hasCartBtn={true}
                />
              </DrawerProvider>
            </Sticky>
            <Banner
              header="Restaurants Near Me"
              subText="Enter your delivery address, browse menus from the best affordable restaurants in your neighborhood, and order delivery from the places that are open now."
            />
          </ContainerWithBackgroundImage>
          <MobileDownloadApp />
          {/* <Steps/> */}
          <CityBlock
            city={'nairobi'}
            baseUrl={'/pickup'}
            locations={cities}
            header={'Find Food Delivery & Takeaway in Your Area'}
            marginTop="40"
          />
          <LocationDescription
            header={'Restaurants near me.'}
            description={
              'When you’re hungry for good food, you might search “restaurants near me” — but what about nearby restaurants that will deliver? Thanks to the Ayazona website and mobile app, it’s super easy to find any cuisine you crave. Just enter your address, and hit “>” to find a treasure trove of food near you. Whether you want an eatery serving up that authentic Swahili dish or you’re on the hunt for the best neighborhood choma, at Ayazona, you’ll find nearby restaurants that offer pickup and delivery.'
            }
          />
          <FloatingCards />
          <FAQ questions={AboutAyazona} />
          <PickupFooter
            title={
              'Where households in Africa get fresh food and grocery delivery in minutes under the retail price.'
            }
            intro={
              'Able to deliver within 30 minutes, Ayazona is the affordable food delivery, grocery delivery, home essentials delivery, drinks delivery app bringing whatever you need right to your door.'
            }
            outro={
              'Order from the local delivery app with the most affordable food, groceries and household essentials with the lowest delivery fees guaranteed. Just enter your address, find something affordable you like, add it to your basket and we will get it.'
            }
          />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default RestaurantsNearMe;
