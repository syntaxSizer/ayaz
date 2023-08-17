import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/src/theme/about';
import { GlobalStyle, AppWrapper } from 'common/src/containers/404/style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/App/Navbar';
import Banner from 'common/src/containers/not-yet/Banner';
import Menu from 'common/src/containers/not-yet/FixedBanner';
import Footer from 'common/src/containers/App/Footer';

import FeatureSection from 'common/src/containers/not-yet/FeatureSection';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';

export default ({ city, header }) => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>{`${city} we are here • Ayazona`}</title>
          <meta name="theme-color" content="#ec5555" />
          <meta
            name="description"
            content="Ayazona is on a critical mission to make access to food more affordable for everyone in cities across Africa."
          />
          <link rel="canonical" href="https://www.ayazona.com/" />
          <meta
            name="title"
            content="Ayazona: Discover and Get Affordable Great Food Delivered"
          />
          <meta
            property="og:title"
            content="Ayazona: Discover and Get Affordable Great Food Delivered"
          />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://www.ayazona.com/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Are you on a budget? Ayazona delivers affordable breakfast, lunch, dinner, drinks and more from the best local farmers, brands and stores right to your door."
          />
          <meta
            name="twitter:title"
            content="Ayazona: Discover and Get Affordable Great Food Delivered"
          />
          <meta
            name="twitter:description"
            content="Are you on a budget? Ayazona delivers affordable breakfast, lunch, dinner, drinks and more from the best local farmers, brands and stores right to your door."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content="https://www.ayazona.com" />
          <meta name="theme-color" content="#002524" />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky
            enabled={true}
            top={0}
            innerZ={9999}
            activeClass="sticky-nav-active"
            className="sticky-inner-wrap"
          >
            <DrawerProvider>
              <Navbar
                btnBG="transparent"
                bgColor="#f7e4ea"
                borderColor="rgba(45,49,56,0.15)"
                searchColor="#a4a6a9"
                textColor="#2D3138"
                hasGetAppBtn={false}
                getAppBtnBG="#000"
                secondTextColor="#FFF"
                getAppBtnTextColor="#fff"
                logoNumber={0}
              />
            </DrawerProvider>
          </Sticky>
          <Banner city={city} />
          <Sticky
            enabled={true}
            top={60}
            innerZ={9999}
            activeClass="sticky-nav-active"
          >
            <Menu menu={[1, 2, 3]} />
          </Sticky>
          <FeatureSection header={header} city={city} />
          <Footer
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
