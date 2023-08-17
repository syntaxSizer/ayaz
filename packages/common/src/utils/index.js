import API from 'common/src/data/restaurants';

export const getCurrentDatetime = () => {
    const currentDateTime = new Date()
    const dateTime = `${currentDateTime.getFullYear()}-${(currentDateTime.getMonth() + 1)}-${currentDateTime.getDate()} ${currentDateTime.getHours()}:${currentDateTime.getMinutes()}:${currentDateTime.getSeconds()}`;
    return dateTime;
}
export const formatPrice = (n=0) => {
    return `${n.toLocaleString()}`;
}

export const encodeToBase64 = object => {
    const strObject = JSON.stringify(object);
    const strObjectToBase64 = Buffer.from(strObject).toString("base64");
    return strObjectToBase64;
}

export const scroll = (direction, elementRef) => {
    function sideScroll(ref, direction, speed, distance, step) {
        let scrollAmount = 0;

        var slideTimer = setInterval(function() {
            if (direction === "left") {
                ref.current.scrollLeft -= step;
            } else {
                ref.current.scrollLeft += step;
            }

            scrollAmount += step;

            if (scrollAmount >= distance) {
                window.clearInterval(slideTimer);
            }
        }, speed);
    }
    sideScroll(elementRef, direction, 25, 250, 10)
};

export const makeFlatterwavePayment = (currency, amount, user, callback, customizations={
    title: "Ayazona Pay",
    description: "Payment for items in cart"
  }) => {
  FlutterwaveCheckout({
    public_key: "FLWPUBK-a85fbf8199a6e68f32cb1d8dc7ddc569-X",
    tx_ref: new Date().toISOString() + user.user_id,
    amount: amount,
    currency: currency.toLocaleUpperCase(),
    country: "KE",
    payment_options: "mpesa",
    meta: {
      consumer_id: user.user_id,
      //consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: user.email,
      phone_number: user.phone,
      name: `${user.first_name} ${user.last_name}`,
    },
    callback: function (data) {
      console.log(data);
      callback(data)
    },
    onclose: function() {
      // close modal
    },
    customizations,
  });
}

const defaultObjects = [
    {
        "@type":"Organization",
        "@id":"https://www.ayazona.com/#organization",
        "name":"Ayazona",
        "url":"https://www.ayazona.com",
        "sameAs":[
           "https://www.facebook.com/getayazona",
           "https://www.instagram.com/getayazona",
           "https://www.linkedin.com/company/ayazona-oy",
           "https://www.pinterest.com/ayazona",
           "https://twitter.com/getayazona"
        ],
        "logo":{
           "@type":"ImageObject",
           "@id":"https://www.ayazona.com/#logo",
           "inLanguage":"en-US",
           "url":"https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
           "width":512,
           "height":512,
           "caption":"Ayazona"
        },
        "image":{
           "@id":"https://www.ayazona.com/#logo"
        },
        "legalName":"Ayazona Technologies"
     },
     {
        "@type":"WebSite",
        "@id":"https://www.ayazona.com/#website",
        "url":"https://www.ayazona.com",
        "name":"Ayazona",
        "inLanguage":"en-US",
        "description":"Ayazona: Discover and Get Affordable Great Food Delivered",
        "publisher":{
           "@id":"https://www.ayazona.com/#organization"
        },
        "potentialAction":{
           "@type":"SearchAction",
           "target":"https://www.ayazona.com/?q={search_term_string}",
           "query-input":"required name=search_term_string"
        }
    },
];

// JSON LD
export const getDefaultSchema = () => {
    return {
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
              "@type":[
                 "WebPage"
              ],
              "@id":"https://www.ayazona.com#webpage",
              "url":"https://www.ayazona.com",
              "name":"Affordable Food and Grocery Delivery across Africa",
              "isPartOf":{
                 "@id":"https://www.ayazona.com/#website"
              },
              "inLanguage":"en-US",
              "about":{
                 "@id":"https://www.ayazona.com/#organization"
              },
              "datePublished":"2019-08-14T12:45:18+00:00",
              "dateModified":"2020-12-11T13:32:21+00:00",
              "description":"Feeling hungry? Ayazona offers the most affordable on-demand food and grocery delivery services in cities across Africa. Order delivery or pickup and get breakfast, lunch, dinner and more delivered."
           }
        ]
     }
}

export const getAboutPageSchema = () => {
    return {
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "WebPage"
                ],
                "@id":"https://www.ayazona.com/about#webpage",
                "url":"https://www.ayazona.com/about",
                "name":"About",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "datePublished":"2019-08-14T12:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "description":"Ayazona is on a critical mission to make on-demand food delivery affordable for everyone in cities across Africa.",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/about#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/about#breadcrumb",
                "itemListElement": [
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/about",
                            "url":"https://www.ayazona.com/about",
                            "name":"About"
                        }
                    }
                ]
            }
        ]
    }
}

export const getCareersPageSchema = () => {
    return { "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "CollectionPage"
                ],
                "@id":"https://www.ayazona.com/careers#webpage",
                "url":"https://www.ayazona.com/careers",
                "name":"Career Opportunities",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "description":"Help us make on demand food  delivery more reachable and affordable in cities across Africa",
                "datePublished":"2019-08-14T12:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/careers#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/careers#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/careers",
                            "url":"https://www.ayazona.com/careers",
                            "name":"Careers"
                        }
                    }
                ]
            }
        ]
    }
}

export const getAppPageSchema = () => {
    return {
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "CollectionPage"
                ],
                "@id":"https://www.ayazona.com/app#webpage",
                "url":"https://www.ayazona.com/app",
                "name":"Download Ayazona App",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "description":"Download the Ayazona app for and get breakfast, lunch, dinner and more delivered to you at an affordable price.",
                "datePublished":"2019-08-14T12:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/app#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/app#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/app",
                            "url":"https://www.ayazona.com/app",
                            "name":"App"
                        }
                    }
                ]
            }
        ]
    }
}

export const getMediaPageSchema = () => {
    return {
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "CollectionPage"
                ],
                "@id":"https://www.ayazona.com/press-and-media#webpage",
                "url":"https://www.ayazona.com/press-and-media",
                "name":"Press and Media",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "description":"Looking for Ayazona Brand Elements and inforgraphy? Download brand guidelines for media houses or contact us for more information.",
                "datePublished":"2019-08-14T12:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/press-and-media#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/press-and-media#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/press-and-media",
                            "url":"https://www.ayazona.com/press-and-media",
                            "name":"Press &amp; Media"
                        }
                    }
                ]
            }
        ]
    }
}

export const getOfficePageSchema = () => {
    return {
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "CollectionPage"
                ],
                "@id":"https://www.ayazona.com/office#webpage",
                "url":"https://www.ayazona.com/office",
                "name":"Career Opportunities",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "description":"With Ayazona for Office, you can explore and order great meal for your stuff at an affordable price.",
                "datePublished":"2019-08-14T12:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/office#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/office#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/office",
                            "url":"https://www.ayazona.com/office",
                            "name":"Office"
                        }
                    }
                ]
            }
        ]
    }
}

export const getPartnerPageSchema = () => {
    return {
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "CollectionPage"
                ],
                "@id":"https://www.ayazona.com/partner#webpage",
                "url":"https://www.ayazona.com/partner",
                "name":"Partner with Ayazona",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "description":"Grow your business and increase your reach by partnering with Ayazona. Connect with new local customers, boost your digital presence, and receive orders your way.",
                "datePublished":"2019-08-14T12:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/partner#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/partner#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/partner",
                            "url":"https://www.ayazona.com/partner",
                            "name":"Partner"
                        }
                    }
                ]
            }
        ]
    }
}

export const getFleetPageSchema = () => {
    return {
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "CollectionPage"
                ],
                "@id":"https://www.ayazona.com/fleet#webpage",
                "url":"https://www.ayazona.com/fleet",
                "name":"Partner with Ayazona",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "description":"Work around your life with flexible hours and competitive rates at one of Africa's fastest growing start ups. Apply now and ride with Ayazona.",
                "datePublished":"2019-08-14T12:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/fleet#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/fleet#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/fleet",
                            "url":"https://www.ayazona.com/fleet",
                            "name":"Fleet"
                        }
                    }
                ]
            }
        ]
    }
}

export const getContactPageSchema = () => {
    return {
        "@context":"https://schema.org",
        "@graph":[
           ...defaultObjects,
            {
                "@type":"ImageObject",
                "@id":"https://www.ayazona.com/contact/#primaryimage",
                "inLanguage":"en-US",
                "url":"https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width":512,
                "height":512
            },
            {
                "@type":[
                    "WebPage",
                    "ContactPage"
                ],
                "@id":"https://www.ayazona.com/contact#webpage",
                "url":"https://www.ayazona.com/contact",
                "name":"Contact Team Ayazona \u2022 Ayazona",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "primaryImageOfPage":{
                    "@id":"https://www.ayazona.com/contact/#primaryimage"
                },
                "datePublished":"2019-08-14T12:45:18+00:00",
                "dateModified":"2020-04-12T11:56:14+00:00",
                "description":"Get in touch with the Ayazona team for more information about the most affordable on-demand food delivery platform in Africa.",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/contact#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/contact#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/contact",
                            "url":"https://www.ayazona.com/contact",
                            "name":"Contacts"
                        }
                    }
                ]
            }
        ]
    }
}


export const getUnlimitedPageSchema = () => {
    return {
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "CollectionPage"
                ],
                "@id":"https://www.ayazona.com/unlimited#webpage",
                "url":"https://www.ayazona.com/unlimited",
                "name":"Unlimited Deliveries",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "description":"Using Ayazona Unlimited, you can Using Ayazona Unlimited, you can upgrade for 0 shillings delivery fees on all orders over Ksh. 1500 from any merchant. Say goodbye to surge pricing forever.",
                "datePublished":"2019-08-14T12:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/unlimited#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/unlimited#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/unlimited",
                            "url":"https://www.ayazona.com/unlimited",
                            "name":"Unlimited"
                        }
                    }
                ]
           }
        ]
    }
}

export const getTermsPageSchema = () => {
    return {
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "WebPage"
                ],
                "@id":"https://www.ayazona.com/terms#webpage",
                "url":"https://www.ayazona.com/terms",
                "name":"Terms of use",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "datePublished":"2019-08-14T12:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/terms#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/terms#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/terms",
                            "url":"https://www.ayazona.com/terms",
                            "name":"Terms"
                        }
                    }
                ]
            }
        ]
     }
}

export const getPrivacyPageSchema = () => {
    return {
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "WebPage"
                ],
                "@id":"https://www.ayazona.com/privacy#webpage",
                "url":"https://www.ayazona.com/privacy",
                "name":"Terms of use",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "datePublished":"2019-08-14T12:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/privacy#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/privacy#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/privacy",
                            "url":"https://www.ayazona.com/privacy",
                            "name":"Privacy"
                        }
                    }
                ]
            }
        ]
     }
}

export const getPickupPageSchema = () => {
    return {
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "CollectionPage"
                ],
                "@id":"https://www.ayazona.com/pickup#webpage",
                "url":"https://www.ayazona.com/pickup",
                "name":"Order Takeout with Ayazona Pickup",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "description":"With Ayazona Pickup, you can skip the lines, order ahead, and get the food ready for pickup upon your arrival. Say goodbye to the long queues.",
                "datePublished":"2019-08-14T12:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/pickup#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/pickup#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/pickup",
                            "url":"https://www.ayazona.com/pickup",
                            "name":"Pickup"
                        }
                    }
                ]
            }
        ]
     }
}
export const getDineInPageSchema = () => {
    return {
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "CollectionPage"
                ],
                "@id":"https://www.ayazona.com/dine-in#webpage",
                "url":"https://www.ayazona.com/dine-in",
                "name":"Pre-Order for dine in with Ayazona",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "description":"Skip the lines, order ahead, and get the food ready for pickup upon your arrival. Say goodbye to the long queues.",
                "datePublished":"2019-08-14T12:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/dine-in#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/dine-in#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/dine-in",
                            "url":"https://www.ayazona.com/dine-in",
                            "name":"Dine In"
                        }
                    }
                ]
            }
        ]
     }
}

export const getIgnitePageSchema = () => {
    return {
        "@context":"https://schema.org",
        "@graph":[
           ...defaultObjects,
            {
                "@type":[
                    "CollectionPage"
                ],
                "@id":"https://www.ayazona.com/ignite#webpage",
                "url":"https://www.ayazona.com/ignite",
                "name":"Ignite Labs",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "description":"With Ignite Labs, you can help us transform the way food is consumed by avoiding food wastes in cities across Africa",
                "datePublished":"2019-08-14T12:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/ignite#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/ignite#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/ignite",
                            "url":"https://www.ayazona.com/ignite",
                            "name":"Ignite Labs"
                        }
                    }
                ]
            }
        ]
     }
}

export const getTakeoutNearMePageSchema = () => {
    return {
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "WebPage"
                ],
                "@id":"https://www.ayazona.com/pickup-near-me#webpage",
                "url":"https://www.ayazona.com/pickup-near-me",
                "name":"Takeout Near Me",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "datePublished":"2020-04-12T05:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "description":"Order from the most affordable restaurants in your city and akip the lines by walking in when its ready for pickup. Select a location near you and fill up your cart - we'll handle the rest. Just think of us as your go-to on-demand affordable service.",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/pickup-near-me#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/pickup-near-me#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/pickup-near-me",
                            "url":"https://www.ayazona.com/pickup-near-me",
                            "name":"Takeout Near Me"
                        }
                    }
                ]
            }
        ]
     }
}

export const getRestaurantsNearMePageSchema = () => {
    return {
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "WebPage"
                ],
                "@id":"https://www.ayazona.com/restaurants-near-me#webpage",
                "url":"https://www.ayazona.com/restaurants-near-me",
                "name":"Takeout Near Me",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "datePublished":"2020-04-12T05:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "description":"Order from the most affordable restaurants in your city and akip the lines by walking in when its ready for pickup. Select a location near you and fill up your cart - we'll handle the rest. Just think of us as your go-to on-demand affordable service.",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/restaurants-near-me#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/restaurants-near-me#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/restaurants-near-me",
                            "url":"https://www.ayazona.com/restaurants-near-me",
                            "name":"Takeout Near Me"
                        }
                    }
                ]
            }
        ]
     }
}

export const getRestaurantPageExtraSchema = (data) => {
    return {
        "@id": `https://www.ayazona.com/merchant/${data.id}`,
        "@type": `WebPage`,
        "name": `${data.name} ${data.address} • Ayazona`,
        "description": `Order Delivery from ${data.name} ${data.address}. Check out their menu for some delicious Dessert. Lunch, dinner, groceries, drinks, or anything else: Ayazona delivers from all your favorites restaurants on-demand.`,
        "isPartOf": {
            "@id": `https://www.ayazona.com#WebSite`
        },
        "@context": `https://schema.org`}
}

export const getRestaurantMenuSchema = (restaurant, data, location, currency) => {
    const rating = (parseInt(restaurant.preparation_time)+95);
    let rando = (Math.floor(Math.random() * 7) + 1 )
    const menulistItems = {
        '@context': `http://schema.org`,
        '@type': `Restaurant`,
        '@id': `https://www.ayazona.com/merchant/${restaurant.id}`,
        'name': `${restaurant.name} ${restaurant.address}`,
        'image': `https://r.cdn.ayazona.com/${restaurant.cover_image}`,
        'servesCuisine': `${restaurant.speciality}`,
        "priceRange": "$",
        "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 09:00-19:00",
        'hasMenu':{
            '@type': `Menu`,
            'name': `${restaurant.name} ${restaurant.address} Menu`,
            'description': `Order food delivery from. Browse the menu, view popular items, and track your order.`,
            'hasMenuSection':[
                data.map(menu => (
                {
                    '@type': `MenuSection`,
                    'name': `${menu.name}`,
                    'description': `${menu.description}`,
                    'image': `https://r.cdn.ayazona.com/${restaurant.cover_image}`,
                    'offers':{
                        '@type': `Offer`,
                        'availabilityEnds': `T17:22:00`,
                        'availabilityStarts': `T8:22:00`
                    },
                    'hasMenuItem':[
                        menu.RestaurantMenuItem.map(menuItem => (
                        {
                            '@type': `MenuItem`,
                            'name': `${menuItem.name}`,
                            'description': `${menuItem.description}`,
                            'image': `https://r.cdn.ayazona.com/${menuItem.image}`,
                            'offers':{
                                '@type': `Offer`,
                                'price': `${menuItem.price}`,
                                'priceCurrency': `${currency.code}.`
                            },
                            'suitableForDiet': `http://schema.org/GlutenFreeDiet`
                        })),
                        {
                            '@type': `MenuItem`,
                            'name': `Ayazona Ignte`,
                            'description': `Food Rescue`,
                            'image': ``,
                            'offers':{
                                '@type': `Offer`,
                                'price': `80`,
                                'priceCurrency': `${currency.code}.`
                            },
                            'suitableForDiet': `http://schema.org/GlutenFreeDiet`
                        }
                    ]
                })),
                {
                    '@type': `MenuSection`,
                    'name': `Ayazona Ignite`,
                    'description': `Ayazona Ignite`,
                    'image': ``,
                    'offers':{
                        '@type': `Offer`,
                        'availabilityEnds': `T17:22:00`,
                        'availabilityStarts': `T8:22:00`
                    }
                }
            ]
        },
        'address': {
            '@type': `PostalAddress`,
            'streetAddress': `${restaurant.address}`,
            'addressLocality': `${location.state}`,
            'addressRegion': `${location.city}`,
            'addressCountry': `KE`,
            'postalCode': `${location.zip}`
        },
        'aggregateRating': {
            '@type': `AggregateRating`,
            'ratingValue': `4.${rando}`,
            'ratingCount': `${rating}`
        },
        'geo': {
            '@type': `GeoCoordinates`,
            'latitude': `${location.lat}`,
            'longitude': `${location.long}`,
            'potentialAction': {
                '@type': `OrderAction`,
                'target': {
                    '@type': `EntryPoint`,
                    'urlTemplate': `https://www.ayazona.com/merchant/${restaurant.id}?utm_source=google&utm_medium=place_action`,
                    'inLanguage': `en-US`,
                    'actionPlatform': [`http://schema.org/DesktopWebPlatform`]
                },
                'deliveryMethod': [`http://purl.org/goodrelations/v1#DeliveryModeOwnFleet`],
                'priceSpecification': [{
                    '@type': `DeliveryChargeSpecification`,
                    'appliesToDeliveryMethod': `http://purl.org/goodrelations/v1#DeliveryModeOwnFleet`,
                    'priceCurrency': ``,
                    'price': 50.0,
                    'eligibleTransactionVolume': {
                        '@type': `PriceSpecification`,
                        'priceCurrency': `${currency.code}`,
                        'price': 0.0
                    }
                },
                {
                    '@type': `DeliveryChargeSpecification`,
                    'appliesToDeliveryMethod': `http://purl.org/goodrelations/v1#DeliveryModeOwnFleet`,
                    'priceCurrency': `${currency.code}`,
                    'price': 0.0,
                    'eligibleTransactionVolume': {
                        '@type': `PriceSpecification`,
                        'priceCurrency': `${currency.code}`,
                        'price': 150.0
                    }
                }]
            },
        },
        'telephone': `${restaurant.phone}`,
        'url': `https://www.ayazona.com/merchant/${restaurant.id}`,
        "inLanguage":"English"
    };

    return menulistItems;
}

export const getDeliveryOfficialPageSchema = () => {
    return{
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "WebPage"
                ],
                "@id":"https://www.ayazona.com/delivery#webpage",
                "url":"https://www.ayazona.com/delivery",
                "name":"Delivery",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "datePublished":"2020-04-12T05:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "description":"Order from the most affordable restaurants in your city and have it delivered to your door in minutes. Select a location near you and fill up your cart - we'll handle the rest. Just think of us as your go-to on-demand affordable service.",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/delivery#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/delivery#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/delivery",
                            "url":"https://www.ayazona.com/delivery",
                            "name":"Delivery"
                        }
                    }
                ]
            }
        ]
     }
}

export const getDeliveryNearMePageSchema = () => {
    return{
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "WebPage"
                ],
                "@id":"https://www.ayazona.com/delivery-near-me#webpage",
                "url":"https://www.ayazona.com/delivery-near-me",
                "name":"Delivery Near Me",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "datePublished":"2020-04-12T05:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "description":"Order from the most affordable restaurants in your city and have it delivered to your door in minutes. Select a location near you and fill up your cart - we'll handle the rest. Just think of us as your go-to on-demand affordable service.",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/delivery-near-me#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/delivery-near-me#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/delivery-near-me",
                            "url":"https://www.ayazona.com/delivery-near-me",
                            "name":"Delivery Near Me"
                        }
                    }
                ]
            }
        ]
     }
}
export const getDineInNearMePageSchema = () => {
    return{
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "WebPage"
                ],
                "@id":"https://www.ayazona.com/dine-in-near-me#webpage",
                "url":"https://www.ayazona.com/dine-in-near-me",
                "name":"Delivery Near Me",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "datePublished":"2020-04-12T05:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "description":"Pre-order for dine in from the most affordable restaurants in your city and have it delivered to your door in minutes. Select a location near you and fill up your cart - we'll handle the rest. Just think of us as your go-to on-demand affordable service.",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/dine-in-near-me#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/dine-in-near-me#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/dine-in-near-me",
                            "url":"https://www.ayazona.com/dine-in-near-me",
                            "name":"Dine-in Near Me"
                        }
                    }
                ]
            }
        ]
     }
}

export const getTakeoutNearMeCuisinePageSchema = (cuisine) => {
    const newStr = cuisine.charAt(0).toUpperCase() + cuisine.slice(1)
    return {
        "@context":"https://schema.org",
        "@graph":[
           {
              "@type":"Organization",
              "@id":"https://www.ayazona.com/#organization",
              "name":"Ayazona",
              "url":"https://www.ayazona.com",
              "sameAs":[
                 "https://www.facebook.com/getayazona",
                 "https://www.instagram.com/getayazona",
                 "https://www.linkedin.com/company/ayazona-oy",
                 "https://www.pinterest.com/ayazona",
                 "https://twitter.com/getayazona"
              ],
              "logo":{
                 "@type":"ImageObject",
                 "@id":"https://www.ayazona.com/#logo",
                 "inLanguage":"en-US",
                 "url":"https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                 "width":512,
                 "height":512,
                 "caption":"Ayazona"
              },
              "image":{
                 "@id":"https://www.ayazona.com/#logo"
              },
              "legalName":"Ayazona Inc."
           },
           {
              "@type":"WebSite",
              "@id":"https://www.ayazona.com/#website",
              "url":"https://www.ayazona.com",
              "name":"Ayazona",
              "inLanguage":"en-US",
              "description": `${newStr} Takeout Near Me`,
              "publisher":{
                 "@id":"https://www.ayazona.com/#organization"
              },
              "potentialAction":{
                 "@type":"SearchAction",
                 "target":"https://www.ayazona.com/?q={search_term_string}",
                 "query-input":"required name=search_term_string"
              }
           },
           {
              "@type":[
                 "WebPage"
              ],
              "@id": `https://www.ayazona.com/pickup-near-me/${cuisine}#webpage`,
              "url": `https://www.ayazona.com/pickup-near-me/${cuisine}`,
              "name": `${newStr} Delivery Near Me`,
              "isPartOf":{
                 "@id":"https://www.ayazona.com/#website"
              },
              "inLanguage":"en-US",
              "datePublished":"2020-04-12T05:45:18+00:00",
              "dateModified":"2020-12-11T13:32:21+00:00",
              "description": `Find the best ${cuisine}, food, drinks, and groceries near you. Our Fleets deliver from all your favorites places on-demand. Everyone’s favorite delivery app!`,
              "breadcrumb":{
                 "@id": `https://www.ayazona.com/pickup-near-me/${cuisine}#breadcrumb`
              }
           },
           {
              "@type":"BreadcrumbList",
              "@id": `https://www.ayazona.com/pickup-near-me/${cuisine}#breadcrumb`,
              "itemListElement":[
                 {
                    "@type":"ListItem",
                    "position":1,
                    "item":{
                       "@type":"WebPage",
                       "@id":"https://www.ayazona.com",
                       "url":"https://www.ayazona.com",
                       "name":"Ayazona"
                    }
                 },
                 {
                    "@type":"ListItem",
                    "position":2,
                    "item":{
                       "@type":"WebPage",
                       "@id": `https://www.ayazona.com/pickup-near-me`,
                       "url": `https://www.ayazona.com/pickup-near-me`,
                       "name": `Takeout Near Me`
                    }
                 },
                 {
                    "@type":"ListItem",
                    "position":3,
                    "item":{
                       "@type":"WebPage",
                       "@id": `https://www.ayazona.com/pickup-near-me/${cuisine}`,
                       "url": `https://www.ayazona.com/pickup-near-me/${cuisine}`,
                       "name": `${newStr} Takeout Near Me`
                    }
                 }
              ]
           }
        ]
    }
}

export const getDeliveryNearMeCuisinePageSchema = (cuisine) => {
    const newStr = cuisine.charAt(0).toUpperCase() + cuisine.slice(1)
    return {
        "@context":"https://schema.org",
        "@graph":[
           {
              "@type":"Organization",
              "@id":"https://www.ayazona.com/#organization",
              "name":"Ayazona",
              "url":"https://www.ayazona.com",
              "sameAs":[
                 "https://www.facebook.com/getayazona",
                 "https://www.instagram.com/getayazona",
                 "https://www.linkedin.com/company/ayazona-oy",
                 "https://www.pinterest.com/ayazona",
                 "https://twitter.com/getayazona"
              ],
              "logo":{
                 "@type":"ImageObject",
                 "@id":"https://www.ayazona.com/#logo",
                 "inLanguage":"en-US",
                 "url":"https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                 "width":512,
                 "height":512,
                 "caption":"Ayazona"
              },
              "image":{
                 "@id":"https://www.ayazona.com/#logo"
              },
              "legalName":"Ayazona Technologies"
           },
           {
              "@type":"WebSite",
              "@id":"https://www.ayazona.com/#website",
              "url":"https://www.ayazona.com",
              "name":"Ayazona",
              "inLanguage":"en-US",
              "description": `${newStr} Delivery Near Me`,
              "publisher":{
                 "@id":"https://www.ayazona.com/#organization"
              },
              "potentialAction":{
                 "@type":"SearchAction",
                 "target":"https://www.ayazona.com/?q={search_term_string}",
                 "query-input":"required name=search_term_string"
              }
           },
           {
              "@type":[
                 "WebPage"
              ],
              "@id": `https://www.ayazona.com/delivery-near-me/${cuisine}#webpage`,
              "url": `https://www.ayazona.com/delivery-near-me/${cuisine}`,
              "name": `${newStr} Delivery Near Me`,
              "isPartOf":{
                 "@id":"https://www.ayazona.com/#website"
              },
              "inLanguage":"en-US",
              "datePublished":"2020-04-12T05:45:18+00:00",
              "dateModified":"2020-12-11T13:32:21+00:00",
              "description": `Find the best ${cuisine}, food, drinks, and groceries near you. Our Fleets deliver from all your favorites places on-demand. Everyone’s favorite delivery app!`,
              "breadcrumb":{
                 "@id": `https://www.ayazona.com/delivery-near-me/${cuisine}#breadcrumb`
              }
           },
           {
              "@type":"BreadcrumbList",
              "@id": `https://www.ayazona.com/delivery-near-me/${cuisine}#breadcrumb`,
              "itemListElement":[
                 {
                    "@type":"ListItem",
                    "position":1,
                    "item":{
                       "@type":"WebPage",
                       "@id":"https://www.ayazona.com",
                       "url":"https://www.ayazona.com",
                       "name":"Ayazona"
                    }
                 },
                 {
                    "@type":"ListItem",
                    "position":2,
                    "item":{
                       "@type":"WebPage",
                       "@id": `https://www.ayazona.com/delivery-near-me`,
                       "url": `https://www.ayazona.com/delivery-near-me`,
                       "name": `Delivery Near Me`
                    }
                 },
                 {
                    "@type":"ListItem",
                    "position":3,
                    "item":{
                       "@type":"WebPage",
                       "@id": `https://www.ayazona.com/delivery-near-me/${cuisine}`,
                       "url": `https://www.ayazona.com/delivery-near-me/${cuisine}`,
                       "name": `${newStr} Delivery Near Me`
                    }
                 }
              ]
           }
        ]
    }
}

export const getDineInNearMeCuisinePageSchema = (cuisine) => {
    const newStr = cuisine.charAt(0).toUpperCase() + cuisine.slice(1)
    return {
        "@context":"https://schema.org",
        "@graph":[
           {
              "@type":"Organization",
              "@id":"https://www.ayazona.com/#organization",
              "name":"Ayazona",
              "url":"https://www.ayazona.com",
              "sameAs":[
                 "https://www.facebook.com/getayazona",
                 "https://www.instagram.com/getayazona",
                 "https://www.linkedin.com/company/ayazona-oy",
                 "https://www.pinterest.com/ayazona",
                 "https://twitter.com/getayazona"
              ],
              "logo":{
                 "@type":"ImageObject",
                 "@id":"https://www.ayazona.com/#logo",
                 "inLanguage":"en-US",
                 "url":"https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                 "width":512,
                 "height":512,
                 "caption":"Ayazona"
              },
              "image":{
                 "@id":"https://www.ayazona.com/#logo"
              },
              "legalName":"Ayazona Technologies"
           },
           {
              "@type":"WebSite",
              "@id":"https://www.ayazona.com/#website",
              "url":"https://www.ayazona.com",
              "name":"Ayazona",
              "inLanguage":"en-US",
              "description": `${newStr} Dine In Near Me`,
              "publisher":{
                 "@id":"https://www.ayazona.com/#organization"
              },
              "potentialAction":{
                 "@type":"SearchAction",
                 "target":"https://www.ayazona.com/?q={search_term_string}",
                 "query-input":"required name=search_term_string"
              }
           },
           {
              "@type":[
                 "WebPage"
              ],
              "@id": `https://www.ayazona.com/dine-in-near-me/${cuisine}#webpage`,
              "url": `https://www.ayazona.com/dine-in-near-me/${cuisine}`,
              "name": `${newStr} Dine In Near Me`,
              "isPartOf":{
                 "@id":"https://www.ayazona.com/#website"
              },
              "inLanguage":"en-US",
              "datePublished":"2020-04-12T05:45:18+00:00",
              "dateModified":"2020-12-11T13:32:21+00:00",
              "description": `Find the best ${cuisine}, food, and drinks, dine in options near you. Our Fleets deliver from all your favorites places on-demand. Everyone’s favorite delivery app!`,
              "breadcrumb":{
                 "@id": `https://www.ayazona.com/dine-in-near-me/${cuisine}#breadcrumb`
              }
           },
           {
              "@type":"BreadcrumbList",
              "@id": `https://www.ayazona.com/dine-in-near-me/${cuisine}#breadcrumb`,
              "itemListElement":[
                 {
                    "@type":"ListItem",
                    "position":1,
                    "item":{
                       "@type":"WebPage",
                       "@id":"https://www.ayazona.com",
                       "url":"https://www.ayazona.com",
                       "name":"Ayazona"
                    }
                 },
                 {
                    "@type":"ListItem",
                    "position":2,
                    "item":{
                       "@type":"WebPage",
                       "@id": `https://www.ayazona.com/dine-in-near-me`,
                       "url": `https://www.ayazona.com/dine-in-near-me`,
                       "name": `Dine In Near Me`
                    }
                 },
                 {
                    "@type":"ListItem",
                    "position":3,
                    "item":{
                       "@type":"WebPage",
                       "@id": `https://www.ayazona.com/dine-in-near-me/${cuisine}`,
                       "url": `https://www.ayazona.com/dine-in-near-me/${cuisine}`,
                       "name": `${newStr} Dine In Near Me`
                    }
                 }
              ]
           }
        ]
    }
}

export const getDeliveryPageSchema = (city, cuisine="") => {
    return {
        "@context":"https://schema.org",
        "@id": `https://www.ayazona.com/delivery/${city.toLocaleString().toLocaleLowerCase().split(' ').join('-')}/${cuisine ? cuisine.toLocaleString() + "/": ""}`,
        "@type":"WebPage",
        "name": `Ayazona On-Demand Food Delivery in ${city}`,
        "description":"Order delivery or pickup from local restaurants, retail shops, grocers, and more all across your city. Download the app now to get everything you crave, on-demand.",
        "isPartOf": {
           "@id":"https://www.ayazona.com/#website"
        },
        "inLanguage":"en-US",
        "datePublished":"2020-01-08T12:45:18+00:00",
        "dateModified":"2020-12-11T13:32:21+00:00"
    }
}

export const getBreadcrumJSONLD = (url) => {
    return {
        "@reverse":{
            "breadcrumb":{
                "@id":`${url}`
            }
        },
        "itemListElement":[
            {
                "position":1,
                "item":{
                    "@id":"https://www.ayazona.com",
                    "name":"Affordable On-Demand Delivery"
                },
                "@type":"ListItem"
            },{
                "@type":"ListItem",
                "position":2,
                "item":{
                    "@id":`${url}`,
                    "name":"Food Delivery - Affordable On-Demand Delivery"
                }
            }
        ],
        "@context":"https://schema.org",
        "@id":`${url}#BreadcrumbList`,
        "@type":"BreadcrumbList"
    }
}

export const getJSONLDBusinesslisting = (items) => {
    const generatedlistItems = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [items.map((item, index)=>({
        "@type": "ListItem",
        "position": index + 1,
        "item":{
            "@type": "Restaurant",
            "url": `https://www.ayazona.com/merchant/${item.id}?utm_source=google&utm_medium=organic&utm_campaign=restaurant-schema-carousel`,
            "name": item.name,
            "image": `https://r.cdn.ayazona.com/${item.image}`,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": item.address,
                "addressLocality": "Nairobi",
                "addressRegion": "Nairobi",
                "postalCode": "00200",
                "addressCountry": "KE",
                "telephone": item.phone,
            },
            "priceRange": "$",
            "servesCuisine": item.speciality
        }
      }))]
    };
    return generatedlistItems;
}

export const getJSONLDlisting = async (
    url,
    longlat=null,
    cuisine=null) => {
        let items = [];
        if (cuisine) {
            items = await API.getRestaurantsByCuisine(cuisine, longlat);
        }
        else {
            items = await API.getRestaurants(longlat);
            items = items.map(r=> r.Restaurant);
        }
    const generatedlistItems = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [items.map((item, index)=>({
        "@type": "ListItem",
        "position": index + 1,
        "item":{
            "@type": "Restaurant",
            "url": `https://www.ayazona.com/merchant/${item.id}?utm_source=google&utm_medium=organic&utm_campaign=restaurant-schema-carousel`,
            "name": item.name,
            "image": `https://r.cdn.ayazona.com/${item.image}`,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": item.address,
                "addressLocality": "Nairobi",
                "addressRegion": "Nairobi",
                "postalCode": "00200",
                "addressCountry": "KE",
                "telephone": item.phone,
            },
            "priceRange": "$",
            "servesCuisine": item.speciality
        }
      }))]
    };
    return generatedlistItems;
}

export const getCommonJsonld = (url, name) => {
    return {
        "@context":"https://schema.org",
        "@id": url,
        "@type":"WebPage",
        "name": name,
        "description":"Order delivery or pickup from local restaurants, retail shops, grocers, and more all across your city. Download the app now to get everything you crave, on-demand.",
        "isPartOf":{
           "@id":"https://www.ayazona.com/#website"
        },
        "inLanguage":"en-US",
        "datePublished":"2020-06-07T15:45:18+00:00",
        "dateModified":"2020-12-11T13:32:21+00:00"
    }
}

export const getBlogPageSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "publisher": {
            "@type": "Organization",
            "name": "Ayazona Blog",
            "url": "https://www.ayazona.com/blog",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            }
        },
        "url": "https://www.ayazona.com/blog",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.ayazona.com/blog"
        },
        "description": "Ayazona Blog: Community. Announcements. Stories."
    }
}

export const getEssentialsPageSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "publisher": {
            "@type": "Organization",
            "name": "Household Essentials Delivery",
            "url": "https://www.ayazona.com/essentials",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            }
        },
        "url": "https://www.ayazona.com/essentials",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.ayazona.com/essentials"
        },
        "description": "Buy your favorite household essentials online with Ayazona. Order air fresheners and candles, cleaners, cleaning tools, and more from local and national retailers near you and enjoy on-demand, affordable delivery or pickup within 30 minutes."
    }
}

export const getStorePageSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "publisher": {
            "@type": "Organization",
            "name": "Household Essentials Delivery",
            "url": "https://www.ayazona.com/store",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            }
        },
        "url": "https://www.ayazona.com/store",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.ayazona.com/store"
        },
        "description": "Buy your favorite household essentials online with Ayazona. Order air fresheners and candles, cleaners, cleaning tools, and more from local and national retailers near you and enjoy on-demand, affordable delivery or pickup within 30 minutes."
    }
}

export const getStoreInnerPageSchema = (Aisle) => {
    return {
        "@context": "https://schema.org",
        "@type": "Series",
        "publisher": {
            "@type": "Organization",
            "name": "Household Essentials",
            "url": "https://www.ayazona.com/store",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            }
        },
        "url": `https://www.ayazona.com/store/${Aisle.slug}`,
        "name": `${title}`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.ayazona.com/store/${Aisle.slug}`
        }
    }
}

export const getFreshPageSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "publisher": {
            "@type": "Organization",
            "name": "Grocery Delivery",
            "url": "https://www.ayazona.com/fresh",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            }
        },
        "url": "https://www.ayazona.com/fresh",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.ayazona.com/fresh"
        },
        "description": "We are working to offer diversed selection like a supermarket, fantastic quality and really low prices. The freshest fruit, the best vegetables, a large selection of fresh fish and seafood, and incredibly tender meat."
    }
}

export const getDrinksPageSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "publisher": {
            "@type": "Organization",
            "name": "Drinks Delivery",
            "url": "https://www.ayazona.com/drinks",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            }
        },
        "url": "https://www.ayazona.com/drinks",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.ayazona.com/drinks"
        },
        "description": "Do You Need Drinks Delivered? Order online from Ayazona Drinks within your area and get wines, spirits, ciders and beer delivered to your door."
    }
}

export const getPharmacyPageSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "publisher": {
            "@type": "Organization",
            "name": "Pharmacy Delivery",
            "url": "https://www.ayazona.com/pharmacy",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            }
        },
        "url": "https://www.ayazona.com/pharmacy",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.ayazona.com/pharmacy"
        },
        "description": "Buy your over the counter medication online with Ayazona Pharmacy. Order pain killers and health care equipment, eye, ear care, and more from local and national certified pharmacies near you and enjoy on-demand, affordable delivery or pickup within 30 minutes."
    }
}

export const getDrinksAislePageSchema = (id, title) => {
    return {
        "@context": "https://schema.org",
        "@type": "Series",
        "publisher": {
            "@type": "Organization",
            "name": "Drinks Delivery",
            "url": "https://www.ayazona.com/drinks",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            }
        },
        "url": `https://www.ayazona.com/drinks/aisles/${id}`,
        "name": `${title}`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.ayazona.com/drinks"
        }
    }
}

export const getEssentialsAislePageSchema = (id, title) => {
    return {
        "@context": "https://schema.org",
        "@type": "Series",
        "publisher": {
            "@type": "Organization",
            "name": "Household Essentials",
            "url": "https://www.ayazona.com/essentials",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            }
        },
        "url": `https://www.ayazona.com/essentials/aisles/${id}`,
        "name": `${title}`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.ayazona.com/essentials"
        }
    }
}

export const getStoreAislePageSchema = (id, Aisle, title) => {
    return {
        "@context": "https://schema.org",
        "@type": "Series",
        "publisher": {
            "@type": "Organization",
            "name": "Household Essentials",
            "url": "https://www.ayazona.com/store",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            }
        },
        "url": `https://www.ayazona.com/store/${Aisle.slug}/aisle/${id}`,
        "name": `${title}`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.ayazona.com/store/${Aisle.slug}`
        }
    }
}

export const getFreshAislePageSchema = (id, title) => {
    return {
        "@context": "https://schema.org",
        "@type": "Series",
        "publisher": {
            "@type": "Organization",
            "name": `Grocery Delivery`,
            "url": "https://www.ayazona.com/fresh",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            }
        },
        "url": `https://www.ayazona.com/fresh/aisles/${id}`,
        "name": `${title}`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.ayazona.com/fresh"
        }
    }
}

export const getPharmacyAislePageSchema = (id, title) => {
    return {
        "@context": "https://schema.org",
        "@type": "Series",
        "publisher": {
            "@type": "Organization",
            "name": `Pharmacy Delivery`,
            "url": "https://www.ayazona.com/pharmacy",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            }
        },
        "url": `https://www.ayazona.com/pharmacy/aisles/${id}`,
        "name": `${title}`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.ayazona.com/pharmacy"
        }
    }
}

export const getRecipePageSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "publisher": {
            "@type": "Organization",
            "name": "Recipes",
            "url": "https://www.ayazona.com/recipes",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            }
        },
        "url": "https://www.ayazona.com/recipes",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.ayazona.com/recipes"
        },
        "description": "Recipes and whole dinners with one click! - Ayazona"
    }
}

export const getBlogTagPageSchema = (tag) => {
    return {
        "@context": "https://schema.org",
        "@type": "Series",
        "publisher": {
            "@type": "Organization",
            "name": "Ayazona Blog",
            "url": "https://www.ayazona.com/blog",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            }
        },
        "url": `https://www.ayazona.com/blog/tag/${tag}`,
        "name": `${tag}`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.ayazona.com/blog"
        }
    }
}

export const getBlogPostPageSchema = (post) => {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "publisher": {
            "@type": "Organization",
            "name": "Ayazona Blog",
            "url": "https://www.ayazona.com/blog",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            }
        },
        "author": {
            "@type": "Person",
            "name": "Ayazona",
            "image": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            },
            "url": "https://www.ayazona.com",
            "sameAs": [
                "https://twitter.com/getAyazona"
            ]
        },
        "headline": `${post[0].title}`,
        "url": `https://www.ayazona.com/blog/${post[0].slug}`,
        "datePublished": `${post[0].published_at}`,
        "dateModified": `${post[0].updated_at}`,
        "image": {
            "@type": "ImageObject",
            "url": `${post[0].feature_image}`,
            "width": 1065,
            "height": 500
        },
        "keywords": `${post[0].tag}`,
        "description": `${post[0].meta_description}`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.ayazona.com/blog"
        }
    }
}

export const getBlogRecipePageSchema = (post) => {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "publisher": {
            "@type": "Organization",
            "name": "Recipes",
            "url": "https://www.ayazona.com/recipes",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            }
        },
        "author": {
            "@type": "Person",
            "name": "Ayazona",
            "image": {
                "@type": "ImageObject",
                "url": "https://cdn.ayazona.com/web-assets/img/app_icon-web.png",
                "width": 500,
                "height": 500
            },
            "url": "https://www.ayazona.com",
            "sameAs": [
                "https://twitter.com/getAyazona"
            ]
        },
        "headline": `${post[0].title}`,
        "url": `https://www.ayazona.com/recipes/${post[0].slug}`,
        "datePublished": `${post[0].published_at}`,
        "dateModified": `${post[0].updated_at}`,
        "image": {
            "@type": "ImageObject",
            "url": `${post[0].feature_image}`,
            "width": 1065,
            "height": 500
        },
        "keywords": `${post[0].tag}`,
        "description": `${post[0].meta_description}`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.ayazona.com/recipes"
        }
    }
}

export const getBrandsPageSchema = () => {
    return {
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "WebPage"
                ],
                "@id":"https://www.ayazona.com/brand#webpage",
                "url":"https://www.ayazona.com/brands",
                "name":"Restaurant Delivery Near You • Order Online &bull; Affordable On-Demand Delivery",
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "datePublished":"2020-04-16T05:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "description":"Order the best of your city delivered to your door in minutes. Select a location near you and fill up your cart - we'll handle the rest. ",
                "breadcrumb":{
                    "@id":"https://www.ayazona.com/brand#breadcrumb"
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id":"https://www.ayazona.com/brand#breadcrumb",
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com/brands",
                            "url":"https://www.ayazona.com/brands",
                            "name":"Restaurants"
                        }
                    }
                ]
            }
        ]
    }
}

export const getBrandPageSchema = (brand) => {
    const url = brand.split(' ').join('-').split("'").join('').toLocaleString().toLowerCase();
    return {
        "@context":"https://schema.org",
        "@graph":[
            ...defaultObjects,
            {
                "@type":[
                    "WebPage"
                ],
                "@id":`https://www.ayazona.com/brand/${url}#webpage`,
                "url":`https://www.ayazona.com/brand/${url}`,
                "name": `${brand} Delivery Near You`,
                "isPartOf":{
                    "@id":"https://www.ayazona.com/#website"
                },
                "inLanguage":"en-US",
                "datePublished":"2020-04-16T05:45:18+00:00",
                "dateModified":"2020-12-11T13:32:21+00:00",
                "description":"Order from Amani Garden and have it delivered to you.  Select a location near you and fill up your cart - we'll handle the rest. ",
                "breadcrumb":{
                    "@id": `https://www.ayazona.com/brand/${url}#breadcrumb`
                }
            },
            {
                "@type":"BreadcrumbList",
                "@id": `https://www.ayazona.com/brand/${url}#breadcrumb`,
                "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "item":{
                            "@type":"WebPage",
                            "@id":"https://www.ayazona.com",
                            "url":"https://www.ayazona.com",
                            "name":"Ayazona"
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "item":{
                            "@type":"WebPage",
                            "@id": `https://www.ayazona.com/brands`,
                            "url": `https://www.ayazona.com/brands`,
                            "name": `Restaurants`
                        }
                    },
                    {
                        "@type":"ListItem",
                        "position":3,
                        "item":{
                            "@type":"WebPage",
                            "@id": `https://www.ayazona.com/brand/${url}`,
                            "url": `https://www.ayazona.com/brand/${url}`,
                            "name": `${brand}`
                        }
                    }
                ]
            }
        ]
    }
}


export const getDishPageSchema = () =>{
    return {
        "@context":"https://schema.org",
        "@graph":[
        ...defaultObjects,
        {
            "@type": [
                "WebPage"
            ],
            "@id": "https://www.ayazona.com/restaurants-near-me#webpage",
            "url": "https://www.ayazona.com/delivery/dish",
            "name": "Food Delivery & Take Out by Dishes on Ayazona",
            "isPartOf": {
                "@id": "https://www.ayazona.com/#website"
            },
            "inLanguage": "en-US",
            "datePublished": "2020-08-22T16:25:18+00:00",
            "dateModified": "2020-12-08T12:32:21+00:00",
            "description": "Browse by dish to find food delivery or takeout from restaurants near you. View menus, check out restaurant reviews and photos, and order online for delivery or to go orders.",
            "breadcrumb": {
                "@id": "https://www.ayazona.com/restaurants-near-me#breadcrumb"
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.ayazona.com/restaurants-near-me#breadcrumb",
            "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "item": {
                            "@type": "WebPage",
                            "@id": "https://www.ayazona.com",
                            "url": "https://www.ayazona.com",
                            "name": "Ayazona"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "item": {
                            "@type": "WebPage",
                            "@id": "https://www.ayazona.com/delivery/dish",
                            "url": "https://www.ayazona.com/delivery/dish",
                            "name": "Dishes"
                        }
                    }
                ]
            }
        ]
    };
}

export const getSpecificDishPageSchema = (dishName, dishLink) => {
    return {
        "@context":"https://schema.org",
        "@graph":[
        ...defaultObjects,
        {
              "@type":"WebSite",
              "@id":"https://www.ayazona.com/#website",
              "url":"https://www.ayazona.com",
              "name":"Ayazona",
              "inLanguage":"en-US",
              "description": `${dishName} Delivery Near You | Best Restaurants & Deals | Ayazona`,
              "publisher":{
                 "@id":"https://www.ayazona.com/#organization"
              },
              "potentialAction":{
                 "@type":"SearchAction",
                 "target":"https://www.ayazona.com/?q={search_term_string}",
                 "query-input":"required name=search_term_string"
              }
           },
           {
              "@type":[
                 "WebPage"
              ],
              "@id":"https://www.ayazona.com/restaurants-near-me#webpage",
              "url": `https://www.ayazona.com/delivery/dish/${dishLink}`,
              "name": `${dishName} Delivery Near You | Best Restaurants & Deals | Ayazona`,
              "isPartOf":{
                 "@id":"https://www.ayazona.com/#website"
              },
              "inLanguage":"en-US",
              "datePublished":"2020-08-22T16:25:18+00:00",
              "dateModified":"2020-08-22T16:25:18+00:00",
              "description": `Get ${dishName} delivered from national chains, local favorites, or new neighborhood restaurants, on Ayazona. Order online, and get ${dishName} delivered, fast.`,
              "breadcrumb":{
                 "@id":"https://www.ayazona.com/restaurants-near-me#breadcrumb"
              }
           },
           {
              "@type":"BreadcrumbList",
              "@id":"https://www.ayazona.com/restaurants-near-me#breadcrumb",
              "itemListElement":[
                 {
                    "@type":"ListItem",
                    "position":1,
                    "item":{
                       "@type":"WebPage",
                       "@id":"https://www.ayazona.com",
                       "url":"https://www.ayazona.com",
                       "name":"Ayazona"
                    }
                 },
                 {
                     "@type": "ListItem",
                     "position": 2,
                     "item": {
                         "@type": "WebPage",
                         "@id": "https://www.ayazona.com/delivery/dish",
                         "url": "https://www.ayazona.com/delivery/dish",
                         "name": "Dishes"
                     }
                 },
                 {
                    "@type":"ListItem",
                    "position":3,
                    "item":{
                       "@type":"WebPage",
                       "@id": `https://www.ayazona.com/delivery/dish/${dishLink}`,
                       "url": `https://www.ayazona.com/delivery/dish/${dishLink}`,
                       "name": `${dishName}`
                    }
                 }
              ]
           }
        ]
     }
}

export const getHealthResponsePageSchema = () => {
    return {
        "@context": "https://schema.org",
        "@graph": [
            ...defaultObjects,
            {
            "@type": ["WebPage"],
            "@id": "https://www.ayazona.com/health-safety#webpage",
            "url": "https://www.ayazona.com/health-safety",
            "name": "Our measures to keep you safe | COVID-19",
            "isPartOf": {
                "@id": "https://www.ayazona.com/#website"
            },
            "inLanguage": "en-US",
            "datePublished": "2020-04-07T14:04:21+00:00",
            "dateModified": "2020-12-08T12:32:21+00:00",
            "description": "Our Efforts To Ensure Safe and Uninterrupted Delivery",
            "breadcrumb": {
                "@id": "https://www.ayazona.com/health-safety#breadcrumb"
            }
        }, {
            "@type": "BreadcrumbList",
            "@id": "https://www.ayazona.com/health-safety#breadcrumb",
            "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "WebPage",
                    "@id": "https://www.ayazona.com",
                    "url": "https://www.ayazona.com",
                    "name": "Ayazona"
                }
            }, {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@type": "WebPage",
                    "@id": "https://www.ayazona.com/health-safety",
                    "url": "https://www.ayazona.com/health-safety",
                    "name": "Health"
                }
            }]
        }]
    }
};

export const getSearchPageSchema1 = () => {
    return {
        "@context": "https://schema.org",
        "@id": "https://www.ayazona.com/search",
        "@type": "WebPage",
        "name": "Ayazona On-Demand Food Delivery in Nairobi",
        "description": "Order delivery or pickup from local restaurants, retail shops, grocers, and more all across your city. Download the app now to get everything you crave, on-demand.",
        "isPartOf": {
            "@id": "https://www.ayazona.com/#website"
        },
        "inLanguage": "en-US",
        "datePublished": "2020-04-20T12:45:18+00:00",
        "dateModified": "2020-12-08T12:32:21+00:00"
    }
}

export const getSearchPageSchema2 = () => {
    return {
        "@reverse": {
            "breadcrumb": {
                "@id": "https://www.ayazona.com/search/"
            }
        },
        "itemListElement": [{
            "position": 1,
            "item": {
                "@id": "https://www.ayazona.com",
                "name": "Ayazona"
            },
            "@type": "ListItem"
        }, {
            "@type": "ListItem",
            "position": 2,
            "item": {
                "@id": "https://www.ayazona.com/search",
                "name": "Affordable Delivery"
            }
        }],
        "@context": "https://schema.org",
        "@id": "#BreadcrumbList",
        "@type": "BreadcrumbList"
    }
}

export const getSearchPageSchema3 = () => {
    return {
        "@context": "https://schema.org",
        "@id": "#MainEntityOfPage",
        "@type": "ItemList",
        "mainEntityOfPage": {
            "@id": "https://www.ayazona.com/search/"
        },
        "name": "Food",
        "numberOfItems": 150,
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "url": "https://www.ayazona.com/merchant/19"
        }, {
            "@type": "ListItem",
            "position": 2,
            "url": "https://www.ayazona.com/merchant/25"
        }, {
            "@type": "ListItem",
            "position": 3,
            "url": "https://www.ayazona.com/merchant/26"
        }, {
            "@type": "ListItem",
            "position": 4,
            "url": "https://www.ayazona.com/merchant/2"
        }, {
            "@type": "ListItem",
            "position": 5,
            "url": "https://www.ayazona.com/merchant/3"
        }, {
            "@type": "ListItem",
            "position": 6,
            "url": "https://www.ayazona.com/merchant/4"
        }, {
            "@type": "ListItem",
            "position": 7,
            "url": "https://www.ayazona.com/merchant/5"
        }, {
            "@type": "ListItem",
            "position": 8,
            "url": "https://www.ayazona.com/merchant/6"
        }, {
            "@type": "ListItem",
            "position": 9,
            "url": "https://www.ayazona.com/merchant/7"
        }, {
            "@type": "ListItem",
            "position": 10,
            "url": "https://www.ayazona.com/merchant/8"
        }, {
            "@type": "ListItem",
            "position": 11,
            "url": "https://www.ayazona.com/merchant/9"
        }, {
            "@type": "ListItem",
            "position": 12,
            "url": "https://www.ayazona.com/merchant/10"
        }, {
            "@type": "ListItem",
            "position": 13,
            "url": "https://www.ayazona.com/merchant/11"
        }, {
            "@type": "ListItem",
            "position": 14,
            "url": "https://www.ayazona.com/merchant/13"
        }, {
            "@type": "ListItem",
            "position": 15,
            "url": "https://www.ayazona.com/merchant/14"
        }, {
            "@type": "ListItem",
            "position": 16,
            "url": "https://www.ayazona.com/merchant/15"
        }, {
            "@type": "ListItem",
            "position": 17,
            "url": "https://www.ayazona.com/merchant/16"
        }, {
            "@type": "ListItem",
            "position": 18,
            "url": "https://www.ayazona.com/merchant/17"
        }, {
            "@type": "ListItem",
            "position": 19,
            "url": "https://www.ayazona.com/merchant/18"
        }, {
            "@type": "ListItem",
            "position": 20,
            "url": "https://www.ayazona.com/merchant/732452"
        }, {
            "@type": "ListItem",
            "position": 21,
            "url": "https://www.ayazona.com/merchant/20"
        }, {
            "@type": "ListItem",
            "position": 22,
            "url": "https://www.ayazona.com/merchant/21"
        }, {
            "@type": "ListItem",
            "position": 23,
            "url": "https://www.ayazona.com/merchant/22"
        }, {
            "@type": "ListItem",
            "position": 24,
            "url": "https://www.ayazona.com/merchant/23"
        }, {
            "@type": "ListItem",
            "position": 25,
            "url": "https://www.ayazona.com/merchant/24"
        }, {
            "@type": "ListItem",
            "position": 26,
            "url": "https://www.ayazona.com/merchant/27"
        }, {
            "@type": "ListItem",
            "position": 27,
            "url": "https://www.ayazona.com/merchant/29"
        }, {
            "@type": "ListItem",
            "position": 28,
            "url": "https://www.ayazona.com/merchant/30"
        }, {
            "@type": "ListItem",
            "position": 29,
            "url": "https://www.ayazona.com/merchant/31"
        }, {
            "@type": "ListItem",
            "position": 30,
            "url": "https://www.ayazona.com/merchant/32"
        }, {
            "@type": "ListItem",
            "position": 31,
            "url": "https://www.ayazona.com/merchant/732453"
        }, {
            "@type": "ListItem",
            "position": 32,
            "url": "https://www.ayazona.com/merchant/732328"
        }, {
            "@type": "ListItem",
            "position": 33,
            "url": "https://www.ayazona.com/merchant/732329"
        }, {
            "@type": "ListItem",
            "position": 34,
            "url": "https://www.ayazona.com/merchant/732330"
        }, {
            "@type": "ListItem",
            "position": 35,
            "url": "https://www.ayazona.com/merchant/732331"
        }, {
            "@type": "ListItem",
            "position": 36,
            "url": "https://www.ayazona.com/merchant/732332"
        }, {
            "@type": "ListItem",
            "position": 37,
            "url": "https://www.ayazona.com/merchant/732334"
        }, {
            "@type": "ListItem",
            "position": 38,
            "url": "https://www.ayazona.com/merchant/732335"
        }, {
            "@type": "ListItem",
            "position": 39,
            "url": "https://www.ayazona.com/merchant/732336"
        }, {
            "@type": "ListItem",
            "position": 40,
            "url": "https://www.ayazona.com/merchant/732337"
        }, {
            "@type": "ListItem",
            "position": 41,
            "url": "https://www.ayazona.com/merchant/732338"
        }, {
            "@type": "ListItem",
            "position": 42,
            "url": "https://www.ayazona.com/merchant/732339"
        }, {
            "@type": "ListItem",
            "position": 43,
            "url": "https://www.ayazona.com/merchant/732340"
        }, {
            "@type": "ListItem",
            "position": 44,
            "url": "https://www.ayazona.com/merchant/732341"
        }, {
            "@type": "ListItem",
            "position": 45,
            "url": "https://www.ayazona.com/merchant/732342"
        }, {
            "@type": "ListItem",
            "position": 46,
            "url": "https://www.ayazona.com/merchant/732343"
        }, {
            "@type": "ListItem",
            "position": 47,
            "url": "https://www.ayazona.com/merchant/732344"
        }, {
            "@type": "ListItem",
            "position": 48,
            "url": "https://www.ayazona.com/merchant/732345"
        }, {
            "@type": "ListItem",
            "position": 49,
            "url": "https://www.ayazona.com/merchant/732346"
        }, {
            "@type": "ListItem",
            "position": 50,
            "url": "https://www.ayazona.com/merchant/732347"
        }, {
            "@type": "ListItem",
            "position": 51,
            "url": "https://www.ayazona.com/merchant/732348"
        }, {
            "@type": "ListItem",
            "position": 52,
            "url": "https://www.ayazona.com/merchant/732349"
        }, {
            "@type": "ListItem",
            "position": 53,
            "url": "https://www.ayazona.com/merchant/732350"
        }, {
            "@type": "ListItem",
            "position": 54,
            "url": "https://www.ayazona.com/merchant/732351"
        }, {
            "@type": "ListItem",
            "position": 55,
            "url": "https://www.ayazona.com/merchant/732352"
        }, {
            "@type": "ListItem",
            "position": 56,
            "url": "https://www.ayazona.com/merchant/732353"
        }, {
            "@type": "ListItem",
            "position": 57,
            "url": "https://www.ayazona.com/merchant/732354"
        }, {
            "@type": "ListItem",
            "position": 58,
            "url": "https://www.ayazona.com/merchant/732355"
        }, {
            "@type": "ListItem",
            "position": 59,
            "url": "https://www.ayazona.com/merchant/732356"
        }, {
            "@type": "ListItem",
            "position": 60,
            "url": "https://www.ayazona.com/merchant/732357"
        }, {
            "@type": "ListItem",
            "position": 61,
            "url": "https://www.ayazona.com/merchant/732358"
        }, {
            "@type": "ListItem",
            "position": 62,
            "url": "https://www.ayazona.com/merchant/732359"
        }, {
            "@type": "ListItem",
            "position": 63,
            "url": "https://www.ayazona.com/merchant/732360"
        }, {
            "@type": "ListItem",
            "position": 64,
            "url": "https://www.ayazona.com/merchant/732361"
        }, {
            "@type": "ListItem",
            "position": 65,
            "url": "https://www.ayazona.com/merchant/732362"
        }, {
            "@type": "ListItem",
            "position": 66,
            "url": "https://www.ayazona.com/merchant/732363"
        }, {
            "@type": "ListItem",
            "position": 67,
            "url": "https://www.ayazona.com/merchant/732364"
        }, {
            "@type": "ListItem",
            "position": 68,
            "url": "https://www.ayazona.com/merchant/732365"
        }, {
            "@type": "ListItem",
            "position": 69,
            "url": "https://www.ayazona.com/merchant/732366"
        }, {
            "@type": "ListItem",
            "position": 70,
            "url": "https://www.ayazona.com/merchant/732367"
        }, {
            "@type": "ListItem",
            "position": 71,
            "url": "https://www.ayazona.com/merchant/732368"
        }, {
            "@type": "ListItem",
            "position": 72,
            "url": "https://www.ayazona.com/merchant/732369"
        }, {
            "@type": "ListItem",
            "position": 73,
            "url": "https://www.ayazona.com/merchant/732370"
        }, {
            "@type": "ListItem",
            "position": 74,
            "url": "https://www.ayazona.com/merchant/732371"
        }, {
            "@type": "ListItem",
            "position": 75,
            "url": "https://www.ayazona.com/merchant/732372"
        }, {
            "@type": "ListItem",
            "position": 76,
            "url": "https://www.ayazona.com/merchant/732373"
        }, {
            "@type": "ListItem",
            "position": 77,
            "url": "https://www.ayazona.com/merchant/732374"
        }, {
            "@type": "ListItem",
            "position": 78,
            "url": "https://www.ayazona.com/merchant/732375"
        }, {
            "@type": "ListItem",
            "position": 79,
            "url": "https://www.ayazona.com/merchant/732376"
        }, {
            "@type": "ListItem",
            "position": 80,
            "url": "https://www.ayazona.com/merchant/732377"
        }, {
            "@type": "ListItem",
            "position": 81,
            "url": "https://www.ayazona.com/merchant/732378"
        }, {
            "@type": "ListItem",
            "position": 82,
            "url": "https://www.ayazona.com/merchant/732379"
        }, {
            "@type": "ListItem",
            "position": 83,
            "url": "https://www.ayazona.com/merchant/732380"
        }, {
            "@type": "ListItem",
            "position": 84,
            "url": "https://www.ayazona.com/merchant/732381"
        }, {
            "@type": "ListItem",
            "position": 85,
            "url": "https://www.ayazona.com/merchant/732382"
        }, {
            "@type": "ListItem",
            "position": 86,
            "url": "https://www.ayazona.com/merchant/732383"
        }, {
            "@type": "ListItem",
            "position": 87,
            "url": "https://www.ayazona.com/merchant/732384"
        }, {
            "@type": "ListItem",
            "position": 88,
            "url": "https://www.ayazona.com/merchant/732385"
        }, {
            "@type": "ListItem",
            "position": 89,
            "url": "https://www.ayazona.com/merchant/732386"
        }, {
            "@type": "ListItem",
            "position": 90,
            "url": "https://www.ayazona.com/merchant/732387"
        }, {
            "@type": "ListItem",
            "position": 91,
            "url": "https://www.ayazona.com/merchant/732388"
        }, {
            "@type": "ListItem",
            "position": 92,
            "url": "https://www.ayazona.com/merchant/732389"
        }, {
            "@type": "ListItem",
            "position": 93,
            "url": "https://www.ayazona.com/merchant/732390"
        }, {
            "@type": "ListItem",
            "position": 94,
            "url": "https://www.ayazona.com/merchant/732391"
        }, {
            "@type": "ListItem",
            "position": 95,
            "url": "https://www.ayazona.com/merchant/732392"
        }, {
            "@type": "ListItem",
            "position": 96,
            "url": "https://www.ayazona.com/merchant/732393"
        }, {
            "@type": "ListItem",
            "position": 97,
            "url": "https://www.ayazona.com/merchant/732394"
        }, {
            "@type": "ListItem",
            "position": 98,
            "url": "https://www.ayazona.com/merchant/732395"
        }, {
            "@type": "ListItem",
            "position": 99,
            "url": "https://www.ayazona.com/merchant/732396"
        }, {
            "@type": "ListItem",
            "position": 100,
            "url": "https://www.ayazona.com/merchant/732397"
        }, {
            "@type": "ListItem",
            "position": 101,
            "url": "https://www.ayazona.com/merchant/732398"
        }, {
            "@type": "ListItem",
            "position": 102,
            "url": "https://www.ayazona.com/merchant/732399"
        }, {
            "@type": "ListItem",
            "position": 103,
            "url": "https://www.ayazona.com/merchant/732400"
        }, {
            "@type": "ListItem",
            "position": 104,
            "url": "https://www.ayazona.com/merchant/732401"
        }, {
            "@type": "ListItem",
            "position": 105,
            "url": "https://www.ayazona.com/merchant/732402"
        }, {
            "@type": "ListItem",
            "position": 106,
            "url": "https://www.ayazona.com/merchant/732403"
        }, {
            "@type": "ListItem",
            "position": 107,
            "url": "https://www.ayazona.com/merchant/732407"
        }, {
            "@type": "ListItem",
            "position": 108,
            "url": "https://www.ayazona.com/merchant/732408"
        }, {
            "@type": "ListItem",
            "position": 109,
            "url": "https://www.ayazona.com/merchant/732409"
        }, {
            "@type": "ListItem",
            "position": 110,
            "url": "https://www.ayazona.com/merchant/732410"
        }, {
            "@type": "ListItem",
            "position": 111,
            "url": "https://www.ayazona.com/merchant/732411"
        }, {
            "@type": "ListItem",
            "position": 112,
            "url": "https://www.ayazona.com/merchant/732412"
        }, {
            "@type": "ListItem",
            "position": 113,
            "url": "https://www.ayazona.com/merchant/732413"
        }, {
            "@type": "ListItem",
            "position": 114,
            "url": "https://www.ayazona.com/merchant/732414"
        }, {
            "@type": "ListItem",
            "position": 115,
            "url": "https://www.ayazona.com/merchant/732415"
        }, {
            "@type": "ListItem",
            "position": 116,
            "url": "https://www.ayazona.com/merchant/732416"
        }, {
            "@type": "ListItem",
            "position": 117,
            "url": "https://www.ayazona.com/merchant/732417"
        }, {
            "@type": "ListItem",
            "position": 118,
            "url": "https://www.ayazona.com/merchant/732418"
        }, {
            "@type": "ListItem",
            "position": 119,
            "url": "https://www.ayazona.com/merchant/732419"
        }, {
            "@type": "ListItem",
            "position": 120,
            "url": "https://www.ayazona.com/merchant/732420"
        }, {
            "@type": "ListItem",
            "position": 121,
            "url": "https://www.ayazona.com/merchant/732421"
        }, {
            "@type": "ListItem",
            "position": 122,
            "url": "https://www.ayazona.com/merchant/732422"
        }, {
            "@type": "ListItem",
            "position": 123,
            "url": "https://www.ayazona.com/merchant/732423"
        }, {
            "@type": "ListItem",
            "position": 124,
            "url": "https://www.ayazona.com/merchant/732424"
        }, {
            "@type": "ListItem",
            "position": 125,
            "url": "https://www.ayazona.com/merchant/732425"
        }, {
            "@type": "ListItem",
            "position": 126,
            "url": "https://www.ayazona.com/merchant/732426"
        }, {
            "@type": "ListItem",
            "position": 127,
            "url": "https://www.ayazona.com/merchant/732427"
        }, {
            "@type": "ListItem",
            "position": 128,
            "url": "https://www.ayazona.com/merchant/732428"
        }, {
            "@type": "ListItem",
            "position": 129,
            "url": "https://www.ayazona.com/merchant/732429"
        }, {
            "@type": "ListItem",
            "position": 130,
            "url": "https://www.ayazona.com/merchant/732430"
        }, {
            "@type": "ListItem",
            "position": 131,
            "url": "https://www.ayazona.com/merchant/732431"
        }, {
            "@type": "ListItem",
            "position": 132,
            "url": "https://www.ayazona.com/merchant/732432"
        }, {
            "@type": "ListItem",
            "position": 133,
            "url": "https://www.ayazona.com/merchant/732433"
        }, {
            "@type": "ListItem",
            "position": 134,
            "url": "https://www.ayazona.com/merchant/732434"
        }, {
            "@type": "ListItem",
            "position": 135,
            "url": "https://www.ayazona.com/merchant/732435"
        }, {
            "@type": "ListItem",
            "position": 136,
            "url": "https://www.ayazona.com/merchant/732436"
        }, {
            "@type": "ListItem",
            "position": 137,
            "url": "https://www.ayazona.com/merchant/732437"
        }, {
            "@type": "ListItem",
            "position": 138,
            "url": "https://www.ayazona.com/merchant/732438"
        }, {
            "@type": "ListItem",
            "position": 139,
            "url": "https://www.ayazona.com/merchant/732439"
        }, {
            "@type": "ListItem",
            "position": 140,
            "url": "https://www.ayazona.com/merchant/732440"
        }, {
            "@type": "ListItem",
            "position": 141,
            "url": "https://www.ayazona.com/merchant/732441"
        }, {
            "@type": "ListItem",
            "position": 142,
            "url": "https://www.ayazona.com/merchant/732442"
        }, {
            "@type": "ListItem",
            "position": 143,
            "url": "https://www.ayazona.com/merchant/732443"
        }, {
            "@type": "ListItem",
            "position": 144,
            "url": "https://www.ayazona.com/merchant/732444"
        }, {
            "@type": "ListItem",
            "position": 145,
            "url": "https://www.ayazona.com/merchant/732445"
        }, {
            "@type": "ListItem",
            "position": 146,
            "url": "https://www.ayazona.com/merchant/732446"
        }, {
            "@type": "ListItem",
            "position": 147,
            "url": "https://www.ayazona.com/merchant/732447"
        }, {
            "@type": "ListItem",
            "position": 148,
            "url": "https://www.ayazona.com/merchant/732448"
        }, {
            "@type": "ListItem",
            "position": 149,
            "url": "https://www.ayazona.com/merchant/732449"
        }, {
            "@type": "ListItem",
            "position": 150,
            "url": "https://www.ayazona.com/merchant/732450"
        }, {
            "@type": "ListItem",
            "position": 151,
            "url": "https://www.ayazona.com/merchant/732451"
        }]
    }
}

export const getBrandMenuPageSchema = (url, name, description) =>{
    return {
        "@context":"https://schema.org",
        "@graph":[{
            "@type":"Organization",
            "@id":"https://www.ayazona.com/#organization",
            "name":"Ayazona",
            "url":"https://www.ayazona.com/",
            "sameAs":["https://www.facebook.com/getAyazona",
            "https://www.instagram.com/getAyazona/",
            "https://www.linkedin.com/company/ayazona-oy/",
            "https://www.pinterest.com/ayazona/",
            "https://twitter.com/getAyazona"],
            "logo":{
                "@type":"ImageObject",
                "@id":"https://www.ayazona.com/#logo",
                "inLanguage":"en-US",
                "url":"https://cdn.ayazona.com/web-assets/img/icon-web.png",
                "width":512,
                "height":512,
                "caption":"Ayazona"
            },
            "image":{
                "@id":"https://www.ayazona.com/#logo"
            },
            "legalName":"Ayazona Inc."
        },{
            "@type":"WebSite",
            "@id":"https://www.ayazona.com/#website",
            "url":"https://www.ayazona.com/",
            "name":"Ayazona",
            "inLanguage":"en-US",
            "description":"Ayazona: Discover and Get Affordable Great Food Delivered",
            "publisher":{
                "@id":"https://www.ayazona.com/#organization"
            },
            "potentialAction":{
                "@type":"SearchAction",
                "target":"https://www.ayazona.com/?q={search_term_string}",
                "query-input":"required name=search_term_string"
            }
        },{
            "@type":["WebPage"],
            "@id":`${url}#webpage`,
            "url":`${url}`,
            "name":`${name}`,
            "isPartOf":{"@id":"https://www.ayazona.com/#website"},
            "inLanguage":"en-US",
            "datePublished":"2020-08-24T19:00:18+00:00",
            "dateModified":"2020-12-11T13:32:21+00:00",
            "description":`${description}`,
            "breadcrumb":{
                "@id":`${url}#breadcrumb`
            }
        },{
            "@type":"BreadcrumbList",
            "@id":`${url}#breadcrumb`,
            "itemListElement":[{
                "@type":"ListItem",
                "position":1,
                "item":{
                    "@type":"WebPage",
                    "@id":"https://www.ayazona.com/",
                    "url":"https://www.ayazona.com/",
                    "name":"Ayazona"
                }
            },{
                "@type":"ListItem",
                "position":2,"item":{
                    "@type":"WebPage",
                    "@id":`${url}`,
                    "url":`${url}`,
                    "name":`${name}`
                }
            }]
        }]
    }
}
