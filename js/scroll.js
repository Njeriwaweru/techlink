const scrollIcon = document.getElementById('scrollIcon');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        scrollIcon.style.display = 'inline-flex';
    } else {
        scrollIcon.style.display = 'none'
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const scrollIcon = document.getElementById('scrollIcon');
    const content = document.getElementById('content');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            scrollIcon.style.opacity = '1';
            scrollIcon.style.bottom = '20px';
        } else {
            scrollIcon.style.opacity = '0';
            scrollIcon.style.bottom = '-50px';
        }
    });
});