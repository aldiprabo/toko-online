const products = [
  { id: 1, name: "Cara Menjadi Kaya Modal Ai", price: 100000 },
  { id: 2, name: "Tutorial Memakai Ai", price: 150000 },
  { id: 3, name: "Preset Lightroom Lengkap", price: 200000 },
];

let cartCount = 0;

function renderProducts() {
  const productList = document.getElementById("product-list");

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Rp ${product.price.toLocaleString()}</p>
      <button onclick="addToCart()">Tambah ke Keranjang</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
}

renderProducts();
