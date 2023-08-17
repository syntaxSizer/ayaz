import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/src/theme/about';
import {
  GlobalStyle,
  AppWrapper,
  ConditionWrapper,
} from 'common/src/containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/App/Navbar';
import Footer from 'common/src/containers/App/Footer';
import FeatureSection from 'common/src/containers/contact/FeatureSection';
import { getContactPageSchema } from 'common/src/utils';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Contact = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Contact us • Ayazona</title>
          <meta
            name="description"
            content="Ayazona is on a critical mission to make access to food more affordable for everyone in cities across Africa."
          />
          <link rel="canonical" href="https://www.ayazona.com/contacts" />
          <meta name="title" content="Contact us • Ayazona" />
          <meta property="og:title" content="Contact us • Ayazona" />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://www.ayazona.com/contacts" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="et in touch with the Ayazona team for more information about the most affordable on-demand food delivery platform in Africa."
          />
          <meta name="twitter:title" content="Contact us • Ayazona" />
          <meta
            name="twitter:description"
            content="et in touch with the Ayazona team for more information about the most affordable on-demand food delivery platform in Africa."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content="https://www.ayazona.com/contacts" />
          <meta name="theme-color" content="#fff" />
          <script
            key={'contact-page-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getContactPageSchema()),
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
              borderColor="rgba(45,49,56,0.15)"
              searchColor="#a4a6a9"
              textColor="#2D3138"
              hasGetAppBtn={false}
              showSearch={true}
              getAppBtnBG="#000"
              getAppBtnTextColor="#fff"
              secondTextColor="#FFF"
              btnBackgroundColor="#2F3137"
              logoNumber={0}
            />
          </Sticky>
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

export default Contact;
