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
import { cuisines } from 'common/src/data/cuisines';
import CuisinesSection from 'common/src/containers/cuisines/FeatureSection';
import MobileDownloadApp from 'common/src/containers/mobile-download-app';
import FAQ from 'common/src/containers/FAQ';
import { AboutAyazona } from 'common/src/data/FAQ';
import { getDineInPageSchema } from 'common/src/utils';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Pickup = () => {
  const cities = Object.keys(locations);
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Dine in</title>
          <meta
            name="description"
            content="Pre-order dine-in and reserve a table in your favorite restaurants with Ayazona Dine in. You want it fresh, you want it now, and sometimes you wanna dine-in."
          />
          <link rel="canonical" href="https://www.ayazona.com/pickup" />
          <meta name="title" content="Dine in" />
          <meta property="og:title" content="Dine in" />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://www.ayazona.com/pickup" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Pre-order dine-in and reserve a table in your favorite restaurants with Ayazona Dine in. You want it fresh, you want it now, and sometimes you wanna dine-in."
          />
          <meta name="twitter:title" content="Dine in" />
          <meta
            name="twitter:description"
            content="Pre-order dine-in and reserve a table in your favorite restaurants with Ayazona Dine in. You want it fresh, you want it now, and sometimes you wanna dine-in."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content="https://www.ayazona.com/pickup" />
          <meta name="theme-color" content="#002524" />
          <script
            key={'pick-up-page-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getDineInPageSchema()),
            }}
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <ContainerWithBackgroundImage height="580px" url="" urlmobile="">
            <Sticky
              enabled={false}
              top={0}
              innerZ={9999}
              activeClass="sticky-nav-active"
            >
              <DrawerProvider>
                <Navbar
                  logoNumber={1}
                  secondTextColor="#002524"
                  borderColor="hsla(0,0%,100%,0.3)"
                  searchColor="rgb(186 187 188)"
                  btnBackgroundColor="#FFF"
                  textColor="#fff"
                  hasCartBtn={true}
                />
              </DrawerProvider>
            </Sticky>
            <Banner
              textColor="#fff"
              header="Pre-order restaurant dine in."
              subText="Simply skip the queue and pre-order your meal ahead. Just grab a seat and enjoy."
            />
          </ContainerWithBackgroundImage>
          <MobileDownloadApp />
          <CuisinesSection
            headerContent="Most Popular Cuisines on Ayazona"
            hasViewMore="true"
            cuisines={cuisines.slice(0, 6)}
          />
          <CityBlock
            city={'nairobi'}
            baseUrl={'/dine-in'}
            locations={cities}
            header={'Dine-in & Takeaway in Your City'}
            marginTop="40"
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

export default Pickup;
