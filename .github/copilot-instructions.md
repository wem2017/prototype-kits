# Copilot Instructions

## Project Overview

This is an Expo React Native app (SDK 55) using TypeScript. It targets iOS, Android, and web platforms.

## Development Commands

```bash
# Start development server
yarn start

# Platform-specific
yarn ios      # iOS simulator
yarn android  # Android emulator  
yarn web      # Web browser
```

## Architecture

- **Entry point**: `index.ts` registers the root component via Expo's `registerRootComponent`
- **Root component**: `App.tsx` - main application component
- **Configuration**: `app.json` contains Expo configuration (app name, icons, splash screens)

## Conventions

- Use React Native's `StyleSheet.create()` for component styles
- TypeScript strict mode is enabled
- Extends `expo/tsconfig.base` for TypeScript configuration
