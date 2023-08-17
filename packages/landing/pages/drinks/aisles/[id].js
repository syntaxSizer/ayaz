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
import DrinksFooter from "common/src/containers/App/DrinksFooter";

import Banner from "common/src/containers/Essentials/AilseBanner";
import SubMenu from "common/src/containers/Essentials/subMenu";
import { AboutAyazona } from "common/src/data/FAQ";
import FAQ from "common/src/containers/FAQ";
import FeatureSection from "common/src/containers/Essentials/FeatureSection";

import { DrawerProvider } from "common/src/contexts/DrawerContext";
import API from "common/src/data/restaurants";
import { getDrinksAislePageSchema } from "common/src/utils";

export async function getServerSideProps ({params}){
  const { id } = params;
  const restaurantData = await API.getRestaurant(732459);
  const items = (restaurantData.RestaurantMenu || []).filter(item=> item.id === id);
  return {
    props: {
      items,
      title: items.length ? items[0].name: null,
      restaurantData,
      id
    }
  }
}



const Aisle = ({items, title, restaurantData, id}) => {
  if (!items) {
    return <></>
  }

  const {Restaurant, Currency} = restaurantData;

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
          <title>{`${title.replace(/&amp;/g, "&")} Delivery Near Me • Ayazona`}</title>
          <meta name="theme-color" content="#ec5555" />
          <meta
            name="description"
            content={`Do You Need ${title.replace(/&amp;/g, "&")} Delivered? Order online from Ayazona Drinks within your area and get wines, spirits, ciders and beer delivered to your door.`}
          />
          <link rel="canonical" href={`https://www.ayazona.com/drinks/aisles/${id}`} />
          <meta name="title" content={`${title.replace(/&amp;/g, "&")} Delivery • Ayazona`} />
          <meta property="og:title" content={`${title.replace(/&amp;/g, "&")} Delivery • Ayazona`} />
          <meta property="og:image" content="/static/scripts/open_graph_logo.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content={`https://www.ayazona.com/drinks/aisles/${id}`} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={`Do You Need ${title.replace(/&amp;/g, "&")} Delivered? Order online from Ayazona Drinks within your area and get wines, spirits, ciders and beer delivered to your door.`} />
          <meta name="twitter:title" content={`${title} Delivery • Ayazona`} />
          <meta name="twitter:description" content={`Do You Need ${title.replace(/&amp;/g, "&")} Delivered? Order online from Ayazona Drinks within your area and get wines, spirits, ciders and beer delivered to your door.`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/static/scripts/open_graph_logo.jpg" />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content={`https://www.ayazona.com/drinks/aisles/${id}`} />
          <meta name="theme-color" content="#fff"/>
          <script
			      key={`aisles-tag-${id}`}
			      type="application/ld+json"
			      dangerouslySetInnerHTML={{ __html: JSON.stringify(getDrinksAislePageSchema(id, title.replace(/&amp;/g, "&")))}}
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
                btnBG="transparent"
                borderColor="rgba(45,49,56,0.15)" searchColor="#a4a6a9"
                textColor="#2D3138"
                hasGetAppBtn={false}
                showSearch={true}
                getAppBtnBG="#000"
                bgColor="#FFF"
                highlightItem="drinks"
                getAppBtnTextColor="#fff"
                secondTextColor="#FFF"
                btnBackgroundColor="#2F3137"
                logoNumber={0} />
            </DrawerProvider>
          </Sticky>
          <Banner title={title.replace(/&amp;/g, "&")} links={links}/>
          <Sticky
            enabled={true}
            top={70}
            innerZ={9}
            activeClass="sticky-nav-active">
            <SubMenu onlyCartButton={true} />
          </Sticky>
          <FeatureSection display={"none"} viewAll={false} menu={items} restaurant={Restaurant} currency={Currency}/>
          <FAQ questions={AboutAyazona}/>
          <DrinksFooter title={`${title.replace(/&amp;/g, "&")} Delivery`} intro={"Able to deliver within 30 minutes, Ayazona is the affordable food delivery, grocery delivery, home essentials delivery, drinks delivery app bringing whatever you need right to your door."} outro={"Order from the local delivery app with the most affordable food, groceries and household essentials with the lowest delivery fees guaranteed. Just enter your address, find something affordable you like, add it to your basket and we will get it."}/>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default Aisle;
