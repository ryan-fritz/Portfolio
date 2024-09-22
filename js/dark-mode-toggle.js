// dark-mode-toggle.js
document.addEventListener('DOMContentLoaded',()=>{const e=document.getElementById('darkModeToggle'),t=localStorage.getItem('theme');t&&applyTheme(t),e&&e.addEventListener('change',()=>{toggleDarkMode()})});const applyTheme=e=>{document.body.classList.toggle('dark-mode','dark'===e);const t=document.getElementById('darkModeToggle');t&&(t.checked='dark'===e)},toggleDarkMode=()=>{const e=document.body.classList.contains('dark-mode')?'light':'dark';applyTheme(e),localStorage.setItem('theme',e)};
  
