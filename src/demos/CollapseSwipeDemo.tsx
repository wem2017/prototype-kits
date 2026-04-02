/**
 * File: CollapseSwipeDemo.tsx
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
  Colors,
  Spacing,
  NavigationScreenProps,
} from '@momo-kits/foundation';
import { Collapse } from '@momo-kits/collapse';
import { Swipe } from '@momo-kits/swipe';

// AI-GENERATED START: CollapseSwipeDemo component
const CollapseSwipeDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Collapse & Swipe Demo' });
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
        {/* Collapse Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Collapse
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <Collapse title="Section 1" expandDefault={true}>
              <Text typography="body_default_regular">
                Expanded content for section 1
              </Text>
            </Collapse>
            <Collapse title="Section 2" expandDefault={false}>
              <Text typography="body_default_regular">
                Expanded content for section 2
              </Text>
            </Collapse>
          </View>
        </View>

        {/* Swipe Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Swipe
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <Swipe
              rightActions={[
                {
                  label: 'Delete',
                  icon: '24_navigation_close',
                  backgroundColor: '#E53935',
                  onPress: () => {},
                },
                {
                  label: 'Archive',
                  icon: '24_basic_setting',
                  backgroundColor: '#1E88E5',
                  onPress: () => {},
                },
              ]}
            >
              <View style={{ padding: Spacing.M, backgroundColor: 'white' }}>
                <Text typography="body_default_regular">
                  Swipe me left
                </Text>
              </View>
            </Swipe>
          </View>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: CollapseSwipeDemo component

export default CollapseSwipeDemo;
