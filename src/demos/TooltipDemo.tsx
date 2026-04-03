/**
 * File: TooltipDemo.tsx
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
  Button,
} from '@momo-kits/foundation';
import { Tooltip } from '@momo-kits/animated-tooltip';

// AI-GENERATED START: TooltipDemo component
const TooltipDemo = ({ navigation }: NavigationScreenProps) => {
  const screenRef = useRef<ScreenRef>(null);
  const tooltipRef1 = useRef<any>(null);
  const tooltipRef2 = useRef<any>(null);
  const tooltipRef3 = useRef<any>(null);
  const tooltipRef4 = useRef<any>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Tooltip' });
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
        {/* Top placement */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Top placement
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              paddingTop: Spacing.XL,
              gap: Spacing.S,
              alignItems: 'center',
            }}
          >
            <Tooltip
              ref={tooltipRef1}
              placement="top"
              title="Top Tooltip"
              description="This appears on top"
            >
              <Button
                title="Show Top"
                type="outline"
                onPress={() => tooltipRef1.current?.show()}
              />
            </Tooltip>
          </View>
        </View>

        {/* Bottom placement */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Bottom placement
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              paddingBottom: Spacing.XL,
              gap: Spacing.S,
              alignItems: 'center',
            }}
          >
            <Tooltip
              ref={tooltipRef2}
              placement="bottom"
              title="Bottom Tooltip"
              description="This appears on bottom"
            >
              <Button
                title="Show Bottom"
                type="outline"
                onPress={() => tooltipRef2.current?.show()}
              />
            </Tooltip>
          </View>
        </View>

        {/* Left placement */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Left placement
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
              alignItems: 'flex-end',
            }}
          >
            <Tooltip
              ref={tooltipRef3}
              placement="left"
              title="Left Tooltip"
              description="This appears on left"
            >
              <Button
                title="Show Left"
                type="outline"
                onPress={() => tooltipRef3.current?.show()}
              />
            </Tooltip>
          </View>
        </View>

        {/* Right placement */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Right placement
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
              alignItems: 'flex-start',
            }}
          >
            <Tooltip
              ref={tooltipRef4}
              placement="right"
              title="Right Tooltip"
              description="This appears on right"
            >
              <Button
                title="Show Right"
                type="outline"
                onPress={() => tooltipRef4.current?.show()}
              />
            </Tooltip>
          </View>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: TooltipDemo component

export default TooltipDemo;
