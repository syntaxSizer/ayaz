import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/src/theme/app';
import {
  GlobalStyle,
  AppWrapper,
  HeroWrapper,
  ContainerWithBackgroundImage,
} from 'common/src/containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import { SearchBar } from 'common/src/containers/App/GeoLocation';
import Navbar from 'common/src/containers/App/Navbar';
import FeatureSection from 'common/src/containers/App/SearchPanel';
import TilesPanel from 'common/src/containers/App/TilesPanel';
import Footer from 'common/src/containers/App/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { getDefaultSchema } from '../../../packages/common/src/utils';
import GroceryCards from 'common/src/containers/App/GroceryCards';
import ReviewsCards from 'common/src/containers/App/ReviewsCards';
import FooterAction from 'common/src/containers/App/FooterAction';
import words from 'common/src/data/App/Loop';
import FloatingCards from 'common/src/containers/App/FloatingCards';

import hero from '../../common/src/assets/image/app/M.jpg';
import mobileHero from '../../common/src/assets/image/app/MM.jpg';

export async function getStaticProps() {
  return {
    props: {
      words,
    },
  };
}

const Landing = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Fragment>
        <Head>
          <title>Ayazona: Local Fresh Food and Grocery Delivery</title>
          <meta
            name="description"
            content="Are you on a budget? Ayazona delivers affordable breakfast, lunch, dinner, drinks and more from the best local farmers, brands and stores right to your door."
          />
          <link rel="canonical" href="https://www.ayazona.com" />
          <meta
            name="title"
            content="Ayazona: Local Fresh Food and Grocery Delivery"
          />
          <meta
            property="og:title"
            content="Ayazona: Local Fresh Food and Grocery Delivery"
          />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://www.ayazona.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Are you on a budget? Ayazona delivers affordable breakfast, lunch, dinner, drinks and more from the best local farmers, brands and stores right to your door."
          />
          <meta
            name="twitter:title"
            content="Ayazona: Local Fresh Food and Grocery Delivery"
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
          <meta name="theme-color" content="#189D48" />
          <script
            key={'defaultJSON-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getDefaultSchema()),
            }}
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <ContainerWithBackgroundImage
            height="680px"
            mobileheight="580px"
            url={hero}
            bg="#189D48"
            urlmobile={mobileHero}
            id="order"
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
                  btnBackgroundColor="#fff"
                  borderColor="hsla(0,0%,100%,0.3)"
                  textColor="#fff"
                  secondTextColor="#2D3138"
                  logoNumber={1}
                />
              </DrawerProvider>
            </Sticky>

            <HeroWrapper>
              <SearchBar
                extraStyles={{ pt: 0, pb: 20, width: '100%', m: 0, p: 0 }}
                fixedWord={'Need'}
                loopWords={words.map(w => w.name)}
                helperText={
                  'Get high-quality food & groceries delivered within 30 minutes.'
                }
                onlySearchBar={false}
              />
            </HeroWrapper>
          </ContainerWithBackgroundImage>
          <ReviewsCards />
          <GroceryCards />
          <FeatureSection />
          <FooterAction title={'Start Saving'} bg={'#ffe13c'} />
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
      </Fragment>
    </ThemeProvider>
  );
};

export default Landing;
