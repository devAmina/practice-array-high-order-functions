// given array 
const products = [
  {
    title: "Wireless Headphones",
    description: "Noise-cancelling over-ear headphones with 40 hours of playtime.",
    year: 2023,
    price: 199.99,
    image: "https://example.com/images/headphones.jpg",
    isDiscounted: true,
    isRefurbished: false,
    discount: {
      discountAvailable: "10%"
    },
    quantity: 50
  },
  {
    title: "Smartphone",
    description: "Latest model with 128GB storage and 5G connectivity.",
    year: 2022,
    price: 899.99,
    image: "https://example.com/images/smartphone.jpg",
    isDiscounted: false,
    isRefurbished: true,
    discount: {
      discountAvailable: "0%"
    },
    quantity: 20
  },
  {
    title: "Gaming Laptop",
    description: "High-performance laptop with RTX 3060 GPU and 16GB RAM.",
    year: 2023,
    price: 1299.99,
    image: "https://example.com/images/laptop.jpg",
    isDiscounted: true,
    isRefurbished: false,
    discount: {
      discountAvailable: "15%"
    },
    quantity: 10
  },
  {
    title: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with customizable keys.",
    year: 2021,
    price: 89.99,
    image: "https://example.com/images/keyboard.jpg",
    isDiscounted: false,
    isRefurbished: false,
    discount: {
      discountAvailable: "0%"
    },
    quantity: 100
  },
  {
    title: "Smartwatch",
    description: "Water-resistant smartwatch with heart-rate monitor and GPS.",
    year: 2022,
    price: 249.99,
    image: "https://example.com/images/smartwatch.jpg",
    isDiscounted: true,
    isRefurbished: true,
    discount: {
      discountAvailable: "5%"
    },
    quantity: 30
  },
  {
    title: "Bluetooth Speaker",
    description: "Portable speaker with 20W output and 12-hour battery life.",
    year: 2023,
    price: 49.99,
    image: "https://example.com/images/speaker.jpg",
    isDiscounted: false,
    isRefurbished: false,
    discount: {
      discountAvailable: "0%"
    },
    quantity: 200
  },
  {
    title: "4K Monitor",
    description: "Ultra HD monitor with 144Hz refresh rate and HDR support.",
    year: 2023,
    price: 399.99,
    image: "https://example.com/images/monitor.jpg",
    isDiscounted: true,
    isRefurbished: false,
    discount: {
      discountAvailable: "20%"
    },
    quantity: 25
  },
  {
    title: "Fitness Tracker",
    description: "Lightweight tracker with step count, calorie burn, and sleep monitoring.",
    year: 2021,
    price: 69.99,
    image: "https://example.com/images/fitness-tracker.jpg",
    isDiscounted: false,
    isRefurbished: true,
    discount: {
      discountAvailable: "0%"
    },
    quantity: 150
  },
  {
    title: "Drone",
    description: "Camera drone with 4K video and 30-minute flight time.",
    year: 2023,
    price: 999.99,
    image: "https://example.com/images/drone.jpg",
    isDiscounted: true,
    isRefurbished: false,
    discount: {
      discountAvailable: "25%"
    },
    quantity: 15
  },
  {
    title: "Electric Scooter",
    description: "Foldable scooter with a top speed of 25 mph and 30-mile range.",
    year: 2022,
    price: 499.99,
    image: "https://example.com/images/scooter.jpg",
    isDiscounted: false,
    isRefurbished: true,
    discount: {
      discountAvailable: "0%"
    },
    quantity: 40
  }
];

// write code here
// 1.Console Log All Products
function allProducts(products) {
return  products.forEach(product => {
  console.log(product.title +'- $'+ product.price);
});
}
console.log("allProducts");
console.log(allProducts(products));


//2.Filter Products with Long Descriptions
function filterProductsByDescriptionLength(products) {
return products.filter(product => product.description.length >= 30);
}
const filterByDescriptionLenProducts = filterProductsByDescriptionLength(products);

console.log("filterByDescriptionLenProducts");
console.log(filterByDescriptionLenProducts);

//3.Filter Products by Price Range
function filterProductByRange(products){
return products.filter(product=>product.price>200&&product.price<400);

}
const filterByRangeProducts= filterProductByRange(products);
console.log("filterByRangeProducts");
console.log(filterByRangeProducts);
//4.Filter Discounted Products
function filterProductDiscount(products){
return products.filter(product=>product.discount=true);

}
const filterDiscountProducts= filterProductDiscount(products);
console.log("filterDiscountProducts");
console.log(filterDiscountProducts);


//4.Filter Products with 15% or More Discount   not working
// function filterProductsByDiscount15(products) {
//   return products.filter(product => {
//     const discountValueStr = product.discount.discountAvailable.trim();
//     const discountValue = parseFloat(discountValueStr.replace('%', ''));

//     return discountValue >= 15;
//   });
// }
 


// console.log("filterProductsByDiscount15");
// const filteredProducts15 = filterProductsByDiscount15(products);
// console.log(filteredProducts15);


//6. Filter New Products
function filterProductYear2024(products){
return products.filter(product=>product.year=2024);

}
const filterYear2024Products= filterProductYear2024(products);
console.log("filterYear2024Products");
console.log(filterYear2024Products);