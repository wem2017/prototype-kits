/**
 * File: BadgeTagDemo.tsx
 * Created At: 2026-04-02 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import {
  Badge,
  BadgeDot,
  Tag,
  Screen,
  ScreenRef,
  Text,
  Colors,
  Spacing,
  NavigationScreenProps,
} from '@momo-kits/foundation';

// AI-GENERATED START: BadgeTagDemo component
const BadgeTagDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Badge & Tag Demo' });
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
        {/* Badge Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Badge
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: Spacing.S,
                alignItems: 'center',
              }}
            >
              <Badge label="1" />
              <Badge label="99+" />
              <Badge label="New" />
            </View>
          </View>
        </View>

        {/* BadgeDot Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            BadgeDot
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: Spacing.S,
                alignItems: 'center',
              }}
            >
              <BadgeDot size="small" />
              <BadgeDot size="large" />
            </View>
          </View>
        </View>

        {/* Tag Colors Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Tag Colors
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: Spacing.S,
                alignItems: 'center',
              }}
            >
              <Tag label="Default" color="default" size="large" />
              <Tag label="Orange" color="orange" size="large" />
              <Tag label="Green" color="green" size="large" />
              <Tag label="Red" color="red" size="large" />
              <Tag label="Blue" color="blue" size="large" />
              <Tag label="Grey" color="grey" size="large" />
            </View>
          </View>
        </View>

        {/* Tag Sizes Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Tag Sizes
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: Spacing.S,
                alignItems: 'center',
              }}
            >
              <Tag label="Large" size="large" color="green" />
              <Tag label="Medium" size="medium" color="blue" />
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: BadgeTagDemo component

export default BadgeTagDemo;
