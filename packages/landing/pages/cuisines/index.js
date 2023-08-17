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
import Footer from 'common/src/containers/App/Footer';

import Banner from 'common/src/containers/cuisines/Banner';
import FeatureSection from 'common/src/containers/cuisines/FeatureSection';

import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { cuisines } from '../../../common/src/data/cuisines';
import { getCommonJsonld, getJSONLDlisting } from 'common/src/utils';

export async function getStaticProps() {
  return {
    props: {
      jsonldData: await getJSONLDlisting('https://www.ayazona.com/cuisines'),
    },
  };
}
const links = [
  {
    name: 'Ayazona',
    itemtype: 'http://schema.org/ListItem',
    href: '/',
    itemprop: 'item',
    position: 1,
  },
  {
    name: 'delivery',
    itemtype: 'http://schema.org/ListItem',
    href: '/delivery',
    itemprop: 'name',
    position: 2,
  },
  {
    href: '/cuisines',
    name: 'cuisines',
    itemtype: 'http://schema.org/ListItem',
    itemprop: 'name',
    position: 3,
  },
];

const Cuisines = ({ jsonldData }) => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Cuisines on Ayazona • Ayazona</title>
          <meta
            name="description"
            content="We have a flavour to suit every taste!"
          />
          <link rel="canonical" href="https://www.ayazona.com/cuisines" />
          <meta name="title" content="Cuisines on Ayazona • Ayazona" />
          <meta property="og:title" content="Cuisines on Ayazona • Ayazona" />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://www.ayazona.com/cuisines" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="We have a flavour to suit every taste!"
          />
          <meta name="twitter:title" content="Cuisines on Ayazona • Ayazona" />
          <meta
            name="twitter:description"
            content="We have a flavour to suit every taste!"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content="https://www.ayazona.com/cuisines" />
          <meta name="theme-color" content="#fff" />
          <script
            key={'cuisines-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                getCommonJsonld(
                  'https://www.ayazona.com/cuisines',
                  'We have a flavour to suit every taste!'
                )
              ),
            }}
          />
          <script
            key={'cuisines-listing-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonldData) }}
          />
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
                bgColor="#FFF"
                getAppBtnBG="#000"
                getAppBtnTextColor="#fff"
                secondTextColor="#FFF"
                btnBackgroundColor="#2F3137"
                logoNumber={0}
              />
            </DrawerProvider>
          </Sticky>
          <Banner
            links={links}
            bannerTitle={'Cuisines on Ayazona'}
            description={'We have a taste for every flavour'}
          />
          <SubPageWrapper>
            <FeatureSection cuisines={cuisines} />
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
          </SubPageWrapper>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default Cuisines;
