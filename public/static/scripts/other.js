// Branch Scripts
(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode banner closeBanner creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode".split(" "), 0);
branch.init('key_live_meNTCXLMOYwycveZ1sm34meeqymwsUeM');

// Segment Scripts
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
analytics.load("AOxeYUQDrFeKqWzL3UvFeA23xtlRQJT1");
analytics.page();
}}();

//sw
if ('serviceWorker' in navigator) {
console.log('CLIENT: service worker registration in progress.');
navigator.serviceWorker.register('/static/scripts/sw.js').then(function() {
    console.log('CLIENT: service worker registration complete.');
}, function() {
    console.log('CLIENT: service worker registration failure.');
});
} else {
console.log('CLIENT: service worker is not supported.');
}
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-148579900-1');

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P3MT6F6');

// Support
(function(){function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://ayazona.wixanswers.com/apps/widget/v1/ayazona/8b81b3e6-3e03-46ef-8a9b-62fc1c3bc095/en/embed.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}window.addEventListener?window.addEventListener("load",e):window.attachEvent("onload",e),window.AnswersWidget={onLoaded:function(e){window.AnswersWidget.queue.push(e)},queue:[]}}());