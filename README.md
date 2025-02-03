<p id="logo" align="start">
  <img src="https://github.com/enkyuan/postmark/blob/main/apps/web/public/postmark.svg" width="256">
</>

# postmark

an open-sourced tool meant to help readers understand what they've more thoroughly. postmark serves to feed short-form content with spaced repetition to help readers retain thoughts, details, and important concepts
from an assortment of written pieces. it serves to index content, genenerating summaries, anki-style flashcards, and help readers store personal annotations to ensure maximum retention and immersion.

## Features

  > TODO

## Project Structure

The monorepo is organized as follows:

```
/apps
  /web (Next.js)
  /api (Express.js)

/packages
  /ui (shadcn component library with Tailwind CSS)
  /tsconfig (Shared configuration files such as Biome, Tailwind, and Turbopack)
  /types (Shared types)
  /ui (Shared UI components and styles)
  /utils (Shared util methods)
```

- **/apps/web**: Contains the Next.js application responsible for the frontend.
- **/apps/server**: Contains the Express.js application responsible for the backend.
- **/packages/tsconfig**: Contains shared configurations (e.g., Biome, Tailwind, Turbopack) to enforce consistency across the monorepo.
- **/packages/types**: Contains shared types (e.g. responses, api clients, etc).
- **/packages/ui**: Houses the shared UI components built with shadcn and Tailwind CSS.
- **/packages/utils**: Contains shared utils methods that will be used in multiple apps or packages.

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/enkyuan/postmark.git
   cd postmark
   ```

2. **Install Dependencies**

   Use `pnpm` package manager:

   ```bash
   pnpm install
   ```

3. **Run the Development Server**

   You can start both the web and server services with Turbopack's parallelism:

   ```bash
   pnpm dev
   ```

   - Frontend is served at `http://localhost:3000` (Next.js)
   - Backend is served at `http://localhost:3001` (Express.js)

4. **Build for Production**

   > TODO

## Tools and Technologies

- **Next.js**: Provides the frontend framework with server-side rendering, API routes, and static generation.
- **Express.js**: Handles the backend, including API endpoints and server logic.
- **Turbopack**: Ensures fast builds and optimal performance for monorepos.
- **Tailwind CSS**: Simplifies styling with a utility-first approach.
- **shadcn**: Offers pre-designed components for building clean and modern UIs.
- **Biome**: Enforces code standards by handling linting and formatting across the project.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions or improvements.
