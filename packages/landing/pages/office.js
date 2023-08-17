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
import Navbar from 'common/src/containers/App/Navbar';
import Footer from 'common/src/containers/App/Footer';

import Banner from 'common/src/containers/office/Banner';
import FeatureSection from 'common/src/containers/office/FeatureSection';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { getOfficePageSchema } from 'common/src/utils';
import HeroImage from '../../common/src/assets/image/office/hero_2x.9ebbfab8.jpg';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Office = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Ayazona for Office • Ayazona</title>
          <meta name="theme-color" content="#ec5555" />
          <meta
            name="description"
            content="With Ayazona for Office, you can explore and order great meal for your stuff at an affordable price."
          />
          <link rel="canonical" href="https://www.ayazona.com/office" />
          <meta name="title" content="Ayazona for Office • Ayazona" />
          <meta property="og:title" content="Ayazona for Office • Ayazona" />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://www.ayazona.com/office" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="With Ayazona for Office, you can explore and order great meal for your stuff at an affordable price."
          />
          <meta name="twitter:title" content="Ayazona for Office • Ayazona" />
          <meta
            name="twitter:description"
            content="With Ayazona for Office, you can explore and order great meal for your stuff at an affordable price."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content="https://www.ayazona.com/office" />
          <meta name="theme-color" content="#22594b" />
          <script
            key={'office-page-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getOfficePageSchema()),
            }}
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <ContainerWithBackgroundImage
            height="100vh"
            url={HeroImage}
            urlmobile={HeroImage}
            bg="#22594B"
          >
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
                  secondTextColor="#22594B"
                  btnBackgroundColor="#FFF"
                  logoNumber={1}
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

export default Office;
