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

    // Highlight active link based on current page and scroll position
    const highlightActiveLink = () => {
        const currentPath = window.location.pathname.split('/').pop();
        let current = currentPath;

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section && section.offsetTop <= window.scrollY + 100) {
                current = link.getAttribute('href');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    };

    // Initial highlight on page load
    highlightActiveLink();

    // Update highlight on scroll
    window.addEventListener('scroll', highlightActiveLink);
}
