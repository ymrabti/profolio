import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pro-android-banner',
    templateUrl: './android-banner.component.html',
    styleUrls: ['./android-banner.component.scss'],
})
export class AndroidBannerComponent implements OnInit {
    downloadUrl =
        'https://play.google.com/store/apps/details?id=com.ymrabtiapps.portfolio';
    isVisible = true;
    isMinimized = false;

    ngOnInit(): void {
        // Check if banner was previously dismissed
        const minimized = localStorage.getItem('android-banner-minimized');

        if (minimized === 'true') {
            this.isMinimized = true;
        }
    }

    downloadAndroid(): void {
        window.open(this.downloadUrl, '_blank');
        // Track click event (you can add analytics here)
        this.trackEvent('android_banner_clicked');
    }

    dismissBanner(event: Event): void {
        event.stopPropagation();
        if (this.isMinimized) {
            // If already minimized, completely hide it
            this.isVisible = true;
            this.trackEvent('android_banner_dismissed');
        } else {
            // First time - just minimize to left
            this.isMinimized = true;
            localStorage.setItem('android-banner-minimized', 'true');
            this.trackEvent('android_banner_minimized');
        }
    }

    expandBanner(): void {
        this.isMinimized = false;
        localStorage.removeItem('android-banner-minimized');
        this.trackEvent('android_banner_expanded');
    }

    private trackEvent(eventName: string): void {
        // Add your analytics tracking here
        console.log(`Event tracked: ${eventName}`);
    }
}
