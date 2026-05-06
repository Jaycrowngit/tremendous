# Tremendous Voices Music Ministry Website

A beautiful, modern website for the Tremendous Voices Music Ministry built with React, Framer Motion, and Tailwind CSS.

##  Design System

### Colors
- **Navy**: #002147 (Primary)
- **Gold**: #D4AF37 / #FFD700 (Accent)
- **Cream**: #FDFCF0 (Background)
- **Tan**: #C5A059 (Secondary Accent)

### Typography
- **Headers**: Playfair Display (serif)
- **Body**: Montserrat (sans-serif)

##  Features

### 1. **Hero Section**
- Full-viewport height with subtle zoom animation
- Navy overlay for text readability
- Responsive design with animated scroll indicator

### 2. **Navigation**
- Sticky header with logo
- Desktop and mobile-responsive menu
- Smooth scroll navigation links

### 3. **About & Vision/Mission**
- Side-by-side elegant cards
- Gold borders and hover effects
- Scriptural integration

### 4. **Meet Our Leaders**
- Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- Image portraits with gradient overlays
- Hover effects revealing scripture

### 5. **Upcoming Programs**
- Flyer display with image
- Interactive volunteer registration form
- Smooth form animation with Framer Motion
- Form validation and success feedback

### 6. **Gallery**
- Masonry grid layout
- Lightbox integration
- Hover effects with category labels

### 7. **Contact & Footer**
- Contact information section
- Social media links
- Responsive design
- Scriptural closing message

##  Project Structure

```
tremendous/
├── image/
│   ├── logo.png              # Ministry logo
│   └── upcoming.jpeg         # Program flyer
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation component
│   │   ├── Hero.jsx          # Hero section
│   │   ├── AboutVision.jsx   # Vision/Mission cards
│   │   ├── LeadersSection.jsx # Leaders grid
│   │   ├── ProgramsSection.jsx # Programs with form
│   │   ├── GallerySection.jsx # Photo gallery
│   │   └── ContactSection.jsx # Contact/footer
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Dependencies
└── .gitignore               # Git ignore file
```

##  Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The site will open at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## 🎬 Animations

The site uses **Framer Motion** for smooth, spiritual animations:
- Reveal on scroll effects
- Hover animations on cards
- Smooth form transitions
- Staggered container animations
- Image zoom and scale effects

## 📱 Responsive Design

All components are fully responsive:
- **Mobile**: Single column layouts, optimized touch targets
- **Tablet**: 2-column grids, enhanced spacing
- **Desktop**: Full multi-column layouts with hover effects

## 🔧 Customization

### Update Contact Information
Edit [ContactSection.jsx](src/components/ContactSection.jsx#L1) to update:
- Email address
- Phone number
- Location
- Social media links

### Update Leaders
Edit [LeadersSection.jsx](src/components/LeadersSection.jsx#L1) to modify:
- Leader names and roles
- Images
- Scripture quotes

### Update Programs
Edit [ProgramsSection.jsx](src/components/ProgramsSection.jsx#L1) to change:
- Form fields and departments
- Flyer image
- Program description

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

##  Scripture Integration

The site includes scriptural verses throughout:
- Hero: Psalm 104:33
- About: Psalm 96:1
- Leaders: Psalm 78:70-71
- Programs: Psalm 47:7
- Contact: Psalm 96:2

##  License

All content and design are proprietary to Tremendous Voices Music Ministry.

## Support

For updates or modifications, contact the development team.

---

**Built with** **using React, Framer Motion, and Tailwind CSS**
