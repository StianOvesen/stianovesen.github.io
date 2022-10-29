function darkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    document.getElementById("heading").classList.toggle("to-home-dark");
    document.getElementById("navbar").classList.toggle("navbar-dark");   
}