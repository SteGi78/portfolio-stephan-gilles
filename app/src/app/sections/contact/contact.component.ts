import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TPipe } from '../../core/i18n/t.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TPipe],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  email = 'gilles-stephan@gmx.de';
  copied = false;

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
      this.copied = true;
      window.setTimeout(() => (this.copied = false), 1200);
    } catch {
      this.copied = false;
    }
  }
}
