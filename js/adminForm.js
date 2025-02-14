const downBtn = document.querySelector('.admin__down-arrow');
const upBtn = document.querySelector('.admin__up-arrow');
const adminP = document.querySelector('.admin-panel');
let empty = "";

const adminBtn = document.querySelector('.admin__down-text');

downBtn.addEventListener('click', function () {
    adminP.style.top = "-230px";
    downBtn.classList.add('hidden');
    upBtn.classList.remove('hidden');
});

upBtn.addEventListener('click', function () {
    adminP.style.top = "-275px";
    upBtn.classList.add('hidden');
    downBtn.classList.remove('hidden');
    adminBtn.classList.remove('hidden');
    inputLogin.style.boxShadow = "none";
    inputPass.style.boxShadow = "none";
    inputLogin.value = empty;
    inputPass.value = empty;
});

adminBtn.addEventListener('click', function () {
    adminP.style.top = "0px";
    adminBtn.classList.add('hidden');
});

const inputLogin = document.querySelector('.top-login__input');
const inputPass = document.querySelector('.top-pass__input');
const loginBtn = document.querySelector('.login');
const wrongPass = document.querySelector('.admin__wrong');
const wrongLogin = document.querySelector('.wrong__login');

const loggedIn = document.querySelector('.logged');
const newPostBtn = document.querySelector('.news__edit-button');

loginBtn.addEventListener('click', function () {
    if (inputLogin.value === "admin" && inputPass.value === "admin") {
        inputLogin.value = empty;
        inputPass.value = empty;
        inputLogin.style.boxShadow = "none";
        inputPass.style.boxShadow = "none";
        wrongPass.classList.add('hidden');
        wrongLogin.classList.add('hidden');
        adminP.style.top = "-275px";
        downBtn.classList.remove('hidden');
        upBtn.classList.add('hidden');
        adminBtn.classList.remove('hidden');
        adminP.style.top = "-307px";
        loggedIn.style.top = "-3px";
        newPostBtn.classList.remove('hidden');

        const hideEditBar = document.querySelectorAll('.news__edit-bar');
        hideEditBar.forEach(function (item) {
            item.classList.remove('hidden');
        });
        //all JS code was written by © Eugeniu Rascu
    } else if (inputLogin.value === "" || inputPass.value === "") {
        if (inputLogin.value === "") {
            inputLogin.style.boxShadow = "inset 0 0 5px red";
        } else {
            inputLogin.style.boxShadow = "none";
        }

        if (inputPass.value === "") {
            inputPass.style.boxShadow = "inset 0 0 5px red";
        } else {
            inputPass.style.boxShadow = "none";
        }

    } else if (inputLogin.value === "admin" && inputPass.value !== "admin" && inputPass.value.length > 0) {
        wrongPass.classList.remove('hidden');
        inputPass.value = empty;

    } else {
        inputPass.style.boxShadow = "inset 0 0 5px red";
        inputPass.value = empty;
        // wrongPass.classList.remove('hidden');
    }

    if (inputLogin.value !== "admin" && inputLogin.value.length > 0) {
        inputLogin.style.boxShadow = "inset 0 0 5px red";
        wrongLogin.classList.remove('hidden');
        inputPass.style.boxShadow = "none";
    } else if (inputLogin.value === "admin") {
        wrongLogin.classList.add('hidden');
    }
});

const logOut = document.querySelector('.logged-text');
const loggedBlock = document.querySelector('.logged');

logOut.addEventListener('click', function () {
    loggedIn.style.top = "-45px";
    adminP.style.top = "-275px";
    newPostBtn.classList.add('hidden');
    addNewPostForm.classList.add('hidden'); //constant created in editPanel.js

    editFormBlock.classList.add('hidden');
    document.querySelector('.news__new-post').classList.remove('hidden');

    const hideEditBar = document.querySelectorAll('.news__edit-bar');

    hideEditBar.forEach(function (item) {
        item.classList.add('hidden');
    });
});