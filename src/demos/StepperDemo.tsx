/**
 * File: StepperDemo.tsx
 * Created At: 2026-04-02 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import {
  Screen,
  ScreenRef,
  Text,
  Colors,
  Spacing,
  NavigationScreenProps,
} from '@momo-kits/foundation';
import { Stepper } from '@momo-kits/stepper';

// AI-GENERATED START: StepperDemo component
const StepperDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  const [qty, setQty] = useState(1);
  const [qty2, setQty2] = useState(5);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Stepper Demo' });
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
        {/* Basic Stepper Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Basic Stepper
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <Stepper
              value={qty}
              min={1}
              max={99}
              step={1}
              size="large"
              onValueChange={setQty}
            />
            <Text typography="body_default_regular" color={Colors.black_11}>
              Quantity: {qty}
            </Text>
          </View>
        </View>

        {/* Small Stepper Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Small Stepper
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <Stepper
              value={qty2}
              min={0}
              max={10}
              step={1}
              size="small"
              onValueChange={setQty2}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: StepperDemo component

export default StepperDemo;
