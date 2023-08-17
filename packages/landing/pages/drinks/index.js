import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/src/theme/about';
import {
  GlobalStyle,
  AppWrapper,
} from 'common/src/containers/brand/office.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/App/Navbar';
import DrinksFooter from 'common/src/containers/App/DrinksFooter';

import Banner from 'common/src/containers/Essentials/Banner';
import SubMenu from 'common/src/containers/Essentials/subMenu';
import { AboutAyazona } from 'common/src/data/FAQ';
import FAQ from 'common/src/containers/FAQ';
import PreBanner from 'common/src/containers/restaurants/preBanner';

import FeatureSection from 'common/src/containers/Essentials/FeatureSection';

import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import API from 'common/src/data/restaurants';
import { getDrinksPageSchema } from 'common/src/utils';

import { ContainerWithBackgroundImage } from 'common/src/containers/App/app.style';

export async function getServerSideProps() {
  const restaurantData = await API.getRestaurant(732459);
  return {
    props: {
      restaurantData,
    },
  };
}

const Drinks = ({ restaurantData }) => {
  if (!restaurantData) {
    return <></>;
  }
  const {
    Restaurant,
    RestaurantMenu,
    RestaurantLocation,
    Currency,
  } = restaurantData;

  const links = [
    {
      name: '< Back',
      itemtype: 'http://schema.org/ListItem',
      href: '/store',
      itemprop: 'item',
      position: 1,
    },
  ];

  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>{`${
            Restaurant ? Restaurant.name : 'Ayazona'
          } Delivery Near Me• Ayazona`}</title>
          <meta name="theme-color" content="#ec5555" />
          <meta
            name="description"
            content={`Do You Need ${
              Restaurant ? Restaurant.name : 'Ayazona'
            } Delivered? Order online from Ayazona Drinks within your area and get wines, spirits, ciders and beer delivered to your door.`}
          />
          <link rel="canonical" href="https://www.ayazona.com/drinks" />
          <meta
            name="title"
            content={`${
              Restaurant ? Restaurant.name : 'Ayazona'
            } Delivery Near Me• Ayazona`}
          />
          <meta
            property="og:title"
            content={`${
              Restaurant ? Restaurant.name : 'Ayazona'
            } Delivery Near Me• Ayazona`}
          />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://www.ayazona.com/drinks" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={`Do You Need ${
              Restaurant ? Restaurant.name : 'Ayazona'
            } Delivered? Order online from Ayazona Drinks within your area and get wines, spirits, ciders and beer delivered to your door.`}
          />
          <meta
            name="twitter:title"
            content={`${
              Restaurant ? Restaurant.name : 'Ayazona'
            } Delivery Near Me• Ayazona`}
          />
          <meta
            name="twitter:description"
            content={`Do You Need ${
              Restaurant ? Restaurant.name : 'Ayazona'
            } Delivered? Order online from Ayazona Drinks within your area and get wines, spirits, ciders and beer delivered to your door.`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content="https://www.ayazona.com/drinks" />
          <meta name="theme-color" content="#171a1f" />
          <script
            key={'drinks-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getDrinksPageSchema()),
            }}
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <ContainerWithBackgroundImage
            height="180px"
            url=""
            bg="#171a1f"
            urlmobile=""
          >
            <Sticky
              enabled={true}
              top={0}
              innerZ={99}
              activeClass="sticky-nav-active"
              className="sticky-inner-wrap"
            >
              <DrawerProvider>
                <Navbar
                  highlightItem="drinks"
                  bgColor="#171a1f"
                  borderColor="hsla(0,0%,100%,0.3)"
                  searchColor="rgb(186 187 188)"
                  secondTextColor="#171a1f"
                  btnBackgroundColor="#FFF"
                  showSearch={true}
                  logoNumber={1}
                />
              </DrawerProvider>
            </Sticky>
            <Banner textColor={'#fff'} content="Drink delivery" links={links} />
          </ContainerWithBackgroundImage>
          <PreBanner location={RestaurantLocation} />
          <Sticky
            enabled={true}
            top={70}
            innerZ={9}
            activeClass="sticky-nav-active"
          >
            <SubMenu menuItems={RestaurantMenu} />
          </Sticky>
          <FeatureSection
            menu={RestaurantMenu}
            url={'/drinks/aisles'}
            currency={Currency}
            restaurant={restaurantData}
          />
          <FAQ questions={AboutAyazona} />
          <DrinksFooter
            title={'Drinks delivery.'}
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

export default Drinks;
