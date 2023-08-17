const cuisines = [
    {
      name: "Chicken",
      description: "Chicken is more than meets the eye: bring home nuggets, curry, and more.",
      link: "/cuisines/chicken",
      image: "chicken.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/chicken.svg"
    },
    {
      name: "Pizza",
      description: "Open up a world of amazing takeaway pizza - masterpieces straight from the oven.",
      link: "/cuisines/pizza",
      image: "pizza.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/pizza.svg"
    },
    {
      name: "Swahili",
      description: "Take a trip to the coast with swahili dishes that's bound to make you smile.",
      link: "/cuisines/swahili",
      image: "indian.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/swahili.svg"
    },
    {
      name: "Chinese",
      description: "Order in a Chinese banquet straight from the best chefs in town.",
      link: "/cuisines/chinese",
      image: "chinese.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/chinese.svg"
    },
    {
      name: "BBQ",
      description: "Master the art of block party with BBQ ribs, Choma sausages and more.",
      link: "/cuisines/bbq",
      image: "bbq.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/bb.svg"
    },
    {
      name: "Burger",
      description: "From The Great Zambezi Burger, to Combo Double Whooper Cheese Burger.",
      link: "/cuisines/burger",
      image: "american.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/burger.svg"
    },
    {
      name: "Halal",
      description: "Get it from home: order great halal food from a huge range of restaurants.",
      link: "/cuisines/halal",
      image: "halal.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/halal.svg"
    },
    {
      name: "Asian",
      description: "Take a trip to Asia with the best Asian food that's bound to make you smile",
      link: "/cuisines/asian",
      image: "sushi.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/asian.svg"
    },
    {
      name: "Soup",
      description: "Be bowled over by our nourishing soups, from classic minestrone to vibrant tomato soup",
      link: "/cuisines/soup",
      image: "indian.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/soupy.svg"
    },
    {
      name: "Noodles",
      description: "From miso soup to soba noodles, eat dreamy Ramen cuisines at home.",
      link: "/cuisines/noodles",
      image: "sushi.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/noodles.svg"
    },
    {
      name: "Steak",
      description: "Treat yourself to juicy local steak that will leave you feeling fighting fit.",
      link: "/cuisines/steak",
      image: "bbq.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/choma.svg"
    },
    {
      name: "Indian",
      description: "Discover the world of impressive Indian food available for delivery.",
      link: "/cuisines/indian",
      image: "indian.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/indian.svg"
    },
    {
      name: "Coffee",
      description: "Easy-drinking with milk, sugar or flavored with vanilla, caramel or hazelnut.",
      link: "/cuisines/coffee",
      image: "coffee.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/coffee.svg"
    },
    {
      name: "Tea",
      description: "Get the perfect cup and make your problems disappear… at least temporarily!.",
      link: "/cuisines/tea",
      image: "coffee.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/tea.svg"
    },
    {
      name: "Vegetarian",
      description: "Go meat-free with vegetarian food so hearty that carnivores can't help but love it.",
      link: "/cuisines/vegetarian",
      image: "vegetarian.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/vegan.svg"
    },
    {
      name: "Italian",
      description: "Bring a touch of class to the table with inspiring Italian cuisine.",
      link: "/cuisines/italian",
      image: "italian.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/italian.svg"
    },
    {
      name: "African",
      description: "Bring real flavour home! Eat authentic African meals any time you want.",
      link: "/cuisines/african",
      image: "african.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/afric.svg"
    },
    {
      name: "Breakfast",
      description: "Treat yourself: enjoy the finest desserts from around the world at home.",
      link: "/cuisines/breakfast",
      image: "breakfast.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/breakfast.svg"
    },
    {
      name: "Fast Food",
      description: "Get it fast: order great fast food from a huge range of different cuisines.",
      link: "/cuisines/fast-food",
      image: "fast-food.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/FastFood.svg",
    },
    {
      name: "Healthy",
      description: "Taste the Vegerarian and Healthy dishes brought straight to your door.",
      link: "/cuisines/healthy",
      image: "healthy.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/salad.svg"
    },
    {
      name: "American",
      description: "Bring American flavour home. Bring home burgers, brownies and more.",
      link: "/cuisines/american",
      image: "american.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/burger.svg"
    },
    {
      name: "Thai",
      description: "Master the art of dinner party food with Thai favorites straight to your door.",
      link: "/cuisines/thai",
      image: "chinese.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/thai.svg"
    },
    {
      name: "Kenyan",
      description: "Bring real flavour home! Eat authentic Kenyan meals any time you want.",
      link: "/cuisines/kenyan",
      image: "african.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/afric.svg"
    },
    {
      name: "Gyro",
      description: "Taste the best of Greek with Gyro food brought straight to your door.",
      link: "/cuisines/gyro",
      image: "gyro.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/greek.svg"
    },
    {
      name: "Ethiopian",
      description: "Bring more flavour home! Eat authentic Ethiopian meals any time you want.",
      link: "/cuisines/ethiopian",
      image: "african.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/ethiopian.svg"
    },
    {
      name: "Sushi",
      description: "Experience perfect crafts of hand-made sushi brought straight to your door.",
      link: "/cuisines/sushi",
      image: "sushi.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/sushi.svg"
    },
    {
      name: "Seafood",
      description: "Experience perfect crafts of local seafood brought straight to your door.",
      link: "/cuisines/seafood",
      image: "seafood.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/seafood.svg"
    },
    {
      name: "Sandwich",
      description: "Get the best sandwiches delivered to your office for your meetings, or afternoon snacks.",
      link: "/cuisines/sandwich",
      image: "sandwich.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/sandwich.svg"
    },
    {
      name: "Desserts",
      description: "Treat yourself: enjoy the finest desserts from around the world at home.",
      link: "/cuisines/desserts",
      image: "desserts.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/ice-cream.png"
    },
    {
      name: "Japanese",
      description: "From miso soup to soba noodles, eat dreamy Japanese cuisine at home.",
      link: "/cuisines/japanese",
      image: "japanese.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/japanese.svg"
    },
    {
      name: "Ghanian",
      description: "Bring real Ghanian flavour home! Eat authentic Ghanian dishes any time you want.",
      link: "/cuisines/ghanian",
      image: "african.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/afric.svg"
    },
    {
      name: "Smoothie",
      description: "Start your morning with a natural energy drink or a filling breakfast.",
      link: "/cuisines/smoothie",
      image: "smoothie.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/smoothie.svg"
    },
    {
      name: "Turkish",
      description: "Experience the Turkish culture and cuisine brought straight to your door.",
      link: "/cuisines/turkish",
      image: "turkish.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/turkish.svg"
    },
    {
      name: "Irish",
      description: "Experience the Irish culture and cuisine brought straight to your door.",
      link: "/cuisines/irish",
      image: "irish.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/irish.svg"
    },
    {
      name: "Tapas",
      description: "Get your cold or hot appetizer or snack, from the famous Spanish cuisine.",
      link: "/cuisines/tapas",
      image: "tapas.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/tapas.svg"
    },
    {
      name: "Pho",
      description: "Fancy a Vietnamese soup made with a bone-beef broth, banh pho noodles?",
      link: "/cuisines/pho",
      image: "pho.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/pho.svg"
    },
    {
      name: "Nigerian",
      description: "Bring real flavour home! Eat authentic Nigerian dishes any time you want.",
      link: "/cuisines/nigerian",
      image: "african.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/afric.svg"
    },
    {
      name: "Pakistani",
      description: "Experience the Pakistani culture and cuisine brought straight to your door.",
      link: "/cuisines/pakistani",
      image: "pakistani.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/pakistani.svg"
    },
    {
      name: "European",
      description: "Experience the European culture and cuisine brought straight to your door.",
      link: "/cuisines/european",
      image: "eu.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/eu.svg"
    },
    {
      name: "French",
      description: "Experience the French culture and cuisine brought straight to your door.",
      link: "/cuisines/french",
      image: "french.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/french.svg"
    },
    {
      name: "Greek",
      description: "Experience the Greek culture and cuisine brought straight to your door.",
      link: "/cuisines/greek",
      image: "greek.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/greek.svg"
    },
    {
      name: "Ugandan",
      description: "Bring real Ugandan flavour home! Eat authentic Ugandan dishes any time you want.",
      link: "/cuisines/ugandan",
      image: "african.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/afric.svg"
    },
    {
      name: "Cameroonian",
      description: "Bring real Cameroonian flavour home! Eat authentic Cameroonian dishes any time you want.",
      link: "/cuisines/cameroonian",
      image: "african.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/afric.svg"
    },
    {
      name: "Poke",
      description: "Fancy a piece of nutrient-packed Hawaiian salad with a touch of Japanese?",
      link: "/cuisines/poke",
      image: "poke.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/poke.svg"
    },
    {
      name: "Spanish",
      description: "Experience the Spanish culture and cuisine brought straight to your door.",
      link: "/cuisines/spanish",
      image: "spanish.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/spanish.svg"
    },
    {
      name: "Bakery",
      description: "Treat yourself: enjoy the finest cakes and bread from around the world at home.",
      link: "/cuisines/bakery",
      image: "bakery.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/bakery.png"
    },
    {
      name: "Grocery",
      description: "Treat yourself: get same day fresh grocery delivery right to your kitchen.",
      link: "/cuisines/grocery",
      image: "groceries.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/produce.png"
    },
    {
      name: "Essentials",
      description: "Treat yourself: enjoy the convinience of same day home essentials delivery.",
      link: "/cuisines/essentials",
      image: "pantry.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/pantry.png"
    },
    {
      name: "Snacks",
      description: "Treat yourself: enjoy the finest snacks from ariund Africa at home.",
      link: "/cuisines/snacks",
      image: "snacks.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/snacks.png"
    },
    {
      name: "Drinks",
      description: "Treat yourself: enjoy the finest refreshments from around the world at home.",
      link: "/cuisines/drinks",
      image: "drinks.jpg",
      cuisine_image: "https://cdn.ayazona.com/web-assets/img/drinks.png"
    }
  ]
  export {cuisines}