import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/src/theme/about';
import {
  GlobalStyle,
  AppWrapper,
  SubPageWrapper,
} from 'common/src/containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/App/Navbar';
import PickupFooter from 'common/src/containers/App/PickupFooter';

import Banner from 'common/src/containers/cuisines/cuisine-components/Banner';
import FeatureSection from 'common/src/containers/App/PlaceholderPanel';
import Slider from 'common/src/containers/cuisines/cuisine-components/Slider';

import LocationDescription from 'common/src/containers/delivery/LocationDescription';
import FAQ from 'common/src/containers/FAQ';
import { AboutAyazona } from 'common/src/data/FAQ';
import { locations } from 'common/src/data/delivery';
import LocationBlock from 'common/src/containers/delivery/FeatureSection';

import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { cuisines } from 'common/src/data/cuisines';
import { getCommonJsonld } from 'common/src/utils';

export async function getStaticProps({ params }) {
  const { cuisine } = params;
  return {
    props: {
      cuisine,
      cuisines,
    },
  };
}

export async function getStaticPaths() {
  const paths = [...cuisines, { name: 'affordable' }].map(c => ({
    params: { cuisine: c.name.toLocaleLowerCase() },
  }));
  return { paths, fallback: false };
}

const CuisinePage = ({
  jsonldUrl = null,
  cuisineItems,
  longLat,
  isValidLocation,
  sliderItemsBaseUrl = null,
  restaurants,
  cuisine,
  cuisines,
  bannerTitle,
  city,
}) => {
  cuisine = cuisine.charAt(0).toUpperCase() + cuisine.slice(1);

  const links = [
    {
      name: 'Ayazona',
      itemtype: 'http://schema.org/ListItem',
      href: '/',
      itemprop: 'item',
      position: 1,
    },
    {
      name: `pickup`,
      itemtype: 'http://schema.org/ListItem',
      href: `/pickup`,
      itemprop: 'name',
      position: 2,
    },
    {
      name: `${city.split('-').join(' ')}`,
      itemtype: 'http://schema.org/ListItem',
      href: `/pickup/${city
        .toLocaleLowerCase()
        .split(' ')
        .join('-')}`,
      itemprop: 'name',
      position: 3,
    },
    {
      href: `/pickup/${city
        .split(' ')
        .join('-')
        .toLocaleLowerCase()}/${cuisine
        .toLocaleLowerCase()
        .split(' ')
        .join('-')}`,
      itemtype: 'http://schema.org/ListItem',
      name: `${cuisine
        .toLocaleLowerCase()
        .split('-')
        .join(' ')}`,
      itemprop: 'name',
      position: 4,
    },
  ];
  const items = cuisineItems;
  let businessListing = [];
  if (items.length) {
    businessListing = (
      <script
        key={`delivery-listing-${city}-${location}-index`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getJSONLDBusinesslisting(items)),
        }}
      />
    );
  }

  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>{`${bannerTitle} • Ayazona`}</title>
          <meta
            name="description"
            content={`Get affordable ${cuisine} takeout from your favorite restaurants in ${city} right to your doorstep. Ayazona is the app that delivers affordable food in minutes.`}
          />
          <link
            rel="canonical"
            href={`https://www.ayazona.com/pickup/${city.toLocaleLowerCase()}/${cuisine
              .toLocaleLowerCase()
              .split(' ')
              .join('-')}`}
          />
          <meta name="title" content={`${bannerTitle} • Ayazona`} />
          <meta property="og:title" content={`${bannerTitle} • Ayazona`} />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta
            property="og:url"
            content={`https://www.ayazona.com/pickup/${city.toLocaleLowerCase()}/${cuisine
              .toLocaleLowerCase()
              .split(' ')
              .join('-')}`}
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={`Get affordable ${cuisine} takeout from your favorite restaurants in ${city} right to your doorstep. Ayazona is the app that delivers affordable food in minutes.`}
          />
          <meta name="twitter:title" content={`${bannerTitle} • Ayazona`} />
          <meta
            name="twitter:description"
            content={`Get affordable ${cuisine} takeout from your favorite restaurants in ${city} right to your doorstep. Ayazona is the app that delivers affordable food in minutes.`}
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
            content={`https://www.ayazona.com/pickup/${city.toLocaleLowerCase()}/${cuisine
              .toLocaleLowerCase()
              .split(' ')
              .join('-')}`}
          />
          <meta name="theme-color" content="#fff" />
          <script
            key={`cuisine-${cuisine}-index`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                getCommonJsonld(
                  jsonldUrl ||
                    `https://www.ayazona.com/pickup/${city.toLocaleLowerCase()}/${cuisine
                      .toLocaleLowerCase()
                      .split(' ')
                      .join('-')}`,
                  'Ayazona is on a critical mission to make access to food more affordable for everyone in cities across Africa.'
                )
              ),
            }}
          />
          {businessListing}
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky
            enabled={true}
            top={0}
            innerZ={9999}
            activeClass="sticky-nav-active"
            className="sticky-inner-wrap"
          >
            <DrawerProvider>
              <Navbar
                btnBG="transparent"
                borderColor="rgba(45,49,56,0.15)"
                searchColor="#a4a6a9"
                textColor="#2D3138"
                hasGetAppBtn={false}
                showSearch={true}
                getAppBtnBG="#000"
                bgColor="#FFF"
                getAppBtnTextColor="#fff"
                secondTextColor="#FFF"
                btnBackgroundColor="#2F3137"
                logoNumber={0}
              />
            </DrawerProvider>
          </Sticky>
          <Banner
            baseLink={`pickup`}
            links={links}
            city={`${city.toLocaleLowerCase()}`}
            bannerTitle={bannerTitle}
            cuisine={cuisine}
          />
          <SubPageWrapper>
            <FeatureSection />
            <Slider
              baseUrl={`/pickup/${city
                .toLocaleLowerCase()
                .split(' ')
                .join('-')}`}
              header="More cuisines?"
              cuisines={cuisines}
            />
            <LocationDescription
              header={`${city} affordable local food for takeout.`}
              description={`Get food delivery, grocery delivery, home essentials delivery, and drinks delivery or takeout around ${city} from our local distribution centers, cafes, grocery stores, and bakeries. Life is too short for bad food—therefore, we’d never compromise on our produce’s quality. Changing the access to essential needs, we are also on a mission to lead the change for more conscious and sustainable consumption. Having on-demand access to groceries means that 1) storing food is a thing of the past which drastically reduces food waste and 2) we can set new standards of freshness when it comes to what we eat. Local farmers help us provide the freshest produce and ensure short supply chains while supporting local communities. Being the most affordable and the first local delivery app, we are on a mission to make it affordable for low-income households to access food and basic home essentials.`}
            />
            <FAQ questions={AboutAyazona} />
            <LocationBlock
              baseUrl={'/pickup'}
              city={`${city
                .split(' ')
                .join('-')
                .toLocaleLowerCase()}`}
              urlExtention={cuisine
                .toLocaleLowerCase()
                .split(' ')
                .join('-')}
              locations={locations[city].areas}
              header={'Explore more areas'}
              marginTop="40"
            />
            <PickupFooter
              title={`Order ${cuisine.toLocaleLowerCase()} takeaway in ${city
                .split('-')
                .join(' ')}`}
              intro={`Order affordable ${cuisine.toLocaleLowerCase()}, and utilities from anywhere in ${city
                .split('-')
                .join(
                  ' '
                )}. From fresh groceries to baby products, Ayazona is your local food delivery, grocery delivery, home essentials delivery app.`}
              outro={
                'Order from the local delivery app with the most affordable merchants and stores with the lowest delivery fees guaranteed. Just enter your address, find something affordable you like, add it to your basket and we will get it.'
              }
            />
          </SubPageWrapper>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default CuisinePage;
