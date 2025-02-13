document.getElementById('form').addEventListener('submit', setCookies);


function setCookies(event) {
    event.preventDefault();

    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;


    const date = new Date();
    date.setDate(date.getDate() + 10);

    document.cookie = `firstname=${firstname}; expires=${date.toUTCString()};`
    document.cookie = `email = ${email}; expires = ${date.toUTCString()};`
}

document.getElementById("show").addEventListener("click", showCookies())

function showCookies() {
    let para = document.createElement("p");
    para.innerHTML = "Cookie: " + document.cookie;

    document.body.appendChild(para);
}