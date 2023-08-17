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
import FreshFooter from 'common/src/containers/App/FreshFooter';

import Banner from 'common/src/containers/Essentials/Banner';
import SubMenu from 'common/src/containers/Essentials/subMenu';
import { AboutAyazona } from 'common/src/data/FAQ';
import FAQ from 'common/src/containers/FAQ';
import PreBanner from 'common/src/containers/restaurants/preBanner';

import FeatureSection from 'common/src/containers/Essentials/FeatureSection';

import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import API from 'common/src/data/restaurants';
import { getFreshPageSchema } from 'common/src/utils';

import { ContainerWithBackgroundImage } from 'common/src/containers/App/app.style';

export async function getServerSideProps() {
  const restaurantData = await API.getRestaurant(732449);
  return {
    props: {
      restaurantData,
    },
  };
}

const Fresh = ({ restaurantData }) => {
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
          } Delivery Near Me • Ayazona`}</title>
          <meta name="theme-color" content="#ec5555" />
          <meta
            name="description"
            content={`Do You Need ${
              Restaurant ? Restaurant.name : 'Ayazona'
            } Delivered? Order online from Ayazona Fresh Groceries within your area and get fresh groceries and produce delivered to your door.`}
          />
          <link rel="canonical" href="https://www.ayazona.com/fresh" />
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
          <meta property="og:url" content="https://www.ayazona.com/fresh" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={`Do You Need ${
              Restaurant ? Restaurant.name : 'Ayazona'
            } Delivered? Order online from Ayazona Fresh Groceries within your area and get fresh groceries delivered to your door.`}
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
            } Delivered? Order online from Ayazona Fresh Groceries within your area and get fresh groceries delivered to your door.`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content="https://www.ayazona.com/fresh" />
          <meta name="theme-color" content="#ffffff" />
          <script
            key={'fresh-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getFreshPageSchema()),
            }}
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <ContainerWithBackgroundImage height="180px" bg="#ffffff" url="">
            <Sticky
              enabled={true}
              top={0}
              innerZ={99}
              activeClass="sticky-nav-active"
              className="sticky-inner-wrap"
            >
              <DrawerProvider>
                <Navbar
                  highlightItem="fresh"
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
            <Banner
              textColor={'#000'}
              content="Fresh groceries"
              links={links}
            />
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
            restaurant={restaurantData}
            currency={Currency}
            url={'/fresh/aisles'}
          />
          <FAQ questions={AboutAyazona} />
          <FreshFooter
            title={"Ayazona is building, Africa's largest online grocery store"}
            intro={
              'We are working to offer diversed selection like a supermarket, fantastic quality and really low prices. The freshest fruit, the best vegetables, a large selection of fresh fish and seafood, and incredibly tender meat.'
            }
            outro={
              'When you shop at Ayazona, you can be sure that we always deliver goods of the best quality. You must be assured that we keep the cold chain, that the goods are delivered precisely, without damage and that the shelf life is as expected.'
            }
          />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default Fresh;
