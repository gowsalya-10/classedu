# Decisions Log

This document records architectural and technical decisions made during development.

## Entry Template

```
## [Date] - [Decision Title]

**Context**: [Brief description of the situation or problem]

**Decision**: [What was decided]

**Rationale**: [Why this decision was made]

**Alternatives Considered**: [Other options that were evaluated]
```

## Decisions

### 2026-11-22 - Day 1 Foundation Setup

**Context**: Initial project setup with Next.js, testing tools, and development environment.

**Decision**:
- Used Next.js 16 with App Router and TypeScript strict mode
- Selected Tailwind CSS v4 (latest) instead of v3
- Chose shadcn/ui with Base UI variant (default recommendation)
- Set up Vitest for unit tests and Playwright for E2E tests
- Used npm instead of pnpm (pnpm not available in environment)
- Installed dependencies with --legacy-peer-deps flag due to Babel version conflicts with shadcn registry
- Created simple SVG icon placeholder instead of PNG icons for PWA
- Implemented minimal service worker with pass-through behavior (to be enhanced later)

**Rationale**:
- Next.js 16 is the latest stable version with improved performance
- Tailwind v4 offers better performance and simpler configuration
- Base UI is shadcn's recommended default for new projects
- Vitest provides fast unit testing with Vite integration
- Playwright is reliable for cross-browser E2E testing
- Legacy peer deps flag was necessary to resolve dependency conflicts with the current shadcn setup
- SVG icons are simpler for initial setup and can be replaced with proper icons later
- Minimal service worker satisfies PWA requirements while deferring complex caching logic

**Alternatives Considered**:
- Tailwind v3: More mature but v4 is the future
- Radix UI or React Aria for shadcn: Base UI was recommended as default
- Jest instead of Vitest: Vitest is faster and better integrated with Vite
- Cypress instead of Playwright: Playwright has better cross-browser support out of the box
