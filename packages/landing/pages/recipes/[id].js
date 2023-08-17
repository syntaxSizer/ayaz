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
import Navbar from "common/src/containers/App/Navbar";
import Footer from "common/src/containers/App/BrandsFooter";
import OtherRecipes from "common/src/containers/Recipes/OtherRecipes";

import RecipeBody from "common/src/containers/Recipes/RecipeBody";
import Banner from "common/src/containers/Recipes/Banner";

import { DrawerProvider } from "common/src/contexts/DrawerContext";
import { getBlogRecipePageSchema } from "common/src/utils";

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

const Article = ({post}) => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Make {post[0].title} on Ayazona</title>
          <meta
            name="description"
            content={post[0].meta_description}
          />
          <link rel="canonical" href={`https://www.ayazona.com/recipes/${post[0].slug}`} />
          <meta name="title" content={`Make ${post[0].title} on Ayazona`} />
          <meta property="og:title" content={`Make ${post[0].title} on Ayazona`} />
          <meta property="og:image" content={post[0].feature_image} />
          <meta property="og:image:width" content="1065"/>
          <meta property="og:image:height" content="500"/>
          <meta property="og:url" href={`https://www.ayazona.com/recipes/${post[0].slug}`} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={post[0].meta_description} />
          <meta name="twitter:title" content={`Make ${post[0].title} on Ayazona`} />
          <meta name="twitter:description" content={post[0].meta_description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="article:tag" content={post[0].tag}/>
          <meta name="twitter:image" content={post[0].feature_image} />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content={`https://www.ayazona.com/recipes/${post[0].slug}`} />
          <meta name="theme-color" content="#ffffff"/>
          <meta name="twitter:label1" content="Written by"/>
          <meta name="twitter:data1" content="Ayazona"/>
          <meta name="twitter:label2" content="Filed under"/>
          <meta name="twitter:data2" content={post[0].tag}/>
          <script
			      key={"recipe-post-index"}
			      type="application/ld+json"
			      dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogRecipePageSchema(post))}}
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
            className="sticky-inner-wrap">
            <DrawerProvider>
              <Navbar
                highlightItem="recipes"
                btnBG="transparent"
                borderColor="rgba(45,49,56,0.15)" searchColor="#a4a6a9"
                textColor="#2D3138"
                hasGetAppBtn={false}
                showSearch={true}
                getAppBtnBG="#000"
                bgColor="#FFF"
                getAppBtnTextColor="#fff"
                secondTextColor="#FFF"
                btnBackgroundColor="#2F3137"
                logoNumber={0} />
            </DrawerProvider>
          </Sticky>
          <Banner post={post[0]}/>
          <RecipeBody post={post[0]} />
          <OtherRecipes tag={post[0].tag} path={"recipes"}/>
          <Footer title={"Recipes with one click"} intro={"Every week, we put together a weekly menu with simple, healthy and tasty dinners that are perfect for everyday life. Do you have suggestions for good recipes? Feel free to tell us!"} outro={"Order from the local delivery app with the most affordable food, groceries and household essentials with the lowest delivery fees guaranteed. Just enter your address, find something affordable you like, add it to your basket and we will get it."}/>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default Article;