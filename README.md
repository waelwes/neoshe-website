# NEOSHÉ - Luxury Organic Skincare Website

A modern, minimalist website for NEOSHÉ, a luxury organic skincare brand. Built with React, TailwindCSS, and Framer Motion for smooth animations.

## Features

- **Modern Design**: Clean, minimalist layout with luxury aesthetics
- **Brand Colors**: Custom NEOSHÉ color palette (#275c54)
- **Responsive**: Optimized for desktop and mobile devices
- **Smooth Animations**: Framer Motion for elegant fade-in effects
- **Product Showcase**: Beautiful product cards with hover effects
- **3-Step Routine**: Interactive routine explanation
- **Premium Typography**: Montserrat font for elegant text

## Tech Stack

- React 18
- TailwindCSS 3.3
- Framer Motion 10.16
- PostCSS & Autoprefixer

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Hero.js          # Hero section with brand name and tagline
│   ├── Products.js      # Product showcase with 3 skincare products
│   ├── About.js         # About section with brand philosophy
│   ├── Routine.js       # 3-step skincare routine explanation
│   ├── CTA.js           # Call-to-action banner
│   └── Footer.js        # Footer with social links and info
├── App.js               # Main app component
├── index.js             # React entry point
└── index.css            # Global styles and Tailwind imports
```

## Brand Identity

- **Primary Color**: #275c54 (NEOSHÉ Green)
- **Typography**: Montserrat (Light, Regular, Medium, SemiBold)
- **Style**: Minimalist, elegant, modern, clean
- **Target**: Luxury organic skincare for modern women

## Sections

1. **Hero**: Brand name and tagline with CTA
2. **Products**: 3 signature skincare products
3. **About**: Brand philosophy and values
4. **Routine**: 3-step skincare routine guide
5. **CTA**: Call-to-action for shopping
6. **Footer**: Social links and company information

## Customization

The website is fully customizable through:
- TailwindCSS classes for styling
- Framer Motion for animations
- Component props for content updates
- Color scheme in `tailwind.config.js`

## Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.
