import { Component, HostListener, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ScrollService } from '../scroll.service';
import { I18nService } from '../i18n/i18n.service';
import { TPipe } from '../i18n/t.pipe';

type NavItem = {
  id: string;
  labelKey: string;
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgFor, TPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy, OnInit {
  menuOpen = false;
  activeSection = 'hero';
  readonly navItems: readonly NavItem[] = [
    { id: 'hero', labelKey: 'nav.home' },
    { id: 'about', labelKey: 'nav.about' },
    { id: 'skills', labelKey: 'nav.skills' },
    { id: 'projects', labelKey: 'nav.projects' },
    { id: 'references', labelKey: 'nav.references' },
    { id: 'contact', labelKey: 'nav.contact' },
  ];

  private readonly scroll = inject(ScrollService);
  public readonly i18n = inject(I18nService);


  ngOnInit(): void {
    this.updateActiveSection();
  }

  goTo(id: string): void {
    this.scroll.scrollTo(id);
    this.activeSection = id;
  }

  navigateTo(id: string): void {
    this.goTo(id);
    this.closeMenu();
  }

  toggleLang(): void {
    this.i18n.toggle();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.syncBodyState();
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.syncBodyState();
  }

  ngOnDestroy(): void {
    document.body.classList.remove('menu-open');
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    if (this.menuOpen) {
      this.closeMenu();
    }
  }

  private updateActiveSection(): void {
    const ids = this.navItems.map((item) => item.id);
    const offset = window.scrollY + 140;

    for (const id of ids) {
      const element = document.getElementById(id);
      if (!element) continue;

      const top = element.offsetTop;
      const bottom = top + element.offsetHeight;

      if (offset >= top && offset < bottom) {
        this.activeSection = id;
      }
    }
  }

  private syncBodyState(): void {
    document.body.classList.toggle('menu-open', this.menuOpen);
  }
}

