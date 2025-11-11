import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'pro-seo',
  template: ''
})
export class SeoComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Add structured data to the page
      this.addStructuredData();
    }
  }

  private addStructuredData(): void {
    const structuredData = this.seoService.generateStructuredData();
    
    // Remove existing structured data if present
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.textContent = structuredData;
    document.head.appendChild(script);
  }
}