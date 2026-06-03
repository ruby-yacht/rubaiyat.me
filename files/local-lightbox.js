(function () {
  // Any link with rel="lightbox..." opens in this local, dependency-free viewer.
  var links = Array.prototype.slice.call(document.querySelectorAll('a[rel^="lightbox"]'));
  if (!links.length) return;

  // Build the overlay once, then reuse it for every gallery image on the page.
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
    // Remove the image source so the browser can stop showing the previous file.
    image.removeAttribute('src');
  }

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      image.src = link.href;
      // Reuse the thumbnail alt text when it exists.
      var thumbnail = link.querySelector('img');
      image.alt = thumbnail ? thumbnail.alt || '' : '';
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
