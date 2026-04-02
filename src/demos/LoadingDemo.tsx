/**
 * File: LoadingDemo.tsx
 * Created At: 2026-04-02 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import {
  Skeleton,
  Loader,
  Screen,
  ScreenRef,
  Text,
  Colors,
  Spacing,
  NavigationScreenProps,
} from '@momo-kits/foundation';

// AI-GENERATED START: LoadingDemo component
const LoadingDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Loading Demo' });
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
        {/* Skeleton */}
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Skeleton
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: Spacing.S,
            }}
          >
            <Skeleton
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
              }}
            />
            <View style={{ gap: Spacing.XS }}>
              <Skeleton
                style={{
                  width: 200,
                  height: 16,
                  borderRadius: 4,
                }}
              />
              <Skeleton
                style={{
                  width: 140,
                  height: 16,
                  borderRadius: 4,
                }}
              />
            </View>
          </View>
          <Skeleton
            style={{
              width: '100%',
              height: 100,
              borderRadius: 8,
            }}
          />
        </View>

        {/* Loader */}
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Loader
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: Spacing.L,
            }}
          >
            <View style={{ alignItems: 'center', gap: Spacing.XS }}>
              <Loader type="spinner" />
              <Text typography="body_s_regular" color={Colors.black_07}>
                Spinner
              </Text>
            </View>
            <View style={{ alignItems: 'center', gap: Spacing.XS }}>
              <Loader type="dot" />
              <Text typography="body_s_regular" color={Colors.black_07}>
                Dot
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: LoadingDemo component

export default LoadingDemo;
