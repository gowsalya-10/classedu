# ClassEdu

A class coordination web app (installable PWA) for college classes with three roles: Staff, Representative, and Student.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4 and shadcn/ui
- **Hosting**: Vercel
- **Backend**: Supabase (Postgres with Row Level Security, Auth, Realtime)
- **Email**: Resend
- **Testing**: Vitest (unit tests), Playwright (E2E tests)

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gowsalya-10/classedu.git
cd classedu
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Create a `.env.local` file based on `.env.example` and fill in your environment variables (see `.env.example` for required variables).

### Running the App

Development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run test` - Run unit tests with Vitest
- `npm run test:e2e` - Run E2E tests with Playwright

## Project Structure

- `src/app/` - Next.js App Router pages
- `src/components/` - Reusable React components
- `src/lib/` - Utility functions and configurations
- `src/test/` - Unit tests
- `e2e/` - E2E tests
- `docs/` - Project documentation

## Documentation

- [AGENTS.md](./AGENTS.md) - Guidelines for coding agents
- [docs/PROJECT_BRIEF.md](./docs/PROJECT_BRIEF.md) - Project overview and scope
- [docs/DECISIONS.md](./docs/DECISIONS.md) - Architectural decisions log
- [docs/PROGRESS.md](./docs/PROGRESS.md) - Daily progress through the 13-day build plan

## Build Plan

This project is built in 13 daily sessions:

1. Day 1: Foundation ✓
2. Day 2: Sign-in and roles
3. Day 3: Database and access rules
4. Day 4: Announcements
5. Day 5: Resources and links
6. Day 6: Calendar
7. Day 7: Notifications part 1
8. Day 8: Notifications part 2
9. Day 9: Seen, nudges and suggestions
10. Day 10: Messaging
11. Day 11: Moderation and audit
12. Day 12: Admin and polish
13. Day 13: Hardening and launch

## Contributing

This project follows the guidelines in [AGENTS.md](./AGENTS.md). Please read it before making changes.

## License

[Add your license here]
