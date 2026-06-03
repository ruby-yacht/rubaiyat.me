# rubaiyat.me

Static portfolio site for `rubaiyat.me`.

## Hand-Editing Guide

This site is intentionally kept as plain HTML, CSS, JavaScript, and image files.
There is no build step, so edits can be made directly and previewed in a browser.

## File Map

- `index.html` is the home page.
- `projects.html`, `video.html`, `interventions.html`, `arcade.html`, and
  `curatorial.html` are the main portfolio sections.
- `files/main.css` holds the shared layout, typography, navigation, gallery, and
  responsive styles.
- `files/local-lightbox.js` powers the image lightbox on pages that include it.
- `uploads/media/` contains page images and gallery images.
- `files/theme/` contains background and theme images.

## Local Preview

From this folder, run:

```sh
python3 -m http.server 8092
```

Then open:

```text
http://localhost:8092/
```

## Editing Pages

Most pages share the same broad structure:

1. `<head>` contains the page title, social preview metadata, Bootstrap, and
   `files/main.css`.
2. `<header>` contains the site title.
3. `<nav>` contains the main navigation links.
4. `#banner-wrap` is the optional hero/banner area.
5. `#main-wrap` contains the page-specific text, images, and galleries.
6. Bootstrap JavaScript is loaded at the end of the page.
7. `files/local-lightbox.js` is loaded only on pages with lightbox galleries.

When editing by hand, keep changes close to the content you are changing. For
example, update a project description in that project page, but update shared
spacing or gallery behavior in `files/main.css`.

## Images

Use small display images for thumbnails and link to larger images for lightbox
views:

```html
<a href="uploads/media/example-full.jpg" rel="lightbox[gallery-name]">
  <img src="uploads/media/example.jpg" alt="Short image description">
</a>
```

The lightbox script finds links whose `rel` starts with `lightbox`, so no extra
JavaScript is needed for new gallery images.

## Navigation

Navigation is duplicated in each HTML file. When adding or renaming a main page,
update the `<nav>` block in every page and set only the current page link to:

```html
class="nav-link active" aria-current="page"
```

All other links should use:

```html
class="nav-link"
```

## Style Notes

- Prefer simple HTML and readable inline content edits.
- Put shared style changes in `files/main.css`.
- Keep comments short and focused on intent.
- Avoid large generated rewrites unless a page is being deliberately rebuilt.
