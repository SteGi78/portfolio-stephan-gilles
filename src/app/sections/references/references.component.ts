import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TPipe } from '../../core/i18n/t.pipe';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, RouterLink, TPipe],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent {
  readonly cards = ['references.cards.0', 'references.cards.1', 'references.cards.2'];
  readonly workflowKeys = [0, 1, 2] as const;
}
