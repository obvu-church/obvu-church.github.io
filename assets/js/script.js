(function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  const slides = document.querySelectorAll('.banner-slide');
  const dotsContainer = document.querySelector('.banner-dots');
  if (slides.length > 1) {
    let current = 0;
    const dots = [];

    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('aria-label', 'Show slide ' + (i + 1));
      b.addEventListener('click', () => go(i));
      dotsContainer && dotsContainer.appendChild(b);
      dots.push(b);
    });

    const go = (i) => {
      slides[current].classList.remove('active');
      dots[current] && dots[current].classList.remove('active');
      current = (i + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current] && dots[current].classList.add('active');
    };

    go(0);
    setInterval(() => go(current + 1), 5500);
  }
})();
