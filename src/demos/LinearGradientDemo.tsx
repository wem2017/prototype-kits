/**
 * File: LinearGradientDemo.tsx
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
import { LinearGradient } from 'expo-linear-gradient';

// AI-GENERATED START: LinearGradientDemo component
const LinearGradientDemo: React.FC<NavigationScreenProps> = ({
  navigation,
}) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'LinearGradient Demo' });
  }, []);

  return (
    <Screen
      ref={screenRef}
      navigation={navigation}
      scrollable
      useGridLayout={false}
      backgroundColor={Colors.black_02}
    >
      <View style={{ padding: Spacing.M, gap: Spacing.L }}>
        {/* Horizontal */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Horizontal Gradient
          </Text>
          <LinearGradient
            colors={[Colors.pink_06, Colors.violet_06]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              height: 80,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text typography="body_default_semibold" color={Colors.white}>
              Pink → Violet
            </Text>
          </LinearGradient>
        </View>

        {/* Vertical */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Vertical Gradient
          </Text>
          <LinearGradient
            colors={[Colors.blue_06, Colors.mint_06]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
              height: 120,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text typography="body_default_semibold" color={Colors.white}>
              Blue → Mint
            </Text>
          </LinearGradient>
        </View>

        {/* Diagonal Multi-color */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Diagonal Multi-color
          </Text>
          <LinearGradient
            colors={[
              Colors.pink_06,
              Colors.violet_06,
              Colors.blue_06,
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              height: 120,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text typography="body_default_semibold" color={Colors.white}>
              Pink → Violet → Blue
            </Text>
          </LinearGradient>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: LinearGradientDemo component

export default LinearGradientDemo;
