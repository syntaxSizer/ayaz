import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import { appTheme } from "common/src/theme/about";
import {
  GlobalStyle,
  AppWrapper,
} from "common/src/containers/brand/office.style";
import { ResetCSS } from "common/src/assets/css/style";
import Navbar from "common/src/containers/App/Navbar";
import EssentialsFooter from "common/src/containers/App/EssentialsFooter";

import Banner from "common/src/containers/Essentials/Banner";
import SubMenu from "common/src/containers/Essentials/subMenu";
import { AboutAyazona } from "common/src/data/FAQ";
import FAQ from "common/src/containers/FAQ";
import StoreBanner from 'common/src/containers/delivery/StoreBanner';

import FeatureSection from "common/src/containers/store/AisleListing";

import { DrawerProvider } from "common/src/contexts/DrawerContext";
import API from "common/src/data/restaurants";
import { getStoreInnerPageSchema } from "common/src/utils";

import { ContainerWithBackgroundImage } from "common/src/containers/App/app.style";

export async function getServerSideProps({params}) {
  // TODO: fix the api, get aisle by id. slug fetch all aisles of the category
  // awaiting API update
  const {slug, id} = params;
  const aisle = await API.getAisle({slug});
  return {
    props: {
      aisle,
    },
  };
}

// export async function getStaticPaths() {
//     const aisles = await API.getAisles();
//     const paths = aisles.map(({Aisle}) => ({params: {slug: Aisle.slug}}))
//     return { paths, fallback: false }
//   }
const Essentials = ({ aisle }) => {
  if (!aisle) {
    return <></>;
  }
  const {
    Aisle,
    AisleList,
    AisleLocation,
    Currency,
  } = aisle;

  const links = [
    {
      name: '< Back',
      itemtype: 'http://schema.org/ListItem',
      href: '/store',
      itemprop: 'item',
      position: 1,
    }
  ];

  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>{`${Aisle ? Aisle.name : "Ayazona"} Products Delivery or Pickup Near Me• Ayazona`}</title>
          <meta name="theme-color" content="#ec5555" />
          <meta
            name="description"
            content={`Do You Need ${
              Aisle ? Aisle.name : "Ayazona"
            } Delivered? Order online from Ayazona Home Essentials within your area and get groceries and essential items delivered to your door.`}
          />
          <link rel="canonical" href={`https://www.ayazona.com/store/${Aisle.slug}`} />
          <meta
            name="title"
            content={`${
              Aisle ? Aisle.name : "Ayazona"
            } Products Delivery or Pickup Near Me• Ayazona`}
          />
          <meta
            property="og:title"
            content={`${
              Aisle ? Aisle.name : "Ayazona"
            } Products Delivery or Pickup Near Me• Ayazona`}
          />
          <meta
            property="og:image"
            content="/static/scripts/open_graph_logo.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta
            property="og:url"
            content={`https://www.ayazona.com/store/${Aisle.slug}`}
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={`Do You Need ${
              Aisle ? Aisle.name : "Ayazona"
            } Delivered? Order online from Ayazona Home Essentials within your area and get groceries and essential items delivered to your door.`}
          />
          <meta
            name="twitter:title"
            content={`${
              Aisle ? Aisle.name : "Ayazona"
            } Products Delivery or Pickup Near Me• Ayazona`}
          />
          <meta
            name="twitter:description"
            content={`Do You Need ${
              Aisle ? Aisle.name : "Ayazona"
            } Delivered? Order online from Ayazona Home Essentials within your area and get groceries and essential items delivered to your door.`}
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
            content={`https://www.ayazona.com/store/${Aisle.slug}`}
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <ContainerWithBackgroundImage
            height="180px"
            url=""
            bg="#ffffff"
            urlmobile=""
          >
            <Sticky
              enabled={true}
              top={0}
              innerZ={99}
              activeClass="sticky-nav-active"
              className="sticky-inner-wrap"
            >
              <DrawerProvider>
                <Navbar
                  highlightItem="essentials"
                  bgColor="#ffffff"
                  btnBackgroundColor="#2F3137"
                  borderColor="rgba(45,49,56,0.15)"
                  textColor="#2D3138"
                  secondTextColor="#FFF"
                  logoNumber={0}
                  showSearch={true}
                />
              </DrawerProvider>
            </Sticky>
            <Banner textColor={"#000"} content={Aisle.name} links={links}/>
          </ContainerWithBackgroundImage>
          {/* <PreBanner location={AisleLocation} /> */}
          <Sticky
            enabled={true}
            top={70}
            innerZ={9}
            activeClass="sticky-nav-active"
          >
            <SubMenu listItems={AisleList} location={AisleLocation} />
          </Sticky>
          <StoreBanner title={''} />
          <FeatureSection
            menu={AisleList}
            url={`/store/${Aisle.slug}/aisle`}
            currency={Currency}
            aisle={Aisle}
          />
          <FAQ questions={AboutAyazona} />
          <EssentialsFooter
            title={`${Aisle.name} Delivery or Pickup`}
            intro={`Buy your ${Aisle.name} supply online with Ayazona. Order air fresheners and candles, cleaners, cleaning tools, and more from local and national retailers near you and enjoy on-demand, affordable delivery or pickup within 30 minutes.`}
            outro={
              "Ayazona is building Africa's largest online food store, and you can find us in both the App Store and on Google Play! Besides low prices, we have a selection like a supermarket, and it is with you everywhere."
            }
          />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default Essentials;
