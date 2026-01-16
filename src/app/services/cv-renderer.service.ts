import { Injectable } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { TranslateService } from '@ngx-translate/core';
import { PortfolioData } from '../models/portfolio.model';

@Injectable({
    providedIn: 'root',
})
export class CvRendererService {
    private portfolioData: PortfolioData | null = null;

    constructor(
        private portfolioService: PortfolioService,
        private translate: TranslateService
    ) {
        this.portfolioService.getPortfolioData().subscribe((data) => {
            this.portfolioData = data;
        });
    }

    /**
     * Opens a new window with the CV rendered in A4 format and triggers print dialog
     */
    renderCV(): void {
        if (!this.portfolioData) {
            console.error('Portfolio data not loaded');
            return;
        }

        const cvWindow = window.open('', '_blank', 'width=794,height=1123');
        if (!cvWindow) {
            alert('Please allow pop-ups to print CV');
            return;
        }

        const htmlContent = this.generateCVHtml();
        cvWindow.document.write(htmlContent);
        cvWindow.document.close();

        // Wait for content to load, then trigger print
        cvWindow.onload = () => {
            setTimeout(() => {
                cvWindow.print();
            }, 500);
        };
    }

    private generateCVHtml(): string {
        const data = this.portfolioData!;
        const lang = this.translate.currentLang || 'en';

        return `
<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - ${data.personalInfo.name}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        ${this.getCVStyles()}
    </style>
</head>
<body>
    <div class="cv-container">
        ${this.generateHeader()}
        ${this.generateSummary()}
        <div class="two-column">
            <div class="main-column">
                ${this.generateExperience()}
                ${this.generateProjects()}
            </div>
            <div class="side-column">
                ${this.generateSkills()}
                ${this.generateEducation()}
                ${this.generateLinks()}
            </div>
        </div>
    </div>
</body>
</html>`;
    }

    private getCVStyles(): string {
        return `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        @page {
            size: A4;
            margin: 0;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 10pt;
            line-height: 1.4;
            color: #1a1a2e;
            background: #fff;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }

        .cv-container {
            width: 210mm;
            min-height: 297mm;
            padding: 15mm 12mm;
            margin: 0 auto;
            background: #fff;
        }

        /* Header Section */
        .cv-header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 3px solid #667eea;
        }

        .profile-image {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid #667eea;
        }

        .header-info {
            flex: 1;
        }

        .name {
            font-size: 24pt;
            font-weight: 700;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 4px;
        }

        .tagline {
            font-size: 12pt;
            color: #555;
            font-weight: 500;
            margin-bottom: 8px;
        }

        .contact-row {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            font-size: 9pt;
            color: #666;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .contact-item::before {
            content: '';
            width: 12px;
            height: 12px;
            background-size: contain;
            background-repeat: no-repeat;
        }

        .contact-email::before { content: '📧'; }
        .contact-location::before { content: '📍'; }

        /* Summary Section */
        .summary-section {
            margin-bottom: 20px;
            padding: 12px 15px;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
            border-radius: 8px;
            border-left: 4px solid #667eea;
        }

        .summary-text {
            font-size: 10pt;
            color: #333;
            line-height: 1.5;
        }

        /* Two Column Layout */
        .two-column {
            display: flex;
            gap: 20px;
        }

        .main-column {
            flex: 7;
        }

        .side-column {
            flex: 4;
        }

        /* Section Styling */
        .section {
            margin-bottom: 18px;
        }

        .section-title {
            font-size: 12pt;
            font-weight: 700;
            color: #667eea;
            margin-bottom: 10px;
            padding-bottom: 4px;
            border-bottom: 2px solid #eee;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        /* Experience Items */
        .experience-item {
            margin-bottom: 15px;
            page-break-inside: avoid;
        }

        .experience-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 5px;
        }

        .company-name {
            font-size: 11pt;
            font-weight: 600;
            color: #1a1a2e;
        }

        .job-role {
            font-size: 10pt;
            color: #555;
            font-style: italic;
        }

        .period {
            font-size: 9pt;
            color: #764ba2;
            font-weight: 500;
            white-space: nowrap;
        }

        .experience-description {
            font-size: 9pt;
            color: #444;
            line-height: 1.5;
            margin-top: 5px;
        }

        /* Project Items */
        .project-item {
            margin-bottom: 10px;
            padding: 8px 10px;
            background: #fafafa;
            border-radius: 6px;
            page-break-inside: avoid;
        }

        .project-title {
            font-size: 10pt;
            font-weight: 600;
            color: #1a1a2e;
        }

        .project-description {
            font-size: 9pt;
            color: #555;
            margin-top: 3px;
        }

        .project-status {
            display: inline-block;
            font-size: 8pt;
            padding: 2px 8px;
            border-radius: 10px;
            margin-left: 8px;
            font-weight: 500;
        }

        .status-completed {
            background: #d4edda;
            color: #155724;
        }

        .status-ongoing {
            background: #fff3cd;
            color: #856404;
        }

        .status-planned {
            background: #e2e3e5;
            color: #383d41;
        }

        /* Skills Section */
        .skills-container {
            margin-bottom: 8px;
        }

        .skills-legend {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 8px;
            padding-bottom: 6px;
            border-bottom: 1px dashed #ddd;
        }

        .legend-item {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 7pt;
            color: #555;
        }

        .legend-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
        }

        .skill-list {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
        }

        .skill-tag {
            font-size: 7.5pt;
            padding: 2px 7px;
            border-radius: 10px;
            font-weight: 500;
            color: #fff;
        }

        /* Category Colors */
        .skill-dev, .legend-dev { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .skill-ops, .legend-ops { background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); }
        .skill-database, .legend-database { background: linear-gradient(135deg, #ee0979 0%, #ff6a00 100%); }
        .skill-gis, .legend-gis { background: linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%); }
        .skill-ide, .legend-ide { background: linear-gradient(135deg, #434343 0%, #000000 100%); }

        /* Education Section */
        .education-item {
            margin-bottom: 12px;
            page-break-inside: avoid;
        }

        .education-degree {
            font-size: 10pt;
            font-weight: 600;
            color: #1a1a2e;
        }

        .education-institution {
            font-size: 9pt;
            color: #555;
        }

        .education-period {
            font-size: 8pt;
            color: #764ba2;
            font-weight: 500;
        }

        .education-field {
            font-size: 8pt;
            color: #666;
            font-style: italic;
        }

        /* External Links */
        .link-item {
            margin-bottom: 6px;
            font-size: 9pt;
        }

        .link-item a {
            color: #667eea;
            text-decoration: none;
        }

        .link-platform {
            font-weight: 500;
            color: #333;
        }

        /* Print specific styles */
        @media print {
            body {
                margin: 0;
                padding: 0;
            }

            .cv-container {
                margin: 0;
                padding: 10mm;
                width: 100%;
                min-height: auto;
            }

            .section {
                page-break-inside: avoid;
            }
        }

        @media screen {
            body {
                background: #f0f0f0;
                padding: 20px;
            }

            .cv-container {
                box-shadow: 0 0 20px rgba(0,0,0,0.1);
            }
        }
        `;
    }

    private generateHeader(): string {
        const info = this.portfolioData!.personalInfo;
        return `
        <header class="cv-header">
            <img src="${info.avatarUrl}" alt="${info.name}" class="profile-image" crossorigin="anonymous">
            <div class="header-info">
                <h1 class="name">${info.name}</h1>
                <p class="tagline">${info.tagline}</p>
                <div class="contact-row">
                    <span class="contact-item contact-email">${info.email}</span>
                    <span class="contact-item contact-location">${info.location}</span>
                </div>
            </div>
        </header>`;
    }

    private generateSummary(): string {
        const info = this.portfolioData!.personalInfo;
        return `
        <section class="summary-section">
            <p class="summary-text">${info.description}</p>
        </section>`;
    }

    private generateExperience(): string {
        const contributions = this.portfolioData!.professionalContributions;
        const lang = this.translate.currentLang || 'en';
        const title = lang === 'fr' ? 'Expérience Professionnelle' : 'Professional Experience';

        const items = contributions
            .map(
                (exp) => `
            <div class="experience-item">
                <div class="experience-header">
                    <div>
                        <div class="company-name">${exp.company}</div>
                        <div class="job-role">${exp.role}</div>
                    </div>
                    <span class="period">${exp.period}</span>
                </div>
                <p class="experience-description">${exp.description.replace(/\n/g, '<br>')}</p>
            </div>`
            )
            .join('');

        return `
        <section class="section">
            <h2 class="section-title">${title}</h2>
            ${items}
        </section>`;
    }

    private generateProjects(): string {
        const projects = this.portfolioData!.projects.slice(0, 6); // Top 6 projects
        const lang = this.translate.currentLang || 'en';
        const title = lang === 'fr' ? 'Projets Phares' : 'Featured Projects';

        const statusLabels: Record<string, { en: string; fr: string }> = {
            completed: { en: 'Completed', fr: 'Terminé' },
            ongoing: { en: 'In Progress', fr: 'En cours' },
            planned: { en: 'Planned', fr: 'Planifié' },
        };

        const items = projects
            .map((proj) => {
                const statusLabel = statusLabels[proj.status]?.[lang as 'en' | 'fr'] || proj.status;
                const statusClass = `status-${proj.status}`;
                return `
            <div class="project-item">
                <span class="project-title">${proj.title}</span>
                <span class="project-status ${statusClass}">${statusLabel}</span>
                <p class="project-description">${proj.description}</p>
            </div>`;
            })
            .join('');

        return `
        <section class="section">
            <h2 class="section-title">${title}</h2>
            ${items}
        </section>`;
    }

    private generateSkills(): string {
        const skills = this.portfolioData!.skills;
        const lang = this.translate.currentLang || 'en';
        const title = lang === 'fr' ? 'Compétences' : 'Skills';

        const categoryLabels: Record<string, { en: string; fr: string }> = {
            dev: { en: 'Dev', fr: 'Dév' },
            ops: { en: 'DevOps', fr: 'DevOps' },
            database: { en: 'DB', fr: 'BDD' },
            gis: { en: 'GIS', fr: 'SIG' },
            ide: { en: 'Tools', fr: 'Outils' },
        };

        // Generate legend items
        const legendItems = Object.entries(categoryLabels)
            .map(([category, labels]) => {
                const label = labels[lang as 'en' | 'fr'] || category;
                return `<span class="legend-item"><span class="legend-dot legend-${category}"></span>${label}</span>`;
            })
            .join('');

        // Generate all skill tags with category colors
        const skillTags = skills
            .map((s) => `<span class="skill-tag skill-${s.category}">${s.name}</span>`)
            .join('');

        return `
        <section class="section">
            <h2 class="section-title">${title}</h2>
            <div class="skills-container">
                <div class="skills-legend">${legendItems}</div>
                <div class="skill-list">${skillTags}</div>
            </div>
        </section>`;
    }

    private generateEducation(): string {
        const educations = this.portfolioData!.educations;
        const lang = this.translate.currentLang || 'en';
        const title = lang === 'fr' ? 'Formation' : 'Education';

        const items = educations
            .map(
                (edu) => `
            <div class="education-item">
                <div class="education-degree">${edu.degree}</div>
                <div class="education-institution">${edu.institution}</div>
                ${edu.field ? `<div class="education-field">${edu.field}</div>` : ''}
                <div class="education-period">${edu.period}${edu.location ? ` • ${edu.location}` : ''}</div>
            </div>`
            )
            .join('');

        return `
        <section class="section">
            <h2 class="section-title">${title}</h2>
            ${items}
        </section>`;
    }

    private generateLinks(): string {
        const links = this.portfolioData!.externalLinks.slice(0, 4);
        const lang = this.translate.currentLang || 'en';
        const title = lang === 'fr' ? 'Liens' : 'Links';

        const items = links
            .map(
                (link) => `
            <div class="link-item">
                <span class="link-platform">${link.platform}:</span>
                <a href="${link.url}" target="_blank">${link.url.replace(/^https?:\/\//, '')}</a>
            </div>`
            )
            .join('');

        return `
        <section class="section">
            <h2 class="section-title">${title}</h2>
            ${items}
        </section>`;
    }
}
