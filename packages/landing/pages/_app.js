import React, { Fragment } from 'react';
// import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import Head from 'next/head';
import ShoppingCart from 'common/src/containers/restaurants/ShoppingCart';
import LocationPicker from 'common/src/containers/App/LoctionPicker';
import LoginModal from '../../common/src/containers/App//LoginModal';

import NProgress from 'nprogress';
import Router from 'next/router';

// _app.js
import { wrapper } from '../../common/src/data/store';
import Radar from 'radar-sdk-js';
import MenuModal from 'common/src/containers/restaurants/subMenuModal';
import { useSelector } from 'react-redux';

// **For radar location tracking: TODO complete implementation...
// const publishableKey = "prj_live_pk_c6edb93a06b14c80d6df2f4f895b3293e34139b7";
// Radar.initialize(publishableKey);

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeStart', () => NProgress.set(0.5));
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

Sentry.init({
  dsn:
    'https://c4c5632545f24e05959d0e7a106e7bb3@o292255.ingest.sentry.io/5547349',
  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 0.5,
});

// **For radar location tracking: TODO complete implementation...
// Radar.trackOnce(function(err, result) {
//   if (!err) {
//     // do something with result.location, result.events, result.user
//   }
// });

const app = props => {
  const { Component, pageProps } = props;
  const { modalIsOpen, metadata } = useSelector(({ toggles }) => toggles);

  return (
    <Fragment>
      <Head>
        <link rel="dns-prefetch" href="//cdn.ayazona.com" />
        <link rel="preconnect" href="//cdn.ayazona.com" />
        <link rel="dns-prefetch" href="//r.cdn.ayazona.com" />
        <link rel="preconnect" href="//r.cdn.ayazona.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="p:domain_verify"
          content="c3b6d922940ea6be0b610c786fd4b248"
        />
        <meta
          name="google-site-verification"
          content="lT345DgO8qmnIsJJ0JH-_Mm6vk3lJfGJ6BZ-GLE2i94"
        />
        <link rel="dns-prefetch" href="//cdn.appsflyer.com" />
        <link rel="preconnect" href="//cdn.appsflyer.com" />
        <link rel="dns-prefetch" href="//cdn.branch.io" />
        <link rel="preconnect" href="//cdn.branch.io" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="preconnect" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//cdn.amplitude.com" />
        <link rel="preconnect" href="//cdn.amplitude.com" />
        <link rel="dns-prefetch" href="//www.gstatic.com" />
        <link rel="preconnect" href="//www.gstatic.com" />
        <meta
          name="twitter:app:id:googleplay"
          content="com.ayazona.eat.android"
        />
        <meta name="twitter:app:name:googleplay" content="Ayazona" />
        <link rel="manifest" href="/static/scripts/manifest.webmanifest" />
        <meta name="google-play-app" content="app-id=com.ayazona.eat.android" />
        <meta property="fb:app_id" content="426237571578849" />
        <meta
          property="fb:profile_id"
          content="https://www.facebook.com/getayazona/about/"
        />
        <script src="https://checkout.flutterwave.com/v3.js"></script>
        <script
          src="https://config.metomic.io/config.js?id=prj:10019c26-b71a-4fc0-9807-5486cda9ef8c"
          crossOrigin="true"
          charSet="utf-8"
        ></script>
        <script
          src="https://consent-manager.metomic.io/embed.js"
          crossOrigin="true"
          charSet="utf-8"
        ></script>
      </Head>
      <ToastContainer autoClose={5000} />
      <Component {...pageProps} />
      <LocationPicker className="locationPicker" />
      <ShoppingCart className="cart" />
      <MenuModal />
      <LoginModal />
    </Fragment>
  );
};

export default wrapper.withRedux(app);
