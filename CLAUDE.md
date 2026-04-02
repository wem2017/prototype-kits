# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Expo-managed React Native prototype app for demoing and exploring `@momo-kits` design system components. Runs on iOS, Android, and Web. No backend, no API calls, no global state management — purely local React state with `useState`/`useRef`.

## Commands

```bash
npm start          # Start Expo dev server (Metro bundler)
npm run ios        # Start on iOS simulator
npm run android    # Start on Android emulator
npm run web        # Start web dev server
```

No test or lint scripts are configured.

## Architecture

- **Entry:** `index.ts` → `App.tsx` → `src/Welcome.tsx` (single-screen app)
- **Navigation:** `@momo-kits/foundation`'s `NavigationContainer` wraps `@react-navigation/stack`. Configured in `App.tsx` with theme + localization. Supports stack, dialog, and modal screen types.
- **Localization:** Bilingual vi/en via `Localize` from `@momo-kits/foundation`, fed from `localization/language.json`.
- **Web preview:** `IPhoneBezel.tsx` provides a HOC for rendering inside an iPhone 14 frame on web (currently not active in `index.ts`).

## @momo-kits Design System

All UI is built on the internal `@momo-kits` component library. Key imports from `@momo-kits/foundation`:

- **`Screen`** — layout wrapper with scroll, safe-area, and header binding via `screenRef.current?.setOptions()`
- **`Text`** — typography via `typography` prop (e.g. `"header_default_bold"`, `"description_default_regular"`)
- **`Colors`** — semantic palette (e.g. `Colors.black_01`, `Colors.pink_MoMo_Branding`)
- **`Spacing`** — tokens (`Spacing.S`, `Spacing.M`, `Spacing.L`)
- **`Icon`** — string-based icon names (e.g. `"24_basic_home"`)
- **`NavigationContainer`** — themed navigation wrapper
- **Theme:** `defaultTheme` from `@momo-kits/foundation/Consts` with semantic tokens (primary, background, text, border, success/warning/error)

Additional kits: `@momo-kits/tab-view`, `@momo-kits/carousel`, `@momo-kits/calendar`, `@momo-kits/avatar`, `@momo-kits/chip`, `@momo-kits/slider`, `@momo-kits/stepper`, `@momo-kits/collapse`, `@momo-kits/swipe`, `@momo-kits/uploader`, and others.

## Screen Header Pattern

```tsx
const screenRef = useRef<ScreenRef>(null);
useEffect(() => {
  screenRef.current?.setOptions({
    hiddenBack: true,
    headerTitle: 'Title',
    headerRight: { useShortcut: false, useMore: false, tools: [] },
  });
}, []);
return <Screen ref={screenRef} navigation={navigation} scrollable>...</Screen>;
```

## Path Aliases (tsconfig.json)

- `@/*` → `./`
- `@components` → `./src/components`
- `@assets` → `./src/assets`
- `@configs` → `./src/configs`
