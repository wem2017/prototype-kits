/**
 * File: FlashlistDemo.tsx
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
  Icon,
  NavigationScreenProps,
} from '@momo-kits/foundation';
import { FlashList } from '@shopify/flash-list';

// AI-GENERATED START: FlashlistDemo component
const DATA = Array.from({ length: 100 }, (_, i) => ({
  id: String(i),
  title: `Item ${i + 1}`,
  subtitle: `Description for item ${i + 1}`,
}));

const FlashlistDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'FlashList Demo' });
  }, []);

  return (
    <Screen
      ref={screenRef}
      navigation={navigation}
      scrollable={false}
      useGridLayout={false}
      backgroundColor={Colors.black_02}
    >
      <View style={{ flex: 1 }}>
        <View style={{ padding: Spacing.M, paddingBottom: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            100 Items (FlashList)
          </Text>
        </View>
        <FlashList
          data={DATA}
          estimatedItemSize={72}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                marginHorizontal: Spacing.M,
                marginBottom: Spacing.XS,
                borderRadius: 12,
                padding: Spacing.M,
                gap: Spacing.M,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: Colors.pink_03,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon
                  source="24_basic_user"
                  size={20}
                  color={Colors.pink_06}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  typography="body_default_semibold"
                  color={Colors.black_11}
                >
                  {item.title}
                </Text>
                <Text
                  typography="body_s_regular"
                  color={Colors.black_07}
                >
                  {item.subtitle}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </Screen>
  );
};
// AI-GENERATED END: FlashlistDemo component

export default FlashlistDemo;
