import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { SimpleTranslateService } from '../../services/simple-translate.service';
import { ExternalLink } from '../../models/portfolio.model';

@Component({
  selector: 'pro-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.scss'
})
export class FooterSectionComponent implements OnInit {
  externalLinks: ExternalLink[] = [];
  currentYear = new Date().getFullYear();

  constructor(
    private portfolioService: PortfolioService,
    private translate: SimpleTranslateService
  ) {}

  ngOnInit(): void {
    this.portfolioService.getExternalLinks().subscribe(links => {
      this.externalLinks = links;
    });
  }

  // Translation helper method
  t(key: string): string {
    return this.translate.instant(key);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getSocialIcon(platform: string): string {
    const iconMap: { [key: string]: string } = {
      'GitHub - Main Profile': 'code',
      'GitHub - Flutter Packages': 'extension',
      'GitHub - Flutter Apps': 'phone_android',
      'LinkedIn': 'business',
      'Patreon': 'favorite'
    };
    
    return iconMap[platform] || 'link';
  }
}
