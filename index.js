const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
app.use(cors());

const products = [
  {
    "product_id": "B001",
    "name": "Hydrating Facial Cleanser",
    "description": "A gentle, hydrating cleanser that removes makeup and impurities while preserving natural moisture.",
    "price": 14.99,
    "offers": {
      "discount": "15% off first purchase",
      "bundle": "Buy 2, get 1 free"
    },
    "tips": [
      "Use twice daily for the best results.",
      "Apply in circular motions to increase blood circulation."
    ]
  },
  {
    "product_id": "B002",
    "name": "Vitamin C Serum",
    "description": "Brightening serum packed with antioxidants to reduce dark spots and improve skin tone.",
    "price": 29.99,
    "offers": {
      "discount": "20% off",
      "bundle": "Buy 1, get a mini moisturizer for free"
    },
    "tips": [
      "Apply after cleansing and before moisturizer.",
      "Use sunscreen during the day to protect from sun sensitivity."
    ]
  },
  {
    "product_id": "B003",
    "name": "Retinol Night Cream",
    "description": "An anti-aging night cream with retinol to reduce fine lines and improve skin elasticity.",
    "price": 35.99,
    "offers": {
      "discount": "15% for returning customers",
      "bundle": "Buy with Vitamin C Serum for extra 10% off"
    },
    "tips": [
      "Use only at night to avoid sun sensitivity.",
      "Start with twice-weekly application to build tolerance."
    ]
  },
  {
    "product_id": "B004",
    "name": "Organic Rosewater Toner",
    "description": "A refreshing toner that balances and soothes the skin, made with organic rosewater.",
    "price": 12.99,
    "offers": {
      "discount": "10% off",
      "bundle": "Buy 3, get 10% off"
    },
    "tips": [
      "Spray onto face after cleansing for hydration.",
      "Store in the fridge for a refreshing, cooling effect."
    ]
  },
  {
    "product_id": "B005",
    "name": "SPF 50 Sunscreen",
    "description": "Lightweight, non-greasy sunscreen that provides broad-spectrum protection from UV rays.",
    "price": 18.99,
    "offers": {
      "discount": "20% off on first order",
      "seasonal_offer": "25% off for summer"
    },
    "tips": [
      "Apply generously 15 minutes before sun exposure.",
      "Reapply every 2 hours for continuous protection."
    ]
  },
  {
    "product_id": "B006",
    "name": "Moisturizing Lip Balm",
    "description": "Nourishing lip balm that hydrates and softens lips, available in a variety of flavors.",
    "price": 5.99,
    "offers": {
      "discount": "10% off on bundles",
      "bundle": "Buy 2, get the 3rd half-off"
    },
    "tips": [
      "Apply before lipstick for a smoother finish.",
      "Use before bed to wake up with softer lips."
    ]
  },
  {
    "product_id": "B007",
    "name": "Volumizing Mascara",
    "description": "Long-lasting mascara that adds volume and length to lashes without clumping.",
    "price": 9.99,
    "offers": {
      "discount": "10% off for new customers",
      "bundle": "Buy 1, get eyeliner for 50% off"
    },
    "tips": [
      "Apply with a zigzag motion for even application.",
      "Use a lash curler before application for extra lift."
    ]
  },
  {
    "product_id": "B008",
    "name": "Aloe Vera Gel",
    "description": "Natural aloe vera gel that soothes, hydrates, and repairs skin.",
    "price": 8.99,
    "offers": {
      "discount": "5% off",
      "bundle": "Buy 2, get a mini face mask free"
    },
    "tips": [
      "Use after sun exposure to calm skin.",
      "Apply as a moisturizer for acne-prone skin."
    ]
  },
  {
    "product_id": "B009",
    "name": "Charcoal Detox Face Mask",
    "description": "Deep-cleansing mask with activated charcoal to draw out impurities and excess oil.",
    "price": 13.99,
    "offers": {
      "discount": "10% off",
      "bundle": "Buy with face scrub for extra 5% off"
    },
    "tips": [
      "Use once a week for the best results.",
      "Avoid applying near sensitive areas like eyes."
    ]
  },
  {
    "product_id": "B010",
    "name": "Argan Oil Hair Serum",
    "description": "A lightweight serum that smooths frizz and adds shine, made with pure argan oil.",
    "price": 16.99,
    "offers": {
      "discount": "15% off first purchase",
      "bundle": "Buy 2, get a mini conditioner free"
    },
    "tips": [
      "Apply to damp hair for best results.",
      "Use sparingly on dry hair for a sleek finish."
    ]
  }
]


app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
