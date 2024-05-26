var num=10;

function addToCart(product) {
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    let message = `Prodotto aggiunto al carrello:\n\nNome: ${product.name}\nPrezzo: €${product.price.toFixed(2)}`;

    if(num>=10){
        alert(message);
        num--
    }
}

// Event listener per il bottone "Compra Ora"
document.addEventListener('DOMContentLoaded', function() {
    let addToCartButton = document.getElementById('add_cart');
    
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function() {
            const product = {
                name: document.getElementById('heading').innerText,
                price: parseFloat(document.querySelector('.price').innerText.replace('€', '')),
                quantity: 1
            };

            if(num>=10){
                addToCart(product);
            }
            
            window.location.href = '../cart.html';
        });
    }
});

// Funzione per visualizzare il carrello
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    let totalPrice = 0;

    cartItems.innerHTML = ''; // Clear existing cart items

    cart.forEach((item, index) => {
        let row = cartItems.insertRow();
        row.insertCell(0).innerText = item.name;
        row.insertCell(1).innerText = '€' + item.price.toFixed(2);
        row.insertCell(2).innerText = item.quantity;
        row.insertCell(3).innerText = '€' + (item.price * item.quantity).toFixed(2);
        let removeButton = document.createElement('button');
        removeButton.innerText = 'Rimuovi';
        removeButton.addEventListener('click', function() {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
        });
        row.insertCell(4).appendChild(removeButton);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}

// Chiamare displayCart solo nella pagina del carrello
if (window.location.pathname.includes('cart.html')) {
    document.addEventListener('DOMContentLoaded', displayCart);
}