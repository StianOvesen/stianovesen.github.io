function darkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    const navbar = document.querySelector(".navbar")
    navbar.classList.toggle("nav-dark")
}