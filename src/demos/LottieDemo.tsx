/**
 * File: LottieDemo.tsx
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
import LottieView from 'lottie-react-native';

// AI-GENERATED START: LottieDemo component
const SAMPLE_ANIMATION =
  'https://lottie.host/cd9537b6-35a8-46ae-9e85-9da08281bcc5/N3TseNnwMb.lottie';

const LottieDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Lottie Demo' });
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
        {/* Auto Play + Loop */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
            alignItems: 'center',
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Auto Play + Loop
          </Text>
          <LottieView
            source={{ uri: SAMPLE_ANIMATION }}
            autoPlay
            loop
            style={{ width: 200, height: 200 }}
          />
        </View>

        {/* Slow Speed */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
            alignItems: 'center',
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Slow Speed (0.5x)
          </Text>
          <LottieView
            source={{ uri: SAMPLE_ANIMATION }}
            autoPlay
            loop
            speed={0.5}
            style={{ width: 150, height: 150 }}
          />
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: LottieDemo component

export default LottieDemo;
