import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { TranslateService } from '@ngx-translate/core';
import { Project } from '../../models/portfolio.model';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'pro-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent implements OnInit, AfterViewInit {
  projectCategories = ['fullstack', 'mobile', 'tool', 'professional'];
  projectsGrouped: { [key: string]: Project[] } = {};
  selectedCategory = 'fullstack';
  expandedProjects = new Set<string>();

  constructor(
    private portfolioService: PortfolioService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.loadProjects();
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
    gsap.from('.projects-header', {
      y: 50,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 80%'
      }
    });

    gsap.from('.project-tabs .tab', {
      y: 30,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.project-tabs',
        start: 'top 85%'
      }
    });

    this.animateProjectCards();
  }

  private animateProjectCards(): void {
    gsap.from('.project-card', {
      y: 50,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 85%'
      }
    });
  }

  selectCategory(category: string): void {
    if (this.selectedCategory !== category) {
      this.selectedCategory = category;
      this.expandedProjects.clear();
      
      // Re-animate project cards for new category
      setTimeout(() => {
        this.animateProjectCards();
      }, 100);
    }
  }

  toggleProjectExpansion(projectId: string): void {
    if (this.expandedProjects.has(projectId)) {
      this.expandedProjects.delete(projectId);
    } else {
      this.expandedProjects.add(projectId);
    }
  }

  isProjectExpanded(projectId: string): boolean {
    return this.expandedProjects.has(projectId);
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
