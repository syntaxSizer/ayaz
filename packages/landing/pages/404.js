import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/src/theme/about';
import {
  GlobalStyle,
  AppWrapper,
  ContainerWithBackgroundImage,
} from 'common/src/containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/App/Navbar';

import FeatureSection from 'common/src/containers/404/FeatureSection';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const NotFound = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Oops! - Ayazona - Affordable Great Food Delivery</title>
          <meta
            name="description"
            content="Are you on a budget? Ayazona delivers affordable breakfast, lunch, dinner, drinks and more from the best local farmers, brands and stores right to your door."
          />
          <link rel="canonical" href="https://www.ayazona.com/" />
          <meta
            name="title"
            content="Oops! - Ayazona - Affordable Great Food Delivery"
          />
          <meta
            property="og:title"
            content="Oops! - Ayazona - Affordable Great Food Delivery"
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
            content="Oops! - Ayazona - Affordable Great Food Delivery"
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
          <ContainerWithBackgroundImage>
            <Sticky
              enabled={false}
              top={0}
              innerZ={9999}
              activeClass="sticky-nav-active"
            >
              <DrawerProvider>
                <Navbar
                  showSearch={false}
                  showSubMenu={false}
                  secondTextColor="#002524"
                  btnBackgroundColor="#FFF"
                  logoNumber={1}
                />
              </DrawerProvider>
            </Sticky>
          </ContainerWithBackgroundImage>
          <FeatureSection />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default NotFound;
