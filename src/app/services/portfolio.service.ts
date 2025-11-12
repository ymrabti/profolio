import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  PortfolioData,
  Skill,
  Project,
  ProfessionalContribution,
  ExternalLink,
  PersonalInfo,
} from '../models/portfolio.model';

@Injectable({
    providedIn: 'root',
})
export class PortfolioService {
    private portfolioData: PortfolioData = {
        personalInfo: {
            name: 'Younes MRABTI',
            tagline: 'Serving the code community',
            description:
                'Full Stack Developer & GIS Specialist with expertise in modern web technologies, mobile development, and geospatial solutions. Passionate about creating innovative platforms and contributing to the developer community.',
            avatarUrl: '/assets/images/avatar.jpg',
            location: 'Morocco',
            email: 'younes.mrabti@example.com',
        },
        skills: [
            // Dev Skills
            {
                name: 'Dart/Flutter',
                level: 95,
                category: 'dev',
                icon: 'flutter',
            },
            {
                name: 'JavaScript/Node.js/React',
                level: 90,
                category: 'dev',
                icon: 'javascript',
            },
            {
                name: 'TypeScript/Angular/NestJS',
                level: 95,
                category: 'dev',
                icon: 'angular',
            },
            { name: 'C#/.NET', level: 85, category: 'dev', icon: 'dotnet' },
            { name: 'Java', level: 80, category: 'dev', icon: 'java' },
            {
                name: 'Kotlin/Android',
                level: 85,
                category: 'dev',
                icon: 'android',
            },
            { name: 'Swift/iOS', level: 75, category: 'dev', icon: 'swift' },

            // Ops Skills
            { name: 'Docker', level: 85, category: 'ops', icon: 'docker' },
            {
                name: 'Reverse Proxy/Cloudflare',
                level: 80,
                category: 'ops',
                icon: 'cloudflare',
            },
            { name: 'VibeCoding', level: 90, category: 'ops', icon: 'code' },

            // Database Skills
            {
                name: 'PostgreSQL',
                level: 90,
                category: 'database',
                icon: 'postgresql',
            },
            {
                name: 'SQL Server',
                level: 85,
                category: 'database',
                icon: 'sql-server',
            },
            { name: 'MySQL', level: 85, category: 'database', icon: 'mysql' },
            {
                name: 'MongoDB',
                level: 90,
                category: 'database',
                icon: 'mongodb',
            },

            // GIS Skills
            {
                name: 'ArcGIS Online',
                level: 95,
                category: 'gis',
                icon: 'arcgis',
            },
            {
                name: 'ArcGIS Enterprise',
                level: 90,
                category: 'gis',
                icon: 'arcgis',
            },
            {
                name: 'ArcGIS Developers',
                level: 95,
                category: 'gis',
                icon: 'arcgis-dev',
            },
            { name: 'QGIS', level: 85, category: 'gis', icon: 'qgis' },

            // IDE Skills
            { name: 'VSCode', level: 95, category: 'ide', icon: 'vscode' },
            { name: 'IntelliJ', level: 85, category: 'ide', icon: 'intellij' },
            { name: 'XCode', level: 80, category: 'ide', icon: 'xcode' },
        ],
        projects: [
            // FullStack Platforms
            {
                id: 'qr-checks',
                title: 'QR Checks',
                description:
                    'Platform for check-in presence/leave of employees, students, business staff, stores via short temporary QR codes shown dynamically',
                category: 'fullstack',
                status: 'ongoing',
                features: [
                    {
                        title: 'Backend/Database',
                        description:
                            'Real-time QR code management and validation system',
                        technologies: [
                            { name: 'Node.js', icon: 'nodejs' },
                            { name: 'Express', icon: 'express' },
                            { name: 'MySQL', icon: 'mysql' },
                            { name: 'Socket.io', icon: 'socketio' },
                        ],
                    },
                    {
                        title: 'Mobile App',
                        description:
                            'Two user types: Gates show QR codes, users scan QR codes',
                        technologies: [
                            { name: 'Dart', icon: 'dart' },
                            { name: 'Flutter', icon: 'flutter' },
                        ],
                    },
                    {
                        title: 'Backoffice',
                        description:
                            'Statistics, configurations, absence justification/confirming, reporting',
                        technologies: [
                            { name: 'TypeScript', icon: 'typescript' },
                            { name: 'Angular', icon: 'angular' },
                        ],
                    },
                ],
                technologies: [],
            },
            {
                id: 'chatup',
                title: 'ChatUp',
                description:
                    'Modern end-to-end encryption chat application supporting group chats and file sharing',
                category: 'fullstack',
                status: 'ongoing',
                features: [
                    {
                        title: 'Backend/Database',
                        description:
                            'Secure messaging infrastructure with real-time capabilities',
                        technologies: [
                            { name: 'JavaScript', icon: 'javascript' },
                            { name: 'Node.js', icon: 'nodejs' },
                            { name: 'MongoDB', icon: 'mongodb' },
                        ],
                    },
                    {
                        title: 'Mobile App',
                        description:
                            'End-to-end encryption with X25519, secure storage, IndexedDB',
                        technologies: [
                            { name: 'Dart', icon: 'dart' },
                            { name: 'Flutter', icon: 'flutter' },
                            { name: 'X25519 Encryption', icon: 'security' },
                            { name: 'Cryptography', icon: 'security' },
                        ],
                    },
                    {
                        title: 'Presentation',
                        description:
                            'App description, releases, email verification and reset password callbacks',
                        technologies: [
                            { name: 'Web Technologies', icon: 'web' },
                        ],
                    },
                ],
                technologies: [],
            },
            {
                id: 'apple-health',
                title: 'AppleHealth',
                description:
                    'Health social platform where users share Apple Health export data analysis and personal health dashboards (steps, running/walking distance, calories, exercise minutes)',
                category: 'fullstack',
                status: 'planned',
                features: [
                    {
                        title: 'Data Processing',
                        description:
                            'Secure script that reads and interprets Apple Health data',
                        technologies: [
                            { name: 'Python', icon: 'python' },
                            { name: 'Data Analysis', icon: 'analytics' },
                        ],
                    },
                    {
                        title: 'Backend & Database',
                        description:
                            'Health data management and secure server communication',
                        technologies: [
                            { name: 'Node.js', icon: 'nodejs' },
                            { name: 'Express', icon: 'express' },
                            { name: 'PostgreSQL', icon: 'postgresql' },
                        ],
                    },
                    {
                        title: 'Frontend Dashboard',
                        description:
                            'Personal health dashboard and social sharing features',
                        technologies: [{ name: 'Angular', icon: 'angular' }],
                    },
                ],
                technologies: [],
            },
            {
                id: 'streetview-xeno',
                title: 'StreetViewXeno',
                description:
                    '360° images viewer platform based on Krpano viewer with timeline, map integration, directional hotspots, and XLSX mass upload system',
                category: 'fullstack',
                status: 'completed',
                features: [
                    {
                        title: 'Viewer Platform',
                        description:
                            '360° visualization with timeline and map containing related spots',
                        technologies: [
                            { name: 'Krpano', icon: 'panorama' },
                            { name: 'Web Technologies', icon: 'web' },
                        ],
                    },
                    {
                        title: 'Upload System',
                        description:
                            'XLSX images uploader with custom generator and multiresolution converter',
                        technologies: [
                            { name: 'Image Processing', icon: 'image' },
                            { name: 'XLSX Generator', icon: 'excel' },
                        ],
                    },
                    {
                        title: 'Advanced Features',
                        description:
                            'Directional hotspots and mass images upload with conversion',
                        technologies: [
                            { name: 'Image Converter', icon: 'transform' },
                            { name: 'Krpano Integration', icon: 'integration' },
                        ],
                    },
                ],
                technologies: [],
            },

            // Mobile Apps
            {
                id: 'botola-max',
                title: 'BotolaMax',
                description:
                    'Mobile application for football matches, competitions, and results with comprehensive statistics',
                category: 'mobile',
                status: 'completed',
                features: [
                    {
                        title: 'Football Data Management',
                        description:
                            'Live matches, competitions, and relevant statistics',
                        technologies: [
                            { name: 'Flutter', icon: 'flutter' },
                            { name: 'Sports APIs', icon: 'sports' },
                            { name: 'Data Analytics', icon: 'analytics' },
                        ],
                    },
                ],
                technologies: [],
            },
            {
                id: 'geolight-meter',
                title: 'Geolight Meter',
                description:
                    'Mobile tool for collection of lux light data with geolocation, handles XLSX exports for analysis',
                category: 'mobile',
                status: 'completed',
                features: [
                    {
                        title: 'Light & Location Data',
                        description:
                            'Lux data collection with precise GPS coordinates',
                        technologies: [
                            { name: 'Flutter', icon: 'flutter' },
                            { name: 'Light Sensors', icon: 'sensor' },
                            { name: 'GPS/Geolocation', icon: 'location' },
                            { name: 'XLSX Export', icon: 'excel' },
                        ],
                    },
                ],
                technologies: [],
            },
            {
                id: 'pharmagest',
                title: 'Pharmagest',
                description:
                    'Pharmacy management mobile application for inventory, sales, and customer management (ongoing)',
                category: 'mobile',
                status: 'ongoing',
                features: [
                    {
                        title: 'Pharmacy Management',
                        description:
                            'Complete pharmacy operations and inventory management',
                        technologies: [
                            { name: 'Flutter', icon: 'flutter' },
                            { name: 'Database Management', icon: 'database' },
                            { name: 'Business Logic', icon: 'business' },
                        ],
                    },
                ],
                technologies: [],
            },

            // Online/Dev Tools
            {
                id: 'portfolio-website',
                title: 'Portfolio Website',
                description:
                    'This stunning Angular portfolio showcasing skills, projects, and professional experience',
                category: 'tool',
                status: 'completed',
                features: [
                    {
                        title: 'Modern Portfolio',
                        description:
                            'Comprehensive showcase of expertise and experience',
                        technologies: [
                            { name: 'Angular', icon: 'angular' },
                            { name: 'TypeScript', icon: 'typescript' },
                            { name: 'GSAP Animations', icon: 'animation' },
                        ],
                    },
                ],
                technologies: [],
            },
            {
                id: 'svg-playground',
                title: 'SVG Playground',
                description:
                    'Create stunning SVG graphics with free online generator. Design polygons, stars, spirals, and curved shapes with real-time preview. Export as SVG or PNG.',
                category: 'tool',
                status: 'completed',
                features: [
                    {
                        title: 'SVG Creation Tool',
                        description:
                            'Real-time SVG generation with multiple shape types',
                        technologies: [
                            { name: 'JavaScript', icon: 'javascript' },
                            { name: 'SVG', icon: 'svg' },
                            { name: 'Canvas', icon: 'canvas' },
                        ],
                    },
                ],
                technologies: [],
            },
            {
                id: 'power-geojson',
                title: 'PowerGeoJSON',
                description:
                    'Powerful tool for GeoJSON with flutter_map, styled from properties, supports Esri JSON, soon supports multiple projections',
                category: 'tool',
                status: 'completed',
                features: [
                    {
                        title: 'Flutter Package (pub.dev)',
                        description:
                            'Advanced GeoJSON processing with flutter_map integration',
                        technologies: [
                            { name: 'Dart', icon: 'dart' },
                            { name: 'Flutter', icon: 'flutter' },
                            { name: 'GeoJSON', icon: 'geojson' },
                            { name: 'Esri JSON', icon: 'esri' },
                        ],
                    },
                ],
                technologies: [],
            },
            {
                id: 'flutter-azimuth',
                title: 'Flutter Azimuth',
                description:
                    'Flutter Compass Tools Implementation measuring azimuth angle between magnetic north and device orientation',
                category: 'tool',
                status: 'completed',
                features: [
                    {
                        title: 'Compass Plugin (pub.dev)',
                        description:
                            'Precise azimuth measurement for navigation apps',
                        technologies: [
                            { name: 'Flutter', icon: 'flutter' },
                            { name: 'Compass Sensors', icon: 'sensor' },
                            { name: 'Magnetometer', icon: 'sensor' },
                        ],
                    },
                ],
                technologies: [],
            },
            {
                id: 'popup-menu-2',
                title: 'Popup Menu 2',
                description:
                    'Popup menu with clickable buttons and global click function to maintain user attention without breaking focus',
                category: 'tool',
                status: 'completed',
                features: [
                    {
                        title: 'UI Component (pub.dev)',
                        description: 'User-attention focused popup menu design',
                        technologies: [
                            { name: 'Flutter', icon: 'flutter' },
                            { name: 'UI/UX Design', icon: 'design' },
                            { name: 'Dart', icon: 'dart' },
                        ],
                    },
                ],
                technologies: [],
            },
            {
                id: 'json-dart-converter',
                title: 'JSON to Dart Model Converter',
                description:
                    'Online tool for converting JSON data structures to Dart model classes automatically',
                category: 'tool',
                status: 'completed',
                features: [
                    {
                        title: 'Code Generation Tool',
                        description:
                            'Automated Dart model class generation from JSON',
                        technologies: [
                            { name: 'JavaScript', icon: 'javascript' },
                            { name: 'JSON Parser', icon: 'json' },
                            { name: 'Code Generation', icon: 'code' },
                        ],
                    },
                ],
                technologies: [],
            },
            {
                id: 'image-360-converter',
                title: 'Image 360° Converter',
                description:
                    'Convert 360° images to multiresolution format with XLSX generator for StreetViewXeno integration',
                category: 'tool',
                status: 'completed',
                features: [
                    {
                        title: 'Image Processing Tool',
                        description:
                            'Multiresolution conversion and XLSX generation for 360° platforms',
                        technologies: [
                            { name: 'Image Processing', icon: 'image' },
                            { name: 'XLSX Generation', icon: 'excel' },
                            { name: 'Krpano Integration', icon: 'integration' },
                        ],
                    },
                ],
                technologies: [],
            },
            {
                id: 'soil-moisture-fetcher',
                title: 'Soil Moisture Fetcher',
                description:
                    'Automated soil moisture monitoring system using satellite remote sensing data from Sentinel-1 and NASA SMAP for precision agriculture',
                category: 'tool',
                status: 'completed',
                features: [
                    {
                        title: 'Satellite Data Processing',
                        description:
                            'Daily imagery retrieval, moisture maps generation, GeoTIFF/JPEG exports',
                        technologies: [
                            { name: 'Python', icon: 'python' },
                            {
                                name: 'Google Earth Engine',
                                icon: 'earth-engine',
                            },
                            { name: 'Docker', icon: 'docker' },
                            { name: 'PostgreSQL', icon: 'postgresql' },
                        ],
                    },
                    {
                        title: 'Automated Monitoring',
                        description:
                            'Real-time tracking with notifications for smart irrigation and environmental research',
                        technologies: [
                            { name: 'Sentinel-1', icon: 'satellite' },
                            { name: 'NASA SMAP', icon: 'satellite' },
                            { name: 'Automation', icon: 'automation' },
                        ],
                    },
                ],
                technologies: [],
            },
            {
                id: 'pc-cleaner',
                title: 'Automatic PC Cleaner',
                description:
                    'Automated Windows system maintenance script running weekly to clean temp files, clear caches, empty Recycle Bin, and optimize disk space',
                category: 'tool',
                status: 'completed',
                features: [
                    {
                        title: 'System Maintenance',
                        description:
                            'Hands-free system optimization with automated logging and email reporting',
                        technologies: [
                            { name: 'PowerShell', icon: 'powershell' },
                            { name: 'Task Scheduler', icon: 'windows' },
                            { name: 'Email Automation', icon: 'email' },
                        ],
                    },
                ],
                technologies: [],
            },
        ],
        professionalContributions: [
            {
                company: 'Marafik/Majal Berkane',
                role: 'Full Stack Developer & GIS Specialist',
                period: '2020 - Present',
                description:
                    '~75% of time generating maps, statistics on-the-fly, measuring distances, data management, conversion, cleaning, processing, analyzing, interoperability, ArcGIS Online data collection & dashboarding. Leading innovative digital solutions for urban development and citizen services.',
                projects: [
                    {
                        id: 'find-tobissi',
                        title: 'Find Tobissi',
                        description:
                            'Mobile application for estimating bus arrival time and distance to improve public transportation experience',
                        category: 'professional',
                        status: 'completed',
                        features: [
                            {
                                title: 'Real-time Bus Tracking',
                                description:
                                    'GPS-based bus location tracking with accurate arrival time estimation',
                                technologies: [
                                    {
                                        name: 'Mobile Development',
                                        icon: 'mobile',
                                    },
                                    { name: 'GPS Tracking', icon: 'location' },
                                    {
                                        name: 'Real-time Data',
                                        icon: 'real-time',
                                    },
                                ],
                            },
                        ],
                        technologies: [],
                    },
                    {
                        id: 'eco-geste',
                        title: 'ÉCO-GESTE',
                        description:
                            'Ecological awareness mobile application encouraging citizens to sort waste with reward points convertible to gifts, promoting environmental sustainability',
                        category: 'professional',
                        status: 'completed',
                        features: [
                            {
                                title: 'Gamification & Rewards',
                                description:
                                    'Point-based reward system for ecological behavior with gift conversion',
                                technologies: [
                                    {
                                        name: 'Mobile Development',
                                        icon: 'mobile',
                                    },
                                    { name: 'Gamification', icon: 'game' },
                                    { name: 'Reward System', icon: 'reward' },
                                ],
                            },
                        ],
                        technologies: [],
                    },
                    {
                        id: 'borne-citoyenne',
                        title: 'Borne Citoyenne',
                        description:
                            'Citizen service application for Berkane commune measuring satisfaction levels and providing comprehensive service information to improve citizen engagement',
                        category: 'professional',
                        status: 'completed',
                        features: [
                            {
                                title: 'Citizen Services Platform',
                                description:
                                    'Satisfaction surveys, document consultation, and service information management',
                                technologies: [
                                    {
                                        name: 'Mobile Development',
                                        icon: 'mobile',
                                    },
                                    {
                                        name: 'Data Synchronization',
                                        icon: 'sync',
                                    },
                                    { name: 'Survey System', icon: 'survey' },
                                ],
                            },
                        ],
                        technologies: [],
                    },
                ],
            },
        ],
        externalLinks: [
            {
                platform: 'GitHub - Main Profile',
                url: 'https://github.com/ymrabti',
                icon: 'github',
                description: 'Main repositories and contributions',
            },
            {
                platform: 'GitHub - Flutter Packages',
                url: 'https://github.com/youmtinetflutterpacks',
                icon: 'github',
                description: 'Organization for Flutter packages',
            },
            {
                platform: 'GitHub - Flutter Apps',
                url: 'https://github.com/youmtinet-flutter-apps',
                icon: 'github',
                description: 'Organization for Flutter applications',
            },
            {
                platform: 'LinkedIn',
                url: 'https://linkedin.com/in/younesmrabti1996',
                icon: 'linkedin',
                description: 'Professional network and updates',
            },
            {
                platform: 'Patreon',
                url: 'https://patreon.com/youmrabti',
                icon: 'patreon',
                description: 'Support my open source work',
            },
        ],
    };

    constructor() {}

    getPortfolioData(): Observable<PortfolioData> {
        return of(this.portfolioData);
    }

    getPersonalInfo(): Observable<PersonalInfo> {
        return of(this.portfolioData.personalInfo);
    }

    getSkillsByCategory(category?: string): Observable<Skill[]> {
        let skills = this.portfolioData.skills;
        if (category) {
            skills = skills.filter((skill) => skill.category === category);
        }
        return of(skills);
    }

    getProjectsByCategory(category?: string): Observable<Project[]> {
        let projects = this.portfolioData.projects;
        if (category) {
            projects = projects.filter(
                (project) => project.category === category
            );
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
