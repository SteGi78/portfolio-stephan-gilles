import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export type Lang = 'de' | 'en';

const STORAGE_KEY = 'portfolio_lang';

// Fallback (optional)
const DICT: Record<Lang, Record<string, string>> = {
  de: {
    'nav.skills': 'Fähigkeiten',
    'nav.projects': 'Projekte',
    'nav.about': 'Über mich',
    'nav.contact': 'Kontakt',
    'nav.privacy': 'Datenschutz',
    'nav.imprint': 'Impressum',
    'btn.lang': 'DE/EN',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
  },
  en: {
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.privacy': 'Privacy',
    'nav.imprint': 'Imprint',
    'btn.lang': 'DE/EN',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy',
  },
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  private langSubject = new BehaviorSubject<Lang>(this.getInitialLang());
  lang$ = this.langSubject.asObservable();

  private dict: any = {};

  constructor(private http: HttpClient) {
    document.documentElement.lang = this.lang;
    void this.load(this.lang);
  }

  get lang(): Lang {
    return this.langSubject.value;
  }

  async setLang(lang: Lang): Promise<void> {
    await this.load(lang);
    this.langSubject.next(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }

  toggle(): void {
    void this.setLang(this.lang === 'de' ? 'en' : 'de');
  }

  t(key: string): string {
    const fromJson = this.getByPath(this.dict, key);
    if (typeof fromJson === 'string') return fromJson;
    return DICT[this.lang][key] ?? key;
  }

  private async load(lang: Lang): Promise<void> {
    try {
      this.dict = await firstValueFrom(
        this.http.get<Record<string, any>>(`assets/i18n/${lang}.json`)
      );
    } catch (err) {
      this.dict = {};
      console.warn('[i18n] Could not load language file:', lang, err);
    }
  }


  private getInitialLang(): Lang {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    return stored === 'en' ? 'en' : 'de';
  }

  private getByPath(obj: any, path: string): any {
    return path.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), obj);
  }
}
