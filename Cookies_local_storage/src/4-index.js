function setCookiesAndShowWelcomeMessage() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    if (firstname && email) {
        Cookies.set('firstname', firstname, { path: '/' });
        Cookies.set('email', email, { path: '/' });
        showWelcomeMessageOrForm();
    }
}

function showForm() {
    let welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage) welcomeMessage.remove();
    document.getElementById('loginForm').style.display = 'block';
}

function hideForm() {
    document.getElementById('loginForm').style.display = 'none';
}

function deleteCookiesAndShowForm() {
    Cookies.remove('firstname', { path: '/' });
    Cookies.remove('email', { path: '/' });
    showForm();
}

function showWelcomeMessageOrForm() {
    const firstname = Cookies.get('firstname');
    if (firstname) {
        hideForm();
        let body = document.body;
        let welcomeMessage = document.createElement('h1');
        welcomeMessage.id = 'welcomeMessage';
        welcomeMessage.innerHTML = `Welcome ${firstname} <a id="logout">(logout)</a>`;
        body.appendChild(welcomeMessage);
        document.getElementById('logout').addEventListener('click', () => {
            deleteCookiesAndShowForm();
            welcomeMessage.remove();
        });
    } else {
        showForm();
    }
}

document.addEventListener("DOMContentLoaded", showWelcomeMessageOrForm);