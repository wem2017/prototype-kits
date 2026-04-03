/**
 * File: react-native-webview.web.tsx
 * Created At: 2026-04-03 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// AI-GENERATED START: web stub for react-native-webview
const WebView = React.forwardRef<View, any>(
  ({ style, source, ...props }, ref) => (
    <View ref={ref} style={[styles.container, style]} {...props}>
      <Text style={styles.text}>WebView (native only)</Text>
      {source?.uri && (
        <Text style={styles.uri} numberOfLines={1}>
          {source.uri}
        </Text>
      )}
    </View>
  ),
);

WebView.displayName = 'WebView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  text: {
    color: '#999',
    fontSize: 14,
  },
  uri: {
    color: '#666',
    fontSize: 11,
    marginTop: 4,
  },
});

export { WebView };
export default WebView;
// AI-GENERATED END: web stub for react-native-webview
