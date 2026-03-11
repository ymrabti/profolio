import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PortfolioService } from '../../services/portfolio.service';
import { CvRendererService } from '../../services/cv-renderer.service';
import { ExternalLink } from '../../models/portfolio.model';

@Component({
    selector: 'pro-contact-me',
    templateUrl: './contact-me.component.html',
    styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {
    externalLinks: ExternalLink[] = [];
    constructor(
        private portfolioService: PortfolioService,
        private cvRendererService: CvRendererService,
        public translate: TranslateService
    ) {}

    ngOnInit(): void {
        this.portfolioService.getExternalLinks().subscribe((links) => {
            this.externalLinks = links;
        });
    }
    openEmailClient(): void {
        const email = this.emailAddress;
        const subject =
            this.translate.instant('contact.title') || "Let's Work Together!";
        const body =
            'Hello, I would like to discuss a potential collaboration opportunity...';

        const mailto = `mailto:${email}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
        window.open(mailto, '_blank');
    }

    openLinkedIn(): void {
        window.open(this.externalLinks[3].url, '_blank');
    }

    openGitHub(): void {
        window.open(this.externalLinks[0].url, '_blank');
    }

    get emailAddress(): string {
        return 'admin@youmrabti.com';
    }

    printCV(): void {
        this.cvRendererService.renderCV();
    }

    downloadCV(): void {
        const cvUrl =
            'https://drive.google.com/file/d/1OvsMCcpRqmMQrc9tXK-UhiorbgqTqZca/view?usp=sharing';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.target = '_blank';
        link.download = 'CV.pdf';
        link.click();
    }
}
