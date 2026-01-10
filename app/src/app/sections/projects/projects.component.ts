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
      tech: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      links: [
        { labelKey: 'projects.links.live', url: '#', external: true },
        { labelKey: 'projects.links.code', url: '#', external: true }
      ],
      highlight: true
    },
    {
      titleKey: 'projects.items.elpollo.title',
      descKey: 'projects.items.elpollo.desc',
      tech: ['JavaScript', 'Canvas', 'OOP', 'HTML', 'CSS'],
      links: [
        { labelKey: 'projects.links.live', url: '#', external: true },
        { labelKey: 'projects.links.code', url: '#', external: true }
      ]
    },
    {
      titleKey: 'projects.items.portfolio.title',
      descKey: 'projects.items.portfolio.desc',
      tech: ['Angular', 'TypeScript', 'SCSS', 'Routing', 'i18n'],
      links: [
        { labelKey: 'projects.links.code', url: '#', external: true }
      ]
    }
  ];
}
