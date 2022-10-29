function darkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    document.getElementById("heading").classList.toggle("to-home-dark");
    document.getElementById("navbar").classList.toggle("navbar-dark");
    if(body.classList.contains("dark-mode")){
        localStorage.setItem("dark-mode", "true");
    } else {
        localStorage.setItem("dark-mode", "false");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("dark-mode") === "true") {
        darkMode();
    }
    document.getElementById("btn-darkmode").addEventListener("click", darkMode);
});