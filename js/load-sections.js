// load-sections.js
document.addEventListener("DOMContentLoaded", function() {
    const sections = [
      { id: 'nav-placeholder', url: 'nav.html' },
      { id: 'about-placeholder', url: 'about.html' },
      { id: 'education-placeholder', url: 'education.html' },
      { id: 'skills-placeholder', url: 'skills.html' },
      { id: 'projects-placeholder', url: 'projects.html' },
      { id: 'interests-placeholder', url: 'interests.html' },
    ];
  
    sections.forEach(section => {
      fetch(section.url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to load ${section.url}`);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById(section.id).innerHTML = data;
  
          // Initialize navbar scripts after nav.html is loaded
          if (section.id === 'nav-placeholder') {
            initializeNavbarScripts();
          }
        })
        .catch(error => {
          console.error('Error loading section:', error);
          document.getElementById(section.id).innerHTML = `<div class="alert alert-danger" role="alert">Failed to load content. Please try again later.</div>`;
        });
    });
  
    // Function to initialize navbar-related scripts
    function initializeNavbarScripts() {
      // Initialize Bootstrap's collapse functionality
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
  
      if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function () {
          navbarCollapse.classList.toggle('show');
        });
      }
  
      // Smooth scrolling for navigation links
      document.querySelectorAll('.js-scroll-trigger').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetID = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetID);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70, // Adjust offset for fixed navbar
              behavior: 'smooth'
            });
          }
  
          // Collapse the navbar on mobile after clicking a link
          if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
          }
        });
      });
  
      // Initialize dark mode toggle
      initializeDarkModeToggle();
    }
  
    // Function to initialize dark mode toggle
    function initializeDarkModeToggle() {
      const toggleSwitch = document.getElementById('darkModeToggle');
      const currentTheme = localStorage.getItem('theme');
  
      if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (toggleSwitch) toggleSwitch.checked = true;
      }
  
      if (toggleSwitch) {
        toggleSwitch.addEventListener('change', function () {
          document.body.classList.toggle('dark-mode');
          let theme = 'light';
          if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
          }
          localStorage.setItem('theme', theme);
        });
      }
    }
  });
  