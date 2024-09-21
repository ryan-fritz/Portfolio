// Dark Mode Toggle Script
document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('darkModeToggle');
    const currentTheme = localStorage.getItem('theme');

    // Check if the stored theme is 'dark', then apply dark mode and check the switch
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    // Add event listener to the toggle switch to change the theme
    toggleSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });
    
});
