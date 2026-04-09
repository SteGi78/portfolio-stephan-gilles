import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TPipe } from '../../core/i18n/t.pipe';

type ProjectCard = {
  id: string;
  key: 'join' | 'elpollo' | 'portfolio' | 'pokedex';
  titleKey: string;
  subtitleKey: string;
  bulletKeys: [string, string, string];
  stackTags: readonly string[];
  image: string;
  align: 'left' | 'right';
  codeUrl: string;
  liveUrl?: string;
  badgeKey: string;
  statusKey: string;
  noteKey?: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TPipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly projects: readonly ProjectCard[] = [
    {
      id: '01',
      key: 'join',
      titleKey: 'projects.academy.join.title',
      subtitleKey: 'projects.cards.join.text',
      bulletKeys: ['projects.academy.join.b1', 'projects.academy.join.b2', 'projects.academy.join.b3'],
      stackTags: ['Angular', 'Teamwork', 'Git/GitHub'],
      image: 'assets/projects/join-cover.svg',
      align: 'left',
      codeUrl: 'https://github.com/SteGi78/join-angular',
      badgeKey: 'projects.meta.team',
      statusKey: 'projects.meta.codeOnly',
      noteKey: 'projects.notes.codeOnly',
    },
    {
      id: '02',
      key: 'elpollo',
      titleKey: 'projects.academy.elpollo.title',
      subtitleKey: 'projects.cards.elpollo.text',
      bulletKeys: ['projects.academy.elpollo.b1', 'projects.academy.elpollo.b2', 'projects.academy.elpollo.b3'],
      stackTags: ['JavaScript', 'OOP', 'Canvas'],
      image: 'assets/projects/el-pollo-cover.svg',
      align: 'right',
      liveUrl: 'https://stegi78.github.io/El-Pollo-Loco-Final/',
      codeUrl: 'https://github.com/SteGi78/El-Pollo-Loco-Final',
      badgeKey: 'projects.meta.playable',
      statusKey: 'projects.meta.liveAndCode',
    },
    {
      id: '03',
      key: 'portfolio',
      titleKey: 'projects.academy.portfolio.title',
      subtitleKey: 'projects.cards.portfolio.text',
      bulletKeys: ['projects.academy.portfolio.b1', 'projects.academy.portfolio.b2', 'projects.academy.portfolio.b3'],
      stackTags: ['Angular', 'i18n', 'Responsive UI'],
      image: 'assets/og/og-portfolio.svg',
      align: 'left',
      liveUrl: 'https://stegi78.github.io/PortfolioGilles/',
      codeUrl: 'https://github.com/SteGi78/PortfolioGilles',
      badgeKey: 'projects.meta.caseStudy',
      statusKey: 'projects.meta.liveAndCode',
    },
    {
      id: '04',
      key: 'pokedex',
      titleKey: 'projects.academy.pokedex.title',
      subtitleKey: 'projects.cards.pokedex.text',
      bulletKeys: ['projects.academy.pokedex.b1', 'projects.academy.pokedex.b2', 'projects.academy.pokedex.b3'],
      stackTags: ['Angular', 'REST API', 'Data Flow'],
      image: 'assets/projects/pokedex-cover.svg',
      align: 'right',
      liveUrl: 'https://stegi78.github.io/pokedex-angular/',
      codeUrl: 'https://github.com/SteGi78/pokedex-angular',
      badgeKey: 'projects.meta.apiDriven',
      statusKey: 'projects.meta.liveAndCode',
    },
  ];
}
