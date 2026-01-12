import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { TranslateService } from '@ngx-translate/core';
import { Education } from '../../models/portfolio.model';

@Component({
  selector: 'pro-education-section',
  templateUrl: './education-section.component.html',
  styleUrl: './education-section.component.scss'
})
export class EducationSectionComponent implements OnInit {
  educations: Education[] = [];

  constructor(
    private portfolioService: PortfolioService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.portfolioService.getEducations().subscribe(educations => {
      this.educations = educations;
    });
  }
}
