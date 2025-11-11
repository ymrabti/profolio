import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { ProfessionalContribution } from '../../models/portfolio.model';

@Component({
  selector: 'pro-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss'
})
export class ExperienceSectionComponent implements OnInit {
  contributions: ProfessionalContribution[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getProfessionalContributions().subscribe(contributions => {
      this.contributions = contributions;
    });
  }
}
