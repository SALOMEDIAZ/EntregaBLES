
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

let carrito = [];

function mostrarCarrito() {
    const modal = document.getElementById("modal-carrito");
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ""; 
    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = producto;
        cartItems.appendChild(li);
    });
    document.getElementById("cart-count").textContent = carrito.length;
    modal.style.display = "block";
}

function cerrarCarrito() {
    document.getElementById("modal-carrito").style.display = "none";
}

document.querySelectorAll('.btn-add').forEach(button => {
    button.addEventListener('click', function() {
        const producto = this.getAttribute('data-product');
        carrito.push(producto); 
        document.getElementById("cart-count").textContent = carrito.length; 
    });
});

window.onclick = function(event) {
    const modal = document.getElementById("modal-carrito");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

  
  
  function addToCart() {
    alert("Producto añadido al carrito");
  }
  