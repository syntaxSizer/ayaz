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
import PharmacyFooter from 'common/src/containers/App/PharmacyFooter';

import Banner from 'common/src/containers/Essentials/Banner';
import SubMenu from 'common/src/containers/Essentials/subMenu';
import { AboutAyazona } from 'common/src/data/FAQ';
import FAQ from 'common/src/containers/FAQ';
import PreBanner from 'common/src/containers/restaurants/preBanner';

import FeatureSection from 'common/src/containers/Essentials/FeatureSection';

import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import API from 'common/src/data/restaurants';
import { getPharmacyPageSchema } from 'common/src/utils';

import { ContainerWithBackgroundImage } from 'common/src/containers/App/app.style';

export async function getServerSideProps() {
  const restaurantData = await API.getRestaurant(732473);
  return {
    props: {
      restaurantData,
    },
  };
}

const Pharmacy = ({ restaurantData }) => {
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
            } Delivered? Order online from Ayazona Pharmacy within your area and get groceries and essential items delivered to your door.`}
          />
          <link rel="canonical" href="https://www.ayazona.com/pharmacy" />
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
          <meta property="og:url" content="https://www.ayazona.com/pharmacy" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={`Do You Need ${
              Restaurant ? Restaurant.name : 'Ayazona'
            } Delivered? Order online from Ayazona Pharmacy within your area and get groceries and essential items delivered to your door.`}
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
            } Delivered? Order online from Ayazona Pharmacy within your area and get groceries and essential items delivered to your door.`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content="https://www.ayazona.com/pharmacy" />
          <meta name="theme-color" content="#154c3b" />
          <script
            key={'pharmacy-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getPharmacyPageSchema()),
            }}
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <ContainerWithBackgroundImage
            height="180px"
            url=""
            bg="#154c3b"
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
                  highlightItem="pharmacy"
                  bgColor="#154c3b"
                  borderColor="hsla(0,0%,100%,0.3)"
                  searchColor="rgb(186 187 188)"
                  secondTextColor="#154c3b"
                  btnBackgroundColor="#FFF"
                  logoNumber={1}
                />
              </DrawerProvider>
            </Sticky>
            <Banner
              textColor={'#fff'}
              content="Your medication, delivered"
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
            url={'/pharmacy/aisles'}
            currency={Currency}
            restaurant={restaurantData}
          />
          <FAQ questions={AboutAyazona} />
          <PharmacyFooter
            title={'Your medication delivered'}
            intro={
              'Buy your over the counter medication online with Ayazona Pharmacy. Order pain killers and health care equipment, eye, ear care, and more from local and national certified pharmacies near you and enjoy on-demand, affordable delivery or pickup within 30 minutes.'
            }
            outro={
              "Ayazona is building Africa's largest online essentials store, and you can find us in both the App Store and on Google Play! Besides low prices, we have a selection like a supermarket, and it is with you everywhere."
            }
          />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default Pharmacy;
