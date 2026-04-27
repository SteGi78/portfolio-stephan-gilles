
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../core/i18n/t.pipe';
import { ScrollService } from '../../core/scroll.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TPipe],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  constructor(private scroll: ScrollService) {}
  goTo(id: string): void { this.scroll.scrollTo(id); }
  techIcons = [
    { icon: 'assets/icons/skills/angular.png', labelKey: 'skills.icons.angular' },
    { icon: 'assets/icons/skills/typescript.png', labelKey: 'skills.icons.typescript' },
    { icon: 'assets/icons/skills/javascript.png', labelKey: 'skills.icons.javascript' },
    { icon: 'assets/icons/skills/html.png', labelKey: 'skills.icons.html' },
    { icon: 'assets/icons/skills/css.png', labelKey: 'skills.icons.css' },
    { icon: 'assets/icons/skills/firebase.png', labelKey: 'skills.icons.firebase' },
    { icon: 'assets/icons/skills/git.png', labelKey: 'skills.icons.git' },
    { icon: 'assets/icons/skills/scrum.png', labelKey: 'skills.icons.scrum' },
    { icon: 'assets/icons/skills/rest-api.png', labelKey: 'skills.icons.rest' },
    { icon: 'assets/icons/skills/material-design.png', labelKey: 'skills.icons.material' },
  ];
}
