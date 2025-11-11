import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface TranslationData {
  [key: string]: any;
}

const TRANSLATIONS: { [key: string]: TranslationData } = {
  'en': {
    "hero": {
      "name": "Younes MRABTI",
      "tagline": "Serving the code community",
      "description": "Full Stack Developer & GIS Specialist with expertise in modern web technologies, mobile development, and geospatial solutions. Passionate about creating innovative platforms and contributing to the developer community.",
      "scrollDown": "Scroll Down to Explore"
    },
    "navigation": {
      "about": "About",
      "skills": "Skills",
      "projects": "Projects",
      "experience": "Experience",
      "contact": "Contact"
    },
    "skills": {
      "title": "Technical Skills & Expertise",
      "subtitle": "Technologies and tools I use to build amazing solutions",
      "categories": {
        "dev": "Development",
        "ops": "DevOps",
        "database": "Databases", 
        "gis": "GIS & Mapping",
        "ide": "Development Tools"
      }
    },
    "projects": {
      "title": "Featured Projects",
      "subtitle": "Innovative solutions across web, mobile, and GIS platforms",
      "categories": {
        "fullstack": "FullStack Platforms",
        "mobile": "Mobile Applications",
        "tool": "Development Tools",
        "professional": "Professional Work"
      },
      "status": {
        "completed": "Completed",
        "ongoing": "In Progress",
        "planned": "Planned"
      },
      "viewMore": "View Details",
      "technologies": "Technologies Used",
      "features": "Key Features"
    },
    "experience": {
      "title": "Professional Experience",
      "subtitle": "Contributing to meaningful projects and organizations",
      "current": "Current Position",
      "responsibilities": "Key Responsibilities"
    },
    "contact": {
      "title": "Let's Connect",
      "subtitle": "Find me on these platforms",
      "github": "GitHub Repositories",
      "linkedin": "Professional Network",
      "patreon": "Support My Work"
    },
    "common": {
      "readMore": "Read More",
      "viewProject": "View Project",
      "learnMore": "Learn More",
      "backToTop": "Back to Top"
    }
  },
  'fr': {
    "hero": {
      "name": "Younes MRABTI",
      "tagline": "Au service de la communauté code",
      "description": "Développeur Full Stack et Spécialiste SIG avec une expertise en technologies web modernes, développement mobile et solutions géospatiales. Passionné par la création de plateformes innovantes et la contribution à la communauté des développeurs.",
      "scrollDown": "Faites défiler pour explorer"
    },
    "navigation": {
      "about": "À propos",
      "skills": "Compétences",
      "projects": "Projets",
      "experience": "Expérience",
      "contact": "Contact"
    },
    "skills": {
      "title": "Compétences Techniques et Expertise",
      "subtitle": "Technologies et outils que j'utilise pour créer des solutions extraordinaires",
      "categories": {
        "dev": "Développement",
        "ops": "DevOps",
        "database": "Bases de données",
        "gis": "SIG & Cartographie",
        "ide": "Outils de Développement"
      }
    },
    "projects": {
      "title": "Projets Phares",
      "subtitle": "Solutions innovantes sur les plateformes web, mobile et SIG",
      "categories": {
        "fullstack": "Plateformes FullStack",
        "mobile": "Applications Mobiles",
        "tool": "Outils de Développement",
        "professional": "Travail Professionnel"
      },
      "status": {
        "completed": "Terminé",
        "ongoing": "En cours",
        "planned": "Planifié"
      },
      "viewMore": "Voir les détails",
      "technologies": "Technologies utilisées",
      "features": "Fonctionnalités clés"
    },
    "experience": {
      "title": "Expérience Professionnelle",
      "subtitle": "Contribuer à des projets significatifs et aux organisations",
      "current": "Poste actuel",
      "responsibilities": "Responsabilités clés"
    },
    "contact": {
      "title": "Restons connectés",
      "subtitle": "Retrouvez-moi sur ces plateformes",
      "github": "Dépôts GitHub",
      "linkedin": "Réseau professionnel",
      "patreon": "Soutenez mon travail"
    },
    "common": {
      "readMore": "Lire la suite",
      "viewProject": "Voir le projet",
      "learnMore": "En savoir plus",
      "backToTop": "Retour en haut"
    }
  }
};

@Injectable({
  providedIn: 'root'
})
export class SimpleTranslateService {
  private currentLanguage = 'en';
  private languageSubject = new BehaviorSubject<string>(this.currentLanguage);

  constructor() {}

  setDefaultLang(lang: string): void {
    this.currentLanguage = lang;
  }

  use(lang: string): Observable<any> {
    this.currentLanguage = lang;
    this.languageSubject.next(lang);
    return this.languageSubject.asObservable();
  }

  get(key: string): Observable<string | any> {
    const translation = this.getNestedProperty(TRANSLATIONS[this.currentLanguage], key);
    return new BehaviorSubject(translation || key).asObservable();
  }

  instant(key: string): string | any {
    return this.getNestedProperty(TRANSLATIONS[this.currentLanguage], key) || key;
  }

  getCurrentLang(): string {
    return this.currentLanguage;
  }

  private getNestedProperty(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }
}