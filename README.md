# Conner Pohl Instruction Website

Professional baseball instruction and training website for CPI Baseball, located in Troy, OH. This modern React application showcases baseball training services, testimonials, and provides an easy booking system for lessons.

## 🏗️ Built With

- **React 19** - Modern UI library with latest features
- **TypeScript** - Type safety and enhanced developer experience
- **Vite** - Fast build tool and development server
- **SCSS** - Enhanced CSS with variables and mixins
- **Framer Motion** - Smooth animations and transitions
- **GSAP** - Professional-grade animations
- **React Router** - Client-side routing

## 🚀 Getting Started

### Prerequisites

- Node.js v20 or higher (CI builds on Node 24)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/HaydenWestfall/conner-pohl-instruction.git
cd conner-pohl-instruction
```

2. Install dependencies:

```bash
npm install
```

3. Create environment variables:

```bash
cp .env.example .env
```

4. Fill in your environment variables in `.env`:

```bash
VITE_BOOKING_URL=your_booking_system_url
VITE_GOOGLE_MAPS_URL=your_google_maps_location
VITE_FACEBOOK_URL=your_facebook_page
VITE_INSTAGRAM_URL=your_instagram_page
VITE_TIKTOK_URL=your_tiktok_page
VITE_CONTACT_API_URL=your_contact_api_endpoint
```

5. Start the development server:

```bash
npm run start
```

The application will be available at `http://localhost:5173`

## 📝 Available Scripts

- `npm run start` - Start development server with development environment (uses .env.development)
- `npm run dev` - Start development server with default environment (uses .env)
- `npm run dev:prod` - Start development server with production environment
- `npm run build` - Build for production
- `npm run build:dev` - Build using development environment
- `npm run preview` - Preview production build locally
- `npm run typecheck` - Run the TypeScript compiler without emitting
- `npm run lint` - Run ESLint (warnings fail, matching CI)

## 🎯 Features

- **Responsive Design** - Fully responsive across all devices
- **Modern Animations** - Smooth scrolling and interactive elements
- **SEO Optimized** - Meta tags, sitemap, and structured data
- **Contact Forms** - Professional inquiry handling
- **Testimonials** - Dynamic customer review showcase
- **Service Packages** - Interactive lesson package displays
- **Legal Pages** - Privacy policy, terms, and cancellation policy

## 📁 Project Structure

```
src/
├── assets/        # Images and icons
├── components/    # Reusable UI primitives (CpiButton, CpiTag, IconButton)
├── config/        # Environment-backed URLs, read in one place
├── data/          # Static content (FAQs, testimonials)
├── hooks/         # Custom React hooks
├── pages/         # Page-level components, each with its own components/
├── routes/        # Route table (must stay in sync with src/seo/routes.ts)
├── seo/           # Route metadata, JSON-LD builders, runtime <head> sync
└── shared/        # Components shared across pages (Navbar, Footer, ...)

plugins/           # Build-time Vite plugin that prerenders per-route HTML
```

Directory names for component folders are PascalCase. This matters: the build
runs on a case-sensitive filesystem, so a wrong-case import resolves locally on
macOS and fails in CI.

## 🔧 Configuration

### Environment Files

The application supports multiple environment configurations:

- **`.env.development`** - Used by `npm run start` (development mode)
- **`.env`** - Used by `npm run dev` (default mode)
- **`.env.production`** - Used for production builds

### Environment Variables

The application uses several environment variables for external integrations:

- `VITE_BOOKING_URL` - External booking system URL
- `VITE_GOOGLE_MAPS_URL` - Google Maps location link
- `VITE_FACEBOOK_URL` - Facebook page URL
- `VITE_INSTAGRAM_URL` - Instagram profile URL
- `VITE_TIKTOK_URL` - TikTok profile URL
- `VITE_CONTACT_API_URL` - Contact form API endpoint

### Build Configuration

The project uses Vite with the following plugins:

- React SWC for fast refresh
- SVGR for SVG imports as React components (`import Icon from "./icon.svg?react"`)
- `plugins/seoStatic.ts` — writes one HTML file per route with its own title,
  description, canonical, and JSON-LD, plus `sitemap.xml` and `robots.txt`.
  Edit page metadata in `src/seo/routes.ts`, never in `index.html`.
- Bundle analyzer, which writes an untracked `stats.html`

## 🌐 Deployment

Deployment is automated. Pushing to `main` runs `.github/workflows/deploy.yml`,
which lints, builds, verifies the prerendered output, uploads to Hostinger over
FTPS, and tags the release using the `version` in `package.json`.

The `VITE_*` values come from repository **variables** (secrets are accepted as
a fallback). They are inlined into the client bundle, so treat them as public.

To build locally:

```bash
npm run build      # writes dist/, including per-route HTML, sitemap.xml, robots.txt
npm run preview    # serve the production build
```

`.htaccess` lives at the repo root rather than in `public/`, and the workflow
copies it into `dist/`. Without it Apache 404s every deep link.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💼 About CPI Baseball

Conner Pohl Instruction provides professional baseball training in Troy, OH, specializing in hitting, pitching, and fielding instruction for players of all skill levels. Led by experienced collegiate player Conner Pohl, our programs focus on skill development, confidence building, and competitive excellence.

## 📞 Contact

For questions about this website or CPI Baseball services, please visit our [contact page](https://connerpohlinstruction.com/contact) or reach out through our social media channels.
