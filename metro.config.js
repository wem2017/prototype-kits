/**
 * File: metro.config.js
 * Created At: 2026-04-03 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

// AI-GENERATED START: metro config with web aliases
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

const webAliases = {
  'react-native-maps': path.resolve(
    __dirname,
    'src/adapters/react-native-maps.web.tsx',
  ),
  'react-native-video': path.resolve(
    __dirname,
    'src/adapters/react-native-video.web.tsx',
  ),
  'react-native-webview': path.resolve(
    __dirname,
    'src/adapters/react-native-webview.web.tsx',
  ),
  'lottie-react-native': path.resolve(
    __dirname,
    'src/adapters/lottie-react-native.web.tsx',
  ),
};

const originalResolveRequest = config.resolver.resolveRequest;

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (platform === 'web' && webAliases[moduleName]) {
    return {
      filePath: webAliases[moduleName],
      type: 'sourceFile',
    };
  }
  if (originalResolveRequest) {
    return originalResolveRequest(context, moduleName, platform);
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
// AI-GENERATED END: metro config with web aliases
