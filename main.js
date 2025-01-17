// Declare a global variable to track the cart count
let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');

// Function to update cart count
function updateCartCount() {
    cartCountElement.textContent = cartCount;
}

// Function to add an item to the cart
function addToCart() {
    cartCount++;
    updateCartCount();

    // Show a success message using SweetAlert2
    Swal.fire({
        icon: 'success',
        title: 'Added to Cart!',
        text: 'The item has been added to your cart.',
        confirmButtonText: 'Close',
        confirmButtonColor: '#333',
        background: '#fff',
    });
}

// Add event listeners to all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Scroll to top functionality for the header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#222'; // Darker background on scroll
    } else {
        header.style.backgroundColor = '#333'; // Original background
    }
});
