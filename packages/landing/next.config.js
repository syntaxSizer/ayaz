const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: ['reusecore', 'common'],
      },
    ],
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: 'default',
          quality: 90,
        },
      },
    ],
    {
      images: {
        domains: [
          'r.cdn.ayazona.com',
          'b.cdn.ayazona.com',
          'cdn.ayazona.com',
          'www.articles.ayazona.com',
          'd2d8wwwkmhfcva.cloudfront.net',
        ],
      },
    },
    withFonts,
    withCSS,
  ],
  {
    webpack5: false,
    async redirects() {
      return [
        {
          source: '/article',
          destination: '/store',
          permanent: false,
        },
        {
          source: '/merchant/732349',
          destination: '/essentials',
          permanent: true,
        },
        {
          source: '/brand/ohcha-noodles',
          destination: '/brand/ohcha-noodle-bar',
          permanent: true,
        },
        {
          source: '/merchant/732449',
          destination: '/fresh',
          permanent: true,
        },
        {
          source: '/merchant/1',
          destination: '/fresh',
          permanent: true,
        },
        {
          source: '/merchant/12',
          destination: '/fresh',
          permanent: true,
        },
        {
          source: '/merchant/undefined',
          destination: '/fresh',
          permanent: true,
        },
        {
          source: '/merchant/28',
          destination: '/fresh',
          permanent: true,
        },
        {
          source: '/merchant/732331',
          destination: '/fresh',
          permanent: true,
        },
        {
          source: '/delivery/eldoret/eldoret',
          destination: '/delivery/eldoret',
          permanent: true,
        },
        {
          source: '/delivery/mombasa/cuisines',
          destination: '/delivery/mombasa',
          permanent: true,
        },
        {
          source: '/merchant/732440',
          destination: '/fresh',
          permanent: true,
        },
        {
          source: '/pickup/nairobi/east-kisumu',
          destination: '/pickup/kisumu/east-kisumu',
          permanent: true,
        },
        {
          source: '/delivery/nairobi/east-kisumu',
          destination: '/delivery/kisumu/east-kisumu',
          permanent: true,
        },
        {
          source: '/delivery/nairobi/kongowea',
          destination: '/delivery/mombasa/kongowea',
          permanent: true,
        },
        {
          source: '/pickup/nairobi/kongowea',
          destination: '/pickup/mombasa/kongowea',
          permanent: true,
        },
        {
          source: '/delivery/nairobi/nyali-golf',
          destination: '/delivery/mombasa/nyali-golf',
          permanent: true,
        },
        {
          source: '/pickup/nairobi/nyali-golf',
          destination: '/pickup/mombasa/nyali-golf',
          permanent: true,
        },
        {
          source: '/delivery/nairobi/strathmore university',
          destination: '/delivery/nairobi/strathmore-university',
          permanent: true,
        },
        {
          source: '/pickup/nairobi/strathmore university',
          destination: '/pickup/nairobi/strathmore-university',
          permanent: true,
        },
        {
          source: '/merchant/732473',
          destination: '/pharmacy',
          permanent: true,
        },
        {
          source: '/merchant/732328',
          destination: '/fresh',
          permanent: true,
        },
        {
          source: '/merchant/732459',
          destination: '/drinks',
          permanent: true,
        },
        {
          source: '/merchant/16',
          destination: '/drinks',
          permanent: true,
        },
        {
          source: '/essentials/aisles/[id]',
          destination: '/essentials',
          permanent: true,
        },
        {
          source: '/blog/tag/[tag]',
          destination: '/blog',
          permanent: true,
        },
        {
          source: '/blog/[id]',
          destination: '/blog',
          permanent: true,
        },
        {
          source: '/pharmacy/aisles/[id]',
          destination: '/pharmacy',
          permanent: true,
        },
        {
          source: '/drinks/aisles/[id]',
          destination: '/drinks',
          permanent: true,
        },
        {
          source: '/fresh/aisles/[id]',
          destination: '/fresh',
          permanent: true,
        },
        {
          source: '/recipes/[id]',
          destination: '/recipes',
          permanent: true,
        },
        {
          source: '/brand',
          destination: '/brands',
          permanent: false,
        },
        {
          source: '/toc',
          destination: '/terms',
          permanent: false,
        },
        {
          source: '/start',
          destination: '/',
          permanent: false,
        },
        {
          source: '/free-delivery',
          destination: '/',
          permanent: false,
        },
        {
          source: '/ayazona-office',
          destination: '/office',
          permanent: true,
        },
        {
          source: '/nairobi/kca-university/:slug',
          destination: '/delivery/nairobi/kca-university/:slug',
          permanent: true,
        },
        {
          source: '/nairobi/kca-university',
          destination: '/delivery/nairobi/kca-university',
          permanent: true,
        },
        {
          source: '/recover',
          destination: '/',
          permanent: false,
        },
        {
          source: '/press-and-media',
          destination: '/about',
          permanent: false,
        },
        {
          source: '/feed',
          destination: '/store',
          permanent: true,
        },
        {
          source: '/brand/amani-garden',
          destination: '/brands',
          permanent: false,
        },
        {
          source: '/brand/mama-rocks',
          destination: '/brand/mama-rocks-gourmet-burger',
          permanent: true,
        },
        {
          source: '/brand/360-degrees',
          destination: '/brand/360-degrees-pizza',
          permanent: true,
        },
        {
          source: '/brand/debonairs',
          destination: '/brand/debonairs-pizza',
          permanent: true,
        },
        {
          source: '/support-local',
          destination: '/cuisines/kenyan',
          permanent: false,
        },
        {
          source: '/nairobi',
          destination: '/delivery/nairobi',
          permanent: true,
        },
        {
          source: '/health-safety',
          destination: 'https://help.ayazona.com',
          permanent: false,
        },
        {
          source: '/help',
          destination: 'https://support.ayazona.com',
          permanent: true,
        },
        {
          source: '/beta',
          destination: '/app',
          permanent: false,
        },
        {
          source: '/account/create',
          destination: '/',
          permanent: false,
        },
        {
          source: '/account/login',
          destination: '/',
          permanent: false,
        },
        {
          source: '/delivery/nairobi/cbd',
          destination: '/delivery/nairobi/nairobi-central',
          permanent: true,
        },
        {
          source: '/delivery/nairobi/sunvaller',
          destination: '/delivery/nairobi/sunvalley',
          permanent: true,
        },
        {
          source: '/delivery/nairobi/cbd/:slug',
          destination: '/delivery/nairobi/nairobi-central/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobi/sunvaller/:slug',
          destination: '/delivery/nairobi/sunvalley/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobibalozi/:slug',
          destination: '/delivery/nairobi/balozi/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobikilimani/:slug',
          destination: '/delivery/nairobi/kilimani/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobiupper-hill/:slug',
          destination: '/delivery/nairobi/upper-hill/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobimountain-view/:slug',
          destination: '/delivery/nairobi/mountain-view/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobiloresho/:slug',
          destination: '/delivery/nairobi/loresho/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobi/nyamasaria',
          destination: '/delivery/kisumu/nyamasaria',
          permanent: true,
        },
        {
          source: '/pickup/nairobi/nyamasaria',
          destination: '/pickup/kisumu/nyamasaria',
          permanent: true,
        },
        {
          source: '/delivery/nairobicbd/:slug',
          destination: '/delivery/nairobi/nairobi-central/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobivalley-arcade/:slug',
          destination: '/delivery/nairobi/valley-arcade/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobingumo/:slug',
          destination: '/delivery/nairobi/ngumo/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobihurlingham/:slug',
          destination: '/delivery/nairobi/hurlingham/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobieastleigh/:slug',
          destination: '/delivery/nairobi/eastleigh/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobikaren/:slug',
          destination: '/delivery/nairobi/karen/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobibalozi/:slug',
          destination: '/pickup/nairobi/balozi/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobikilimani/:slug',
          destination: '/pickup/nairobi/kilimani/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobiupper-hill/:slug',
          destination: '/pickup/nairobi/upper-hill/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobimountain-view/:slug',
          destination: '/pickup/nairobi/mountain-view/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobiloresho/:slug',
          destination: '/pickup/nairobi/loresho/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobicbd/:slug',
          destination: '/pickup/nairobi/nairobi-central/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobivalley-arcade/:slug',
          destination: '/pickup/nairobi/valley-arcade/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobingumo/:slug',
          destination: '/pickup/nairobi/ngumo/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobihurlingham/:slug',
          destination: '/pickup/nairobi/hurlingham/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobieastleigh/:slug',
          destination: '/pickup/nairobi/eastleigh/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobikaren/:slug',
          destination: '/pickup/nairobi/karen/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobistarehe/:slug',
          destination: '/pickup/nairobi/starehe/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobistarehe/:slug',
          destination: '/delivery/nairobi/starehe/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobi/multi-media-university',
          destination: '/delivery/nairobi/multimedia-university',
          permanent: true,
        },
        {
          source: '/delivery/nairobi/multi-media-university/:slug',
          destination: '/delivery/nairobi/multimedia-university/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobi/multi-media-university',
          destination: '/pickup/nairobi/multimedia-university',
          permanent: true,
        },
        {
          source: '/pickup/nairobi/multi-media-university/:slug',
          destination: '/pickup/nairobi/multimedia-university/:slug',
          permanent: true,
        },
        {
          source: '/delivery/delivery/:slug*',
          destination: '/delivery/:slug*',
          permanent: true,
        },
        {
          source: '/recipes/recipes/:slug*',
          destination: '/recipes/:slug*',
          permanent: true,
        },
        {
          source: '/pickup/nairobi/cbd',
          destination: '/pickup/nairobi/nairobi-central',
          permanent: true,
        },
        {
          source: '/pickup/nairobi/cdb',
          destination: '/pickup/nairobi/nairobi-central',
          permanent: true,
        },
        {
          source: '/delivery/nairobi/cdb',
          destination: '/delivery/nairobi/nairobi-central',
          permanent: true,
        },
        {
          source: '/merchant/732348',
          destination: '/essentials',
          permanent: true,
        },
        {
          source: '/pickup/nairobi/cdb/:slug',
          destination: '/pickup/nairobi/nairobi-central/:slug',
          permanent: true,
        },
        {
          source: '/cuisines/cuisines/:slug',
          destination: '/cuisines/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobi/cdb/:slug',
          destination: '/delivery/nairobi/nairobi-central/:slug',
          permanent: true,
        },
        {
          source: '/blog/tag/recipes',
          destination: '/recipes',
          permanent: true,
        },
        {
          source: '/delivery/nairobi/aboretum/:slug',
          destination: '/delivery/nairobi/arboretum/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobi/aboretum/:slug',
          destination: '/pickup/nairobi/arboretum/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobi/aboretum',
          destination: '/delivery/nairobi/arboretum',
          permanent: true,
        },
        {
          source: '/delivery/undefined/:slug',
          destination: '/delivery/nairobi/:slug',
          permanent: true,
        },
        {
          source: '/delivery/undefined/:slug*',
          destination: '/delivery/nairobi/:slug*',
          permanent: true,
        },
        {
          source: '/pickup/undefined/:slug',
          destination: '/pickup/nairobi/:slug',
          permanent: true,
        },
        {
          source: '/pickup/undefined/:slug*',
          destination: '/pickup/nairobi/:slug*',
          permanent: true,
        },
        {
          source: '/pickup/kimberly',
          destination: '/pickup/kimberley',
          permanent: true,
        },
        {
          source: '/delivery/kimberly',
          destination: '/delivery/kimberley',
          permanent: true,
        },
        {
          source: '/pickup/kimberly/:slug',
          destination: '/pickup/kimberley/:slug',
          permanent: true,
        },
        {
          source: '/pickup/kimberly/:slug*',
          destination: '/pickup/kimberley/:slug*',
          permanent: true,
        },
        {
          source: '/dine-in/kimberly',
          destination: '/dine-in/kimberley',
          permanent: true,
        },
        {
          source: '/dine-in/kimberly',
          destination: '/dine-in/kimberley',
          permanent: true,
        },
        {
          source: '/dine-in/kimberly/:slug',
          destination: '/dine-in/kimberley/:slug',
          permanent: true,
        },
        {
          source: '/dine-in/kimberly/:slug*',
          destination: '/dine-in/kimberley/:slug*',
          permanent: true,
        },
        {
          source: '/delivery/kimberly/:slug',
          destination: '/delivery/kimberley/:slug',
          permanent: true,
        },
        {
          source: '/delivery/kimberly/:slug*',
          destination: '/delivery/kimberley/:slug*',
          permanent: true,
        },
        {
          source: '/pickup/nairobichiromo/:slug',
          destination: '/pickup/nairobi/chiromo/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobichiromo/:slug',
          destination: '/delivery/nairobi/chiromo/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobichiromo',
          destination: '/pickup/nairobi/chiromo',
          permanent: true,
        },
        {
          source: '/delivery/nairobichiromo',
          destination: '/delivery/nairobi/chiromo',
          permanent: true,
        },
        {
          source: '/pickup/nairobiumoja/:slug',
          destination: '/pickup/nairobi/umoja/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobiumoja/:slug',
          destination: '/delivery/nairobi/umoja/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobiumoja',
          destination: '/pickup/nairobi/umoja',
          permanent: true,
        },
        {
          source: '/delivery/nairobiumoja',
          destination: '/delivery/nairobi/umoja',
          permanent: true,
        },
        {
          source: '/pickup/nairobibrookside/:slug',
          destination: '/pickup/nairobi/brookside/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobibrookside/:slug',
          destination: '/delivery/nairobi/brookside/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobibrookside',
          destination: '/pickup/nairobi/brookside',
          permanent: true,
        },
        {
          source: '/delivery/nairobibrookside',
          destination: '/delivery/nairobi/brookside',
          permanent: true,
        },
        {
          source: '/pickup/nairobingong-road/:slug',
          destination: '/pickup/nairobi/ngong-road/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobingong-road/:slug',
          destination: '/delivery/nairobi/ngong-road/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobingong-road',
          destination: '/pickup/nairobi/ngong-road',
          permanent: true,
        },
        {
          source: '/delivery/nairobingong-road',
          destination: '/delivery/nairobi/ngong-road',
          permanent: true,
        },
        {
          source: '/pickup/nairobiwestlands/:slug',
          destination: '/pickup/nairobi/westlands/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobiwestlands/:slug',
          destination: '/delivery/nairobi/westlands/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobiwestlands',
          destination: '/pickup/nairobi/westlands',
          permanent: true,
        },
        {
          source: '/delivery/nairobiwestlands',
          destination: '/delivery/nairobi/westlands',
          permanent: true,
        },
        {
          source: '/pickup/mombasamamba-village/:slug',
          destination: '/pickup/mombasa/mamba-village/:slug',
          permanent: true,
        },
        {
          source: '/delivery/mombasamamba-village/:slug',
          destination: '/delivery/mombasa/mamba-village/:slug',
          permanent: true,
        },
        {
          source: '/pickup/mombasamamba-village',
          destination: '/pickup/mombasa/mamba-village',
          permanent: true,
        },
        {
          source: '/delivery/mombasamamba-village',
          destination: '/delivery/mombasa/mamba-village',
          permanent: true,
        },
        {
          source: '/pickup/nairobirunda/:slug',
          destination: '/pickup/nairobi/runda/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobirunda/:slug',
          destination: '/delivery/nairobi/runda/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobirunda',
          destination: '/pickup/nairobi/runda',
          permanent: true,
        },
        {
          source: '/delivery/nairobirunda',
          destination: '/delivery/nairobi/runda',
          permanent: true,
        },
        {
          source: '/pickup/nairobilavington/:slug',
          destination: '/pickup/nairobi/lavington/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobilavington/:slug',
          destination: '/delivery/nairobi/lavington/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobilavington',
          destination: '/pickup/nairobi/lavington',
          permanent: true,
        },
        {
          source: '/delivery/nairobilavington',
          destination: '/delivery/nairobi/lavington',
          permanent: true,
        },
        {
          source: '/recipes/recipes/:slug*',
          destination: '/recipes/:slug*',
          permanent: true,
        },
        {
          source: '/pickup/nairobijericho/:slug',
          destination: '/pickup/nairobi/jericho/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobijericho/:slug',
          destination: '/delivery/nairobi/jericho/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobijericho',
          destination: '/pickup/nairobi/jericho',
          permanent: true,
        },
        {
          source: '/delivery/nairobijericho',
          destination: '/delivery/nairobi/jericho',
          permanent: true,
        },
        {
          source: '/pickup/nairobidagoretti/:slug',
          destination: '/pickup/nairobi/dagoretti/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobidagoretti/:slug',
          destination: '/delivery/nairobi/dagoretti/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobidagoretti',
          destination: '/pickup/nairobi/dagoretti',
          permanent: true,
        },
        {
          source: '/delivery/nairobidagoretti',
          destination: '/delivery/nairobi/dagoretti',
          permanent: true,
        },
        {
          source: '/pickup/nairobiaboretum/:slug',
          destination: '/pickup/nairobi/arboretum/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobiaboretum/:slug',
          destination: '/delivery/nairobi/arboretum/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobiaboretum',
          destination: '/pickup/nairobi/arboretum',
          permanent: true,
        },
        {
          source: '/delivery/nairobiaboretum',
          destination: '/delivery/nairobi/arboretum',
          permanent: true,
        },
        {
          source: '/pickup/nairobisunvalley-i/:slug',
          destination: '/pickup/nairobi/sunvalley-i/:slug',
          permanent: true,
        },
        {
          source: '/delivery/nairobisunvalley-i/:slug',
          destination: '/delivery/nairobi/sunvalley-i/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobisunvalley-i',
          destination: '/pickup/nairobi/sunvalley-i',
          permanent: true,
        },
        {
          source: '/delivery/nairobisunvalley-i',
          destination: '/delivery/nairobi/sunvalley-i',
          permanent: true,
        },
        {
          source: '/pickup/nairobi/sunvaller',
          destination: '/pickup/nairobi/sunvalley-i',
          permanent: true,
        },
        {
          source: '/pickup/nairobi/cbd/:slug',
          destination: '/pickup/nairobi/nairobi-central/:slug',
          permanent: true,
        },
        {
          source: '/pickup/nairobi/sunvaller/:slug',
          destination: '/pickup/nairobi/sunvalley-i/:slug',
          permanent: true,
        },
      ];
    },
    distDir: '../../dist/functions/next',
  }
);
