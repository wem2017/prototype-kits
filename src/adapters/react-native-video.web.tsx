/**
 * File: react-native-video.web.tsx
 * Created At: 2026-04-03 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// AI-GENERATED START: web stub for react-native-video
const Video = React.forwardRef<View, any>(
  ({ style, source, ...props }, ref) => (
    <View ref={ref} style={[styles.container, style]} {...props}>
      <Text style={styles.text}>Video (native only)</Text>
      {source?.uri && (
        <Text style={styles.uri} numberOfLines={1}>
          {source.uri}
        </Text>
      )}
    </View>
  ),
);

Video.displayName = 'Video';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
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
    paddingHorizontal: 16,
  },
});

export default Video;
// AI-GENERATED END: web stub for react-native-video
