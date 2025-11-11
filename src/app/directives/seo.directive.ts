import { Directive, OnInit, Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../services/seo.service';

@Directive({
  selector: '[proSeo]'
})
export class SeoDirective implements OnInit {
  @Input() proSeo: 'home' | 'contact' | 'projects' | 'skills' | 'experience' = 'home';

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateSeoForSection();
    }
  }

  private updateSeoForSection(): void {
    switch (this.proSeo) {
      case 'home':
        this.seoService.updateSEOData({
          title: 'Younes MRABTI - Full Stack Developer & GIS Specialist',
          description: 'Full Stack Developer & GIS Specialist with expertise in modern web technologies, mobile development, and geospatial solutions.',
        });
        break;
      case 'contact':
        this.seoService.updateSEOData({
          title: 'Contact Younes MRABTI - Hire Full Stack Developer',
          description: 'Get in touch with Younes MRABTI for your next web development, mobile app, or GIS project. Available for freelance and full-time opportunities.',
        });
        break;
      case 'projects':
        this.seoService.updateSEOData({
          title: 'Projects by Younes MRABTI - Web & Mobile Development Portfolio',
          description: 'Explore innovative web applications, mobile apps, and GIS solutions created by Younes MRABTI. Full stack development portfolio.',
        });
        break;
      case 'skills':
        this.seoService.updateSEOData({
          title: 'Technical Skills - Younes MRABTI Full Stack Developer',
          description: 'Technical expertise in Angular, React, Node.js, Python, GIS, and modern web technologies. Full stack development skills and tools.',
        });
        break;
      case 'experience':
        this.seoService.updateSEOData({
          title: 'Professional Experience - Younes MRABTI Developer',
          description: 'Professional experience and career highlights of Younes MRABTI in web development, mobile development, and GIS solutions.',
        });
        break;
    }
  }
}