window.addEventListener('DOMContentLoaded', () => {
  // Navigation Items
  const navLinks = document.querySelectorAll('.nav-link');
  let currentPage = document.querySelector('.is-active');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      link.classList.toggle('is-active');
      currentPage.classList.toggle('is-active');
      currentPage = link;
    });
  });
});
