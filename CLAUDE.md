# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture Overview

This is a Next.js 15 application built for the Bracket promotional site, featuring:

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with PostCSS
- **UI Components**: Radix UI primitives with custom components
- **Animation**: Motion (formerly Framer Motion)
- **Database**: Supabase for waitlist management
- **State Management**: React hooks and client-side state

### Project Structure
- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Main landing page with hero, features, waitlist, and countdown
  - `layout.tsx` - Root layout with metadata and global providers
- `components/` - React components
  - `ui/` - Reusable UI components (accordion, buttons, animations, etc.)
  - Feature-specific components (waitlist form, features section)
- `lib/` - Utility functions and configurations
  - `supabase.ts` - Supabase client initialization
  - `actions.ts` - Server actions for form handling
  - `animations.ts` - Motion animation variants

### Key Features
1. **Waitlist System**: Email collection integrated with Supabase
2. **Interactive Animations**: Grid patterns, logo carousel, and smooth transitions
3. **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
4. **Type Safety**: Strict TypeScript configuration with path aliases (`@/*`)

### Environment Variables
Required for Supabase integration:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Component Patterns
- Client components use `"use client"` directive
- Server actions in `lib/actions.ts` for form submissions
- Consistent use of Tailwind utility classes
- Motion animations with custom variants from `lib/animations.ts`