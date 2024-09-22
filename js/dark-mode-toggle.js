// dark-mode-toggle.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('#darkModeToggle');

    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
        if (toggleSwitch) toggleSwitch.checked = true;
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
        });
    }
});
  
