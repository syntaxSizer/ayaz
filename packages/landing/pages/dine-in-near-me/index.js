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
import DineInFooter from 'common/src/containers/App/DineInFooter';

import Banner from 'common/src/containers/delivery-near-me/Banner';
import FloatingCards from 'common/src/containers/App/FloatingCards';

import { ContainerWithBackgroundImage } from 'common/src/containers/App/app.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import CityBlock from 'common/src/containers/delivery-near-me/CityBlock';
import { locations } from 'common/src/data/delivery';
import Slider from 'common/src/containers/cuisines/cuisine-components/Slider';
import { cuisines } from 'common/src/data/cuisines';
import { getDineInNearMePageSchema } from 'common/src/utils';
import MobileDownloadApp from 'common/src/containers/mobile-download-app';
import FAQ from 'common/src/containers/FAQ';
import { AboutAyazona } from 'common/src/data/FAQ';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const DeliveryNearMe = () => {
  const cities = Object.keys(locations);
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Dine in Near Me • Ayazona</title>
          <meta
            name="description"
            content="Pre-order for dine in from the most affordable restaurants in your city and have it delivered to your door in minutes. Select a location near you and fill up your cart - we'll handle the rest. Just think of us as your go-to on-demand affordable service."
          />
          <link
            rel="canonical"
            href="https://www.ayazona.com/dine-in-near-me"
          />
          <meta name="title" content="Dine in Near Me • Ayazona" />
          <meta property="og:title" content="Dine in Near Me • Ayazona" />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta
            property="og:url"
            content="https://www.ayazona.com/dine-in-near-me"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Pre-order for dine in from the most affordable restaurants in your city and have it delivered to your door in minutes. Select a location near you and fill up your cart - we'll handle the rest. Just think of us as your go-to on-demand affordable service."
          />
          <meta name="twitter:title" content="Dine in Near Me • Ayazona" />
          <meta
            name="twitter:description"
            content="Pre-order for dine in from the most affordable restaurants in your city and have it delivered to your door in minutes. Select a location near you and fill up your cart - we'll handle the rest. Just think of us as your go-to on-demand affordable service."
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
            content="https://www.ayazona.com/dine-in-near-me"
          />
          <meta name="theme-color" content="#154c3b" />
          <script
            key={'dine-in-near-you-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getDineInNearMePageSchema()),
            }}
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <ContainerWithBackgroundImage
            height="580px"
            url=""
            urlmobile=""
            bg="#154c3b"
          >
            <Sticky
              enabled={false}
              top={0}
              innerZ={9999}
              activeClass="sticky-nav-active"
            >
              <DrawerProvider>
                <Navbar
                  logoNumber={1}
                  secondTextColor="#154c3b"
                  btnBackgroundColor="#FFF"
                  borderColor="hsla(0,0%,100%,0.3)"
                  searchColor="rgb(186 187 188)"
                  textColor="#fff"
                  hasCartBtn={true}
                />
              </DrawerProvider>
            </Sticky>
            <Banner
              textColor="#fff"
              header="Dine in Near Me"
              subText={
                'Enter your delivery address, browse items from the best affordable local products and brands in your neighborhood, and order delivery.'
              }
            />
          </ContainerWithBackgroundImage>
          <MobileDownloadApp />
          <CityBlock
            city={'nairobi'}
            baseUrl={'/dine-in'}
            locations={cities}
            header={'Food Delivery & Takeaway in Your City'}
            marginTop="40"
          />
          <Slider
            baseUrl={'/dine-in-near-me'}
            header={'Browse by Cuisine'}
            cuisines={cuisines}
          />
          <FloatingCards />
          <FAQ questions={AboutAyazona} />
          <DineInFooter
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

export default DeliveryNearMe;
