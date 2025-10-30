# NordicHome - Scandinavian Furniture E-commerce

## Overview

NordicHome is a modern e-commerce website showcasing Scandinavian-inspired furniture. The application presents 30 high-quality furniture products across 6 categories (Living Room, Bedroom, Kitchen, Dining, Storage, Office) with a clean, minimalist design aesthetic. The site is built as a single-page application (SPA) with client-side routing and is configured for deployment to GitHub Pages with Google AdSense integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Stack:**
- **React 18.3.1** with TypeScript - Component-based UI framework providing the foundation
- **Vite** - Modern build tool chosen for fast development experience and optimized production builds
- **React Router** - Client-side routing with browser history API, using base path "/" for GitHub Pages compatibility

**UI Components:**
- **shadcn/ui** - Premium component library built on Radix UI primitives providing accessible, customizable components
- **Tailwind CSS** - Utility-first styling with custom design tokens defined in CSS variables
- **Design System:** HSL-based color scheme with Scandinavian aesthetic (blues, warm neutrals, accent yellows)

**State Management:**
- **React Context API** - CartContext manages shopping cart state with localStorage persistence
- **TanStack Query v5** - Client-side data fetching and caching (infrastructure in place but not actively used for data fetching currently)

**Key Architectural Decisions:**
- Chose SPA architecture for smooth navigation and modern user experience
- Selected Vite over Create React App for significantly faster build times and better developer experience
- Implemented Context API over Redux for simpler state management given the limited scope of client-side state
- Used localStorage for cart persistence to maintain user data across sessions without backend dependency

### Routing Structure

**Route Configuration:**
- `/` - Home page with hero, categories, and featured products
- `/products` - All products with category filtering
- `/product/:id` - Individual product detail pages
- `/categories/:category` - Category-specific product listings
- `/about` - Company information
- `/contact` - Contact form and information
- `/cart` - Shopping cart interface
- `*` - Catch-all 404 error page

**Static Site Deployment:**
- Build process copies `index.html` to `404.html` for GitHub Pages SPA routing support
- Base path configured for root-level deployment

### Data Architecture

**Product Data Structure:**
- Products stored in static TypeScript file (`src/data/products.ts`)
- Each product includes: id, name, price, image URL, category, description, features, dimensions, material, care instructions, stock status
- 30 products total (5 per category)
- Images sourced from Unsplash CDN

**Helper Functions:**
- `getProductById()` - Retrieve single product by ID
- `getProductsByCategory()` - Filter products by category slug
- Product data is imported directly rather than fetched from API

**Design Rationale:**
- Static data chosen for simplicity and GitHub Pages deployment compatibility
- No backend database required, reducing hosting complexity
- Product data can be updated by modifying TypeScript file and redeploying

### Shopping Cart System

**Implementation:**
- Context Provider pattern for global cart access
- Cart operations: add, remove, update quantity, clear
- Automatic localStorage synchronization on every cart change
- Cart count and total calculations derived from state

**Features:**
- Toast notifications for user feedback on cart actions
- Empty cart state handling with call-to-action
- Persistent across page refreshes via localStorage

## External Dependencies

### UI Libraries
- **@radix-ui/* packages** - Headless UI primitives (accordion, dialog, dropdown, popover, tabs, toast, etc.)
- **lucide-react** - Icon library for consistent iconography
- **class-variance-authority** - Type-safe variant styling
- **tailwind-merge & clsx** - Utility class merging and conditional classes
- **cmdk** - Command menu component
- **embla-carousel-react** - Carousel/slider functionality
- **date-fns** - Date manipulation utilities
- **react-day-picker** - Calendar/date picker component
- **next-themes** - Theme management (infrastructure for dark mode)

### Form Handling
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Validation resolver integration
- **input-otp** - OTP/PIN input component

### Build Tools
- **TypeScript** - Type safety and developer experience
- **ESLint** - Code linting with TypeScript configuration
- **PostCSS & Autoprefixer** - CSS processing

### Monetization
- **Google AdSense** - Ad integration (client ID: ca-pub-4993815939826483)
- Configured in `index.html` and `public/ads.txt`

### Deployment
- **GitHub Actions** - Automated deployment workflow (configuration expected in `.github/workflows/`)
- **GitHub Pages** - Static site hosting
- SEO meta tags configured for social media sharing

### Development Tools
- **Lovable Component Tagger** - Development-only plugin for component identification
- **Vite SWC Plugin** - Fast React refresh and transpilation