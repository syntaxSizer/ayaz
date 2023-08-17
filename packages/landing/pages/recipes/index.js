import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/src/theme/about';
import { GlobalStyle, AppWrapper } from 'common/src/containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/App/Navbar';
import Footer from 'common/src/containers/App/BrandsFooter';

import MainBanner from 'common/src/containers/Recipes/MainBanner';
import RecipesSection from 'common/src/containers/Recipes/RecipesSection';

import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { getRecipePageSchema } from 'common/src/utils';
import FloatingCards from 'common/src/containers/App/FloatingCards';

import API from 'common/src/data/blog';

export async function getServerSideProps() {
  let tag = 'recipes';
  const posts = await API.getPostsByTag(tag);
  const navItems = await API.getSettings();
  return {
    props: {
      posts,
      navItems,
    },
  };
}

const Blog = ({ posts, navItems }) => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Recipes and affordable dinner ideas - Ayazona</title>
          <meta
            name="description"
            content={
              'Choose from hundreds of healthy and simple everyday dinners. All the benefits of a lunch box, only much more flexible.'
            }
          />
          <link rel="canonical" href="https://www.ayazona.com/recipes" />
          <meta
            name="title"
            content="Recipes and affordable dinner ideas - Ayazona"
          />
          <meta
            property="og:title"
            content="Recipes and affordable dinner ideas - Ayazona"
          />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://www.ayazona.com/recipes" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={
              'Choose from hundreds of healthy and simple everyday dinners. All the benefits of a lunch box, only much more flexible.'
            }
          />

          <meta
            name="twitter:title"
            content="Recipes and affordable dinner ideas - Ayazona"
          />
          <meta
            name="twitter:description"
            content={
              'Choose from hundreds of healthy and simple everyday dinners. All the benefits of a lunch box, only much more flexible.'
            }
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content="https://www.ayazona.com/recipes" />
          <meta name="theme-color" content="#fff" />
          <script
            key={'recipes-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getRecipePageSchema()),
            }}
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky
            enabled={true}
            top={0}
            innerZ={99}
            activeClass="sticky-nav-active"
            className="sticky-inner-wrap"
          >
            <DrawerProvider>
              <Navbar
                highlightItem="recipes"
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
          <MainBanner post={posts[0]} />
          <RecipesSection posts={posts} />
          <FloatingCards />
          <Footer
            title={'Recipes with one click'}
            intro={
              'Every week, we put together a weekly menu with simple, healthy and tasty dinners that are perfect for everyday life. Do you have suggestions for good recipes? Feel free to tell us!'
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

export default Blog;
