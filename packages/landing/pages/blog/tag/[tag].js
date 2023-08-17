import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import { appTheme } from "common/src/theme/about";
import {
  GlobalStyle,
  AppWrapper,
} from "common/src/containers/App/app.style";
import { ResetCSS } from "common/src/assets/css/style";
import Navbar from "common/src/containers/Blog/Navbar";
import Footer from "common/src/containers/App/BrandsFooter";

import TagBanner from "common/src/containers/Blog/TagBanner";
import TagSection from "common/src/containers/Blog/TagSection";

import { DrawerProvider } from "common/src/contexts/DrawerContext";
import { getBlogTagPageSchema } from "common/src/utils";

import API from "common/src/data/blog";

export async function getServerSideProps({params}) {
  const { tag } = params; 
  const posts = await API.getPostsByTag(tag);
  const navItems = await API.getSettings();
  return {
    props: {
      tag,
      posts,
      navItems,
    },
  }
}


const Blog = ({posts, navItems, tag}) => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>{tag[0].toUpperCase()+ tag.substr(1)} Updates on Ayazona</title>
          <meta
            name="description"
            content={`Ayazona ${tag[0].toUpperCase()+ tag.substr(1)}: Community. Announcements. Stories.`}
          />
          <link rel="canonical" href={`https://www.ayazona.com/blog/tag/${tag}`} />
          <meta name="title" content={`${tag[0].toUpperCase()+ tag.substr(1)} • Ayazona`} />
          <meta property="og:title" content={`${tag[0].toUpperCase()+ tag.substr(1)} • Ayazona`} />
          <meta property="og:image" content="/static/scripts/open_graph_logo.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content={`https://www.ayazona.com/blog/tag/${tag}`} />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content={`${tag[0].toUpperCase()+ tag.substr(1)} • Ayazona`} />
          <meta name="twitter:description"
            content={`Ayazona ${tag[0].toUpperCase()+ tag.substr(1)}: Community. Announcements. Stories.`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/static/scripts/open_graph_logo.jpg" />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content={`https://www.ayazona.com/blog/tag/${tag}`} />
          <meta name="theme-color" content="#fff"/>
          <script
			      key={"blog-tag-index"}
			      type="application/ld+json"
			      dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogTagPageSchema(tag))}}
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
              <Navbar navItems={navItems}/>
            </DrawerProvider>
          </Sticky>
          <TagBanner
            tag={tag}
          />
          <TagSection tag={tag} posts={posts} />
          <Footer title={`${tag[0].toUpperCase()+ tag.substr(1)} Bites from Ayazona`} intro={"Welcome to Ayazona Bloom™. It's a collection of stories from across the country about local businesses, things to keep you distracted, and food news that's fit to grill."} outro={"Order from the local delivery app with the most affordable food, groceries and household essentials with the lowest delivery fees guaranteed. Just enter your address, find something affordable you like, add it to your basket and we will get it."}/>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default Blog;