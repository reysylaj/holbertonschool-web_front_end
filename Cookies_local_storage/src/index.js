document.getElementById('form').addEventListener('submit', setCookies);


function setCookies(event) {
    event.preventDefault();

    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;
    document.cookie = "firstname=" + firstname + "email=" + email;
}

document.getElementById("show").addEventListener("click", showCookies())

function showCookies() {
    let para = document.createElement("p");
    para.innerHTML = "Cookie: " + document.cookie;

    document.body.appendChild(para);
}