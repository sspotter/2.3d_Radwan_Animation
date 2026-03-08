# Gemini Context for /mnt/e/codinnnn/3d_Radwan_Animation

This document provides context for the current project, which is a Next.js application.

## Project Overview

*   **Type:** Web application built with Next.js (version 16.1.6).
*   **Framework:** React (version 19.2.3) with Next.js.
*   **Styling:** Tailwind CSS is used for styling, along with utility libraries like `clsx` and `tailwind-merge`.
*   **UI Components:** Integrates `lucide-react` for icons and `framer-motion` for animations, suggesting a focus on dynamic and visually rich user interfaces.
*   **TypeScript:** The project utilizes TypeScript for type safety.
*   **Potential Purpose:** The project name (`3d_Radwan_Animation`) and the presence of sequence image files in `public/sequence/` suggest a focus on 3D animation, image generation, or visual content creation, possibly driven by prompts. The `ProjectPrompts/` directory further supports this.
*   **Optimization:** Includes `babel-plugin-react-compiler` for potential performance enhancements.

## Building and Running

The following commands can be used to manage the project:

*   **Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```
    Opens the application at `http://localhost:3000`.

*   **Build for Production:**
    ```bash
    npm run build
    # or
    yarn build
    # or
    pnpm build
    # or
    bun build
    ```
    Prepares the application for deployment.

*   **Start Production Server:**
    ```bash
    npm run start
    # or
    yarn start
    # or
    pnpm start
    # or
    bun start
    ```
    Runs the built application.

*   **Linting:**
    ```bash
    npm run lint
    # or
    yarn lint
    # or
    pnpm lint
    # or
    bun lint
    ```
    Checks for code quality issues using ESLint.

## Development Conventions

*   **Project Structure:** Follows the standard Next.js App Router convention (inferred from common Next.js setups and the presence of `app/` directory).
*   **Code Quality:** Adheres to TypeScript typing and ESLint rules for maintainability and consistency.
*   **Styling:** Utilizes Tailwind CSS for utility-first styling.
*   **Dependencies:** Leverages modern React features and libraries for UI/UX development.
*   **File Naming:** `GEMINI.md` is used for project context. `*.md` files in `ProjectPrompts/` likely contain specific prompts or instructions for generative tasks.

## Key Directories and Files

*   `src/app/`: Contains the main application routing and UI components.
*   `src/components/`: Houses reusable React components.
*   `public/`: Static assets, including `sequence/` which contains numerous image files (likely frames of an animation or generated images).
*   `ProjectPrompts/`: Contains markdown files detailing prompts for generative AI tasks.
*   `next.config.ts`: Next.js configuration file.
*   `tsconfig.json`: TypeScript configuration.
*   `package.json`: Project dependencies and scripts.
*   `.gitignore`: Specifies files and directories to be ignored by Git.

This context will be used to provide more tailored and effective assistance.
