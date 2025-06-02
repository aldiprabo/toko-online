const products = [
  { id: 1, name: "Kaos Polos", price: 50000 },
  { id: 2, name: "Celana Jeans", price: 150000 },
  { id: 3, name: "Topi Keren", price: 40000 },
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
