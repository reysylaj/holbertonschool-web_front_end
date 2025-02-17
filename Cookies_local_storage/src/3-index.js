document.getElementById("submitForm").addEventListener("submit", setCookies);
function setCookies(event) {
    event.preventDefault();
    const firstname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    document.cookie = `firstname=${firstname}`;
    document.cookie = `email=${email}`;
}
document.getElementById("showCookies").addEventListener("click", showCookies)
function showCookies() {
    let pTagHtml = document.createElement("p");
    const myData = document.cookie.split(" ");
    const cookiesObject = {};
    myData.map((data, index) => {
        const [key, value] = data.split("=");
        if (typeof value !== 'undefined') {
            cookiesObject[key] = value;
        }
    });
    pTagHtml.innerHTML = "Firstname: " + getCookie(cookiesObject).firstname + " email: " + getCookie(cookiesObject).email;
    document.body.appendChild(pTagHtml);
}
function getCookie(data) {
    console.log(data);
    if (data.firstname.length < 0) {
        return "empty"
    } else {
        return data
    }
}