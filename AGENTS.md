# Agent Guidelines

This document provides rules for coding agents working on this project.

## Core Principles

1. **Read the docs first**: Before making changes, read relevant documentation including this file, PROJECT_BRIEF.md, DECISIONS.md, and PROGRESS.md.

2. **Keep scope small**: Focus on the specific task at hand. Don't add features or refactor beyond what's requested.

3. **Run checks**: After making changes, run `npm run lint`, `npm run typecheck`, and `npm run test` to ensure code quality.

4. **Update PROGRESS.md**: Log completed work in docs/PROGRESS.md with the current date and a brief description.

5. **Follow conventions**: Use existing patterns in the codebase. Check similar files before creating new ones.

6. **No secrets**: Never commit real API keys, tokens, or secrets. Use .env.example as a template only.

## Daily Session Context

This project is built in 13 daily sessions. Check PROGRESS.md to understand what has been completed and what's next.

## Testing

- Unit tests go in `src/test/` and use Vitest
- E2E tests go in `e2e/` and use Playwright
- Always test new features and critical paths
