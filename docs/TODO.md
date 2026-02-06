# TODO – Portfolio Audit (Build/Deploy, Lighthouse, Mobile)

## Dokumentierte Schritte
1. **Build/Deploy geprüft:** GitHub-Pages-Workflow gelesen (`.github/workflows/deploy.yml`), inkl. Build, Base-Href und Deployment-Flow.
2. **Lighthouse-Basics geprüft:** `index.html` auf Titel/Meta/Viewport geprüft sowie Assets/Markup in den Sections gesichtet.
3. **Mobile-Layout geprüft:** Responsive-Styles in Header und Sections (Media Queries) geprüft.

## To-Do (priorisiert)
### P0 – kritisch (UX/Navigation mobil)
- **Mobile Navigation ergänzen:** Bei `<= 900px` wird die Hauptnavigation im Header ausgeblendet (keine Alternative). Eine Mobile-Navigation (Burger/Drawer oder Inline-Menu) ergänzen, damit die Sektionen erreichbar bleiben.

### P1 – wichtig (Lighthouse SEO & Accessibility)
- **Dokumenttitel & Meta-Description setzen:** Aktuell ist der Titel generisch („App“), eine sprechende `title`/`meta name="description"` für SEO ergänzen (z. B. „Stephan Gilles – Frontend/Angular Portfolio“).
- **Open Graph/Twitter Metadaten ergänzen:** Für Sharing/SEO `og:title`, `og:description`, `og:image`, `twitter:card` ergänzen.
- **Fokus-Stile für Header-Links:** `a.link` im Header bekommt aktuell nur Hover, keine `:focus-visible`-Stile (Accessibility).

### P2 – Optimierungen (Performance/Feinschliff)
- **Hero-Avatar optimieren:** Profilbild zusätzlich als WebP/AVIF ausliefern und ggf. `width`/`height` bzw. `aspect-ratio` definieren, um CLS zu reduzieren.
- **Social-Links konsolidieren:** Platzhalter-Links im Header (`github.com`, `linkedin.com`) mit Profil-URLs abgleichen (bereits in Hero/Contact vorhanden).
