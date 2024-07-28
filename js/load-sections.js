// load-sections.js
document.addEventListener("DOMContentLoaded", function() {
    const sections = [
        { id: 'about-placeholder', url: 'about.html' },
        { id: 'education-placeholder', url: 'education.html' },
        { id: 'skills-placeholder', url: 'skills.html' },
        { id: 'interests-placeholder', url: 'interests.html' },
        { id: 'projects-placeholder', url: 'projects.html' },
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
            })
            .catch(error => {
                console.error('Error loading section:', error);
                document.getElementById(section.id).innerHTML = `<div class="alert alert-danger" role="alert">Failed to load content. Please try again later.</div>`;
            });
    });
});
