# TODO – Portfolio Audit (aktueller Stand)

## Bereits umgesetzt
- Mobile Navigation im Header ist vorhanden (Burger + Drawer inkl. Navigation und Secondary-Links).
- SEO-Basics sind gesetzt (`title`, `meta description`, Open Graph, Twitter Card).
- Fokus-Stile für Header-Interaktionen sind vorhanden (`:focus-visible` für Navigation/Links).
- Social-Links wurden auf die konkreten Profil-URLs konsolidiert.
- Hero-Avatar nutzt ein optimiertes Profilbild mit festen `width`/`height` gegen Layout Shift.

## To-Do (priorisiert)

### P1 – wichtig
- **Meta-Set für Social Sharing vervollständigen:** optional `twitter:site`, `twitter:creator`, `og:locale` ergänzen.
- **Canonicals/Robots prüfen:** `link rel="canonical"` und sinnvolle `robots`-Steuerung für GitHub-Pages-Deployment ergänzen.
- **Mobile-Navigation Accessibility verfeinern:** ARIA-Label des Burgers abhängig vom Zustand (öffnen/schließen), Escape-to-close und Fokusmanagement/Trap im offenen Drawer ergänzen.

### P2 – Optimierung
- **Avatar modernisieren:** zusätzlich AVIF bereitstellen und bei Bedarf `srcset/sizes` für bessere Auslieferung auf kleineren Displays ergänzen.
- **Performance-Check als Routine:** Lighthouse (Mobile/Desktop) + Core Web Vitals regelmäßig messen und Ergebnisse hier dokumentieren.
- **Smoke-Test-Checkliste ergänzen:** kurze Regression-Checks für Routing (`/`, `/privacy`, `/imprint`), i18n-Wechsel und mobile Navigation definieren.
