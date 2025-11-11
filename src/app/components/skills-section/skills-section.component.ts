import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../models/portfolio.model';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'pro-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent implements OnInit, AfterViewInit {
  skillCategories = ['dev', 'ops', 'database', 'gis', 'ide'];
  skillsGrouped: { [key: string]: Skill[] } = {};
  selectedCategory = 'dev';

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadSkills();
  }

  ngAfterViewInit(): void {
    this.setupAnimations();
  }

  private loadSkills(): void {
    this.portfolioService.getSkillsByCategory().subscribe(skills => {
      this.skillCategories.forEach(category => {
        this.skillsGrouped[category] = skills.filter(skill => skill.category === category);
      });
    });
  }

  private setupAnimations(): void {
    gsap.from('.skills-header', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.skills-section',
        start: 'top 80%'
      }
    });

    gsap.from('.category-tabs .tab', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.category-tabs',
        start: 'top 85%'
      }
    });

    this.animateSkillBars();
  }

  private animateSkillBars(): void {
    gsap.from('.skill-item', {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 85%'
      }
    });

    gsap.from('.skill-progress', {
      width: '0%',
      duration: 1.5,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 85%'
      }
    });
  }

  selectCategory(category: string): void {
    if (this.selectedCategory !== category) {
      this.selectedCategory = category;
      
      // Re-animate skill bars for new category
      setTimeout(() => {
        this.animateSkillBars();
      }, 100);
    }
  }

  getSkillIcon(skill: Skill): string {
    const iconMap: { [key: string]: string } = {
      'flutter': 'flutter_dash',
      'javascript': 'code',
      'angular': 'angular',
      'dotnet': 'code',
      'java': 'coffee',
      'android': 'android',
      'swift': 'phone_iphone',
      'docker': 'container',
      'cloudflare': 'cloud',
      'code': 'code',
      'postgresql': 'storage',
      'sql-server': 'storage',
      'mysql': 'storage',
      'mongodb': 'storage',
      'arcgis': 'map',
      'arcgis-dev': 'developer_mode',
      'qgis': 'map',
      'vscode': 'code',
      'intellij': 'code',
      'xcode': 'code'
    };
    
    return iconMap[skill.icon || ''] || 'code';
  }
}
