const loginFormat = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const loginWelcome = document.querySelector("#loginWelcome");

const loginKey = "login";
const loginInfo = localStorage.getItem(loginKey);

// addevent lister from login submit
// get value
// push value into localstorage
// show welcome

function login(event) {
    event.preventDefault();
    localStorage.setItem(loginKey, loginInput.value);
    loginShow(loginInput.value);
}

function loginShow(value) {
    loginFormat.classList.add("hidden");
    loginWelcome.classList.remove("hidden");
    loginWelcome.innerText = `Welcome ${value}`;
}

loginFormat.addEventListener("submit", login);

if(loginInfo !== null) {
    loginShow(loginInfo);
}