document.getElementById('form').addEventListener('submit', setCookies);


function setCookies(event) {
    event.preventDefault();

    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;
    document.cookie = "firstname=" + firstname + "email=" + email;
}

document.getElementById