import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../core/i18n/t.pipe';

type ProjectLink = {
  labelKey: string;
  url: string;
  external?: boolean;
};

type ProjectCard = {
  titleKey: string;
  descKey: string;
  tech: string[];
  links: ProjectLink[];
  screenshot?: string;
  screenshotAlt?: string;
  highlight?: boolean;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TPipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: ProjectCard[] = [
    {
      titleKey: 'projects.items.join.title',
      descKey: 'projects.items.join.desc',
      screenshot: 'https://opengraph.githubassets.com/portfolio-join/SteGi78',
      screenshotAlt: 'Join project preview',
      tech: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      links: [
        {
          labelKey: 'projects.links.live',
          url: 'https://github.com/SteGi78?tab=repositories&q=join&type=source',
          external: true,
        },
        {
          labelKey: 'projects.links.code',
          url: 'https://github.com/SteGi78?tab=repositories&q=join&type=source',
          external: true,
        },
      ],
      highlight: true,
    },
    {
      titleKey: 'projects.items.elpollo.title',
      descKey: 'projects.items.elpollo.desc',
      screenshot:
        'https://stegi78.github.io/El-Pollo-Loco-Final/img/9_intro_outro_screens/start/startscreen_1.png',
      screenshotAlt: 'El Pollo Loco Screenshot',
      tech: ['JavaScript', 'Canvas', 'OOP', 'HTML', 'CSS'],
      links: [
        {
          labelKey: 'projects.links.live',
          url: 'https://stegi78.github.io/El-Pollo-Loco-Final/',
          external: true,
        },
        {
          labelKey: 'projects.links.code',
          url: 'https://github.com/SteGi78/El-Pollo-Loco-Final',
          external: true,
        },
      ],
    },
    {
      titleKey: 'projects.items.pokedex.title',
      descKey: 'projects.items.pokedex.desc',
      screenshot: 'https://opengraph.githubassets.com/portfolio-pokedex/SteGi78/pokedex-angular',
      screenshotAlt: 'Pokédex Angular project preview',
      tech: ['Angular', 'TypeScript', 'SCSS', 'PokeAPI', 'RxJS'],
      links: [
        {
          labelKey: 'projects.links.live',
          url: 'https://stegi78.github.io/pokedex-angular/',
          external: true,
        },
        {
          labelKey: 'projects.links.code',
          url: 'https://github.com/SteGi78/pokedex-angular',
          external: true,
        },
      ],
    },
    {
      titleKey: 'projects.items.portfolio.title',
      descKey: 'projects.items.portfolio.desc',
      screenshot: 'https://stegi78.github.io/portfolio-stephan-gilles/assets/og/og-portfolio.svg',
      screenshotAlt: 'Portfolio Angular project preview',
      tech: ['Angular', 'TypeScript', 'SCSS', 'Routing', 'i18n'],
      links: [
        {
          labelKey: 'projects.links.live',
          url: 'https://stegi78.github.io/portfolio-stephan-gilles/',
          external: true,
        },
        {
          labelKey: 'projects.links.code',
          url: 'https://github.com/SteGi78/portfolio-stephan-gilles',
          external: true,
        },
      ],
    },
  ];
}
