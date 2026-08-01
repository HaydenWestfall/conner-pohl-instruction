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

- Node.js (v18 or higher)
- npm or yarn package manager

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
- `npm run lint` - Run ESLint for code quality checks
- `npm run lint` - Run ESLint for code quality checks

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
├── components/     # Reusable UI components
├── pages/         # Page-level components
├── hooks/         # Custom React hooks
├── models/        # TypeScript interfaces and types
├── routes/        # Application routing
├── shared/        # Shared components across pages
├── assets/        # Images, icons, and static files
└── utils/         # Utility functions
```

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
- SVGR for SVG imports as React components
- Bundle analyzer for build optimization

## 🌐 Deployment

1. Build the project:

```bash
npm run build
```

2. The `dist/` folder contains the production-ready files

3. Deploy to your preferred hosting platform (Vercel, Netlify, etc.)

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

For questions about this website or CPI Baseball services, please visit our [contact page](https://cpibaseball.com/contact) or reach out through our social media channels.
