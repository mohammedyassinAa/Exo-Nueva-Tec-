# Exo Nueva Tec - Luxury Watch Store Website

A modern, premium website for **Exo Nueva Tec**, a high-quality luxury watch store located in Tétouan, Morocco. The website is fully responsive with a mobile-first approach, designed to attract high-class clients.

![Exo Nueva Tec Hero](https://github.com/user-attachments/assets/92daa2a8-407a-4278-8022-92fa7dfbe66d)

## 🏢 Business Information

- **Store Name**: Exo Nueva Tec
- **Business**: High-quality luxury watches
- **WhatsApp Contact**: 0666342345
- **Location**: HJCG+883 Exo nueva tec, Av. Ben Aboud, Tétouan

## 🎯 Key Features

### 📱 Mobile-First Responsive Design
- **Primary focus on mobile devices** (375px - iPhone)
- Fully responsive for tablets (768px+)
- Beautiful desktop layout (1024px+)
- Touch-friendly with 44px minimum touch targets
- Smooth animations and transitions

### 🎨 Premium Design
- **Luxury color scheme**: Black (#1a1a1a), Gold (#D4AF37), and Silver (#C0C0C0)
- **Professional typography**: Playfair Display (headings) & Montserrat (body)
- Elegant animations and hover effects
- Modern card-based layouts

### 📞 WhatsApp Integration
- Floating WhatsApp button (always visible)
- Direct product inquiries via WhatsApp
- Contact form with WhatsApp redirect
- International format: `https://wa.me/212666342345`

### 🏆 Featured Sections

#### 1. Header/Navigation
- Sticky header with logo
- Mobile hamburger menu
- Desktop horizontal navigation
- Smooth scroll to sections

#### 2. Hero Section
- Eye-catching banner with gradient background
- Clear value proposition
- Dual call-to-action buttons
- Animated entrance effects

#### 3. Featured Brands
6 luxury watch brands displayed in cards:
- **Seiko** - Excellence japonaise depuis 1881
- **Beverly Hills** - Luxe et sophistication
- **Festina** - Tradition horlogère suisse
- **Boss** - Élégance allemande
- **Cerutti** - Raffinement italien
- **Other Brands** - Et bien plus encore...

#### 4. Categories
3 main watch categories:
- **Men's Watches** - Montres Homme
- **Women's Watches** - Montres Femme
- **Kids' Watches** - Montres Enfant

#### 5. Products/Gallery
- 6 featured watch products
- Product badges (New, Popular, Limited Edition)
- WhatsApp "Ask for Price" buttons
- 1 column on mobile, 2 on tablet, 3-4 on desktop

#### 6. Services
6 key services offered:
- ✅ Authenticité Garantie
- 🛡️ Garantie Officielle
- 👔 Conseil Expert
- 🔧 Réparation & Entretien
- 🎁 Emballage Cadeau
- 📞 Support Client 24/7

#### 7. About/Why Choose Us
- Company credibility
- Quality assurance
- Location information
- 10+ years experience highlight

#### 8. Contact Section
- WhatsApp contact card with direct chat link
- Store address and hours
- Contact form (redirects to WhatsApp)
- Map integration ready

#### 9. Footer
- Business information
- Quick links navigation
- Brand listings
- Social media links
- Copyright notice

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No frameworks, pure performance
- **Google Fonts** - Playfair Display & Montserrat
- **Font Awesome 6.4.0** - Icons
- **Mobile-First CSS** - Progressive enhancement

## 📁 File Structure

```
Exo-Nueva-Tec-/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS styling (mobile-first)
├── script.js           # JavaScript functionality
├── logo.jpeg           # Store logo
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Direct File Opening
Simply open `index.html` in any modern web browser.

### Option 2: Local Server (Recommended)
For better font loading and testing:

```bash
# Python 3
python3 -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080

# Node.js (if you have http-server installed)
npx http-server

# PHP
php -S localhost:8080
```

Then visit: `http://localhost:8080`

## 📱 Responsive Breakpoints

```css
/* Mobile (default) */
width: 320px - 767px

/* Tablet */
@media (min-width: 768px)

/* Desktop */
@media (min-width: 1024px)

/* Large Desktop */
@media (min-width: 1440px)
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Gold | `#D4AF37` | Buttons, accents, highlights |
| Dark Gold | `#B8942A` | Hover states |
| Secondary Black | `#1a1a1a` | Backgrounds, text |
| Accent Silver | `#C0C0C0` | Secondary elements |
| White | `#FFFFFF` | Cards, contrast |
| Light Gray | `#F5F5F5` | Section backgrounds |

## ⚡ Performance Features

- CSS animations with GPU acceleration
- Debounced scroll events
- Lazy loading ready
- Optimized asset loading
- No heavy frameworks (< 60KB total)

## ♿ Accessibility

- Semantic HTML5 markup
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Proper heading hierarchy
- Alt text ready for images
- Minimum touch targets (44px)

## 📞 WhatsApp Integration Examples

```javascript
// Floating button
https://wa.me/212666342345?text=Bonjour...

// Product inquiry
https://wa.me/212666342345?text=Je%20suis%20intéressé%20par%20la%20Montre%20Classique%20Or

// Contact form
Redirects to WhatsApp with form data
```

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Customization Guide

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --color-primary: #D4AF37;
    --color-secondary: #1a1a1a;
    /* ... */
}
```

### Add Products
Add product cards in the Products section of `index.html`:
```html
<div class="product-card" data-aos="fade-up">
    <!-- Product content -->
</div>
```

### Update Contact Info
1. Change WhatsApp number in all links
2. Update address in About and Contact sections
3. Modify business hours

## 🎯 SEO Ready

- Meta description and keywords
- Semantic HTML structure
- Fast loading times
- Mobile-friendly (Google's priority)
- Proper heading hierarchy
- Alt text placeholders

## 📸 Screenshots

### Mobile View
![Mobile Hero](https://github.com/user-attachments/assets/92daa2a8-407a-4278-8022-92fa7dfbe66d)
![Mobile Brands](https://github.com/user-attachments/assets/fa1d4694-de86-42e1-a419-5c35fd7714af)
![Mobile Products](https://github.com/user-attachments/assets/ebfb31ca-31aa-419c-b4f6-b86265d7a255)

### Desktop View
![Desktop Hero](https://github.com/user-attachments/assets/86a3b720-b304-41a1-982c-785222760339)
![Desktop Brands & Categories](https://github.com/user-attachments/assets/22ccaf9e-4f4f-4690-88c3-820874a4a9c4)

## 🔄 Future Enhancements

- [ ] Add real product images
- [ ] Integrate Google Maps for location
- [ ] Add image gallery/lightbox
- [ ] Implement product filtering
- [ ] Add language toggle (French/Arabic)
- [ ] Backend integration for contact form
- [ ] Shopping cart functionality
- [ ] Payment integration
- [ ] Customer testimonials section
- [ ] Blog/News section

## 📞 Support

For questions or customization requests:
- WhatsApp: 0666342345
- Location: HJCG+883, Av. Ben Aboud, Tétouan

## 📄 License

© 2024 Exo Nueva Tec. All rights reserved.

---

**Built with ❤️ for luxury watch enthusiasts in Tétouan**
