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
import PickupFooter from 'common/src/containers/App/PickupFooter';

import Banner from 'common/src/containers/dish/Banner';
import FloatingCards from 'common/src/containers/App/FloatingCards';

import { ContainerWithBackgroundImage } from 'common/src/containers/App/app.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import DishesBlock from 'common/src/containers/dish/DishList';
import dishes from 'common/src/data/dishes';
import { getDishPageSchema } from 'common/src/utils';
import FAQ from 'common/src/containers/FAQ';
import { AboutAyazona } from '../../../../common/src/data/FAQ';
import MobileDownloadApp from 'common/src/containers/mobile-download-app';
import Steps from 'common/src/containers/dish/OrderSteps';

export async function getStaticProps() {
  return {
    props: {
      dishes,
    },
  };
}

const Dishes = ({ dishes }) => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Delivery &amp; Takeout by Dishes • Ayazona</title>
          <meta
            name="description"
            content="Browse by dish to find food delivery or takeout from restaurants near you. View menus, check out restaurant reviews and photos, and order online for delivery or to go orders."
          />
          <link rel="canonical" href="https://www.ayazona.com/delivery/dish" />
          <meta
            name="title"
            content="Delivery &amp; Takeout by Dishes • Ayazona"
          />
          <meta
            property="og:title"
            content="Delivery &amp; Takeout by Dishes • Ayazona"
          />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta
            property="og:url"
            content="https://www.ayazona.com/delivery/dish"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Browse by dish to find food delivery or takeout from restaurants near you. View menus, check out restaurant reviews and photos, and order online for delivery or to go orders."
          />
          <meta
            name="twitter:title"
            content="Delivery &amp; Takeout by Dishes • Ayazona"
          />
          <meta
            name="twitter:description"
            content="Browse by dish to find food delivery or takeout from restaurants near you. View menus, check out restaurant reviews and photos, and order online for delivery or to go orders."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta
            name="twitter:url"
            content="https://www.ayazona.com/delivery/dish"
          />
          <meta name="theme-color" content="#007e8a" />
          <script
            key={'dish-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getDishPageSchema()),
            }}
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <ContainerWithBackgroundImage
            height="580px"
            url=""
            urlmobile=""
            bg="#007e8a"
          >
            <Sticky
              enabled={false}
              top={0}
              innerZ={9999}
              activeClass="sticky-nav-active"
            >
              <DrawerProvider>
                <Navbar
                  logoNumber={1}
                  borderColor="hsla(0,0%,100%,0.3)"
                  searchColor="rgb(186 187 188)"
                  secondTextColor="#007e8a"
                  btnBackgroundColor="#FFF"
                />
              </DrawerProvider>
            </Sticky>
            <Banner
              onlySearchBar={true}
              margin={'50px 0 0'}
              header={'Dishes Delivery Near You'}
            />
          </ContainerWithBackgroundImage>
          <MobileDownloadApp />
          {/* <Steps /> */}
          <DishesBlock
            textBlockHeader="Favorite dishes near me"
            dishes={dishes}
            header={'Browse by dishes'}
            marginTop="40"
          />
          <FloatingCards />
          <FAQ questions={AboutAyazona} />
          <PickupFooter
            title={'Your favorite dishes for delivery or takeaway.'}
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

export default Dishes;
