const hamburgerMenu = document.querySelector('.hamburger-menu');
        const navMenu = document.querySelector('.nav-menu');

        // Toggle the menu when hamburger icon is clicked
        hamburgerMenu.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
            hamburgerMenu.classList.toggle('change');
        })