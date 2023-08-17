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
import Footer from 'common/src/containers/App/Footer';

import Banner from 'common/src/containers/download-app/Banner';
import FeatureSection from 'common/src/containers/download-app/FeatureSection';
import { getAppPageSchema } from 'common/src/utils';
import FooterAction from 'common/src/containers/App/FooterAction';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const DownloadApp = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Download Ayazona App • Ayazona</title>
          <meta
            name="description"
            content="Download the Ayazona app for and get breakfast, lunch, dinner, groceries, home essentials and more delivered to you at an affordable price"
          />
          <link rel="canonical" href="https://www.ayazona.com/app" />
          <meta name="title" content="Download Ayazona App • Ayazona" />
          <meta property="og:title" content="Download Ayazona App • Ayazona" />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://www.ayazona.com/app" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Download the Ayazona app for and get breakfast, lunch, dinner, groceries, home essentials and more delivered to you at an affordable price"
          />
          <meta name="twitter:title" content="Download Ayazona App • Ayazona" />
          <meta
            name="twitter:description"
            content="Download the Ayazona app for and get breakfast, lunch, dinner, groceries, home essentials and more delivered to you at an affordable price"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content="https://www.ayazona.com/app" />
          <meta name="theme-color" content="#002524" />
          <script
            key={'app-page-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getAppPageSchema()),
            }}
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky
            enabled={false}
            top={0}
            innerZ={9999}
            activeClass="sticky-nav-active"
          >
            <Navbar
              btnBG="transparent"
              borderColor="hsla(0,0%,100%,0.3)"
              searchColor="rgb(186 187 188)"
              textColor="#fff"
              hasGetAppBtn={false}
              bgColor="#002524"
              getAppBtnBG="#000"
              getAppBtnTextColor="#fff"
              secondTextColor="#002524"
              btnBackgroundColor="#FFF"
              logoNumber={1}
            />
          </Sticky>
          <Banner />
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
export default DownloadApp;
