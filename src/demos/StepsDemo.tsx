/**
 * File: StepsDemo.tsx
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
import { Steps } from '@momo-kits/step';
import { ProgressInfo } from '@momo-kits/progress-info';

// AI-GENERATED START: StepsDemo component
const StepsDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Steps Demo' });
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
        {/* Steps Horizontal Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Steps (Horizontal)
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <Steps
              steps={[
                { title: 'Info' },
                { title: 'Payment' },
                { title: 'Confirm' },
                { title: 'Done' },
              ]}
              activeIndex={1}
              horizontal={true}
              size="large"
            />
          </View>
        </View>

        {/* Steps Vertical Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Steps (Vertical)
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <Steps
              steps={[
                { title: 'Order placed', description: 'Apr 1, 2026' },
                { title: 'Processing', description: 'Apr 2, 2026' },
                { title: 'Delivered', description: 'Pending' },
              ]}
              activeIndex={1}
              horizontal={false}
              size="large"
            />
          </View>
        </View>

        {/* ProgressInfo Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            ProgressInfo
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <ProgressInfo
              steps={[
                { title: 'Step 1', description: 'First step description' },
                { title: 'Step 2', description: 'Second step description' },
                { title: 'Step 3', description: 'Third step description' },
              ]}
              horizontal={false}
              size="large"
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: StepsDemo component

export default StepsDemo;
