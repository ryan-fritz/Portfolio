document.addEventListener('DOMContentLoaded', () => {
    const tagCloud = document.getElementById('tagcloud');
    const tags = Array.from(tagCloud.getElementsByClassName('tag'));

    // Shuffle tags
    tags.sort(() => Math.random() - 0.5);

    // Assign random colors
    tags.forEach(tag => {
        tag.style.color = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}`;
    });
});
  
