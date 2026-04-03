/**
 * File: WebviewDemo.tsx
 * Created At: 2026-04-03 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import {
  Screen,
  ScreenRef,
  Text,
  Colors,
  Spacing,
  NavigationScreenProps,
} from '@momo-kits/foundation';
import { WebView } from 'react-native-webview';

// AI-GENERATED START: WebviewDemo component
const WebviewDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Webview Demo' });
  }, []);

  return (
    <Screen
      ref={screenRef}
      navigation={navigation}
      scrollable={false}
      useGridLayout={false}
      backgroundColor={Colors.black_02}
    >
      <View style={{ flex: 1, padding: Spacing.M, gap: Spacing.M }}>
        <Text typography="header_s_semibold" color={Colors.black_11}>
          WebView
        </Text>
        <View
          style={{
            flex: 1,
            borderRadius: 12,
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: Colors.black_03,
          }}
        >
          <WebView
            source={{ uri: 'https://momo.vn' }}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: WebviewDemo component

export default WebviewDemo;
