document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector("#register-form");
    const regPopup = document.querySelector("#reg-popup");

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        regPopup.classList.add("active");
    });

    regPopup.addEventListener('click', () => {
        regPopup.classList.remove("active");
    });
});