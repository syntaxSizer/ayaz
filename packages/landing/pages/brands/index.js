import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/src/theme/about';
import { GlobalStyle, AppWrapper } from 'common/src/containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/App/Navbar';
import BrandsFooter from 'common/src/containers/App/BrandsFooter';

import Banner from 'common/src/containers/brand/Banner';
import FeatureSection from 'common/src/containers/brand/FeatureSection';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { ContainerWithBackgroundImage } from 'common/src/containers/App/app.style';
import { getBrandsPageSchema } from 'common/src/utils';
import FloatingCards from 'common/src/containers/App/FloatingCards';
import MobileDownloadApp from 'common/src/containers/mobile-download-app';
import GroceryCards from 'common/src/containers/App/GroceryCards';

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Brands = () => {
  const size = process.browser && useWindowSize();
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>
            Restaurant Delivery Near You • Affordable On-Demand Delivery •
            Ayazona
          </title>
          <meta
            name="description"
            content="Order the best of your city delivered to your door in minutes. Select a location near you and fill up your cart - we'll handle the rest. "
          />
          <link rel="canonical" href="https://www.ayazona.com/brands" />
          <meta
            name="title"
            content="Restaurant Delivery Near You • Affordable On-Demand Delivery • Ayazona"
          />
          <meta
            property="og:title"
            content="Restaurant Delivery Near You • Affordable On-Demand Delivery • Ayazona"
          />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://www.ayazona.com/brands" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Order the best of your city delivered to your door in minutes. Select a location near you and fill up your cart - we'll handle the rest. "
          />
          <meta
            name="twitter:title"
            content="Restaurant Delivery Near You • Affordable On-Demand Delivery • Ayazona"
          />
          <meta
            name="twitter:description"
            content="Order the best of your city delivered to your door in minutes. Select a location near you and fill up your cart - we'll handle the rest. "
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content="https://www.ayazona.com/brands" />
          <meta name="theme-color" content="#154c3b" />
          <script
            key={'delivery-brands-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getBrandsPageSchema()),
            }}
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <ContainerWithBackgroundImage height="580px" url="" bg="#154c3b">
            <Sticky
              enabled={false}
              top={0}
              innerZ={9999}
              activeClass="sticky-nav-active"
            >
              <DrawerProvider>
                <Navbar
                  logoNumber={1}
                  borderColor="hsla(0,0%,100%,0.3)"
                  searchColor="rgb(186 187 188)"
                  secondTextColor="#154c3b"
                  btnBackgroundColor="#FFF"
                />
              </DrawerProvider>
            </Sticky>
            <Banner />
          </ContainerWithBackgroundImage>
          <MobileDownloadApp />
          <FeatureSection />
          <GroceryCards />
          <FloatingCards />
          <BrandsFooter
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

export default Brands;
