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

import Banner from "common/src/containers/cuisines/Banner";
import API from "common/src/data/restaurants";
import NotFound from "../404";

import { DrawerProvider } from "common/src/contexts/DrawerContext";
import RestaurantsView from "common/src/containers/cuisines/cuisine-components/SearchPageRestaurantsView";

export async function getServerSideProps({ params }) {
  const { id } = params;
  const marketingData = await API.getCampaign(id);
  const {AppSlider} = marketingData;
  let merchants = null;
  let q = AppSlider.tag;
  let title = AppSlider.title;
  let description = AppSlider.description;
  let marketing_id = AppSlider.id;
  merchants = await API.searchRestaurants({ keyword: q });
  return {
    props: {
      merchants,
      title,
      marketing_id,
      description
    },
  }
}
const links = [
  {
    name: "Ayazona",
    itemtype: "http://schema.org/ListItem",
    href: "/",
    itemprop: "item",
    position: 1,
  },
  {
    name: "Offers",
    itemtype: "http://schema.org/ListItem",
    href: "/store",
    itemprop: "name",
    position: 2,
  }
];

const MarketingPage = ({ merchants, description, title, marketing_id }) => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>{title}</title>
          <meta
            name="description"
            content={description}
          />
          <link rel="canonical" href={`https://www.ayazona.com/marketing/${marketing_id}`} />
          <meta name="title" content={title} />
          <meta property="og:title" content={title} />
          <meta property="og:image" content="/static/scripts/open_graph_logo.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta name="robots" content="noindex"></meta>
          <meta property="og:url" content={`https://www.ayazona.com/marketing/${marketing_id}`} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={description} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/static/scripts/open_graph_logo.jpg" />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content={`https://www.ayazona.com/marketing/${marketing_id}`} />
          <meta name="theme-color" content="#fff"/>
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
                getAppBtnBG="#000"
                bgColor="#FFF"
                getAppBtnTextColor="#fff"
                secondTextColor="#FFF"
                btnBackgroundColor="#2F3137"
                logoNumber={0} />
            </DrawerProvider>
          </Sticky>
          <Banner links={links} bannerTitle={title} description={description} />
          <SubPageWrapper>
            <RestaurantsView restaurants={merchants} />
            <Footer title={"Where households in Africa get fresh food and grocery delivery in minutes under the retail price."} intro={"Able to deliver within 30 minutes, Ayazona is the affordable food delivery, grocery delivery, home essentials delivery, drinks delivery app bringing whatever you need right to your door."} outro={"Order from the local delivery app with the most affordable food, groceries and household essentials with the lowest delivery fees guaranteed. Just enter your address, find something affordable you like, add it to your basket and we will get it."}/>
          </SubPageWrapper>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default MarketingPage;