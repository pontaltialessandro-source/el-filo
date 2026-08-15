# El Filò — sito web

Sito statico della pizzeria **El Filò** (Viale Stazione 64, 38056 Levico Terme, TN).
Nessuna build: solo HTML/CSS/JS + immagini.

## Pagine
- `index.html` — Home
- `chi-siamo.html` — Chi siamo
- `menu.html` — Menù
- `pizza-del-mese.html` — Pizza del mese
- `contatti.html` — Contatti
- `styles.css`, `app.js`, `images/` — asset condivisi

## Anteprima locale
```
python -m http.server 8940
```
Poi apri http://localhost:8940

## Deploy (automatico via GitHub Pages)
Repo: https://github.com/pontaltialessandro-source/el-filo (trasferito dall'account stefanopontalti07-cloud)
Sito live: https://pontaltialessandro-source.github.io/el-filo/

GitHub Pages pubblica il branch `main` (root). Ogni `git push` su `main` ripubblica il sito
in ~1 minuto. Path relativi obbligatori (il sito gira sul sottopercorso `/el-filo/`).

Nota: `netlify.toml` resta nel repo ma non è usato (account Netlify a crediti esauriti).
