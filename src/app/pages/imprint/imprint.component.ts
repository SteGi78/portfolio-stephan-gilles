import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TPipe } from '../../core/i18n/t.pipe';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, RouterLink, TPipe],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent {
  readonly email = 'gilles-stephan@gmx.de';
  readonly overviewKeys = [0, 1, 2] as const;
  readonly sectionKeys = ['tmc', 'content', 'links'] as const;
}
