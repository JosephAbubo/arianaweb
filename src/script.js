document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.menu-toggle input');
    const menu = document.querySelector('.menu-toggle ul');

    toggleButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
