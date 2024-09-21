document.addEventListener('DOMContentLoaded', () => {
    const tagcloud = document.getElementById('tagcloud');
    const tags = Array.from(tagcloud.getElementsByClassName('tag'));
  
    // Shuffle tags
    tags.sort(() => Math.random() - 0.5);
    
    // Assign random colors
    tags.forEach(tag => {
      tag.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
    });
  });
  