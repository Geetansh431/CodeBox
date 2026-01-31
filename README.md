# CodeBox

An interactive online learning platform designed to help users master programming through structured courses, hands-on coding exercises, and progress tracking.

<img width="1487" height="939" alt="image" src="https://github.com/user-attachments/assets/8576810e-4a75-4454-9009-134b9754a0da" />


## About

CodeBox is a modern web application that provides a comprehensive learning experience for programming enthusiasts. Users can enroll in curated courses, work through chapters with practical exercises, write and test code directly in the browser, and track their learning progress with streak counting. The platform includes both free and premium content, with integrated payment processing for course access.

## Features

- **User Authentication**: Secure sign-up and sign-in with Clerk
- **Course Enrollment**: Browse and enroll in multiple programming courses
- **Structured Learning**: Navigate through courses organized by chapters and exercises
- **Interactive Code Editor**: Write and execute code directly in the browser using CodeSandbox Sandpack
- **Progress Tracking**: Monitor learning progress with visual indicators and streak counting
- **Responsive Dashboard**: View enrolled courses, explore new content, and manage account settings
- **Community Support**: Access help sections for community-based learning support
- **Premium Content**: Upgrade to access pro courses and features
- **Referral System**: Invite friends and build your learning community
- **Payment Integration**: Secure payments with Razorpay for course upgrades
- **User Streaks**: Maintain consistency with daily learning streak tracking

## Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org) with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Code Editor**: CodeSandbox Sandpack
- **Charts**: Recharts
- **Animations**: Embla Carousel, Vaul

### Backend & Database
- **Database**: Drizzle ORM with Neon (serverless PostgreSQL)
- **Authentication**: Clerk
- **Payments**: Razorpay

### Development Tools
- **Package Manager**: npm
- **Code Quality**: Prettier, Husky, Lint-staged
- **Build Tool**: TypeScript, tsx
- **Testing**: Jest (configured via TypeScript)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd codebox
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables by creating a `.env` file with required configurations for Clerk, Neon database, and Razorpay.

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

- `app/` - Next.js app directory with routes and components
  - `(auth)/` - Authentication pages (sign-in, sign-up)
  - `(routes)/` - Main application routes
    - `dashboard/` - User dashboard
    - `courses/` - Course listing and course detail pages
    - `pricing/` - Upgrade and pricing information
- `components/` - Reusable UI components
- `context/` - React Context for state management
- `config/` - Configuration files
- `drizzle/` - Database schema and migrations
