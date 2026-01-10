import { Injectable, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  constructor(private router: Router, private zone: NgZone) {}

  async scrollTo(id: string): Promise<void> {
    const needNavHome = this.router.url !== '/' && !this.router.url.startsWith('/#');

    if (needNavHome) {
      const navDone = firstValueFrom(
        this.router.events.pipe(
          filter((e) => e instanceof NavigationEnd)
        )
      );

      await this.router.navigateByUrl('/');
      await navDone;
    }

    this.zone.runOutsideAngular(() => {
      // 2 Frames -> sehr zuverlässig nach Render
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        });
      });
    });
  }
}
