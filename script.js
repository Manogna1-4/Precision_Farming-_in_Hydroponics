let scrolled = false;
window.addEventListener('scroll', function () {
  if (!scrolled && window.scrollY > 100) {
    scrolled = true;
    window.location.href = 'about.html';
  }
});
