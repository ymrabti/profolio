import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
  alternateLocale?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private defaultSEOData: SEOData = {
    title: 'Younes MRABTI - Full Stack Developer & GIS Specialist',
    description: 'Full Stack Developer & GIS Specialist with expertise in modern web technologies, mobile development, and geospatial solutions. Passionate about creating innovative platforms and contributing to the developer community.',
    keywords: 'full stack developer, GIS specialist, web development, mobile development, Angular, React, Node.js, TypeScript, JavaScript, Python, geospatial solutions, software engineer, frontend developer, backend developer',
    author: 'Younes MRABTI',
    image: 'https://www.youmti.net/assets/images/profile-og.jpg',
    url: 'https://www.youmti.net',
    type: 'website',
    siteName: 'Younes MRABTI Portfolio',
    locale: 'en_US',
    alternateLocale: 'fr_FR'
  };

  constructor(
    private meta: Meta,
    private titleService: Title,
    private router: Router
  ) {
    // Update meta tags when route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateSEOData(this.defaultSEOData);
    });
  }

  updateSEOData(data: Partial<SEOData>): void {
    const seoData = { ...this.defaultSEOData, ...data };

    // Update title
    if (seoData.title) {
      this.titleService.setTitle(seoData.title);
    }

    // Update meta tags
    this.updateMetaTag('description', seoData.description);
    this.updateMetaTag('keywords', seoData.keywords);
    this.updateMetaTag('author', seoData.author);
    this.updateMetaTag('robots', 'index, follow');
    
    // Open Graph meta tags
    this.updateMetaProperty('og:title', seoData.title);
    this.updateMetaProperty('og:description', seoData.description);
    this.updateMetaProperty('og:image', seoData.image);
    this.updateMetaProperty('og:url', seoData.url);
    this.updateMetaProperty('og:type', seoData.type);
    this.updateMetaProperty('og:site_name', seoData.siteName);
    this.updateMetaProperty('og:locale', seoData.locale);
    this.updateMetaProperty('og:locale:alternate', seoData.alternateLocale);

    // Twitter Card meta tags
    this.updateMetaName('twitter:card', 'summary_large_image');
    this.updateMetaName('twitter:title', seoData.title);
    this.updateMetaName('twitter:description', seoData.description);
    this.updateMetaName('twitter:image', seoData.image);
    this.updateMetaName('twitter:creator', '@yourtwitterhandle');

    // LinkedIn meta tags
    this.updateMetaProperty('article:author', seoData.author);
    this.updateMetaProperty('article:publisher', seoData.siteName);

    // Additional SEO meta tags
    this.updateMetaName('theme-color', '#667eea');
    this.updateMetaName('msapplication-TileColor', '#667eea');
    this.updateMetaName('application-name', seoData.siteName);
  }

  updateForLanguage(language: 'en' | 'fr'): void {
    const seoDataByLanguage = {
      en: {
        title: 'Younes MRABTI - Full Stack Developer & GIS Specialist',
        description: 'Full Stack Developer & GIS Specialist with expertise in modern web technologies, mobile development, and geospatial solutions. Passionate about creating innovative platforms and contributing to the developer community.',
        keywords: 'full stack developer, GIS specialist, web development, mobile development, Angular, React, Node.js, TypeScript, JavaScript, Python, geospatial solutions, software engineer, frontend developer, backend developer',
        locale: 'en_US',
        alternateLocale: 'fr_FR'
      },
      fr: {
        title: 'Younes MRABTI - Développeur Full Stack et Spécialiste SIG',
        description: 'Développeur Full Stack et Spécialiste SIG avec une expertise en technologies web modernes, développement mobile et solutions géospatiales. Passionné par la création de plateformes innovantes et la contribution à la communauté des développeurs.',
        keywords: 'développeur full stack, spécialiste SIG, développement web, développement mobile, Angular, React, Node.js, TypeScript, JavaScript, Python, solutions géospatiales, ingénieur logiciel, développeur frontend, développeur backend',
        locale: 'fr_FR',
        alternateLocale: 'en_US'
      }
    };

    this.updateSEOData(seoDataByLanguage[language]);
  }

  generateStructuredData(): string {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Younes MRABTI',
        jobTitle: 'Full Stack Developer & GIS Specialist',
        description: this.defaultSEOData.description,
        url: this.defaultSEOData.url,
        image: this.defaultSEOData.image,
        sameAs: [
            'https://linkedin.com/in/younesmrabti1996',
            'https://github.com/ymrabti',
            'https://twitter.com/ymrabti_network',
            'https://x.com/ymrabti_network',
        ],
        knowsAbout: [
            'Web Development',
            'Mobile Development',
            'GIS',
            'Angular',
            'React',
            'Node.js',
            'TypeScript',
            'JavaScript',
            'Python',
        ],
        worksFor: {
            '@type': 'Organization',
            name: 'Freelance Developer',
        },
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'Country',
        },
    };

    return JSON.stringify(structuredData);
  }

  private updateMetaTag(name: string, content: string | undefined): void {
    if (content) {
      if (this.meta.getTag(`name="${name}"`)) {
        this.meta.updateTag({ name, content });
      } else {
        this.meta.addTag({ name, content });
      }
    }
  }

  private updateMetaProperty(property: string, content: string | undefined): void {
    if (content) {
      if (this.meta.getTag(`property="${property}"`)) {
        this.meta.updateTag({ property, content });
      } else {
        this.meta.addTag({ property, content });
      }
    }
  }

  private updateMetaName(name: string, content: string | undefined): void {
    if (content) {
      if (this.meta.getTag(`name="${name}"`)) {
        this.meta.updateTag({ name, content });
      } else {
        this.meta.addTag({ name, content });
      }
    }
  }
}