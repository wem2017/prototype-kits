/**
 * File: TextIconDemo.tsx
 * Created At: 2026-04-02 12:00:00 +07:00
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
  Icon,
  Image,
  Divider,
  Colors,
  Spacing,
  NavigationScreenProps,
} from '@momo-kits/foundation';

// AI-GENERATED START: TextIconDemo component
const TextIconDemo = ({ navigation }: NavigationScreenProps) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Text & Icon Demo' });
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
        {/* Typography */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Typography
          </Text>
          <Text typography="header_default_bold" color={Colors.black_11}>
            Header Bold
          </Text>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Header Semibold
          </Text>
          <Text typography="body_default_regular" color={Colors.black_11}>
            Body Regular
          </Text>
          <Text
            typography="description_default_regular"
            color={Colors.black_11}
          >
            Description Regular
          </Text>
          <Text typography="caption_default_regular" color={Colors.black_11}>
            Caption Regular
          </Text>
        </View>

        {/* Text Colors */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Text Colors
          </Text>
          <Text typography="body_default_regular" color={Colors.black_11}>
            Black 11
          </Text>
          <Text typography="body_default_regular" color={Colors.pink_06}>
            Pink 06
          </Text>
          <Text typography="body_default_regular" color={Colors.blue_06}>
            Blue 06
          </Text>
          <Text typography="body_default_regular" color={Colors.black_09}>
            Black 09
          </Text>
        </View>

        {/* Icons */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Icons
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: Spacing.M,
              alignItems: 'center',
            }}
          >
            <Icon source="24_basic_home" size={24} />
            <Icon source="24_basic_setting" size={24} />
            <Icon source="24_finance_wallet" size={24} />
            <Icon source="24_notifications_bell" size={32} />
          </View>
        </View>

        {/* Image */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Image
          </Text>
          <Image
            source={{ uri: 'https://picsum.photos/200' }}
            style={{ width: 100, height: 100, borderRadius: 12 }}
            loading
          />
        </View>

        {/* Divider */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Divider
          </Text>
          <Divider />
          <Divider type="dash" />
          <Divider useMargin={false} />
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: TextIconDemo component

export default TextIconDemo;
