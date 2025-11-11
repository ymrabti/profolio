import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalInfo } from '../../models/portfolio.model';
import { TranslateService } from '@ngx-translate/core';
import { gsap } from 'gsap';

@Component({
  selector: 'pro-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit, AfterViewInit {
  personalInfo: PersonalInfo | null = null;
  currentLanguage = 'en';

  constructor(
    private portfolioService: PortfolioService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.translate.setDefaultLang(this.currentLanguage);
    this.translate.use(this.currentLanguage);
    
    this.portfolioService.getPersonalInfo().subscribe(info => {
      this.personalInfo = info;
    });
  }

  ngAfterViewInit(): void {
    this.animateHeroContent();
  }

  private animateHeroContent(): void {
    const tl = gsap.timeline();
    
    tl.from('.hero-avatar', {
      scale: 0,
      rotation: 180,
      duration: 1.2,
      ease: 'back.out(1.7)'
    })
    .from('.hero-name', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.6')
    .from('.hero-tagline', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4')
    .from('.hero-description', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4')
    .from('.scroll-indicator', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.2');
  }

  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
    this.translate.use(this.currentLanguage);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
