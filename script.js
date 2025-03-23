// JavaScript for Scroll Animations
const sections = document.querySelectorAll('.story-section');

const checkVisibility = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;

    // If the section is in the viewport, add the 'visible' class
    if (sectionTop < window.innerHeight * 0.8 && sectionBottom >= 0) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
};

// Run the function on page load and scroll
window.addEventListener('load', checkVisibility);
window.addEventListener('scroll', checkVisibility);

// JavaScript for "Read More" Toggle
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    const moreContent = document.getElementById(target);
    if (moreContent.style.display === 'block') {
      moreContent.style.display = 'none';
      button.textContent = 'Read More';
    } else {
      moreContent.style.display = 'block';
      button.textContent = 'Read Less';
    }
  });
});