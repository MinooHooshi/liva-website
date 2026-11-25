# LIVA · Mediterranean Soul

Website for **LIVA**, Mediterranean café-restaurant at Mercatorplein 2b, 1057 CB Amsterdam — [cafeliva.nl](https://cafeliva.nl)

A static site (plain HTML, CSS and JavaScript). No build step: whatever is in this repository is what goes online.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole page: layout, styles, Dutch/English texts, opening hours and the Zenchef booking code |
| `menu-data.js` | All menus and prices. Edit dishes and prices here; the site updates automatically |
| `img/` | Logos and photos |

## Common changes

- **Prices or dishes** → `menu-data.js` (instructions at the top of the file)
- **Opening hours** → `HOURS` in `index.html`
- **Texts** → the `T` object in `index.html` (`nl` and `en`)
- **Reservations** → Zenchef widget, restaurant ID `381407`, at the bottom of `index.html`

## Hosting

Hosted on Netlify, connected to this repository: every change pushed to `main` goes live automatically.
