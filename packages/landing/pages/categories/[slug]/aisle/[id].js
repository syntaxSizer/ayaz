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

import Banner from "common/src/containers/Essentials/AilseBanner";
import SubMenu from "common/src/containers/Essentials/merchantSubMenu";
import { AboutAyazona } from "common/src/data/FAQ";
import FAQ from "common/src/containers/FAQ";
import CategoriesBanner from 'common/src/containers/delivery/CategoriesBanner';

import FeatureSection from "common/src/containers/store/DisplayListing";

import { DrawerProvider } from "common/src/contexts/DrawerContext";
import API from "common/src/data/restaurants";
import { getStoreAislePageSchema } from "common/src/utils";

export async function getServerSideProps({params}) {
  const { id, slug } = params;
  const aisle = await API.getAisle({slug});
  const items = aisle.AisleList.filter(item=> item.id===id);
  return {
    props: {
      items,
      title: items.length ? items[0].name: null,
      aisle,
      id,
    }
  }
}

const Aisle = ({items, title, aisle, id}) => {
  if (!items) {
    return <></>
  }

  const {
    Aisle, 
    Currency,
    AisleLocation
  } = aisle;

  const links = [
    {
      name: '< Back',
      itemtype: 'http://schema.org/ListItem',
      href: `/store/${Aisle.slug}`,
      itemprop: 'item',
      position: 1,
    }
  ];
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>{`${title.replace(/&amp;/g, "&")} Products Delivery Services Near Me`}</title>
          <meta name="theme-color" content="#ec5555" />
          <meta
            name="description"
            content={`Do You Need ${title.replace(/&amp;/g, "&")} Delivered? Order online from Ayazona Home Essentials within your area and get groceries and essential items delivered to your door.`}
          />
          <link rel="canonical" href={`https://www.ayazona.com/categories/${Aisle.slug}/aisle/${id}`} />
          <meta name="title" content={`${title.replace(/&amp;/g, "&")} Products Delivery Services Near Me`} />
          <meta property="og:title" content={`${title.replace(/&amp;/g, "&")} Products Delivery Services Near Me`} />
          <meta property="og:image" content="/static/scripts/open_graph_logo.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content={`https://www.ayazona.com/categories/${Aisle.slug}/aisle/${id}`} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={`Do You Need ${title.replace(/&amp;/g, "&")} Delivered? Order online from Ayazona Home Essentials within your area and get groceries and essential items delivered to your door.`} />
          <meta name="twitter:title" content={`${title} Products Delivery Services Near Me`} />
          <meta name="twitter:description" content={`Do You Need ${title.replace(/&amp;/g, "&")} Delivered? Order online from Ayazona Home Essentials within your area and get groceries and essential items delivered to your door.`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/static/scripts/open_graph_logo.jpg" />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content={`https://www.ayazona.com/categories/${Aisle.slug}/aisle/${id}`} />
          <meta name="theme-color" content="#fff"/>
          <script
			      key={`aisles-tag-${id}`}
			      type="application/ld+json"
			      dangerouslySetInnerHTML={{ __html: JSON.stringify(getStoreAislePageSchema(id, Aisle, title.replace(/&amp;/g, "&")))}}
		      />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky
            enabled={true}
            top={0}
            innerZ={999}
            activeClass="sticky-nav-active"
            className="sticky-inner-wrap"
          >
            <DrawerProvider>
              <Navbar
                highlightItem="essentials"
                btnBG="transparent"
                borderColor="rgba(45,49,56,0.15)" searchColor="#a4a6a9"
                textColor="#2D3138"
                hasGetAppBtn={false}
                getAppBtnBG="#000"
                bgColor="#FFF"
                getAppBtnTextColor="#fff"
                secondTextColor="#FFF"
                btnBackgroundColor="#2F3137"
                showSearch={true}
                logoNumber={0} />
            </DrawerProvider>
          </Sticky>
          <CategoriesBanner title={title.replace(/&amp;/g, "&")} />
          <FeatureSection display={"none"} viewAll={false} menu={items} aisle={Aisle} currency={Currency} />
          <FAQ questions={AboutAyazona}/>
          <EssentialsFooter title={`${title.replace(/&amp;/g, "&")} Delivery`} intro={"Buy your favorite household essentials online with Ayazona. Order air fresheners and candles, cleaners, cleaning tools, and more from local and national retailers near you and enjoy on-demand, affordable delivery or pickup within 30 minutes."} outro={"Ayazona is building Africa's largest online food store, and you can find us in both the App Store and on Google Play! Besides low prices, we have a selection like a supermarket, and it is with you everywhere."}/>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default Aisle;
