// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add to cart functionality
    const cartButtons = document.querySelectorAll('.product-item .btn');

    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to cart!');
        });
    });
});

// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total h3');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productInfo = this.closest('.product-info') || this.closest('.product-item');
            const productName = productInfo.querySelector('h1, h3').innerText;
            const productPrice = productInfo.querySelector('.price, p').innerText;
            const productImage = productInfo.querySelector('img').src;

            addItemToCart(productName, productPrice, productImage);
            updateCartTotal();
        });
    });

    function addItemToCart(name, price, image) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${image}" alt="${name}">
            <div class="item-info">
                <h3>${name}</h3>
                <p>${price}</p>
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" value="1" min="1">
                <button class="btn remove-item">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);

        // Add event listener for removing items
        cartItem.querySelector('.remove-item').addEventListener('click', function() {
            cartItem.remove();
            updateCartTotal();
        });

        // Add event listener for quantity change
        cartItem.querySelector('input').addEventListener('change', function() {
            updateCartTotal();
        });
    }

    function updateCartTotal() {
        let total = 0;
        const cartItems = cartItemsContainer.querySelectorAll('.cart-item');
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('p').innerText.replace('$', ''));
            const quantity = item.querySelector('input').value;
            total += price * quantity;
        });
        cartTotal.innerText = `Total: $${total.toFixed(2)}`;
    }
});

// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Basic validation (optional)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (name && email && subject && message) {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset(); // Reset the form fields
        } else {
            alert('Please fill out all fields.');
        }
    });
});
