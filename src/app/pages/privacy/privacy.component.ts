import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TPipe } from '../../core/i18n/t.pipe';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, RouterLink, TPipe],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent {
  readonly email = 'gilles-stephan@gmx.de';
  readonly overviewKeys = [0, 1, 2] as const;
}
