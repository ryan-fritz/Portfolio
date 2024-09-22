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
        await Promise.all([
            loadHTML('nav-placeholder', 'nav.html'),
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
     * Function to initialize Dark Mode functionality.
     */
    const initializeDarkMode = () => {
        const toggleSwitch = document.getElementById('darkModeToggle');
        const currentTheme = localStorage.getItem('theme');

        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
            if (toggleSwitch) toggleSwitch.checked = true;
        }

        if (toggleSwitch) {
            toggleSwitch.addEventListener('change', () => {
                document.body.classList.toggle('dark-mode');
                let theme = 'light';
                if (document.body.classList.contains('dark-mode')) {
                    theme = 'dark';
                }
                localStorage.setItem('theme', theme);
            });
        }
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
        // Initialize Dark Mode after all sections are loaded
        initializeDarkMode();

        // Initialize Smooth Scrolling after all sections are loaded
        initializeSmoothScrolling();
    });
});
