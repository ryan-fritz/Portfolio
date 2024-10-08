// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    /**
     * Function to load HTML content into specified placeholders.
     * @param {string} placeholderId - The ID of the placeholder element.
     * @param {string} filePath - The path to the HTML file to load.
     */
    const loadHTML = async (placeholderId, filePath) => {
        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error(`Failed to load ${filePath}`);
            const content = await response.text();
            document.getElementById(placeholderId).innerHTML = content;
        } catch (error) {
            console.error(`Error loading ${filePath}:`, error);
            document.getElementById(placeholderId).innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Failed to load content. Please try again later.
                </div>`;
        }
    };

    /**
     * Function to load all HTML sections.
     */
    const loadAllSections = async () => {
        await loadHTML('nav-placeholder', 'nav.html');
        await Promise.all([
            loadHTML('about-placeholder', 'about.html'),
            loadHTML('education-placeholder', 'education.html'),
            loadHTML('projects-placeholder', 'projects.html'),
            loadHTML('skills-placeholder', 'skills.html'),
            loadHTML('interests-placeholder', 'interests.html'),
            loadHTML('footer-placeholder', 'footer.html'),
            loadHTML('contact-placeholder', 'contact.html'), // Ensure this placeholder exists in index.html
        ]);
    };

    /**
  
     * Function to initialize Smooth Scrolling for navigation links.
     */
    const initializeSmoothScrolling = () => {
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                const targetID = href.includes('#') ? href.split('#')[1] : '';
                const targetSection = document.getElementById(targetID);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Adjust offset for fixed navbar

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }

                // Collapse Navbar on Mobile after clicking a link
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarToggler && navbarToggler.offsetParent !== null) { // Check if navbar-toggler is visible
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    };

    // Load all sections first
    loadAllSections().then(() => {
        // Initialize Smooth Scrolling after all sections are loaded
        initializeSmoothScrolling();
        // Highlight the active page
        const currentPath = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});
