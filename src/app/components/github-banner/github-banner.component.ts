import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pro-github-banner',
  templateUrl: './github-banner.component.html',
  styleUrls: ['./github-banner.component.scss']
})
export class GithubBannerComponent implements OnInit {
  githubUrl = 'https://github.com/ymrabti/profolio';
  isVisible = true;
  isMinimized = false;
  
  ngOnInit(): void {
    // Check if banner was previously dismissed
    const minimized = localStorage.getItem('github-banner-minimized');
    
    if (minimized === 'true') {
      this.isMinimized = true;
    }
  }
  
  openGithub(): void {
    window.open(this.githubUrl, '_blank');
    // Track click event (you can add analytics here)
    this.trackEvent('github_banner_clicked');
  }
  
  dismissBanner(event: Event): void {
    event.stopPropagation();
    if (this.isMinimized) {
      // If already minimized, completely hide it
      this.isVisible = true;
      this.trackEvent('github_banner_dismissed');
    } else {
      // First time - just minimize to left
      this.isMinimized = true;
      localStorage.setItem('github-banner-minimized', 'true');
      this.trackEvent('github_banner_minimized');
    }
  }
  
  expandBanner(): void {
    this.isMinimized = false;
    localStorage.removeItem('github-banner-minimized');
    this.trackEvent('github_banner_expanded');
  }
  
  private trackEvent(eventName: string): void {
    // Add your analytics tracking here
    console.log(`Event tracked: ${eventName}`);
  }
}