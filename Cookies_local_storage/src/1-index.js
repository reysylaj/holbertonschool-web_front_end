function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    document.cookie = `firstname=${firstname}; path=/`;
    document.cookie = `email=${email}; path=/`;
}

function setCookiesWithExpiration() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    const d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000)); // 10 days from now
    const expires = `expires=${d.toUTCString()}`;

    document.cookie = `firstname=${firstname}; ${expires}; path=/`;
    document.cookie = `email=${email}; ${expires}; path=/`;
}

function showCookies() {
    const cookies = document.cookie.split('; ').map(cookie => cookie.split('=')).reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});

    const p = document.createElement('p');
    p.innerHTML = `Cookies: ${JSON.stringify(cookies)}`;

    document.getElementById('cookie-container').innerHTML = '';
    document.getElementById('cookie-container').appendChild(p);
}

window.setCookies = setCookies;
window.setCookiesWithExpiration = setCookiesWithExpiration;
window.showCookies = showCookies;