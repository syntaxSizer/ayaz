import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/src/theme/about';
import {
  GlobalStyle,
  AppWrapper,
  HeroWrapper,
  ContainerWithBackgroundImage,
} from 'common/src/containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/fleet/Navbar';
import Footer from 'common/src/containers/App/Footer';

import Banner from 'common/src/containers/fleet/Banner';
import FeatureSection from 'common/src/containers/fleet/FeatureSection';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { getFleetPageSchema } from 'common/src/utils';
import HeroImage from 'common/src/assets/image/fleet/mhero-bg.jpg';
import mHeroImage from 'common/src/assets/image/fleet/mhero-bg.jpg';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Fleet = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Deliver with Ayazona</title>
          <meta name="theme-color" content="#ec5555" />
          <meta
            name="description"
            content="Work around your life with flexible hours and competitive rates at one of Africa's fastest growing start ups. Apply now and ride with Ayazona."
          />
          <link rel="canonical" href="https://www.ayazona.com/fleet" />
          <meta name="title" content="Deliver with Ayazona" />
          <meta property="og:title" content="Deliver with Ayazona" />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://www.ayazona.com/fleet" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Work around your life with flexible hours and competitive rates at one of Africa's fastest growing start ups. Apply now and ride with Ayazona."
          />
          <meta name="twitter:title" content="Deliver with Ayazona" />
          <meta
            name="twitter:description"
            content="Work around your life with flexible hours and competitive rates at one of Africa's fastest growing start ups. Apply now and ride with Ayazona."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content="https://www.ayazona.com/fleet" />
          <meta name="theme-color" content="#ffffff" />
          <script
            key={'partner-page-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getFleetPageSchema()),
            }}
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <ContainerWithBackgroundImage
            height="100vh"
            url={HeroImage}
            urlmobile={mHeroImage}
            bg="#ffffff"
          >
            <Sticky
              enabled={false}
              top={0}
              innerZ={9999}
              activeClass="sticky-nav-active"
            >
              <DrawerProvider>
                <Navbar
                  btnBG="transparent"
                  borderColor="rgba(45,49,56,0.15)"
                  searchColor="#a4a6a9"
                  textColor="#2D3138"
                  hasGetAppBtn={false}
                  bgColor="#FFF"
                  getAppBtnBG="#000"
                  getAppBtnTextColor="#fff"
                  secondTextColor="#FFF"
                  btnBackgroundColor="#2F3137"
                  logoNumber={0}
                />
              </DrawerProvider>
            </Sticky>
            <HeroWrapper>
              <Banner />
            </HeroWrapper>
          </ContainerWithBackgroundImage>
          <FeatureSection />
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

export default Fleet;
