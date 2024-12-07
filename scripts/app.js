const loginButton = document.getElementById("login-button");
const nameInput = document.getElementById("name");
const passInput = document.getElementById("pass");


loginButton.addEventListener("click", () => {
    if (nameInput.value.length >= 3 && passInput.value.length >= 8) {
        alert("ورود موفقیت آمیز")
        location.href = "/";
    } else {
        alert("نام کاربری حداقل 3 کاراکتر و رمز حداقل 8 کاراکتر")
    }
});
