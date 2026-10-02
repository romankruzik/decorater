# Decorater – redesign (Astro)

Statická verze webu Decorater. Košík, přihlášení a newsletter pořád vedou na živý e-shop [decorater.cz](https://www.decorater.cz/).

## Místní spuštění

Potřebujete [Node.js 22](https://nodejs.org/) a [Git](https://git-scm.com/).

```bash
cd E:\decorater-redesign\terrestrial-transit
npm install
npm run dev
```

Otevřete [http://localhost:4321](http://localhost:4321).

```bash
npm run build    # výstup do dist/
npm run preview  # náhled produkční verze
```

## Publikace na GitHub Pages

Repozitář je tato složka (`terrestrial-transit`), ne celá `E:\decorater-redesign`.

### 1. Vytvořte prázdný repozitář

1. Přihlaste se na [github.com](https://github.com/new)
2. Název např. `decorater-redesign`
3. Nechte ho **prázdný** (bez README, bez .gitignore)
4. Zvolte **Public**, pokud má být web vidět bez přihlášení

### 2. Nahrajte kód

V PowerShellu:

```powershell
cd E:\decorater-redesign\terrestrial-transit
git init
git branch -M main
git add .
git status
git commit -m "Publish Decorater Astro redesign."
git remote add origin https://github.com/VASE-JMENO/decorater-redesign.git
git push -u origin main
```

`VASE-JMENO` nahraďte svým GitHub účtem. Při `git push` se prohlížeč nebo Git Credential Manager zeptá na přihlášení.

### 3. Zapněte GitHub Pages

1. Na GitHubu otevřete repozitář → **Settings** → **Pages**
2. U **Source** zvolte **GitHub Actions**
3. Po pushi počkejte na zelený workflow **Deploy GitHub Pages**
4. Web bude na:

`https://VASE-JMENO.github.io/decorater-redesign/`

Pokud se workflow nespustí, spusťte ho ručně v záložce **Actions**.

### Vlastní doména

Až budete chtít `www.decorater.cz` na tento web (místo Shoptetu), v `astro.config.mjs` nastavte `site` na tuto doménu a v GitHub Pages přidejte custom domain. Do té doby nechte `site` / `base` na GitHub Actions — workflow je doplní samo.

## Katalog

Fotky produktů se berou z CDN Shoptetu. Aktualizace dat:

```bash
npm run sync:catalog
```

nebo z lokálních HTML dumpů v `E:\decorater-redesign\`:

```bash
npm run sync:catalog:local
```

Výsledek: `src/data/catalog.json`.
