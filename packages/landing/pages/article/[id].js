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
import Footer from "common/src/containers/App/BrandsFooter";
import Navbar from "common/src/containers/App/Navbar";

import FeatureSection from "common/src/containers/Blog/ArticleBody";

import { DrawerProvider } from "common/src/contexts/DrawerContext";
import { getBlogPostPageSchema } from "common/src/utils";

import API from "common/src/data/blog";

export async function getServerSideProps({params}) {
  const {id} = params;
  const post = await API.getPostBySlug(id);
  return {
    props: {
      post
    },
  }
}


const Article = ({post}) => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>{post[0].title} • Ayazona</title>
          <meta
            name="description"
            content={post[0].meta_description}
          />
          <link rel="canonical" href={`https://www.ayazona.com/article/${post[0].slug}`} />
          <meta name="title" content={`${post[0].title} • Ayazona`} />
          <meta property="og:title" content={`${post[0].title} • Ayazona`} />
          <meta property="og:image" content={post[0].feature_image} />
          <meta property="og:image:width" content="1065"/>
          <meta property="og:image:height" content="500"/>
          <meta property="og:url" href={`https://www.ayazona.com/article/${post[0].slug}`} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={post[0].meta_description} />
          <meta name="twitter:title" content={`${post[0].title} • Ayazona`} />
          <meta name="twitter:description" content={post[0].meta_description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={post[0].feature_image} />
          <meta property="article:tag" content={post[0].tag}/>
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content={`https://www.ayazona.com/article/${post[0].slug}`} />
          <meta name="theme-color" content="#ffffff"/>
          <meta name="twitter:label1" content="Written by"/>
          <meta name="twitter:data1" content="Ayazona"/>
          <meta name="twitter:label2" content="Filed under"/>
          <meta name="twitter:data2" content={post[0].tag}/>
          <script
			      key={"article-index"}
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
              <Navbar 
                btnBG="transparent"
                borderColor="rgba(45,49,56,0.15)" searchColor="#a4a6a9"
                textColor="#2D3138"
                hasGetAppBtn={false}
                getAppBtnBG="#000"
                getAppBtnTextColor="#fff"
                secondTextColor="#FFF"
                btnBackgroundColor="#2F3137"
                logoNumber={0}/>
            </DrawerProvider>
          </Sticky>
          <FeatureSection post={post[0]}/>
          <Footer
            title={
              "Where households in Africa get fresh food and grocery delivery in minutes under the retail price."
            }
            intro={
              "Able to deliver within 30 minutes, Ayazona is the affordable food delivery, grocery delivery, home essentials delivery, drinks delivery app bringing whatever you need right to your door."
            }
            outro={
              "Order from the local delivery app with the most affordable food, groceries and household essentials with the lowest delivery fees guaranteed. Just enter your address, find something affordable you like, add it to your basket and we will get it."
            }
          />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default Article;