# zOS App Template

A template for creating zOS applications with TypeScript, React, and full CI/CD.

## Features

- ⚡ **Quick Start** - Clone and deploy in minutes
- 📦 **TypeScript** - Full type support with declarations
- 🔧 **CI/CD** - GitHub Actions for build, test, and release
- 🏪 **App Store** - Automatic integration with zOS App Store
- 📄 **GitHub Pages** - Landing page ready to deploy

## Quick Start

### Option 1: Use GitHub Template

Click "Use this template" on GitHub or:

```bash
gh repo create my-app --template zos-apps/app-template
cd my-app
npm install
npm run dev
```

### Option 2: Clone and Fork

```bash
git clone https://github.com/zos-apps/app-template.git my-app
cd my-app
rm -rf .git
git init
npm install
npm run dev
```

## Configuration

### 1. Update package.json

Edit the `package.json` file to customize your app:

```json
{
  "name": "@zos-apps/my-app",
  "version": "1.0.0",
  "zos": {
    "id": "com.yourname.my-app",
    "name": "My App",
    "icon": "🎯",
    "category": "utilities",
    "description": "Your app description",
    "window": {
      "defaultSize": { "width": 800, "height": 600 },
      "resizable": true
    }
  }
}
```

### 2. App Categories

Available categories:
- `utilities` - Tools and utilities
- `productivity` - Work and productivity apps
- `games` - Games and entertainment
- `social` - Social and communication
- `media` - Music, video, photos
- `developer` - Developer tools
- `finance` - Finance and crypto
- `education` - Learning apps
- `lifestyle` - Health, weather, etc.

### 3. Window Options

```json
{
  "window": {
    "defaultSize": { "width": 800, "height": 600 },
    "minSize": { "width": 400, "height": 300 },
    "maxSize": { "width": 1200, "height": 800 },
    "resizable": true,
    "frame": true,
    "transparent": false
  }
}
```

## Development

```bash
# Install dependencies
npm install

# Start development (watches for changes)
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck

# Lint (if configured)
npm run lint
```

## Publishing

### 1. Set Up npm Token

Add `NPM_TOKEN` to your repository secrets:
1. Go to Settings → Secrets and variables → Actions
2. Add `NPM_TOKEN` with your npm access token

### 2. Create a Release

```bash
# Bump version
npm version patch  # or minor, major

# Push with tags
git push --follow-tags
```

The release workflow will automatically:
- Build the app
- Publish to npm
- Create a GitHub release
- Notify the App Store

## Project Structure

```
my-app/
├── .github/
│   └── workflows/
│       ├── ci.yml        # Build on push/PR
│       ├── release.yml   # Publish on tags
│       └── pages.yml     # Deploy landing page
├── docs/
│   ├── index.html        # Landing page
│   └── _config.yml       # Jekyll config
├── screenshots/
│   └── hero.png          # App screenshot
├── src/
│   └── index.tsx         # Main component
├── .gitignore
├── package.json
├── tsconfig.json
├── tsup.config.ts
└── README.md
```

## zOS Manifest Reference

Full manifest options in `package.json`:

```json
{
  "zos": {
    "id": "com.example.app",
    "name": "App Name",
    "icon": "🎯",
    "category": "utilities",
    "description": "Short description",
    "permissions": ["filesystem", "network"],
    "window": {
      "defaultSize": { "width": 800, "height": 600 },
      "minSize": { "width": 400, "height": 300 },
      "resizable": true
    },
    "about": "Longer about text",
    "help": ["Help item 1", "Help item 2"],
    "docs": "https://docs.example.com",
    "site": "https://example.com",
    "shortcuts": ["Cmd+S Save", "Cmd+N New"],
    "features": ["Feature 1", "Feature 2"],
    "screenshots": {
      "hero": "screenshots/hero.png",
      "images": ["screenshots/1.png"]
    },
    "downloads": {
      "web": "https://example.com"
    },
    "featured": false,
    "tags": ["tag1", "tag2"],
    "releaseDate": "2024-12-29",
    "support": "https://github.com/user/app/issues",
    "changelog": "https://github.com/user/app/releases"
  }
}
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT

---

Built with ❤️ for [zOS](https://github.com/zeekay/z-os4)
