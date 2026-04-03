/**
 * File: LayoutDemo.tsx
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

// AI-GENERATED START: LayoutDemo component
const Box = ({ color, label }: { color: string; label: string }) => (
  <View
    style={{
      backgroundColor: color,
      borderRadius: 8,
      padding: Spacing.M,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 60,
      minHeight: 60,
    }}
  >
    <Text typography="body_s_semibold" color={Colors.white}>
      {label}
    </Text>
  </View>
);

const LayoutDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Layout Demo' });
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
        {/* Row */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Row (flexDirection: row)
          </Text>
          <View style={{ flexDirection: 'row', gap: Spacing.S }}>
            <Box color={Colors.pink_06} label="A" />
            <Box color={Colors.blue_06} label="B" />
            <Box color={Colors.mint_06} label="C" />
          </View>
        </View>

        {/* Space Between */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Space Between
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Box color={Colors.pink_06} label="A" />
            <Box color={Colors.blue_06} label="B" />
            <Box color={Colors.mint_06} label="C" />
          </View>
        </View>

        {/* Grid */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Grid (flexWrap)
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: Spacing.S,
            }}
          >
            {['A', 'B', 'C', 'D', 'E', 'F'].map((l, i) => (
              <View key={l} style={{ width: '30%' }}>
                <Box
                  color={
                    [
                      Colors.pink_06,
                      Colors.blue_06,
                      Colors.mint_06,
                      Colors.violet_06,
                      Colors.orange_06,
                      Colors.indigo_06,
                    ][i]
                  }
                  label={l}
                />
              </View>
            ))}
          </View>
        </View>

        {/* Center */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Centered
          </Text>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 100,
            }}
          >
            <Box color={Colors.pink_06} label="Center" />
          </View>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: LayoutDemo component

export default LayoutDemo;
