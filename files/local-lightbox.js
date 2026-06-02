(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('a[rel^="lightbox"]'));
  if (!links.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'local-lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');

  var closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.setAttribute('aria-label', 'Close image');
  closeButton.textContent = 'x';

  var image = document.createElement('img');
  image.alt = '';

  overlay.appendChild(closeButton);
  overlay.appendChild(image);
  document.body.appendChild(overlay);

  function closeLightbox() {
    overlay.classList.remove('is-open');
    image.removeAttribute('src');
  }

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      image.src = link.href;
      image.alt = link.querySelector('img') ? link.querySelector('img').alt || '' : '';
      overlay.classList.add('is-open');
    });
  });

  overlay.addEventListener('click', function (event) {
    if (event.target === overlay || event.target === closeButton) closeLightbox();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeLightbox();
  });
})();
