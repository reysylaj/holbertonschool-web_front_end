const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

if (typeof Storage === "undefined") {
    alert("Sorry, your browser does not support Web storage. Try again with a better one");
} else {
    document.addEventListener("DOMContentLoaded", () => {
        createStore();
        displayCart();
    });
}

function addItemToCart(item) {
    localStorage.setItem(item, true);
    displayCart();
}

function createStore() {
    let ul = document.createElement("ul");
    document.body.appendChild(ul);

    availableItems.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        li.addEventListener("click", () => addItemToCart(item));
        ul.appendChild(li);
    });
}

function displayCart() {
    let cartMessage = document.getElementById("cartMessage");
    if (cartMessage) cartMessage.remove();

    let cartItems = Object.keys(localStorage);
    if (cartItems.length > 0) {
        let message = document.createElement("p");
        message.id = "cartMessage";
        message.textContent = `You previously had ${cartItems.length} items in your cart`;
        document.body.appendChild(message);
    }
}