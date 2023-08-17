import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import { appTheme } from "common/src/theme/about";
import {
  GlobalStyle,
  AppWrapper,
  SubPageWrapper
} from "common/src/containers/App/app.style";
import { ResetCSS } from "common/src/assets/css/style";
import Navbar from "common/src/containers/App/Navbar";
import Footer from "common/src/containers/App/Footer";
import LocationBlock from "common/src/containers/delivery/FeatureSection";
import FAQ from "common/src/containers/FAQ";
import { AboutAyazona } from "common/src/data/FAQ";

import Banner from "common/src/containers/cuisines/cuisine-components/Banner";
import FeatureSection from "common/src/containers/App/PlaceholderPanel";
import Slider from "common/src/containers/cuisines/cuisine-components/Slider";

import { DrawerProvider } from "common/src/contexts/DrawerContext";
import { cuisines } from "common/src/data/cuisines";
import { locations } from "common/src/data/delivery";
import { setCookie } from "common/src/data/store/utils/cookie";
import CityBlock from "common/src/containers/delivery-near-me/CityBlock";

import {
  getCommonJsonld
} from "common/src/utils";


export async function getStaticProps({ params }) {
  const { cuisine } = params;
  return {
    props: {
      cuisine,
      cuisines
    },
  }
}

export async function getStaticPaths() {
  const paths = [...cuisines, { name: "affordable" }].map(c => ({ params: { cuisine: c.name.toLocaleLowerCase().split(" ").join("-") } }))
  return { paths, fallback: false }
}

const CuisinePage = ({
  jsonldUrl = null,
  jsonldData,
  sliderItemsBaseUrl = null,
  cuisine, cuisines, bannerTitle }) => {
  setCookie("_store_p", null);
  setCookie("_cuisine", {cuisine: {name: cuisine.toLocaleLowerCase()}});
  cuisine = cuisine.charAt(0).toUpperCase() + cuisine.slice(1)
  const links = [{
    name: "Ayazona",
    itemtype: "http://schema.org/ListItem",
    href: "/",
    itemprop: "item",
    position: 1
  },
  {
    name: "delivery",
    itemtype: "http://schema.org/ListItem",
    href: "/delivery",
    itemprop: "name",
    position: 2
  },
  {
    href: "/cuisines",
    name: "cuisines",
    itemtype: "http://schema.org/ListItem",
    itemprop: "name",
    position: 3
  },
  {
    href: `cuisines/${cuisine.toLocaleLowerCase().split(" ").join("-")}`,
    itemtype: "http://schema.org/ListItem",
    name: `${cuisine.toLocaleLowerCase().split("-").join(" ")}`,
    itemprop: "name",
    position: 4
  }];
  const cities = Object.keys(locations);
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>{`${cuisine.split("-").join(" ")} Takeaway Delivered From Restaurants Near You • Ayazona`}</title>
          <meta
            name="description"
            content={`In the mood for amazing ${cuisine.split("-").join(" ")} food? Order online from the best local ${cuisine} restaurants in your area and get fresh food delivered to your door.`}
          />
          <link rel="canonical" href={`https://www.ayazona.com/cuisines/${cuisine.toLocaleLowerCase().split(" ").join("-")}`} />
          <meta name="title" content={`${cuisine} Takeaway Delivered From Restaurants Near You • Ayazona`} />
          <meta property="og:title" content={`${cuisine.split("-").join(" ")} Takeaway Delivered From Restaurants Near You • Ayazona`} />
          <meta property="og:image" content="/static/scripts/open_graph_logo.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content={`https://www.ayazona.com/cuisines/${cuisine.toLocaleLowerCase().split(" ").join("-")}`} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={`In the mood for amazing ${cuisine.split("-").join(" ")} food? Order online from the best local ${cuisine.split("-").join(" ")} restaurants in your area and get fresh food delivered to your door.`} />
          <meta name="twitter:title" content={`${cuisine.split("-").join(" ")} Takeaway Delivered From Restaurants Near You • Ayazona`} />
          <meta name="twitter:description" content={`In the mood for amazing ${cuisine.split("-").join(" ")} food? Order online from the best local ${cuisine.split("-").join(" ")} restaurants in your area and get fresh food delivered to your door.`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/static/scripts/open_graph_logo.jpg" />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content={`https://www.ayazona.com/cuisines/${cuisine.toLocaleLowerCase().split(" ").join("-")}`} />
          <meta name="theme-color" content="#fff"/>
          <script
            key={`cuisine-${cuisine}-index`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                getCommonJsonld(
                  jsonldUrl || `https://www.ayazona.com/cuisines/${cuisine.toLocaleLowerCase().split(" ").join("-")}`,
                  "Ayazona is on a critical mission to make access to food more affordable for everyone in cities across Africa."))
            }}
          />
          <script
            key={`cuisine-listing-${cuisine}-index`}
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
          <Banner links={links} bannerTitle={bannerTitle} cuisine={cuisine} />
          <SubPageWrapper>
            <FeatureSection
              key={cuisine.split(" ").join("-")}
              isValidLocation={true}
              longLat={locations["Nairobi"].longLat}/>
            <Slider baseUrl={sliderItemsBaseUrl} header="More cuisines?" cuisines={cuisines} />
            <CityBlock city={"nairobi"} baseUrl={"/delivery"} urlExtention={cuisine.toLocaleLowerCase()} locations={cities} header={"Browse by city"} marginTop="40"/>
            <FAQ questions={AboutAyazona} />
            <Footer title={"Where households in Africa get fresh food and grocery delivery in minutes under the retail price."} intro={"Able to deliver within 30 minutes, Ayazona is the affordable food delivery, grocery delivery, home essentials delivery, drinks delivery app bringing whatever you need right to your door."} outro={"Order from the local delivery app with the most affordable food, groceries and household essentials with the lowest delivery fees guaranteed. Just enter your address, find something affordable you like, add it to your basket and we will get it."}/>
          </SubPageWrapper>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default CuisinePage;