import React from 'react';
import Router from 'next/router';

import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/src/theme/about';
import { GlobalStyle, AppWrapper } from 'common/src/containers/contact/style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/App/Navbar';
import FeatureSection from 'common/src/containers/Account/Favourite';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const { isLoggedIn } = useSelector(({ auth }) => auth);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    if (!isLoggedIn) {
      Router.push('/');
    } else {
      setIsLoading(false);
    }
  }, []);
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Your Favorites - Ayazona</title>
          <meta
            name="description"
            content="Manage your favourite local restaurants, retailers, grocers, and more all across your city. Download the app now to get everything you crave, on-demand."
          />
          <link rel="canonical" href="https://www.ayazona.com/favorites" />
          <meta name="title" content="Your Favorites - Ayazona" />
          <meta property="og:title" content="Your Favorites - Ayazona" />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://www.ayazona.com/favorites" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Manage your favourite local restaurants, retailers, grocers, and more all across your city. Download the app now to get everything you crave, on-demand."
          />
          <meta name="twitter:title" content="Your Favorites - Ayazona" />
          <meta
            name="twitter:description"
            content="Manage your favourite local restaurants, retailers, grocers, and more all across your city. Download the app now to get everything you crave, on-demand."
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
            content="https://www.ayazona.com/favorites"
          />
          <meta name="theme-color" content="#fff" />
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
              hasGetAppBtn={true}
              showSearch={true}
              getAppBtnBG="#000"
              getAppBtnTextColor="#fff"
              logoNumber={0}
              currentPage="me"
            />
          </Sticky>
          <FeatureSection />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default Favorites;
