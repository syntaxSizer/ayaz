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
import Otherposts from "common/src/containers/Blog/OtherComponent";

import FeatureSection from "common/src/containers/Blog/ArticleBody";

import { DrawerProvider } from "common/src/contexts/DrawerContext";
import { getBlogPostPageSchema } from "common/src/utils";

import API from "common/src/data/blog";

export async function getServerSideProps({params}) {
  const {id} = params;
  const post = await API.getPostBySlug(id);
  const navItems = await API.getSettings();
  return {
    props: {
      post,
      navItems
    },
  }
}


const Article = ({post, navItems=[]}) => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>{post[0].title} • Ayazona</title>
          <meta
            name="description"
            content={post[0].meta_description}
          />
          <link rel="canonical" href={`https://www.ayazona.com/blog/${post[0].slug}`} />
          <meta name="title" content={`${post[0].title} • Ayazona`} />
          <meta property="og:title" content={`${post[0].title} • Ayazona`} />
          <meta property="og:image" content={post[0].feature_image} />
          <meta property="og:image:width" content="1065"/>
          <meta property="og:image:height" content="500"/>
          <meta property="og:url" href={`https://www.ayazona.com/blog/${post[0].slug}`} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={post[0].meta_description} />
          <meta name="twitter:title" content={`${post[0].title} • Ayazona`} />
          <meta name="twitter:description" content={post[0].meta_description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={post[0].feature_image} />
          <meta property="article:tag" content={post[0].tag}/>
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content={`https://www.ayazona.com/blog/${post[0].slug}`} />
          <meta name="theme-color" content="#ffffff"/>
          <meta name="twitter:label1" content="Written by"/>
          <meta name="twitter:data1" content="Ayazona"/>
          <meta name="twitter:label2" content="Filed under"/>
          <meta name="twitter:data2" content={post[0].tag}/>
          <script
			      key={"blog-post-index"}
			      type="application/ld+json"
			      dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogPostPageSchema(post))}}
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
          <FeatureSection post={post[0]}/>
          <Otherposts tag={post[0].primary_tag.slug} path={`blog/tag/${post[0].primary_tag.slug}`}/>
          <Footer title={"Bloom™ Bites from Ayazona"} intro={"Welcome to Ayazona Bloom™. It's a collection of stories from across the country about local businesses, things to keep you distracted, and food news that's fit to grill."} outro={"Order from the local delivery app with the most affordable food, groceries and household essentials with the lowest delivery fees guaranteed. Just enter your address, find something affordable you like, add it to your basket and we will get it."}/>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default Article;