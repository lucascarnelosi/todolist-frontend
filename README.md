# ToDo List — React + TypeScript + Vite

Professional, minimal starter for a TypeScript React app using Vite.

This repository implements a small ToDo application built with React, TypeScript and Vite. It includes a lightweight project structure, context-based state management, and utilities to authenticate users and manage tasks.

## Key Points

- **Framework:** React
- **Language:** TypeScript
- **Bundler / Dev Server:** Vite (with HMR)
- **Opinionated:** ESLint + Type-aware linting (optional)

## Features

- Create, view and manage tasks
- Authentication scaffolding (login, create user, token refresh)
- Context-based state management (`AuthContext`, `TaskContext`)
- Small, testable component set and hooks

## Quick Start

Prerequisites: Node.js 16+ (or current LTS), and a package manager (npm, pnpm or yarn).

1. Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn
```

2. Start the dev server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

3. Build for production

```bash
npm run build
# or
pnpm build
# or
yarn build
```

4. Preview the production build locally

```bash
npm run preview
# or
pnpm preview
# or
yarn preview
```

Note: The exact `scripts` in `package.json` may vary; use the commands above as the common Vite conventions.

## Project Structure

Top-level important files and folders:

- `index.html` — App entry HTML
- `package.json` — Scripts and dependencies
- `tsconfig.*.json` — TypeScript configuration
- `vite.config.ts` — Vite configuration
- `src/` — Application source code
  - `main.tsx` — React entry
  - `App.tsx` — Root component and routes
  - `components/` — Reusable UI components (Task, TaskInput, TaskHeader, TaskStats)
  - `context/` — `AuthContext`, `TaskContext` and providers
  - `hooks/` — Custom hooks (`useAuth`, `useTasks`)
  - `pages/` — Route pages (`Login`, `CreateUser`, `Tasks`)
  - `routes/` — Route definitions and `PrivateRoute`
  - `services/` — API clients and auth helpers
  - `types/` — Shared TypeScript types
  - `utils/` — Small utilities

This structure keeps components, state, and services separated for clarity and testability.

## ESLint / Formatting

This template includes ESLint and can be extended with type-aware rules. For a production app consider enabling the TypeScript-aware recommended configs and the React-specific plugins.

Example (local development):

```bash
# Run eslint across the project (if available in package.json)
npm run lint
```

## Environment & Backend

This project expects an API backend for authentication and tasks. Check `src/services` for the client and token refresh flow. Configure environment variables or adjust the API base URL in `services/api.ts` as needed.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository
2. Create a feature branch
3. Run linting/tests locally
4. Open a Pull Request describing your changes

Be sure to keep changes small and focused.

## Acknowledgements

This project uses Vite and React. The structure follows common best practices for small-to-medium React apps.