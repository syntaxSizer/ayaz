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
import EssentialsFooter from 'common/src/containers/App/EssentialsFooter';

import Banner from 'common/src/containers/Essentials/Banner';
import SubMenu from 'common/src/containers/Essentials/subMenu';
import { AboutAyazona } from 'common/src/data/FAQ';
import FAQ from 'common/src/containers/FAQ';
import PreBanner from 'common/src/containers/restaurants/preBanner';

import FeatureSection from 'common/src/containers/Essentials/FeatureSection';

import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import API from 'common/src/data/restaurants';
import { getEssentialsPageSchema } from 'common/src/utils';

import { ContainerWithBackgroundImage } from 'common/src/containers/App/app.style';

export async function getServerSideProps() {
  const restaurantData = await API.getRestaurant(732349);
  return {
    props: {
      restaurantData,
    },
  };
}

const Essentials = ({ restaurantData }) => {
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
            } Delivered? Order online from Ayazona Home Essentials within your area and get groceries and essential items delivered to your door.`}
          />
          <link rel="canonical" href="https://www.ayazona.com/essentials" />
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
          <meta
            property="og:url"
            content="https://www.ayazona.com/essentials"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={`Do You Need ${
              Restaurant ? Restaurant.name : 'Ayazona'
            } Delivered? Order online from Ayazona Home Essentials within your area and get groceries and essential items delivered to your door.`}
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
            } Delivered? Order online from Ayazona Home Essentials within your area and get groceries and essential items delivered to your door.`}
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
            content="https://www.ayazona.com/essentials"
          />
          <meta name="theme-color" content="#ffffff" />
          <script
            key={'essentials-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getEssentialsPageSchema()),
            }}
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <ContainerWithBackgroundImage
            height="180px"
            url=""
            bg="#ffffff"
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
                  highlightItem="essentials"
                  bgColor="#ffffff"
                  btnBackgroundColor="#2F3137"
                  borderColor="rgba(45,49,56,0.15)"
                  textColor="#2D3138"
                  showSearch={true}
                  secondTextColor="#FFF"
                  logoNumber={0}
                />
              </DrawerProvider>
            </Sticky>
            <Banner
              textColor={'#000'}
              content="Home essentials"
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
            url={'/essentials/aisles'}
            currency={Currency}
            restaurant={restaurantData}
          />
          <FAQ questions={AboutAyazona} />
          <EssentialsFooter
            title={'Household Essentials Delivery'}
            intro={
              'Buy your favorite household essentials online with Ayazona. Order air fresheners and candles, cleaners, cleaning tools, and more from local and national retailers near you and enjoy on-demand, affordable delivery or pickup within 30 minutes.'
            }
            outro={
              "Ayazona is building Africa's largest online food store, and you can find us in both the App Store and on Google Play! Besides low prices, we have a selection like a supermarket, and it is with you everywhere."
            }
          />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default Essentials;
