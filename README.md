# Younes MRABTI - Portfolio Website

A modern, responsive portfolio website built with Angular showcasing full-stack development and GIS expertise.

## 🌟 Features

### SEO Optimized
- **Complete Meta Tags**: Open Graph, Twitter Cards, LinkedIn sharing
- **Structured Data**: JSON-LD schema.org markup for better search visibility
- **Robots.txt & Sitemap**: Proper crawling instructions for search engines
- **PWA Manifest**: Progressive Web App capabilities
- **Multi-language SEO**: English and French language support with proper hreflang tags

### Contact/Hire Me Component
- **Professional CTA**: Clear call-to-action for potential clients
- **Multiple Contact Methods**: Email, LinkedIn, GitHub integration
- **CV Download**: Direct resume download functionality
- **Responsive Design**: Mobile-first approach with glassmorphism design

### Technical Features
- **Angular 18**: Modern Angular framework with standalone components
- **Material Design**: Consistent UI with Angular Material
- **Internationalization**: Full i18n support (EN/FR)
- **TypeScript**: Strongly typed development
- **SCSS**: Advanced styling with mixins and variables
- **GSAP Animations**: Smooth, professional animations

## 🚀 SEO Implementation

### Meta Tags & Social Sharing
- Complete Open Graph meta tags for Facebook/LinkedIn sharing
- Twitter Card markup for enhanced Twitter previews
- Proper canonical URLs and language alternates
- Theme colors and PWA manifest for mobile experience

### Search Engine Optimization
- **robots.txt**: Proper search engine crawling guidelines
- **sitemap_index.xml**: Complete site structure for indexing
- **Structured Data**: Person schema markup for rich snippets
- **Semantic HTML**: Proper heading hierarchy and semantic elements

### Performance & Accessibility
- **Lazy Loading**: Optimized image and component loading
- **Progressive Enhancement**: Works without JavaScript
- **Responsive Images**: Multiple formats and sizes
- **ARIA Labels**: Full accessibility support

## 🔧 Development

### Development server
```bash
yarn start
# or
ng serve --port 4200
```
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build
```bash
yarn build
# or
ng build
```
The build artifacts will be stored in the `dist/` directory.

### SEO Testing
```bash
# Check robots.txt
curl http://localhost:4200/robots.txt

# Check sitemap
curl http://localhost:4200/sitemap_index.xml

# Validate structured data
# Use Google's Rich Results Test or Schema Markup Validator
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── hero-section/
│   │   ├── skills-section/
│   │   ├── projects-section/
│   │   ├── experience-section/
│   │   ├── contact-me/          # Contact/Hire Me component
│   │   └── footer-section/
│   ├── services/
│   │   ├── seo.service.ts       # SEO management service
│   │   ├── portfolio.service.ts
│   │   └── simple-translate.service.ts
│   └── models/
├── assets/
│   ├── i18n/                    # Internationalization files
│   ├── images/                  # Image assets
│   ├── icons/                   # PWA icons
│   └── documents/               # CV and documents
├── robots.txt                   # Search engine guidelines
├── sitemap_index.xml                  # Site structure
└── manifest.json               # PWA manifest
```

## 🌐 SEO Features Implemented

1. **Meta Tags**: Title, description, keywords, author
2. **Open Graph**: Facebook/LinkedIn sharing optimization
3. **Twitter Cards**: Enhanced Twitter previews
4. **Schema Markup**: Person and Organization structured data
5. **Multilingual SEO**: hreflang tags for language targeting
6. **PWA Manifest**: Mobile app-like experience
7. **Canonical URLs**: Proper URL canonicalization
8. **Performance**: Optimized loading and Core Web Vitals

## 📱 Mobile & Accessibility

- **Responsive Design**: Mobile-first approach
- **Touch Optimization**: Touch-friendly interactions
- **Accessibility**: WCAG 2.1 compliance
- **Performance**: Lighthouse score optimization

## 🎨 Design System

- **Material Design**: Angular Material components
- **Glassmorphism**: Modern glass-effect design
- **Gradient Backgrounds**: Dynamic color schemes
- **Typography**: Inter font family
- **Icons**: Material Icons

---

Built with ❤️ by Younes MRABTI
