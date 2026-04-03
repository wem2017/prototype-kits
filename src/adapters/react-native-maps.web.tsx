/**
 * File: react-native-maps.web.tsx
 * Created At: 2026-04-03 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// AI-GENERATED START: web stub for react-native-maps
const MapView = React.forwardRef<View, any>(
  ({ style, children, ...props }, ref) => (
    <View ref={ref} style={[styles.container, style]} {...props}>
      <Text style={styles.text}>MapView (native only)</Text>
      {children}
    </View>
  ),
);

MapView.displayName = 'MapView';

const Marker = (_props: any) => null;
const Callout = (_props: any) => null;
const Polyline = (_props: any) => null;
const Polygon = (_props: any) => null;
const Circle = (_props: any) => null;

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
});

export default MapView;
export { Marker, Callout, Polyline, Polygon, Circle };
// AI-GENERATED END: web stub for react-native-maps
