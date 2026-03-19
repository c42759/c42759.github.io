# Developer CV / Portfolio

A modern, responsive Developer Curriculum Vitae (CV) and Portfolio built with [Next.js](https://nextjs.org/) and React. The project is designed to be statically exported and easily deployed to GitHub Pages.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static Export)
- **UI/Components**: React 19, [Tailwind CSS v4](https://tailwindcss.com/)
- **Content Rendering**: `react-markdown`, `remark-gfm`, `react-syntax-highlighter`
- **Package Manager**: [pnpm](https://pnpm.io/)
- **CI/CD**: GitHub Actions (GitHub Pages deployment)
- **Containerization**: Docker & Docker Compose

## 📁 Project Structure

- `frontend/`: Contains the Next.js application, source code, and assets.
  - `app/`: Next.js App Router pages and layouts.
  - `components/`: Reusable React components.
  - `data/`: Content and data for the CV/Portfolio.
- `.github/workflows/main.yml`: CI/CD pipeline that builds and deploys the project to GitHub Pages automatically on push.
- `docker-compose.yml`: Local Docker development environment setup.

## 🛠️ Local Development

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v22.x recommended) and `pnpm` installed, or [Docker](https://www.docker.com/) and Docker Compose.

### Using Docker (Recommended)

You can spin up the development environment quickly using Docker Compose. Hot-reloading is fully supported as the source directory is mounted as a volume.

```bash
# Build and start the development container
docker-compose up --build
```

The application will be accessible at [http://localhost:3001](http://localhost:3001).

### Using PNPM Locally

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm run dev
   ```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

## 📦 Build & Deployment

The application is configured for a **Static HTML Export** (`output: 'export'` in `next.config.mjs`), which generates optimized static assets into the `frontend/build/` directory.

### Manual Build

```bash
cd frontend
pnpm install
pnpm run build
```

### Automated CI/CD (GitHub Pages)

This project uses GitHub Actions to automatically deploy to GitHub Pages. Whenever you push to the `main` branch, the `.github/workflows/main.yml` workflow will:
1. Setup Node.js and PNPM.
2. Install dependencies and build the static export (`pnpm run build`).
3. Upload the `frontend/build/` directory as an artifact and deploy it directly to GitHub Pages environments.

## 📝 Scripts

Available tasks in `frontend/package.json`:

- `pnpm dev`: Runs the Next.js development server with Turbopack.
- `pnpm build`: Builds the project for production as a static export.
- `pnpm start`: Starts a Next.js production server (Not typically used here, as it's a static export).
- `pnpm static`: Custom build pipeline that exports the site, moves it to `../docs`, and runs the underscore replacement scripts for standard GitHub Pages compatibility.
- `pnpm lint`: Runs ESLint to find and fix problems in the code.
