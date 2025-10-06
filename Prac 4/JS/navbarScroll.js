// Grab navbar
const navbar = document.getElementById('NavBarBlock');

// Listen to scroll event
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');     // add solid color after scrolling
  } else {
    navbar.classList.remove('scrolled');  // stay transparent at top
  }
});
