import axios from 'axios';

const API = {
  async getBrandBranchesCount(brand) {
    return await axios.post('https://x1.ayazona.com/v1/api/showMerchantsCount',
    {
      "merchant": brand.split('-').join(' ')
    }).then(({data}) => data.msg);
  },
  async getBrandBranches(brand) {
    return await axios.post('https://x1.ayazona.com/v1/api/searchRestaurants',
    {
      "keyword": brand
    }).then(({data}) => {
      return data.code === 201 ? []: data.msg
    });
  }
}
const brands = [
    {
      link: "/brand/swahili-plate",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732428/5f42e0083b798",
      text: "Swahili Plate",
      param: "Swahili Plate",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732428/5f0dbc6ecc6fc"
    },
    {
      link: "/brand/magic-plate-kitchen",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732450/5f42ebed9814e",
      text: "Magic Plate Kitchen",
      param: "Magic Plate Kitchen",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732450/5f3bf6face9c6"
    },
    {
      link: "/brand/tupelo-african-restaurant",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732451/5f42eac325624",
      text: "Tupelo African Restaurant",
      param: "Tupelo African Restaurant",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732451/5f42a9f14b211"
    },
    {
      link: "/brand/pizza-inn",
      image:"https://cdn.ayazona.com/web-assets/img/pizza-inn.jpg",
      text: "Pizza Inn",
      param: "pizza inn",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/5/5da0132779978.png",
    },
    {
      link: "/brand/gyros-2-go",
      image:"https://cdn.ayazona.com/web-assets/img/g2g-logo.jpg",
      text: "Gyros 2 Go",
      param: "gyros 2 go",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/25/5dd1f7e0ddd8e.png"
    },
    {
      link: "/brand/meals-moto-swahili-kitchen",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Meals Moto Swahili Kitchen",
      param: "Meals Moto Swahili Kitchen",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732441/5f1d60137922b"
    },
    {
      link: "/brand/jambo-grill",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Jambo Grill",
      param: "Jambo Grill",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732441/5f1d60137922b"
    },
    {
      link: "/brand/scratch-kitchen",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Scratch Kitchen",
      param: "Scratch Kitchen",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732441/5f1d60137922b"
    },
    {
      link: "/brand/hatens-kitchen",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Hatens Kitchen",
      param: "Hatens Kitchen",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732441/5f1d60137922b"
    },
    {
      link: "/brand/burger-garage-kenya",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Burger Garage Kenya",
      param: "Burger Garage Kenya",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732441/5f1d60137922b"
    },
    {
      link: "/brand/city-taste",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "City Taste",
      param: "City Taste",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732441/5f1d60137922b"
    },
    {
      link: "/brand/grandma-ruks",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Grandma Ruks",
      param: "Grandma Ruks",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732441/5f1d60137922b"
    },
    {
      link: "/brand/tonis-kitchen",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Tonis Kitchen",
      param: "Tonis Kitchen",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732441/5f1d60137922b"
    },
    {
      link: "/brand/quick-grabs",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Quick Grabs",
      param: "Quick Grabs",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732441/5f1d60137922b"
    },
    {
      link: "/brand/savan-foods",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Savan Foods",
      param: "Savan Foods",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732431/5f109b3a5d0a5"
    },
    {
      link: "/brand/awash-ethiopian-restaurant",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Awash Ethiopian Restaurant",
      param: "Awash Ethiopian Restaurant",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732395/5ec99d070888c.png"
    },
    {
      link: "/brand/mangrove-cafe",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Mangrove Cafe",
      param: "Mangrove Cafe",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732406/5f1742b37b533"
    },
    {
      link: "/brand/mister-wok",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Mister Wok",
      param: "Mister Wok",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/4/5dd12b6f059d4.png"
    },
    {
      link: "/brand/7-day-chinese-restaurant",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "7 DAY Chinese Restaurant",
      param: "7 DAY Chinese Restaurant",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732409/5f0b783407ce7"
    },
    {
      link: "/brand/donicahs",
      image:"https://cdn.ayazona.com/web-assets/img/donicahs.jpg",
      text: "Donicahs",
      param: "donicahs",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732332/5e57c334d1c80.png?auto=format&fit=max&w=1730"
    },
    {
      link: "/brand/peppercorn",
      image:"https://cdn.ayazona.com/web-assets/img/peppercorn.jpg",
      text: "Peppercorn",
      param: "Peppercorn",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732330/5e46e1f8b2b6c.png?auto=format&fit=max&w=1730"
    },
    {
      link: "/brand/chicken-inn",
      image:"https://r.cdn.ayazona.com/app/webroot/uploads/732350/5ea5ab7c18633.png",
      text: "Chicken Inn",
      param: "Chicken Inn",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732353/5ea5c153da4bd.png"},
    {
      link: "/brand/mc-frys",
      image:"https://r.cdn.ayazona.com/app/webroot/uploads/732361/5ea673c050982.png",
      text: "Mc Frys",
      param: "Mc Frys",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732357/5ea6675a094ee.png"
    },
    {
      link: "/brand/galitos",
      image:"https://r.cdn.ayazona.com/app/webroot/uploads/732370/5eab32e2d6d42.png",
      text: "Galitos",
      param: "Galitos",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732370/5eab2d9de53b9.png"
    },
    {
      link: "/brand/kukito",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732382/5eb88b649b246.png",
      text: "Kukito",
      param: "Kukito",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732382/5eb88b649be9a.png"
    },
    {
      link: "/brand/the-shack",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732442/5f1d71698e9c6",
      text: "The Shack",
      param: "The Shack",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732442/5f1d6c36accf0"
    },
    {
      link: "/brand/uncle-nenes-kitchen",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Uncle Nenes Kitchen",
      param: "Uncle Nenes Kitchen",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732442/5f1d6c36accf0"
    },
    {
      link: "/brand/donuts-world",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Donuts World",
      param: "Donuts World",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/14/5da92e81006c3.png"
    },
    {
      link: "/brand/tasteez-big-filla",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Tasteez Big Filla",
      param: "Tasteez Big Filla",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732399/5ec9b6f67d963.png"
    },
    {
      link: "/brand/chicken-out",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Chicken Out",
      param: "Chicken Out",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732419/5f0c9e498e6fa"
    },
    {
      link: "/brand/quick-grabs",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Quick Grabs",
      param: "Quick Grabs",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732454/5f70775ee8a53"
    },
    {
      link: "/brand/flame-grill",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Flame Grill",
      param: "Flame Grill",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f7129879e1df"
    },
    {
      link: "/brand/sherehe-grill",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Sherehe Grill",
      param: "Sherehe Grill",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732391/5ec8877d0c332.png"
    },
    {
      link: "/brand/mambos-meat-house",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Mambos Meat House",
      param: "Mambos Meat House",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732390/5ec88339c4eb3.png"
    },
    {
      link: "/brand/maritas-bhajia",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Maritas Bhajia",
      param: "Maritas Bhajia",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732425/5f0d8903ae3d5"
    },
    {
      link: "/brand/baba-nyama-choma",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Baba Nyama Choma",
      param: "Baba Nyama Choma",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/30/5f10ba8daa830"
    },
    {
      link: "/brand/big-knife",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Big Knife",
      param: "Big Knife",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732378/5eb40a4da0af9.png"
    },
    {
      link: "/brand/mataam-swahili",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Mataam Swahili",
      param: "Mataam Swahili",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732438/5f11820deba8f"
    },
    {
      link: "/brand/hong-kong-kitchen",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Hong Kong Kitchen",
      param: "Hong Kong Kitchen",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732329/5f231ac06e9b7"
    },
    {
      link: "/brand/butterfly-chicken",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Butterfly Chicken",
      param: "Butterfly Chicken",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732410/5f0bae1cee5d2"
    },
    {
      link: "/brand/bakers-corner",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Bakers Corner",
      param: "Bakers Corner",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732398/5ec9b38eb8093.png"
    },
    {
      link: "/brand/maboneng",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Maboneng",
      param: "Maboneng",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732415/5f0c84a34ab7c"
    },
    {
      link: "/brand/chicken-house",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Chicken House",
      param: "Chicken House",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/20/5dd1bed01f72d.png"
    },
    {
      link: "/brand/grandma-ruks",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Grandma Ruks",
      param: "Grandma Ruks",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732393/5ec88e13dbd84.png"
    },
    {
      link: "/brand/ds-place",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732457/5f71298787227",
      text: "Ds Place",
      param: "Ds Place",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732429/5f1044ff2827e"
    },
    {
      link: "/brand/subway",
      image:"https://cdn.ayazona.com/web-assets/img/sub.jpg",
      text: "Subway",
      param: "subway",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732336/5e622354c53f5.png"
    },
    {
      link: "/brand/mama-rocks-gourmet-burger",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/21/5e67c4a06c957.png",
      text: "Mama Rocks Gourmet Burger",
      param: "Mama Rocks Gourmet Burger",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/21/5e67c52f24c12.png"
    },
    {
      link: "/brand/ohcha-noodle-bar",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732334/5f43e50103088",
      text: "Ohcha Noodles",
      param: "Ohcha Noodle bar",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732334/5f43e5dcc302f"
    },
    {
      link: "/brand/wasp-and-sprout",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732394/5f43e7d83f876",
      text: "Wasps & Sprouts",
      param: "Wasp and Sprout",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732394/5ec99913823b7.png"
    },
    {
      link: "/brand/mambo-italia",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732384/5eb9bccb39721.png",
      text: "Mambo-Italia",
      param: "Mambo Italia",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732384/5eb9bccb3a38c.png"
    },
    {
      link: "/brand/debonairs-pizza",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/32/5f4962d3df633",
      text: "Debonairs Pizza",
      param: "Debonairs Pizza",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/32/5e2775b6c9ee3.png"
    },
    {
      link: "/brand/pizza-mojo",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/18/5f4964f6a3125",
      text: "Pizza Mojo",
      param: "Pizza Mojo",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/18/5dd1b91bb0d81.png"
    },
    {
      link: "/brand/steers-burger",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/8/5e67c83c9b2fe.png",
      text: "Steers Burger",
      param: "Steers Burger",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/8/5f7113894c409"
    },
    {
      link: "/brand/urban-gourmet-burgers",
      image:"https://cdn.ayazona.com/web-assets/img/urban.jpg",
      text: "Urban Gourmet Burgers",
      param: "Urban Gourmet Burgers",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/9/5e67adc2e72cf.png"
    },
    {
      link: "/brand/creamy-inn",
      image:"https://cdn.ayazona.com/web-assets/img/creamy.jpg",
      text: "Creamy Inn",
      param: "creamy inn",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732342/5e63c6fdae410.png"
    },
    {
      link: "/brand/big-square",
      image:"https://cdn.ayazona.com/web-assets/img/bsqr.jpg",
      text: "Big Square",
      param: "big square",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/17/5dd1b6044931f.png"},
    {
      link: "/brand/kfc",
      image:"https://cdn.ayazona.com/web-assets/img/kfc.jpg",
      text: "KFC",
      param: "kfc",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732346/5e6f449e3e626.png"
    },
    {
      link: "/brand/pizza-hut",
      image:"https://cdn.ayazona.com/web-assets/img/pizza-hut.jpg",
      text: "Pizza Hut",
      param: "pizza hut",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732339/5e63aa0f86166.png?auto=format&fit=max&w=1730"
    },
    {
      link: "/brand/burger-king",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732402/5edf3a679664d.png",
      text: "Burger King",
      param: "Burger King",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732402/5edf26587a9c5.png"
    },
    {
      link: "/brand/360-degrees-pizza",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732383/5eb8bde66382d.png",
      text: "360 Degrees Pizza",
      param: "360 Degrees Pizza",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732383/5eb8bde66463a.png"
    },
    {
      link: "/brand/artcaffe",
      image:"https://cdn.ayazona.com/web-assets/img/ARTCAFFE-LOGO.jpg",
      text: "Artcaffe",
      param: "artcaffe",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/12/5dd12c67f2f13.png"
    },
    {
      link: "/brand/cold-stone-creamery",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732418/5f1d8dad948ec",
      text: "Cold Stone Creamery",
      param: "Cold Stone Creamery",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732418/5f0c91d21d76d"
    },
    {
      link: "/brand/gelato-street",
      image: "https://r.cdn.ayazona.com/app/webroot/uploads/732447/5f42f1f323138",
      text: "Gelato Street",
      param: "Gelato Street",
      bannerImage: "https://r.cdn.ayazona.com/app/webroot/uploads/732411/5f0bb240c22b4"
    }
];

export  {brands, API};
