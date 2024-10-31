
function goToProductDetail(name, price, description, imageUrl) {
    const url = `detail.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&description=${encodeURIComponent(description)}&image=${encodeURIComponent(imageUrl)}`;
    window.location.href = url;
  }
  
  
  
  window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const price = params.get("price");
    const description = params.get("description");
    const image = params.get("image");
  
    if (name && price && description && image) {
      document.getElementById("product-name").textContent = name;
      document.getElementById("product-price").textContent = `Precio: $${price}`;
      document.getElementById("product-description").textContent = description;
      document.getElementById("product-image").src = image;
    }
  };
  
  
  function addToCart() {
    alert("Producto añadido al carrito");
  }
  