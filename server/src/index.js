const express = require("express");
const path  = require("path")
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
      name: "Boilded Egg",
      price: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/pancake.png",
      type: "dinner",
    },
      {
    "name": "Classic Pancakes",
    "text": "Fluffy homemade pancakes served with butter and maple syrup.",
    "price": 120,
    "type": "breakfast",
    "image": "https://images.unsplash.com/photo-1584270354949-1f5d88f9bb58"
  },
  {
    "name": "Veggie Omelette",
    "text": "Three-egg omelette filled with onions, tomatoes, and fresh spinach.",
    "price": 150,
    "type": "breakfast",
    "image": "https://images.unsplash.com/photo-1617196033383-df8d2c2a6b97"
  },
  {
    "name": "Cheese Sandwich",
    "text": "Grilled sandwich stuffed with cheddar and mozzarella cheese.",
    "price": 80,
    "type": "breakfast",
    "image": "https://images.unsplash.com/photo-1601050690597-4c8d4825deaa"
  },
  {
    "name": "Paneer Butter Masala",
    "text": "Soft paneer cubes cooked in rich tomato-butter gravy with spices.",
    "price": 220,
    "type": "lunch",
    "image": "https://images.unsplash.com/photo-1626082922499-5c57a97dc97a"
  },
  {
    "name": "Chicken Biryani",
    "text": "Aromatic basmati rice layered with spiced chicken and fried onions.",
    "price": 250,
    "type": "lunch",
    "image": "https://images.unsplash.com/photo-1609417088524-09616b1c5d30"
  },
  {
    "name": "Veg Thali",
    "text": "Traditional Indian thali with dal, sabzi, roti, rice, salad, and sweet.",
    "price": 180,
    "type": "lunch",
    "image": "https://images.unsplash.com/photo-1625225233840-695456021cbb"
  },
  {
    "name": "Margherita Pizza",
    "text": "Classic thin-crust pizza topped with fresh mozzarella and basil.",
    "price": 300,
    "type": "dinner",
    "image": "https://images.unsplash.com/photo-1601924582971-b0c00b7b4e76"
  },
  {
    "name": "Butter Chicken",
    "text": "Tender chicken pieces simmered in creamy tomato gravy.",
    "price": 280,
    "type": "dinner",
    "image": "https://images.unsplash.com/photo-1631515243345-69fe7d8a73a1"
  },
  {
    "name": "Veg Fried Rice",
    "text": "Chinese-style fried rice with fresh veggies and soy sauce.",
    "price": 160,
    "type": "dinner",
    "image": "https://images.unsplash.com/photo-1617196033575-8f8c2cfa1f27"
  },
  {
    "name": "Chocolate Brownie",
    "text": "Rich fudgy chocolate brownie served with vanilla ice cream.",
    "price": 90,
    "type": "dessert",
    "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  }
  ];

  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});