const products = [
  {
    name: "Tênis Esportivo",
    description: "Tênis confortável e resistente para atividades físicas.",
    price: "R$ 199,99",
    stock: 10,
    imageUrl: "https://via.placeholder.com/300x200?text=Tenis+Esportivo",
    whatsappNumber: "+5581989821222"
  },
  {
    name: "Camiseta Casual",
    description: "Camiseta de algodão macio e confortável.",
    price: "R$ 49,99",
    stock: 20,
    imageUrl: "https://via.placeholder.com/300x200?text=Camiseta+Casual",
    whatsappNumber: "+5581989821222"
  },
  {
    name: "Pippo's Churrasco 30g",
    description: "",
    price: "R$ 1,99",
    stock: 15,
    imageUrl: "https://www.saobraz.com.br/files/product/17247836467532-pipposchurrasco75gnovo.png",
    whatsappNumber: "+5581989821222"
  }
];

// Função para criar o card de cada produto
function createProductCard(product) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  
  productCard.innerHTML = `
    <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
    <h1 class="product-name">${product.name}</h1>
    <p class="product-description">${product.description}</p>
    <p class="product-price">${product.price}</p>
    <p class="product-stock">Estoque: ${product.stock} unidades</p>
    <button class="buy-button" onclick="redirectToWhatsApp('${product.name}', '${product.price}', ${product.stock}, '${product.whatsappNumber}')">Comprar no WhatsApp</button>
  `;
  
  return productCard;
}

// Função para exibir todos os produtos
function displayProducts() {
  const productList = document.getElementById('product-list');
  products.forEach(product => {
    const productCard = createProductCard(product);
    productList.appendChild(productCard);
  });
}

// Função para redirecionar para o WhatsApp
function redirectToWhatsApp(productName, productPrice, stock, whatsappNumber) {
  const message = `Olá! Gostaria de comprar o ${productName} por ${productPrice}.`
                + `\nEstoque disponível: ${stock} unidades.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  window.location.href = whatsappUrl;
}

// Exibe os produtos quando a página é carregada
window.onload = displayProducts;
