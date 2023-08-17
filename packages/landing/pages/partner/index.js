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
import Navbar from 'common/src/containers/partner/Navbar';
import Footer from 'common/src/containers/App/Footer';

import Banner from 'common/src/containers/partner/Banner';
import FeatureSection from 'common/src/containers/partner/FeatureSection';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { getPartnerPageSchema } from 'common/src/utils';
import HeroImage from '../../../common/src/assets/image/partner/hero.d1952528.png';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Partner = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Partner with Ayazona</title>
          <meta name="theme-color" content="#ec5555" />
          <meta
            name="description"
            content="Grow your business and increase your reach by partnering with Ayazona. Connect with new local customers, boost your digital presence, and receive orders your way."
          />
          <link rel="canonical" href="https://www.ayazona.com/partner" />
          <meta name="title" content="Partner with Ayazona" />
          <meta property="og:title" content="Partner with Ayazona" />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://www.ayazona.com/partner" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Grow your business and increase your reach by partnering with Ayazona. Connect with new local customers, boost your digital presence, and receive orders your way."
          />
          <meta name="twitter:title" content="Partner with Ayazona" />
          <meta
            name="twitter:description"
            content="Grow your business and increase your reach by partnering with Ayazona. Connect with new local customers, boost your digital presence, and receive orders your way."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content="https://www.ayazona.com/partner" />
          <meta name="theme-color" content="#154c3b" />
          <script
            key={'partner-page-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getPartnerPageSchema()),
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
                  showSearch={false}
                  showSubMenu={false}
                  secondTextColor="#154c3b"
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

export default Partner;
