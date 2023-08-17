import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import { appTheme } from "common/src/theme/about";
import {
  GlobalStyle,
  AppWrapper,
} from "common/src/containers/App/app.style.js";
import { ResetCSS } from "common/src/assets/css/style";
import Navbar from "common/src/containers/App/Navbar";
import PickupFooter from "common/src/containers/App/PickupFooter";

import Banner from "common/src/containers/dish/Banner";
import FloatingCards from "common/src/containers/App/FloatingCards";

import { ContainerWithBackgroundImage } from "common/src/containers/App/app.style";
import { DrawerProvider } from "common/src/contexts/DrawerContext";
import DishesBlock from "common/src/containers/dish/DishList";
import { getSpecificDishPageSchema } from "common/src/utils";
import FAQ from "common/src/containers/FAQ";
import Steps from "common/src/containers/dish/OrderSteps";
import RestaurantSlider from "common/src/containers/dish/RestaurantsSlider";
import dishes from "common/src/data/dishes"
import { AboutAyazona } from "../../../../common/src/data/FAQ";
import MobileDownloadApp from "common/src/containers/mobile-download-app";



export async function getStaticProps({params}) {
  const { dish } = params;
  return {
    props: {
      dish,
      dishes
    }
  }
}

export async function getStaticPaths() {
  const paths = (dishes || []).map(dish => {
    return { params: { dish: dish.link.toLocaleLowerCase() } }
  })
  return { paths, fallback: true }
}

const findDishName = dishLink => {
  const d = (dishes || []).filter(d=> d.link === dishLink);
  return d.length ? d[0].name: null;
}

const Dish = ({dish, dishes}) => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>{`${findDishName(dish)} Delivery Near You | Best Restaurants & Deals | Ayazona`}</title>
          <meta name="description" content={`Get ${findDishName(dish)} delivered from national chains, local favorites, or new neighborhood restaurants, on Ayazona. Order online, and get Beef Burger delivered, fast.`}/>
          <link rel="canonical" href={`https://www.ayazona.com/delivery/dish/${dish}`} />
          <meta name="title" content={`${findDishName(dish)} Delivery Near You | Best Restaurants & Deals | Ayazona`} />
          <meta property="og:title" content={`${findDishName(dish)} Delivery Near You | Best Restaurants & Deals | Ayazona`} />
          <meta property="og:image" content="/static/scripts/open_graph_logo.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content={`https://www.ayazona.com/delivery/dish/${dish}`} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={`Get ${findDishName(dish)} delivered from national chains, local favorites, or new neighborhood restaurants, on Ayazona. Order online, and get Beef Burger delivered, fast.`} />
          <meta name="twitter:title" content={`${findDishName(dish)} Delivery Near You | Best Restaurants & Deals | Ayazona`} />
          <meta name="twitter:description" content={`Get ${findDishName(dish)} delivered from national chains, local favorites, or new neighborhood restaurants, on Ayazona. Order online, and get Beef Burger delivered, fast.`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/static/scripts/open_graph_logo.jpg" />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content={`https://www.ayazona.com/delivery/dish/${dish}`} />
          <meta name="theme-color" content="#007e8a"/>
          <script
            key={`dish-${dish}-index`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(
              getSpecificDishPageSchema(findDishName(dish), dish))}}
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <ContainerWithBackgroundImage
            height="580px"
            url=""
            urlmobile=""
            bg="#007e8a"
          >
            <Sticky
              enabled={false}
              top={0}
              innerZ={9999}
              activeClass="sticky-nav-active"
            >
              <DrawerProvider>
                <Navbar 
                  logoNumber={1}
                  borderColor="hsla(0,0%,100%,0.3)" searchColor="rgb(186 187 188)"
                  secondTextColor="#007e8a" btnBackgroundColor="#FFF"/>
              </DrawerProvider>
            </Sticky>
            <Banner onlySearchBar={true} margin={"50px 0 0"} header={`Get ${findDishName(dish)} Delivery`} />
          </ContainerWithBackgroundImage>
          <MobileDownloadApp />
          <DishesBlock textPositionTop={false} textBlockHeader={`${findDishName(dish)} near me`} textBlockContent="" dishes={dishes || []} header={"More Dishes?"} marginTop="40"/>
          <FloatingCards />
          <FAQ questions={AboutAyazona}/>
          <PickupFooter title={`${findDishName(dish)} for delivery or takeaway.`} intro={"Able to deliver within 30 minutes, Ayazona is the affordable food delivery, grocery delivery, home essentials delivery, drinks delivery app bringing whatever you need right to your door."} outro={"Order from the local delivery app with the most affordable food, groceries and household essentials with the lowest delivery fees guaranteed. Just enter your address, find something affordable you like, add it to your basket and we will get it."}/>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default Dish;