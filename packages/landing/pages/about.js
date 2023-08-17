import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/src/theme/about';
import { GlobalStyle, AppWrapper } from 'common/src/containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/App/Navbar';
import Footer from 'common/src/containers/App/Footer';

import FeatureSection from 'common/src/containers/About/FeatureSection';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { getAboutPageSchema } from 'common/src/utils';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const About = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>About Team Ayazona</title>
          <meta
            name="description"
            content="Ayazona is on a critical mission to make access to food and essentials affordable for everyone, especially low-income households in cities across Africa."
          />
          <link rel="canonical" href="https://www.ayazona.com/about" />
          <meta name="title" content="About Team Ayazona" />
          <meta property="og:title" content="About Team Ayazona" />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://www.ayazona.com/about/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Ayazona is on a critical mission to make access to food and essentials affordable for everyone, especially low-income households in cities across Africa."
          />
          <meta name="twitter:title" content="About Team Ayazona" />
          <meta
            name="twitter:description"
            content="Ayazona is on a critical mission to make access to food and essentials affordable for everyone, especially low-income households in cities across Africa."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content="https://www.ayazona.com/about" />
          <meta name="theme-color" content="#fff" />
          <script
            key={'about-page-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getAboutPageSchema()),
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
            <DrawerProvider>
              <Navbar
                btnBG="transparent"
                borderColor="rgba(45,49,56,0.15)"
                searchColor="#a4a6a9"
                textColor="#2D3138"
                hasGetAppBtn={false}
                getAppBtnBG="#000"
                getAppBtnTextColor="#fff"
                secondTextColor="#FFF"
                btnBackgroundColor="#2F3137"
                showSearch={true}
                logoNumber={0}
              />
            </DrawerProvider>
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

export default About;
