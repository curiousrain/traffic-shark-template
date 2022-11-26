document.addEventListener("DOMContentLoaded", () => {
    const languageChange = document.querySelector("#language-change");
    languageChange.addEventListener("click", () => languageChange.classList.toggle("en"));
})