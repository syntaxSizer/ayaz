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
import DineInFooter from "common/src/containers/App/DineInFooter";

import Banner from "common/src/containers/delivery-near-me/Banner";
import FloatingCards from "common/src/containers/App/FloatingCards";
import FAQ from "common/src/containers/FAQ";
import { AboutAyazona } from "common/src/data/FAQ";
import LocationDescription from "common/src/containers/delivery/LocationDescription";

import { ContainerWithBackgroundImage } from "common/src/containers/App/app.style";
import { DrawerProvider } from "common/src/contexts/DrawerContext";
import LocationBlock from "common/src/containers/delivery/FeatureSection";
import { locations } from "common/src/data/delivery"
import Slider from "common/src/containers/cuisines/cuisine-components/Slider";
import MobileDownloadApp from "common/src/containers/mobile-download-app";
import { cuisines } from "common/src/data/cuisines";
import restaurantsAPI from "common/src/data/restaurants";
import { getDineInNearMeCuisinePageSchema } from "common/src/utils";
import RestaurantSlider from "common/src/containers/RestaurantsSlider";

const areas = locations["Nairobi"].areas;

export async function getStaticProps({ params }) {
  const { cuisine } = params;
  let dataFetchingParma = cuisine;
  if (cuisine === "affordable") {
    dataFetchingParma = "african"
  }
  const displayAreas = areas.filter(a => ["langata", "kilimani", "westlands", "hurlingham", "loresho"].includes(a.name.toLocaleLowerCase()));
  const restaurants = await Promise.all(displayAreas.map( async (l)=>({
    area: l.name,
    restaurants: await restaurantsAPI.getAllRestaurantsByCuisine(dataFetchingParma, l.longLat)
  })))
  return {
    props: {
      areas,
      cuisine,
      restaurants,
    },
  }
}

export async function getStaticPaths() {
  const paths = [...cuisines, {name: "affordable"}].map(c => ({params: {cuisine: c.name.toLocaleLowerCase().split("-").join(" ")}}));
  return { paths, fallback: true }
}

const DeliveryNearMeCuisine = ({areas, cuisine, restaurants}) => {
  if (!cuisine) {
    return <></>;
  }

  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>{cuisine[0].toUpperCase() + cuisine.substr(1).split("-").join(" ")} Dine In Near Me • Ayazona</title>
          <meta name="description" content={`Find the best ${cuisine} dishes, food, and drinks, dine in options near you. Our Fleets deliver from all your favorites places on-demand. Everyone’s favorite delivery app!`}/>
          <link rel="canonical" href={`https://www.ayazona.com/dine-in-near-me/${cuisine}`} />
          <meta name="title" content={`${cuisine.charAt(0).toUpperCase() + cuisine.slice(1).split("-").join(" ")} Dine In Near Me • Ayazona`} />
          <meta property="og:title" content={`${cuisine.charAt(0).toUpperCase() + cuisine.slice(1).split("-").join(" ")} Dine In Near Me • Ayazona`} />
          <meta property="og:image" content="/static/scripts/open_graph_logo.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content={`https://www.ayazona.com/dine-in-near-me/${cuisine}`} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={`Find the best ${cuisine} dishes, food, and drinks, dine in options near you. Our Fleets deliver from all your favorites places on-demand. Everyone’s favorite delivery app!`} />
          <meta name="twitter:title" content={`${cuisine.charAt(0).toUpperCase() + cuisine.slice(1).split("-").join(" ")} Dine In Near Me • Ayazona`} />
          <meta name="twitter:description" content={`Find the best ${cuisine} dishes, food, and drinks, dine in options near you. Our Fleets deliver from all your favorites places on-demand. Everyone’s favorite delivery app!`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/static/scripts/open_graph_logo.jpg" />
          <meta name="twitter:site" content="@getayazona" />
          <meta name="twitter:creator" content="@getayazona" />
          <meta name="twitter:url" content={`https://www.ayazona.com/dine-in-near-me/${cuisine}`} />
          <meta name="theme-color" content="#154c3b"/>
          <script
			      key={`delivery-${cuisine}-index`}
			      type="application/ld+json"
			      dangerouslySetInnerHTML={{ __html: JSON.stringify(getDineInNearMeCuisinePageSchema(cuisine))}}
		      />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <ContainerWithBackgroundImage
            height="580px"
            url=""
            bg="#154c3b"
            urlmobile=""

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
                  secondTextColor="#154c3b" 
                  borderColor="hsla(0,0%,100%,0.3)" searchColor="rgb(186 187 188)"
                  btnBackgroundColor="#FFF"/>
              </DrawerProvider>
            </Sticky>
            <Banner header={`${cuisine.charAt(0).toUpperCase() + cuisine.slice(1).split("-").join(" ")} Dine In Near Me`} subText={`Enter your delivery address, browse menus from the best affordable ${cuisine.split("-").join(" ")} restaurants in your neighborhood, and order delivery from the places that are open now, near you.`}/>
          </ContainerWithBackgroundImage>
          <MobileDownloadApp />
          <RestaurantSlider baseUrl={"/dine-in"} cuisine={cuisine} rows={restaurants}/>
          <LocationBlock city={"nairobi"} baseUrl={"/dine-in"} urlExtention={cuisine} locations={areas} header={"Food Delivery & Takeaway in Your City"} marginTop="40"/>
          <Slider baseUrl={"/dine-in-near-me"} header="Top Cuisines" cuisines={cuisines} />
          <LocationDescription 
            header={`Use Ayazona To Try Nearby ${cuisine.charAt(0).toUpperCase()+cuisine.slice(1).split("-").join(" ")} Dishes`}
            description={`Now that you’ve figured out what you want to order for your today's soiree, just type in “${cuisine.charAt(0).toUpperCase()+cuisine.slice(1).split("-").join(" ")} Restaurants Dine In Near Me” on the Ayazona website or the app for your mobile device, and browse through the myriad of options to find the place that has exactly what you have a taste for. Aside from menus, you can check prices, find out how long it takes for the driver to deliver to your door, and read reviews from other ${cuisine} dishes lovers just like you. Now all you need to do is figure out the headcount, order accordingly, and enjoy the day outside.`}/>
          <FloatingCards />
          <FAQ questions={AboutAyazona} />
          <DineInFooter title={"Where households in Africa get fresh food and grocery delivery in minutes under the retail price."} intro={"Able to deliver within 30 minutes, Ayazona is the affordable food delivery, grocery delivery, home essentials delivery, drinks delivery app bringing whatever you need right to your door."} outro={"Order from the local delivery app with the most affordable food, groceries and household essentials with the lowest delivery fees guaranteed. Just enter your address, find something affordable you like, add it to your basket and we will get it."}/>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default DeliveryNearMeCuisine;