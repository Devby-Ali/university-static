// const navBtn = document.querySelector(".nav__btn")
// const navMenu = document.querySelector(".nav-menu")
const loginButton = document.getElementById("login-button");
const nameInput = document.getElementById("name");
const passInput = document.getElementById("pass");

// let navOpen = false;
// navBtn.addEventListener("click", function () {
//     if (navOpen) {
//         navBtn.classList.remove("nav__btn--open")
//         navMenu.classList.remove("nav-menu--open")

//         navOpen = false
//     } else {
//         navBtn.classList.add("nav__btn--open")
//         navMenu.classList.add("nav-menu--open")
//         navOpen = true
//     }
// })]



loginButton.addEventListener("click", () => {
    if (nameInput.value.length >= 3 && passInput.value.length >= 8) {
        alert("ورود موفقیت آمیز")
        location.href = "/";
    } else {
        alert("نام کاربری حداقل 3 کاراکتر و رمز حداقل 8 کاراکتر")
    }
});
