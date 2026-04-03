/**
 * File: LogoDemo.tsx
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
  Image,
  Colors,
  Spacing,
  Icon,
  NavigationScreenProps,
} from '@momo-kits/foundation';

// AI-GENERATED START: LogoDemo component
const LogoDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Logo Demo' });
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
        {/* Logo Sizes */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.M,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Logo Sizes
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: Spacing.L,
            }}
          >
            <View style={{ alignItems: 'center', gap: Spacing.XS }}>
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  backgroundColor: Colors.pink_06,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon source="24_basic_home" size={16} color={Colors.white} />
              </View>
              <Text typography="body_s_regular" color={Colors.black_07}>
                Small
              </Text>
            </View>
            <View style={{ alignItems: 'center', gap: Spacing.XS }}>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: Colors.pink_06,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon source="24_basic_home" size={24} color={Colors.white} />
              </View>
              <Text typography="body_s_regular" color={Colors.black_07}>
                Medium
              </Text>
            </View>
            <View style={{ alignItems: 'center', gap: Spacing.XS }}>
              <View
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  backgroundColor: Colors.pink_06,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon source="24_basic_home" size={32} color={Colors.white} />
              </View>
              <Text typography="body_s_regular" color={Colors.black_07}>
                Large
              </Text>
            </View>
          </View>
        </View>

        {/* Logo on Dark Background */}
        <View
          style={{
            backgroundColor: Colors.black_11,
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.M,
            alignItems: 'center',
          }}
        >
          <Text typography="header_s_semibold" color={Colors.white}>
            On Dark Background
          </Text>
          <View
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: Colors.pink_06,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon source="24_basic_home" size={32} color={Colors.white} />
          </View>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: LogoDemo component

export default LogoDemo;
