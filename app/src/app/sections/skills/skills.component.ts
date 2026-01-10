import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../core/i18n/t.pipe';

type SkillGroup = {
  titleKey: string;
  itemKeys: string[];
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TPipe],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    {
      titleKey: 'skills.frontend',
      itemKeys: [
        'skills.items.angular',
        'skills.items.ts',
        'skills.items.js',
        'skills.items.html',
        'skills.items.scss',
        'skills.items.responsive',
      ],
    },
    {
      titleKey: 'skills.tools',
      itemKeys: [
        'skills.items.git',
        'skills.items.vscode',
        'skills.items.devtools',
        'skills.items.npm',
        'skills.items.rest',
      ],
    },
    {
      titleKey: 'skills.workflow',
      itemKeys: [
        'skills.items.clean',
        'skills.items.components',
        'skills.items.refactoring',
        'skills.items.team',
      ],
    },
  ];
}
