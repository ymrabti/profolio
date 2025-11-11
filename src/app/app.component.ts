import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'pro-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'pro-folio';

  constructor(
    private translate: TranslateService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    // Set default language
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    
    // Initialize SEO
    this.seoService.updateForLanguage('en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    
    // Update SEO for language change
    if (lang === 'en' || lang === 'fr') {
      this.seoService.updateForLanguage(lang as 'en' | 'fr');
    }
  }
}
