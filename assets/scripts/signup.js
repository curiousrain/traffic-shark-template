document.addEventListener("DOMContentLoaded", () => {
    const rememberMe = document.querySelector("#remember-me");
    rememberMe.addEventListener("click", () => rememberMe.classList.toggle("no"));
})