// Sets cookies without expiration (from Task 0)
function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    document.cookie = `firstname=${firstname}; path=/`;
    document.cookie = `email=${email}; path=/`;
}

// Sets cookies with an expiration date of 10 days (from Task 1)
function setCookiesWithExpiration() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    const d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000)); // 10 days in milliseconds
    const expires = `expires=${d.toUTCString()}`;

    document.cookie = `firstname=${firstname}; ${expires}; path=/`;
    document.cookie = `email=${email}; ${expires}; path=/`;
}

// NEW: Read a cookie value by name
function getCookie(name) {
    const nameEQ = name + "=";
    const cookiesArray = document.cookie.split(';');

    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length);
        }
    }
    return "";
}

// Updated: Display the cookies using getCookie
function showCookies() {
    const email = getCookie("email");
    const firstname = getCookie("firstname");

    const p = document.createElement("p");
    p.innerHTML = `Email: ${email} - Firstname: ${firstname}`;

    const container = document.getElementById("cookie-container");
    container.innerHTML = ""; // Clear previous output if any
    container.appendChild(p);
}

// Expose the functions to the global scope for the HTML inline event handlers
window.setCookies = setCookies;
window.setCookiesWithExpiration = setCookiesWithExpiration;
window.getCookie = getCookie;
window.showCookies = showCookies;