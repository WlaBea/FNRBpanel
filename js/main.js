const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const login = document.getElementById("login_button");

hamburger.addEventListener('click', function() {
    this.classList.toggle('is_active');
    menu.classList.toggle('menuhamb');
});

login.addEventListener('click', function() {
    document.getElementById("login_page_id").style.display = "none";
    document.getElementById("nav_id").style.display = "flex";
    document.getElementById("main_page_id").style.display = "grid";
});