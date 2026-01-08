import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PortfolioService } from '../../services/portfolio.service';
import { TranslateService } from '@ngx-translate/core';
import { Project } from '../../models/portfolio.model';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'pro-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('cardAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0.7) translateY(50px)', opacity: 0 }),
        animate('400ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ transform: 'scale(1) translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({ transform: 'scale(0.9)', opacity: 0 }))
      ])
    ]),
    trigger('imageAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0.8)', opacity: 0 }),
        animate('500ms 100ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class ProjectsSectionComponent implements OnInit, AfterViewInit {
  projectCategories = ['fullstack', 'mobile', 'tool', 'professional'];
  projectsGrouped: { [key: string]: Project[] } = {};
  selectedCategory = 'fullstack';
  selectedProject: Project | null = null;

  constructor(
    private portfolioService: PortfolioService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  openUrl(event: Event, url: string): void {
    event.stopPropagation();
    window.open(url, '_blank');
  }

  openProjectModal(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  ngAfterViewInit(): void {
    this.setupAnimations();
  }

  // Translation helper method
  t(key: string): string {
    return this.translate.instant(key);
  }

  private loadProjects(): void {
    this.portfolioService.getProjectsByCategory().subscribe(projects => {
      this.projectCategories.forEach(category => {
        this.projectsGrouped[category] = projects.filter(project => project.category === category);
      });
    });
  }

  private setupAnimations(): void {
    gsap.fromTo('.projects-header', 
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.projects-section',
          start: 'top 80%'
        }
      }
    );

    gsap.fromTo('.project-tabs .tab', 
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.project-tabs',
          start: 'top 85%'
        }
      }
    );

    this.animateProjectCards();
  }

  private animateProjectCards(): void {
    gsap.fromTo('.project-card', 
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 85%'
        }
      }
    );
  }

  selectCategory(category: string): void {
    if (this.selectedCategory !== category) {
      this.selectedCategory = category;
      
      // Re-animate project cards for new category
      setTimeout(() => {
        this.animateProjectCards();
      }, 100);
    }
  }

  getStatusColor(status: string): string {
    const colorMap: { [key: string]: string } = {
      'completed': '#10b981',
      'ongoing': '#f59e0b',
      'planned': '#6b7280'
    };
    return colorMap[status] || '#6b7280';
  }

  getStatusIcon(status: string): string {
    const iconMap: { [key: string]: string } = {
      'completed': 'check_circle',
      'ongoing': 'schedule',
      'planned': 'pending'
    };
    return iconMap[status] || 'pending';
  }
}
