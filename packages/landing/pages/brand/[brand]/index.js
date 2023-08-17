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
import BrandsFooter from "common/src/containers/App/BrandsFooter";

import Banner from "common/src/containers/brand/brand-components/Banner";
import FeatureSection from "common/src/containers/brand/brand-components/FeatureSection";

import { DrawerProvider } from "common/src/contexts/DrawerContext";
import { brands, API } from "common/src/data/brand/FeatureSection";
import { getBrandPageSchema } from "common/src/utils";
import FloatingCards from "common/src/containers/App/FloatingCards";
import GroceryCards from "common/src/containers/App/GroceryCards";
import FAQ from "common/src/containers/FAQ";


const getBrandData = (name) => {
  const URL = name.split("-").join(" ").split("'").join("");
  const data = brands.filter(b=> {
    const brandName = b.param.split("-").join(" ").split("'")[0];
    return brandName.toLocaleLowerCase() === URL.trim().toLocaleLowerCase()
  });
  return data.length ? data[0]: {};
}

export async function getStaticProps({params}) {
  const { brand } = params;
  return {
    props: {
      brandData: getBrandData(brand),
      brandBranchCount: await API.getBrandBranchesCount(brand)
    },
  }
}

export async function getStaticPaths() {
  const paths = brands.map(b => {
    const URL = b.link.split("/")
    return {params: {brand: URL[URL.length -1]}}
  })
  return { paths, fallback: false }
}

const Brand = ({brandData, brandBranchCount}) => {

  const questions = [
    {
      question: `Can I customize menu items when I order online from ${brandData.text}?`,
      answer: `It depends on the food. Some menu items at ${brandData.text} come with a certain set of customization options. If you have a food request that isn't listed, you can always make note of it in the 'Special instructions' field.`
    },
    {
      question: `Will my hot (or cold) food from ${brandData.text} be the right temperature when I get it?`,
      answer: `Restaurants package items to maintain temperature, quality, and freshness and to ensure delivery orders hold up during trips to customers. We have plenty of drivers to get our food delivery orders out on time—so your food from ${brandData.text} always arrives fresh, delicious, and served at the correct temperature.`
    },
    {
      question: `Does it cost extra to get food delivery from the ${brandData.text}?`,
      answer: `Some restaurant chains and locations set an order minimum for food delivery. Others don't. The same applies to service fees—they vary from merchant to merchant. For more info about your food costs, check the menu of the ${brandData.text}.`
    },
    {
      question: `Does ${brandData.text} have contact-free delivery?`,
      answer: `Yes, for your protection, ${brandData.text} offers contact-free delivery via Ayazona.`
    }
  ]

  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>{`${brandData ? brandData.text: "Ayazona"} Delivery Near You • Ayazona`}</title>
          <meta
            name="description"
            content={`Order from ${brandData ? brandData.text: "Ayazona"} and have it delivered to you.  Select a location near you and fill up your cart - we'll handle the rest. `}
          />
          <link rel="canonical" href={`https://www.ayazona.com${brandData.link}`} />
          <meta name="title" content={`${brandData ? brandData.text: "Ayazona"} Delivery Near You • Ayazona`} />
          <meta property="og:title" content={`${brandData ? brandData.text: "Ayazona"} Delivery Near You • Ayazona`} />
          <meta property="og:image" content="/static/scripts/open_graph_logo.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content={`https://www.ayazona.com${brandData.link}`} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={`Order from ${brandData ? brandData.text: "Ayazona"} and have it delivered to you.  Select a location near you and fill up your cart - we'll handle the rest. `} />
          <meta name="twitter:title" content={`${brandData ? brandData.text: "Ayazona"} Delivery Near You • Ayazona`} />
          <meta name="twitter:description" content={`Order from ${brandData ? brandData.text: "Ayazona"} and have it delivered to you.  Select a location near you and fill up your cart - we'll handle the rest. `} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/static/scripts/open_graph_logo.jpg" />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content={`https://www.ayazona.com${brandData.link}`} />
          <meta name="theme-color" content="#002524"/>
          <script
			      key={`delivery-${brandData.text}-index`}
			      type="application/ld+json"
			      dangerouslySetInnerHTML={{ __html: JSON.stringify(getBrandPageSchema(brandData.text))}}
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
                logoNumber={1}
                showSearch={false}
                withBackground={true}
                withOverly={true}
                height={350}
                backgroundImage={brandData.bannerImage}
                secondTextColor="#333" 
                btnBackgroundColor="#FFF"/>
            </DrawerProvider>
          </Sticky>
          <Banner brand={brandData}/>
          <FeatureSection  branchCount = {brandBranchCount} brand={brandData} />
          <GroceryCards />
          <FloatingCards />
          <FAQ questions={questions}/>
          <BrandsFooter title={"Where households in Africa get fresh food and grocery delivery in minutes under the retail price."} intro={"Able to deliver within 30 minutes, Ayazona is the affordable food delivery, grocery delivery, home essentials delivery, drinks delivery app bringing whatever you need right to your door."} outro={"Order from the local delivery app with the most affordable food, groceries and household essentials with the lowest delivery fees guaranteed. Just enter your address, find something affordable you like, add it to your basket and we will get it."}/>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default Brand