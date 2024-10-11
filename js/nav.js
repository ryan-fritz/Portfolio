// nav.js
document.addEventListener("DOMContentLoaded", function() {
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;

            // Initialize smooth scrolling and active link highlighting
            initializeNavFeatures();
        })
        .catch(error => console.error('Error loading navbar:', error));
});

function initializeNavFeatures() {
    const navLinks = document.querySelectorAll('.js-scroll-trigger');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active link based on current page URL
    const highlightActiveLink = () => {
        const currentPath = window.location.pathname.split('/').pop();

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    };

    // Initial highlight on page load
    highlightActiveLink();

    // Update highlight on scroll
    window.addEventListener('scroll', highlightActiveLink);
}
