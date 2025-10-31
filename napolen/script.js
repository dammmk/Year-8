// Run after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Fade-in on scroll for elements with class .artifact
  const fadeEls = document.querySelectorAll('.artifact');
  function onScrollFade() {
    if (!fadeEls.length) return;
    const trigger = window.innerHeight - 100;
    fadeEls.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top <= trigger) el.classList.add('visible');
    });
  }
  window.addEventListener('scroll', onScrollFade);
  onScrollFade(); // initial check

  // Lightbox functionality (gallery page)
  const thumbs = document.querySelectorAll('.thumb img');
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lbImage');
  const lbCaption = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');

  if (thumbs && thumbs.length && lightbox) {
    thumbs.forEach(img => {
      img.addEventListener('click', () => {
        lbImage.src = img.src;
        lbCaption.textContent = img.alt || '';
        lightbox.style.display = 'flex';
        lightbox.setAttribute('aria-hidden','false');
      });
    });
    function closeLB() {
      lightbox.style.display = 'none';
      lightbox.setAttribute('aria-hidden','true');
      lbImage.src = '';
    }
    lbClose && lbClose.addEventListener('click', closeLB);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLB();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLB(); });
  }
});