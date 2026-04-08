# Uniwind Pro Theme Switch Bug Reproduction

Minimal reproduction for [uni-stack/uniwind#490](https://github.com/uni-stack/uniwind/issues/490).

## Bug

When calling `Uniwind.setTheme()` on native (iOS + Android), most components do not visually update to the new theme. `ShadowRegistry.updateShadowTree()` only updates ~2 out of hundreds of shadow nodes due to a race condition with `requestIdleCallback`.

Web works correctly.

## Setup

Based on the [official uniwind-pro-demo](https://github.com/uni-stack/uniwind-pro-demo).

```bash
npm install
npx expo run:ios   # or run:android
```

## Steps to Reproduce

1. Run the app on iOS or Android (device or simulator)
2. Observe the light theme cards and text
3. Tap the "🌙 Dark" button at the bottom
4. **Expected:** All cards, backgrounds, and text colors update to dark theme
5. **Actual:** Most components retain light theme styles. Only the theme switcher buttons update (because they use `useUniwind()` which triggers a re-render)

## Environment

- `uniwind-pro`: 1.0.1
- `react-native`: 0.81.5
- `expo`: 54.0.33
- Platforms: iOS, Android
