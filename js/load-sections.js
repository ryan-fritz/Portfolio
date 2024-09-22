// load-sections.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = [
        { id: 'nav-placeholder', url: 'nav.html' },
        { id: 'about-placeholder', url: 'about.html' },
        { id: 'education-placeholder', url: 'education.html' },
        { id: 'skills-placeholder', url: 'skills.html' },
        { id: 'projects-placeholder', url: 'projects.html' },
        { id: 'interests-placeholder', url: 'interests.html' },
    ];

    const loadSection = ({ id, url }) => {
        fetchContent(url)
            .then(data => {
                document.getElementById(id).innerHTML = data;
                if (id === 'nav-placeholder') initializeNavbarScripts();
            })
            .catch(error => {
                console.error('Error loading section:', error);
                document.getElementById(id).innerHTML = `<div class="alert alert-danger" role="alert">Failed to load content. Please try again later.</div>`;
            });
    };

    sections.forEach(loadSection);

    const fetchContent = (url) => {
        return fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load ${url}`);
                return response.text();
            });
    };

    const initializeNavbarScripts = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        if (navbarToggler && navbarCollapse) {
            navbarToggler.addEventListener('click', () => {
                navbarCollapse.classList.toggle('show');
            });
        }

        document.querySelectorAll('.js-scroll-trigger').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetID = anchor.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetID);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            });
        });

        initializeDarkModeToggle();
    };

    const initializeDarkModeToggle = () => {
        const toggleSwitch = document.getElementById('darkModeToggle');
        const currentTheme = localStorage.getItem('theme');

        const applyTheme = (theme) => {
            document.body.classList.toggle('dark-mode', theme === 'dark');
            if (toggleSwitch) toggleSwitch.checked = (theme === 'dark');
        };

        applyTheme(currentTheme);

        if (toggleSwitch) {
            toggleSwitch.addEventListener('change', () => {
                const theme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
                applyTheme(theme);
                localStorage.setItem('theme', theme);
            });
        }
    };
});
  
