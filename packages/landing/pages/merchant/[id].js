import React, {
  useRef,
  useMemo,
  useEffect,
  useState,
  useCallback
} from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import { appTheme } from "common/src/theme/about";
import FAQ from "common/src/containers/FAQ";
import {
  GlobalStyle,
  AppWrapper,
  MerchantStatus,
  ContainerWithMerchantImage
} from "common/src/containers/App/app.style";
import styled, { createGlobalStyle } from "styled-components";
import { ResetCSS } from "common/src/assets/css/style";
import Navbar from "common/src/containers/App/Navbar";
import PickupFooter from "common/src/containers/App/PickupFooter";
import Slider from "common/src/containers/cuisines/cuisine-components/Slider";
import { cuisines } from "common/src/data/cuisines";

import Banner from "common/src/containers/restaurants/Banner";
import PreBanner from "common/src/containers/restaurants/preBanner";
import SubMenu from "common/src/containers/Essentials/merchantSubMenu";

import FeatureSection from "common/src/containers/restaurants/FeatureSection";
import RestaurantSlider from "common/src/containers/restaurants/RestaurantsSlider";
import Divider from "common/src/containers/restaurants/Divider";

import { DrawerProvider } from "common/src/contexts/DrawerContext";
import LocationBlock from "common/src/containers/restaurants/LocationBlock";
import API from "common/src/data/restaurants";
import Image from "next/image";
import { locations } from "common/src/data/delivery";
import NotFound from "../404";

import { getRestaurantMenuSchema, getRestaurantPageExtraSchema } from "common/src/utils";
import Info from "common/src/containers/restaurants/Info";

export async function getServerSideProps ({params}) {
  const { id } = params;
  const restaurantData = await API.getRestaurant(id)
  return {
    props: {
      restaurantData,
    }
  }
}

const Merchant = ({
  restaurantData
}) => {
  if (!restaurantData) {
    return <NotFound />
  }
  const {Restaurant, RestaurantLocation, RestaurantMenu, TotalRatings, Currency, Tax} = restaurantData;

  const questions = [
    {
      question: "Does " +`${Restaurant.name +" "+ Restaurant.address}`+" deliver?",
      answer: "Yes, "+`${Restaurant.name +" "+ Restaurant.address}`+" delivery is available on Ayazona."
    },
    {
      question: "Does " +`${Restaurant.name +" "+ Restaurant.address}`+ " offer contact-free delivery?",
      answer: "Yes, "+`${Restaurant.name +" "+ Restaurant.address}`+" provides contact-free delivery with Ayazona."
    },
    {
      question: "What type of food is " +`${Restaurant.name +" "+ Restaurant.address}`+ "?",
      answer: `${Restaurant.name +" "+ Restaurant.address}`+" serves variety of dishes including "+`${Restaurant.speciality.toLocaleLowerCase() }`+" cuisine."
    },
    {
      question: "Can I customize my "+`${Restaurant.name}`+" delivery order on Ayazona?",
      answer: "You may have the opportunity to leave a note for the kitchen and/or customize the "+`${Restaurant.name}`+"'s menu items you want to order."
    },
    {
      question: "Can I order takeaway from a "+`${Restaurant.name}`+" near me?",
      answer: "You can opt to place a takeout order or dine-in order with certain restaurants using Ayazona in certain areas."
    },
    {
      question: "Does it cost extra to get food delivery from the "+`${Restaurant.name}`+" near me?",
      answer: "Some restaurants and grocery stores set an order minimum for food delivery. Others don't. The same applies to service fees—which vary from merchant to merchant. For more info about your food costs, check the menu of the "+`${Restaurant.name}`+" near you."
    }
  ]

  const city = RestaurantLocation.city;
  const cuisine = Restaurant.speciality;

  let areas = [];
  areas = locations[city].areas;

  const [isOpen, setToggleState] = React.useState(false);
  const toggle = useCallback(async () => setToggleState(!isOpen));

  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>{`${Restaurant ? Restaurant.name +" "+ Restaurant.address: "Ayazona"} Delivery • Ayazona`}</title>
          <meta
            name="description"
            content={"Order food delivery from "+ `${Restaurant ? Restaurant.name +" "+ Restaurant.address: "Ayazona"}` +" Browse the menu, view popular items, place your order online and track your order."}
          />
          <link rel="canonical" href={`https://www.ayazona.com/merchant/${Restaurant.id}`} />
          <meta name="title" content={`${Restaurant ? Restaurant.name +" "+ Restaurant.address: "Ayazona"} Delivery • Ayazona`} />
          <meta property="og:title" content={`${Restaurant ? Restaurant.name +" "+ Restaurant.address: "Ayazona"} Delivery • Ayazona`} />
          <meta property="og:image" content={`https://r.cdn.ayazona.com/merchant/${Restaurant.cover_image}`} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content={`https://www.ayazona.com/merchant/${Restaurant.id}`} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={"Order food delivery from "+ `${Restaurant ? Restaurant.name +" "+ Restaurant.address: "Ayazona"}` +" Browse the menu, view popular items, place your order online and track your order."} />
          <meta name="twitter:title" content={`${Restaurant ? Restaurant.name +" "+ Restaurant.address: "Ayazona"} Delivery • Ayazona`} />
          <meta name="twitter:description" content={"Order food delivery from "+ `${Restaurant ? Restaurant.name +" "+ Restaurant.address: "Ayazona"}` +" Browse the menu, view popular items, place your order online and track your order."} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={`https://r.cdn.ayazona.com/merchant/${Restaurant.cover_image}`} />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content={`https://www.ayazona.com/merchant/${Restaurant.id}`} />
          <meta name="theme-color" content="#fff"/>
          <script
			      key={`restaurant-${Restaurant.id}-index`}
			      type='application/ld+json'
			      dangerouslySetInnerHTML={{ __html: JSON.stringify(getRestaurantPageExtraSchema(Restaurant))}}
		      />
          <script
			      key={`menu-${Restaurant.id}-index`}
			      type='application/ld+json'
			      dangerouslySetInnerHTML={{ __html: JSON.stringify(getRestaurantMenuSchema(Restaurant, RestaurantMenu, RestaurantLocation, Currency))}}
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
                borderColor="rgba(45,49,56,0.15)" searchColor="#a4a6a9"
                textColor="#2D3138"
                hasGetAppBtn={false}
                showSearch={false}
                showSubMenu={false}
                getAppBtnBG="#000"
                bgColor="#FFF"
                getAppBtnTextColor="#fff"
                secondTextColor="#FFF"
                btnBackgroundColor="#2F3137"
                showSearch={true}
                logoNumber={0}/>
            </DrawerProvider>
          </Sticky>
          <ContainerWithMerchantImage opn={`${Restaurant.open}`}>
            <Image className="images"
              layout="fill"
              src={`https://r.cdn.ayazona.com/${Restaurant.cover_image}`}
              alt={Restaurant.name}
            />
            {Restaurant.open == 0 && <MerchantStatus>Not available for orders</MerchantStatus>}
          </ContainerWithMerchantImage>
          <PreBanner location={RestaurantLocation}/>
          <Sticky
            enabled={true}
            top={0}
            innerZ={9}
            activeClass="sticky-nav-active">
            <SubMenu menuItems={RestaurantMenu} location={RestaurantLocation}/>
          </Sticky>
          <Banner toggle={toggle} infoIsOpen={isOpen} data={Restaurant} menu={RestaurantMenu} location={RestaurantLocation} currency={Currency} tax={Tax}/>
          <Info isOpen={isOpen} restaurant={restaurantData } data={Restaurant} />
          <FeatureSection restaurantData={Restaurant} menu={RestaurantMenu} location={RestaurantLocation} currency={Currency}/>
          <FAQ questions={questions}/>
          <Divider />
          {/* <RestaurantSlider cuisine={cuisine} location={RestaurantLocation} header="Other Options Nearby" /> */}
          <Slider baseUrl={`/pickup/${city.toLocaleLowerCase().split(" ").join("-")}/${RestaurantLocation.state.toLocaleLowerCase().split(" ").join("-")}`}  header="Something Different?" cuisines={cuisines} />
          <LocationBlock city={`${city.split(" ").join("-").toLocaleLowerCase()}`} baseUrl={"/pickup"} locations={areas} header={"Explore Nearby Areas"} city={city}/>
          <PickupFooter title={`Order from ${Restaurant.name}`} intro={`Order affordable ${cuisine} dishes, from ${Restaurant.name}, ${Restaurant.address} for takeaway or delivery. Ayazona is your local food delivery, grocery delivery, home essentials delivery app.`} outro={"Order from the local delivery app with the most affordable merchants and stores with the lowest delivery fees guaranteed. Just enter your address, find something affordable you like, add it to your basket and we will get it."}/>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default Merchant