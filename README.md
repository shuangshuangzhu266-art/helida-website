# Sina Steel Professional Portfolio Website

A comprehensive, state-of-the-art portfolio and e-commerce website for Sina Steel, a leading stainless steel supplier in Egypt. This website features a modern, elegant design with extensive animations, multi-language support, and full responsiveness.

## 🌟 Features

### Core Features
- **Multi-language Support**: Arabic, English, and Chinese with seamless transitions
- **Dark/Light Mode**: Toggle between themes with smooth animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Extensive Animations**: Luxury feel with high-quality animations throughout
- **WhatsApp Integration**: Direct contact and form submissions via WhatsApp
- **Dynamic Calendar**: Real-time date display in footer

### Pages
1. **Home Page** - Hero section with video background, experience counter, manufacturing process slider, featured products, services, testimonials, blog snippets, and quick contact
2. **Products Page** - Filterable product gallery with detailed product modals and RFQ forms
3. **About Us Page** - Company information, vision/mission, team section with flip cards, and certifications
4. **Contact Page** - Main RFQ form, contact information, and Google Maps integration
5. **FAQ Page** - Frequently asked questions with dropdown animations
6. **Quality Assurance Page** - Detailed quality standards and compliance information

### Technical Features
- **Modern CSS**: CSS Grid, Flexbox, CSS Variables, and advanced animations
- **Vanilla JavaScript**: No frameworks, pure JavaScript for optimal performance
- **Form Validation**: Client-side validation with real-time feedback
- **Smooth Scrolling**: Enhanced user experience with smooth scroll behavior
- **Intersection Observer**: Performance-optimized animations on scroll
- **Local Storage**: Theme and language preferences persistence

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. For development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

### File Structure
```
Sina Steel Website/
├── index.html              # Home page
├── products.html           # Products page
├── about.html              # About us page
├── contact.html            # Contact page
├── faq.html                # FAQ page
├── quality.html            # Quality assurance page
├── styles.css              # Main stylesheet
├── script.js               # Main JavaScript file
├── products.js             # Products page functionality
├── contact.js              # Contact page functionality
├── faq.js                  # FAQ page functionality
└── README.md               # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: Dark theme with metallic accents
- **Accent**: Gold gradient (#c9a96e to #d4af37)
- **Text**: White/light gray for dark mode, dark gray for light mode
- **Background**: Dark (#1a1a1a) and secondary (#2d2d2d) colors

### Typography
- **Primary Font**: Inter (English)
- **Arabic Font**: Noto Sans Arabic
- **Chinese Font**: Noto Sans SC
- **Weights**: 300, 400, 500, 600, 700, 800

### Animations
- **Fade In Up**: Elements appear with upward motion
- **Hover Effects**: Transform and shadow changes
- **Pulse Animation**: Attention-grabbing elements
- **Smooth Transitions**: 0.3s ease for all interactive elements

## 🌐 Multi-language Support

The website supports three languages with automatic text switching:

### Language Implementation
- **Data Attributes**: `data-en`, `data-ar`, `data-zh` on all text elements
- **Dynamic Switching**: JavaScript updates all text based on selected language
- **RTL Support**: Automatic right-to-left layout for Arabic
- **Font Switching**: Language-specific fonts for optimal readability

### Supported Languages
- **English (EN)**: Default language
- **Arabic (عربي)**: Full RTL support
- **Chinese (中文)**: Simplified Chinese

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 320px to 767px

### Mobile Features
- **Hamburger Menu**: Collapsible navigation
- **Touch Gestures**: Swipe support for sliders
- **Optimized Forms**: Mobile-friendly input fields
- **Reduced Animations**: Performance optimization for mobile

## 🔧 Customization

### Theme Customization
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1a1a1a;
    --accent-color: #c9a96e;
    --text-primary: #ffffff;
    /* ... other variables */
}
```

### Language Customization
Add new language support by:
1. Adding language buttons in navigation
2. Adding `data-[lang]` attributes to text elements
3. Updating the `updateLanguage()` function in `script.js`

### Content Updates
- **Company Information**: Update contact details in all HTML files
- **Product Information**: Modify product data in `products.js`
- **Images**: Replace placeholder images with actual product photos

## 📞 Contact Integration

### WhatsApp Integration
- **Phone Number**: +201067902515
- **Secondary Number**: +201060977942
- **Email**: sinasteel10@gmail.com

### Form Submissions
All forms automatically generate WhatsApp messages with:
- Customer information
- Product requirements
- Quantity and specifications
- Additional requirements

## 🎯 Performance Optimization

### Loading Performance
- **Minified CSS**: Optimized stylesheet
- **Efficient JavaScript**: Vanilla JS for fast execution
- **Lazy Loading**: Images load as needed
- **CDN Resources**: External libraries from CDN

### Animation Performance
- **CSS Transforms**: Hardware-accelerated animations
- **Intersection Observer**: Animations trigger only when visible
- **Debounced Events**: Optimized scroll and resize handlers

## 🔒 Browser Support

### Supported Browsers
- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

### Required Features
- CSS Grid
- CSS Variables
- ES6 JavaScript
- Intersection Observer API

## 📈 SEO Features

### Meta Tags
- **Title Tags**: Optimized for each page
- **Meta Descriptions**: Compelling descriptions for search engines
- **Open Graph**: Social media sharing optimization

### Accessibility
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color schemes
- **Semantic HTML**: Proper heading structure

## 🚀 Deployment

### Static Hosting
The website can be deployed to any static hosting service:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **AWS S3**
- **Google Cloud Storage**

### Domain Setup
1. Upload files to hosting service
2. Configure custom domain
3. Set up SSL certificate
4. Test all functionality

## 📝 Maintenance

### Regular Updates
- **Content Updates**: Keep product information current
- **Image Optimization**: Compress and optimize images
- **Performance Monitoring**: Check loading speeds
- **Browser Testing**: Ensure compatibility with new browser versions

### Backup Strategy
- **Version Control**: Use Git for code versioning
- **File Backups**: Regular backups of all files
- **Database Backups**: If using dynamic content

## 🤝 Support

### Developer Information
- **Name**: Mahmoud
- **Facebook**: [Developer Profile](https://www.facebook.com/share/19gHnKn7Rj/)

### Company Information
- **Name**: Sina Steel
- **Industry**: Stainless Steel Products
- **Location**: Qalyub - Awal El-Bati, Egypt
- **Experience**: 5+ years in Egyptian market

## 📄 License

This project is proprietary software developed for Sina Steel. All rights reserved.

---

**Note**: This website is designed to showcase Sina Steel's professional capabilities and provide an excellent user experience for potential customers. The combination of modern design, multi-language support, and comprehensive functionality makes it a powerful tool for business growth.
