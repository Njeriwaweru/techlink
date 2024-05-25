document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const logoImg = document.getElementById('logo-img');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // You can adjust this value based on when you want the change to occur
            navbar.classList.remove('nav-default');
            navbar.classList.add('nav-scrolled');
            logoImg.src = "images/logo4.png";
        } else {
            navbar.classList.remove('nav-scrolled');
            navbar.classList.add('nav-default');
            logoImg.src = "images/logo3.png";
        }
    });
});