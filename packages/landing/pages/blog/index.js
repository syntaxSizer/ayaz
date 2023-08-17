import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/src/theme/about';
import { GlobalStyle, AppWrapper } from 'common/src/containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/Blog/Navbar';
import Footer from 'common/src/containers/App/BrandsFooter';

import Banner from 'common/src/containers/Blog/Banner';
import FeatureSection from 'common/src/containers/Blog/FeatureSection';

import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { getBlogPageSchema } from 'common/src/utils';

import API from 'common/src/data/blog';

export async function getServerSideProps() {
  const posts = await API.getPosts();
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
          <title>Ayazona Bloom</title>
          <meta
            name="description"
            content={'Ayazona Blog: Community. Announcements. Stories.'}
          />
          <link rel="canonical" href="https://www.ayazona.com/blog" />
          <meta name="title" content="Ayazona Blog" />
          <meta property="og:title" content="Ayazona Bloom" />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://www.ayazona.com/blog" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={'Ayazona Blog: Community. Announcements. Stories.'}
          />

          <meta name="twitter:title" content="Ayazona Bloom" />
          <meta
            name="twitter:description"
            content={'Ayazona Blog: Community. Announcements. Stories.'}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content="https://www.ayazona.com/blog" />
          <meta name="theme-color" content="#fff" />
          <script
            key={'blog-index'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getBlogPageSchema()),
            }}
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky
            enabled={false}
            top={0}
            innerZ={99}
            activeClass="sticky-nav-active"
          >
            <DrawerProvider>
              <Navbar navItems={navItems} />
            </DrawerProvider>
          </Sticky>
          <Banner post={posts[0]} />
          <FeatureSection posts={posts} />
          <Footer
            title={'Bloom™ Bites from Ayazona'}
            intro={
              "Welcome to Ayazona Bloom™. It's a collection of stories from across the country about local businesses, things to keep you distracted, and food news that's fit to grill."
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
