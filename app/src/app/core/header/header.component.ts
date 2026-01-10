import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../scroll.service';
import { I18nService } from '../i18n/i18n.service';
import { TPipe } from '../i18n/t.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private scroll: ScrollService,
    public i18n: I18nService
  ) {}

  goTo(id: string) {
    this.scroll.scrollTo(id);
  }

  toggleLang(): void {
    this.i18n.toggle();
  }
}
