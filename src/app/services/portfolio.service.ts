import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PortfolioData, Skill, Project, ProfessionalContribution, ExternalLink, PersonalInfo } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolioData: PortfolioData = {
    personalInfo: {
      name: 'Younes MRABTI',
      tagline: 'Serving the code community',
      description: 'Full Stack Developer & GIS Specialist with expertise in modern web technologies, mobile development, and geospatial solutions. Passionate about creating innovative platforms and contributing to the developer community.',
      avatarUrl: '/assets/images/younes-avatar.jpg',
      location: 'Morocco',
      email: 'younes.mrabti@example.com'
    },
    skills: [
      // Dev Skills
      { name: 'Dart/Flutter', level: 95, category: 'dev', icon: 'flutter' },
      { name: 'JavaScript/Node.js/React', level: 90, category: 'dev', icon: 'javascript' },
      { name: 'TypeScript/Angular/NestJS', level: 95, category: 'dev', icon: 'angular' },
      { name: 'C#/.NET', level: 85, category: 'dev', icon: 'dotnet' },
      { name: 'Java', level: 80, category: 'dev', icon: 'java' },
      { name: 'Kotlin/Android', level: 85, category: 'dev', icon: 'android' },
      { name: 'Swift/iOS', level: 75, category: 'dev', icon: 'swift' },
      
      // Ops Skills
      { name: 'Docker', level: 85, category: 'ops', icon: 'docker' },
      { name: 'Reverse Proxy/Cloudflare', level: 80, category: 'ops', icon: 'cloudflare' },
      { name: 'VibeCoding', level: 90, category: 'ops', icon: 'code' },
      
      // Database Skills
      { name: 'PostgreSQL', level: 90, category: 'database', icon: 'postgresql' },
      { name: 'SQL Server', level: 85, category: 'database', icon: 'sql-server' },
      { name: 'MySQL', level: 85, category: 'database', icon: 'mysql' },
      { name: 'MongoDB', level: 90, category: 'database', icon: 'mongodb' },
      
      // GIS Skills
      { name: 'ArcGIS Online', level: 95, category: 'gis', icon: 'arcgis' },
      { name: 'ArcGIS Enterprise', level: 90, category: 'gis', icon: 'arcgis' },
      { name: 'ArcGIS Developers', level: 95, category: 'gis', icon: 'arcgis-dev' },
      { name: 'QGIS', level: 85, category: 'gis', icon: 'qgis' },
      
      // IDE Skills
      { name: 'VSCode', level: 95, category: 'ide', icon: 'vscode' },
      { name: 'IntelliJ', level: 85, category: 'ide', icon: 'intellij' },
      { name: 'XCode', level: 80, category: 'ide', icon: 'xcode' }
    ],
    projects: [
      // FullStack Platforms
      {
        id: 'qr-checks',
        title: 'QR Checks',
        description: 'Platform for checking presences/leave of employees, students, business staff, stores via short temporary QR codes shown dynamically',
        category: 'fullstack',
        status: 'completed',
        features: [
          {
            title: 'Backend/Database',
            description: 'Real-time QR code management and validation',
            technologies: [
              { name: 'Node.js', icon: 'nodejs' },
              { name: 'Express', icon: 'express' },
              { name: 'MySQL', icon: 'mysql' },
              { name: 'Socket.io', icon: 'socketio' }
            ]
          },
          {
            title: 'Mobile App',
            description: 'Two user types: Gates show QR codes, users scan QR codes',
            technologies: [
              { name: 'Dart', icon: 'dart' },
              { name: 'Flutter', icon: 'flutter' }
            ]
          },
          {
            title: 'Backoffice',
            description: 'Statistics, configurations, absence justification/confirming, reporting',
            technologies: [
              { name: 'TypeScript', icon: 'typescript' },
              { name: 'Angular', icon: 'angular' }
            ]
          }
        ],
        technologies: []
      },
      {
        id: 'chatup',
        title: 'ChatUp',
        description: 'Modern end-to-end encryption chat application supporting group chats and file sharing',
        category: 'fullstack',
        status: 'completed',
        features: [
          {
            title: 'Backend/Database',
            description: 'Secure messaging infrastructure',
            technologies: [
              { name: 'JavaScript', icon: 'javascript' },
              { name: 'Node.js', icon: 'nodejs' },
              { name: 'MongoDB', icon: 'mongodb' }
            ]
          },
          {
            title: 'Mobile App',
            description: 'Encrypted messaging with secure storage',
            technologies: [
              { name: 'Dart', icon: 'dart' },
              { name: 'Flutter', icon: 'flutter' },
              { name: 'X25519 Encryption', icon: 'security' }
            ]
          },
          {
            title: 'Web Presentation',
            description: 'App description, releases, email verification callbacks',
            technologies: [
              { name: 'Web Technologies', icon: 'web' }
            ]
          }
        ],
        technologies: []
      },
      {
        id: 'apple-health',
        title: 'AppleHealth',
        description: 'Health social platform where users share Apple Health export data analysis and personal health dashboards',
        category: 'fullstack',
        status: 'completed',
        features: [
          {
            title: 'Data Processing',
            description: 'Secure Apple Health data interpretation and analysis',
            technologies: [
              { name: 'Python', icon: 'python' },
              { name: 'Data Analysis', icon: 'analytics' }
            ]
          },
          {
            title: 'Backend & Frontend',
            description: 'Health data management and dashboard visualization',
            technologies: [
              { name: 'Node.js', icon: 'nodejs' },
              { name: 'Express', icon: 'express' },
              { name: 'PostgreSQL', icon: 'postgresql' },
              { name: 'Angular', icon: 'angular' }
            ]
          }
        ],
        technologies: []
      },
      {
        id: 'streetview-xeno',
        title: 'StreetViewXeno',
        description: '360° images viewer platform based on Krpano viewer with timeline, map integration, and mass upload capabilities',
        category: 'fullstack',
        status: 'completed',
        features: [
          {
            title: 'Viewer Platform',
            description: '360° visualization with timeline and map integration',
            technologies: [
              { name: 'Krpano', icon: 'panorama' },
              { name: 'Web Technologies', icon: 'web' }
            ]
          },
          {
            title: 'Upload System',
            description: 'XLSX images uploader with multiresolution converter',
            technologies: [
              { name: 'Image Processing', icon: 'image' },
              { name: 'XLSX Generator', icon: 'excel' }
            ]
          }
        ],
        technologies: []
      },
      
      // Mobile Apps
      {
        id: 'botola-max',
        title: 'BotolaMax',
        description: 'Mobile application for football matches, competitions, results with relevant statistics',
        category: 'mobile',
        status: 'completed',
        features: [
          {
            title: 'Football Data',
            description: 'Live matches, competitions, and statistics',
            technologies: [
              { name: 'Flutter', icon: 'flutter' },
              { name: 'Sports APIs', icon: 'sports' }
            ]
          }
        ],
        technologies: []
      },
      {
        id: 'geolight-meter',
        title: 'Geolight Meter',
        description: 'Mobile app tool for collection of lux light data with geolocation, handles XLSX exports',
        category: 'mobile',
        status: 'completed',
        features: [
          {
            title: 'Light Measurement',
            description: 'Lux data collection with GPS coordinates',
            technologies: [
              { name: 'Flutter', icon: 'flutter' },
              { name: 'Sensors', icon: 'sensor' },
              { name: 'GPS', icon: 'location' }
            ]
          }
        ],
        technologies: []
      },
      {
        id: 'pharmagest',
        title: 'Pharmagest',
        description: 'Pharmacy management mobile app for inventory and sales management',
        category: 'mobile',
        status: 'ongoing',
        features: [
          {
            title: 'Pharmacy Management',
            description: 'Complete pharmacy operations management',
            technologies: [
              { name: 'Flutter', icon: 'flutter' },
              { name: 'Database', icon: 'database' }
            ]
          }
        ],
        technologies: []
      },
      
      // Dev Tools
      {
        id: 'svg-playground',
        title: 'SVG Playground',
        description: 'Create stunning SVG graphics with free online generator. Design polygons, stars, spirals, and curved shapes with real-time preview',
        category: 'tool',
        status: 'completed',
        features: [
          {
            title: 'SVG Generation',
            description: 'Real-time SVG creation and preview',
            technologies: [
              { name: 'Web Technologies', icon: 'web' },
              { name: 'SVG', icon: 'svg' }
            ]
          }
        ],
        technologies: []
      },
      {
        id: 'power-geojson',
        title: 'PowerGeoJSON',
        description: 'Powerful tool for GeoJSON with flutter_map, styled from properties, supports ESRI JSON',
        category: 'tool',
        status: 'completed',
        features: [
          {
            title: 'Flutter Package',
            description: 'Published on pub.dev for Flutter community',
            technologies: [
              { name: 'Dart', icon: 'dart' },
              { name: 'Flutter', icon: 'flutter' },
              { name: 'GeoJSON', icon: 'geojson' }
            ]
          }
        ],
        technologies: []
      },
      {
        id: 'flutter-azimuth',
        title: 'Flutter Azimuth',
        description: 'Flutter Compass Tools Implementation measuring azimuth angle between magnetic north and device orientation',
        category: 'tool',
        status: 'completed',
        features: [
          {
            title: 'Compass Plugin',
            description: 'Magnetic north orientation measurement',
            technologies: [
              { name: 'Flutter', icon: 'flutter' },
              { name: 'Sensors', icon: 'sensor' }
            ]
          }
        ],
        technologies: []
      },
      {
        id: 'popup-menu-2',
        title: 'Popup Menu 2',
        description: 'Popup menu with clickable buttons and global click function to maintain user attention',
        category: 'tool',
        status: 'completed',
        features: [
          {
            title: 'UI Component',
            description: 'Flutter popup menu component',
            technologies: [
              { name: 'Flutter', icon: 'flutter' },
              { name: 'UI/UX', icon: 'design' }
            ]
          }
        ],
        technologies: []
      },
      {
        id: 'soil-moisture-fetcher',
        title: 'Soil Moisture Fetcher',
        description: 'Automated soil moisture monitoring using satellite remote sensing data from Sentinel-1 and NASA SMAP',
        category: 'tool',
        status: 'completed',
        features: [
          {
            title: 'Satellite Data Processing',
            description: 'Automated monitoring with real-time tracking',
            technologies: [
              { name: 'Python', icon: 'python' },
              { name: 'Google Earth Engine', icon: 'earth-engine' },
              { name: 'Docker', icon: 'docker' },
              { name: 'PostgreSQL', icon: 'postgresql' }
            ]
          }
        ],
        technologies: []
      },
      {
        id: 'pc-cleaner',
        title: 'Automatic PC Cleaner',
        description: 'Automated Windows system maintenance script running weekly to optimize disk space and performance',
        category: 'tool',
        status: 'completed',
        features: [
          {
            title: 'System Optimization',
            description: 'Automated cleanup with logging and reporting',
            technologies: [
              { name: 'PowerShell', icon: 'powershell' },
              { name: 'Task Scheduler', icon: 'windows' }
            ]
          }
        ],
        technologies: []
      }
    ],
    professionalContributions: [
      {
        company: 'Marafik/Majal Berkane',
        role: 'Full Stack Developer & GIS Specialist',
        period: '2020 - Present',
        description: '~75% of time generating maps, statistics on-the-fly, measuring distances, data management, conversion, cleaning, processing, analyzing, interoperability, ArcGIS Online data collection & dashboarding',
        projects: [
          {
            id: 'find-tobissi',
            title: 'Find Tobissi',
            description: 'Mobile app for estimating bus arrival time and distance',
            category: 'professional',
            status: 'completed',
            features: [
              {
                title: 'Real-time Tracking',
                description: 'Bus location and ETA estimation',
                technologies: [
                  { name: 'Mobile Development', icon: 'mobile' },
                  { name: 'GPS Tracking', icon: 'location' }
                ]
              }
            ],
            technologies: []
          },
          {
            id: 'eco-geste',
            title: 'ÉCO-GESTE',
            description: 'Ecological awareness mobile app encouraging citizens to sort waste with reward points convertible to gifts',
            category: 'professional',
            status: 'completed',
            features: [
              {
                title: 'Gamification System',
                description: 'Reward points for ecological behavior',
                technologies: [
                  { name: 'Mobile Development', icon: 'mobile' },
                  { name: 'Gamification', icon: 'game' }
                ]
              }
            ],
            technologies: []
          },
          {
            id: 'borne-citoyenne',
            title: 'Borne Citoyenne',
            description: 'Citizen service application for Berkane commune measuring satisfaction levels and providing service information',
            category: 'professional',
            status: 'completed',
            features: [
              {
                title: 'Citizen Services',
                description: 'Satisfaction surveys and document consultation',
                technologies: [
                  { name: 'Mobile Development', icon: 'mobile' },
                  { name: 'Data Sync', icon: 'sync' }
                ]
              }
            ],
            technologies: []
          }
        ]
      }
    ],
    externalLinks: [
      {
        platform: 'GitHub - Main Profile',
        url: 'https://github.com/younes-mrabti',
        icon: 'github',
        description: 'Main repositories and contributions'
      },
      {
        platform: 'GitHub - Flutter Packages',
        url: 'https://github.com/flutter-packages-org',
        icon: 'github',
        description: 'Organization for Flutter packages'
      },
      {
        platform: 'GitHub - Flutter Apps',
        url: 'https://github.com/flutter-apps-org',
        icon: 'github',
        description: 'Organization for Flutter applications'
      },
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/younes-mrabti',
        icon: 'linkedin',
        description: 'Professional network and updates'
      },
      {
        platform: 'Patreon',
        url: 'https://patreon.com/younes-mrabti',
        icon: 'patreon',
        description: 'Support my open source work'
      }
    ]
  };

  constructor() { }

  getPortfolioData(): Observable<PortfolioData> {
    return of(this.portfolioData);
  }

  getPersonalInfo(): Observable<PersonalInfo> {
    return of(this.portfolioData.personalInfo);
  }

  getSkillsByCategory(category?: string): Observable<Skill[]> {
    let skills = this.portfolioData.skills;
    if (category) {
      skills = skills.filter(skill => skill.category === category);
    }
    return of(skills);
  }

  getProjectsByCategory(category?: string): Observable<Project[]> {
    let projects = this.portfolioData.projects;
    if (category) {
      projects = projects.filter(project => project.category === category);
    }
    return of(projects);
  }

  getProfessionalContributions(): Observable<ProfessionalContribution[]> {
    return of(this.portfolioData.professionalContributions);
  }

  getExternalLinks(): Observable<ExternalLink[]> {
    return of(this.portfolioData.externalLinks);
  }
}