function showSection(id) {
  const sections = document.querySelectorAll('section.section-center');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// Slideshow Logic
let slideIndex = 0;
function showSlides() {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000);
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

function openModal(title, price, category, description) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-price').textContent = 'Price: $' + price;
  document.getElementById('modal-category').textContent = 'Category: ' + category;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('product-modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('product-modal').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides();
  renderProducts(); // render products when DOM is ready
});

const products = [
// ELECTRONICS
{
    name: "Macbook air",
    category: "electronics",
    price: 999,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    description: "Lightweight and powerful laptop with Apple’s M-series chip, perfect for productivity and creative work."
},
{
    name: "Sony WH-1000XM5 Headphones",
    category: "electronics",
    price: 349,
    rating: 4.8,
    img: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
    description: "Premium noise-cancelling headphones with excellent sound quality and long battery life."
},
{
    name: "Fire-Boltt Smartwatch",
    category: "electronics",
    price: 59,
    rating: 4.3,
    img: "https://m.media-amazon.com/images/I/61epn29QG0L._SL1500_.jpg",
    description: "Feature-rich smartwatch with fitness tracking, notifications, and heart rate monitoring."
},
{
    name: "boAt Airdopes 141",
    category: "electronics",
    price: 29,
    rating: 4.4,
    img: "https://m.media-amazon.com/images/I/51HBom8xz7L._SL1500_.jpg",
    description: "True wireless earbuds with immersive sound and long battery life, ideal for music lovers on the go."
},
{
    name: "Zebronics Webcam",
    category: "electronics",
    price: 25,
    rating: 4.1,
    img: "https://m.media-amazon.com/images/I/71qnZFqFM9L._SX679_.jpg",
    description: "HD webcam with built-in microphone, suitable for video calls, streaming, and online classes."
},
{
    name: "TP-Link WiFi Router",
    category: "electronics",
    price: 49,
    rating: 4.5,
    img: "https://m.media-amazon.com/images/I/71Hu0MLbxqL._SL1500_.jpg",
    description: "High-speed dual-band router with wide coverage and easy setup for home or office use."
},

// CLOTHING
{
    name: "Men's Cotton T-Shirt",
    category: "clothing",
    price: 15,
    rating: 4.2,
    img: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/422989/item/ingoods_09_422989.jpg",
    description: "Soft and breathable cotton T-shirt, ideal for everyday comfort and casual wear."
},
{
    name: "Denim Jeans for Men",
    category: "clothing",
    price: 39,
    rating: 4.3,
    img: "https://m.media-amazon.com/images/I/616xchp1ECL._SY879_.jpg",
    description: "Durable and stylish denim jeans with a modern fit, perfect for daily wear."
},
{
    name: "Leather Biker Jacket",
    category: "clothing",
    price: 89,
    rating: 4.5,
    img: "https://m.media-amazon.com/images/I/41uGN-tWs3L._SX300_SY300_QL70_FMwebp_.jpg",
    description: "Classic leather biker jacket offering warmth, durability, and timeless style."
},
{
    name: "Nike Running Shoes",
    category: "clothing",
    price: 75,
    rating: 4.6,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26674200/2023/12/26/766ec772-101d-4161-9d17-9953cf8e966c1703612190337NikeAirMaxAlphaTrainer5MensWorkoutShoes1.jpg",
    description: "High-performance running shoes with responsive cushioning and breathable material."
},

// BOOKS
{
    name: "The Alchemist by Paulo Coelho",
    category: "books",
    price: 12,
    rating: 4.7,
    img: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    description: "Inspirational novel about following your dreams and finding your personal legend."
},
{
    name: "Atomic Habits by James Clear",
    category: "books",
    price: 18,
    rating: 4.9,
    img: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    description: "Practical guide to building good habits and breaking bad ones for long-term success."
},
{
    name: "Deep Work by Cal Newport",
    category: "books",
    price: 16,
    rating: 4.6,
    img: "https://m.media-amazon.com/images/I/41G4-FBs1YS._SY445_SX342_.jpg",
    description: "Strategies to improve focus and productivity in a distracted world."
},

// HOME
{
    name: "Furny Tulip Fabric Sofa",
    category: "home",
    price: 299,
    rating: 4.3,
    img: "https://m.media-amazon.com/images/I/41zCrTBWpzL.jpg",
    description: "Comfortable and elegant fabric sofa, great for modern living rooms."
},
{
    name: "Study Desk Table",
    category: "home",
    price: 99,
    rating: 4.2,
    img: "https://ii1.pepperfry.com/media/catalog/product/c/o/1100x1210/corbyn-l-shape-study-table-in-brown-maple---white-finish-corbyn-l-shape-study-table-in-brown-maple---2zzynu.jpg",
    description: "Spacious and durable study desk with a stylish finish and ample storage."
},
{
    name: "Decorative Table Lamp",
    category: "home",
    price: 25,
    rating: 4.1,
    img: "https://res.cloudinary.com/makerinc/image/fetch/f_auto,q_auto,fl_preserve_transparency,c_fit,dpr_1,w_1600,h_1080/https%3A%2F%2Fwww.whisperinghomes.com%2Fmedia%2Fcatalog%2Fproduct%2Fb%2Fa%2Fbaelee_lamp_main.jpg%3Ft%3D20231103",
    description: "Elegant table lamp that adds charm and warm lighting to your interiors."
},

// TOYS
{
    name: "LEGO Classic Bricks",
    category: "toys",
    price: 45,
    rating: 4.9,
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/5/f5398ca10698_Large_Creative_Brick_Box_V29_1.jpg?rnd=20200526195200&tr=w-1080",
    description: "Creative LEGO set with colorful bricks for open-ended building fun."
},
{
    name: "Rubik's Cube 3x3",
    category: "toys",
    price: 8,
    rating: 4.5,
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSZQw8pSE6vQie3F9Ifv187aXQ9Fa38QpggzyqBkd_9Ubx0aX6b_5Zse8yEv3VdmmvO8_Ga7Erhq6Pk3Nk1AfLzoNq_SJnwLD1cp--V974YpykTuTC2pCiHmA",
    description: "Classic 3x3 Rubik’s Cube puzzle that challenges and sharpens your mind."
},
{
    name: "Remote Control Racing Car",
    category: "toys",
    price: 35,
    rating: 4.4,
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRbHOxEQTe0Eh1gSgTRGIKy7rNcYm47MOgnSgLccGNQNgQ5fzlgGzS2KK7gT8WZWZMuKfAHiMZhfnJqxgSv0UXbTK1THAQXwssadnDnI6eIExw8YeYsINokRQ",
    description: "High-speed RC car with remote control and durable build for indoor and outdoor fun."
}
];

// Render products
function renderProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p class="price">$${product.price}</p>
      <p>⭐ ${product.rating}</p>
      <button class="view-details" onclick="openModal('${product.name}', '${product.price}', '${product.category}', '${product.description.replace(/'/g, "\\'")}')">View Details</button>
    </div>
  `).join('');
}
