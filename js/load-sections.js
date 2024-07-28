// load-sections.js
document.addEventListener("DOMContentLoaded", function() {
    const sections = [
        { id: 'about-placeholder', url: 'about.html' },
        { id: 'education-placeholder', url: 'education.html' },
        { id: 'skills-placeholder', url: 'skills.html' },
        { id: 'cv-placeholder', url: 'cv.html' },
        { id: 'interests-placeholder', url: 'interests.html' },
        { id: 'projects-placeholder', url: 'projects.html' },
    ];

    sections.forEach(section => {
        fetch(section.url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(section.id).innerHTML = data;
            });
    });
});
