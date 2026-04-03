/**
 * File: IconButtonDemo.tsx
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
  IconButton,
  NavigationScreenProps,
} from '@momo-kits/foundation';

// AI-GENERATED START: IconButtonDemo component
const IconButtonDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'IconButton Demo' });
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
        {/* Basic Icons */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Basic Icon Buttons
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: Spacing.M,
            }}
          >
            <IconButton
              source="24_basic_home"
              onPress={() => {}}
            />
            <IconButton
              source="24_basic_star"
              onPress={() => {}}
            />
            <IconButton
              source="24_basic_heart"
              onPress={() => {}}
            />
            <IconButton
              source="24_basic_share"
              onPress={() => {}}
            />
            <IconButton
              source="24_basic_search"
              onPress={() => {}}
            />
            <IconButton
              source="24_basic_setting"
              onPress={() => {}}
            />
          </View>
        </View>

        {/* With Colors */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Colored
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: Spacing.M,
            }}
          >
            <IconButton
              source="24_basic_heart"
              color={Colors.pink_06}
              onPress={() => {}}
            />
            <IconButton
              source="24_basic_star"
              color={Colors.orange_06}
              onPress={() => {}}
            />
            <IconButton
              source="24_basic_check_circle"
              color={Colors.mint_06}
              onPress={() => {}}
            />
            <IconButton
              source="24_basic_info"
              color={Colors.blue_06}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: IconButtonDemo component

export default IconButtonDemo;
