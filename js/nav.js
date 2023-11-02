document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    var botonera = document.querySelector('.botonera');
    if (window.scrollY > 100) {
      botonera.classList.add('scrolled');
    } else {
      botonera.classList.remove('scrolled');
    }
  });
});