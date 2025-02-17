const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

if (typeof sessionStorage === "undefined") {
    alert("Sorry, your browser does not support Web storage. Try again with a better one");
} else {
    createStore();
    displayCart();
}

function getCartFromStorage() {
    return JSON.parse(sessionStorage.getItem("cart")) || {};
}

function addItemToCart(item) {
    let cart = getCartFromStorage();
    cart[item] = (cart[item] || 0) + 1;
    sessionStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function removeItemFromCart(item) {
    let cart = getCartFromStorage();
    if (cart[item]) {
        delete cart[item];
        sessionStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }
}

function clearCart() {
    sessionStorage.removeItem("cart");
    displayCart();
}

function createStore() {
    const body = document.body;
    const h2 = document.createElement("h2");
    h2.textContent = "Available products:";
    body.appendChild(h2);

    const ul = document.createElement("ul");
    availableItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.addEventListener("click", () => addItemToCart(item));
        ul.appendChild(li);
    });
    body.appendChild(ul);
}

function displayCart() {
    let existingCart = document.getElementById("cart");
    if (!existingCart) {
        const h2 = document.createElement("h2");
        h2.textContent = "Your cart:";
        document.body.appendChild(h2);

        const div = document.createElement("div");
        div.id = "cart";
        document.body.appendChild(div);
    }
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";

    const cart = getCartFromStorage();
    if (Object.keys(cart).length === 0) {
        cartDiv.textContent = "Your cart is empty";
        return;
    }

    const ul = document.createElement("ul");
    Object.entries(cart).forEach(([item, quantity]) => {
        const li = document.createElement("li");
        li.innerHTML = `${item} x ${quantity} <button onclick="removeItemFromCart('${item}')">(remove)</button>`;
        ul.appendChild(li);
    });

    const clearButton = document.createElement("button");
    clearButton.textContent = "Clear my cart";
    clearButton.addEventListener("click", clearCart);
    cartDiv.appendChild(ul);
    cartDiv.appendChild(clearButton);
}