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
import SearchBanner from 'common/src/containers/cuisines/SearchBanner';
import ProductsView from 'common/src/containers/cuisines/cuisine-components/SearchPageRestaurantsView';

import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import {
  getSearchPageSchema1,
  getSearchPageSchema2,
  getJSONLDlisting,
} from 'common/src/utils';
import API from 'common/src/data/restaurants';
import Text from 'common/src/layout/elements/Text';
import styled from 'styled-components';

const DivWrapper = styled.div`
  text-align: center;
  margin: 50px 0;
  position: relative;
  z-index: 200;
  background-color: rgb(255, 255, 255);
  .helperText {
    margin: 0 0 24px;
    letter-spacing: 0.14px;
    color: #8f95a3;
    font-size: 16px;
  }
`;

const links = [
  {
    name: 'Ayazona',
    itemtype: 'http://schema.org/ListItem',
    href: '/',
    itemprop: 'item',
    position: 1,
  },
  {
    name: 'search',
    itemtype: 'http://schema.org/ListItem',
    href: '/search',
    itemprop: 'name',
    position: 2,
  },
];

export async function getServerSideProps({ query }) {
  const { q } = query;
  let products = null;
  if (q) {
    products = await API.searchProducts({ keyword: q });
  }
  return {
    props: {
      products,
      query: q ? q : '',
      jsonLDdata: await getJSONLDlisting('https://www.ayazona.com/search/'),
    },
  };
}

const Search = ({ products, query, jsonLDdata }) => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>
            {query ? `Search result for ${query}` : 'Search'} - Affordable
            On-Demand Delivery • Ayazona
          </title>
          <meta
            name="description"
            content="Order food from these local favorite restaurants in Nairobi and get free deliveries. Ayazona is the app that delivers affordable food in minutes. Download the app now to get everything you crave, on-demand."
          />
          <link
            rel="canonical"
            href={`https://www.ayazona.com/search?q=${query}`}
          />
          <meta
            name="title"
            content={query ? `Search result for ${query}` : 'Search'}
          />
          <meta
            property="og:title"
            content={query ? `Search result for ${query}` : 'Search'}
          />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta
            property="og:url"
            content={`https://www.ayazona.com/search?q=${query}`}
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Order food from these local favorite restaurants in Nairobi and get free deliveries. Ayazona is the app that delivers affordable food in minutes. Download the app now to get everything you crave, on-demand."
          />
          <meta
            name="twitter:title"
            content={query ? `Search result for ${query}` : 'Search'}
          />
          <meta
            name="twitter:description"
            content="Order food from these local favorite restaurants in Nairobi and get free deliveries. Ayazona is the app that delivers affordable food in minutes. Download the app now to get everything you crave, on-demand."
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
            content={`https://www.ayazona.com/search?q=${query}`}
          />
          <meta name="theme-color" content="#fff" />
          <script
            key={`search-index-${query}-1`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getSearchPageSchema1()),
            }}
          />
          <script
            key={`search-index-${query}-2`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getSearchPageSchema2()),
            }}
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
                bgColor="#FFF"
                getAppBtnBG="#000"
                getAppBtnTextColor="#fff"
                secondTextColor="#FFF"
                btnBackgroundColor="#2F3137"
                logoNumber={0}
                showSearch={true}
              />
            </DrawerProvider>
          </Sticky>
          <Banner
            links={links}
            bannerTitle={products ? `Results for "${query}"` : 'Search'}
            subText={products ? '' : 'Explore Top Cuisines'}
          />
          <SubPageWrapper>
            {products && !products.length && (
              <DivWrapper {...{ textAlign: 'center' }}>
                <b>
                  <Text content={`No results for "${query}"`} />
                </b>
                <Text
                  className="helperText"
                  content={'Try searching for something else.'}
                />
              </DivWrapper>
            )}
            {products && products.length ? (
              <ProductsView
                products={products}
                aisle={732594}
                currency={`Ksh.`}
              />
            ) : (
              !query && <SearchBanner />
            )}
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
export default Search;
