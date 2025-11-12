import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pro-github-banner',
  templateUrl: './github-banner.component.html',
  styleUrls: ['./github-banner.component.scss']
})
export class GithubBannerComponent implements OnInit {
  githubUrl = 'https://github.com/ymrabti/profolio';
  isVisible = true;
  
  ngOnInit(): void {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('github-banner-dismissed');
    if (dismissed === 'true') {
      this.isVisible = false;
    }
  }
  
  openGithub(): void {
    window.open(this.githubUrl, '_blank');
    // Track click event (you can add analytics here)
    this.trackEvent('github_banner_clicked');
  }
  
  dismissBanner(event: Event): void {
    event.stopPropagation();
    this.isVisible = false;
    localStorage.setItem('github-banner-dismissed', 'true');
    this.trackEvent('github_banner_dismissed');
  }
  
  private trackEvent(eventName: string): void {
    // Add your analytics tracking here
    console.log(`Event tracked: ${eventName}`);
  }
}