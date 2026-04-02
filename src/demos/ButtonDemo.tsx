/**
 * File: ButtonDemo.tsx
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

// AI-GENERATED START: ButtonDemo component
const ButtonDemo = ({ navigation }: NavigationScreenProps) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Button Demo' });
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
        {/* Types */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Types
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: Spacing.S,
            }}
          >
            <Button
              title="Button"
              type="primary"
              size="large"
              onPress={() => {}}
            />
            <Button
              title="Button"
              type="secondary"
              size="large"
              onPress={() => {}}
            />
            <Button
              title="Button"
              type="tonal"
              size="large"
              onPress={() => {}}
            />
            <Button
              title="Button"
              type="outline"
              size="large"
              onPress={() => {}}
            />
            <Button
              title="Button"
              type="danger"
              size="large"
              onPress={() => {}}
            />
            <Button
              title="Button"
              type="text"
              size="large"
              onPress={() => {}}
            />
          </View>
        </View>

        {/* Sizes */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Sizes
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: Spacing.S,
              alignItems: 'center',
            }}
          >
            <Button
              title="Button"
              type="primary"
              size="large"
              onPress={() => {}}
            />
            <Button
              title="Button"
              type="primary"
              size="medium"
              onPress={() => {}}
            />
            <Button
              title="Button"
              type="primary"
              size="small"
              onPress={() => {}}
            />
          </View>
        </View>

        {/* With Icon */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            With Icon
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: Spacing.S,
            }}
          >
            <Button
              title="Home"
              icon="24_basic_home"
              type="primary"
              size="large"
              onPress={() => {}}
            />
          </View>
        </View>

        {/* Disabled */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Disabled
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: Spacing.S,
            }}
          >
            <Button
              title="Button"
              type="disabled"
              size="large"
              onPress={() => {}}
            />
          </View>
        </View>

        {/* Full Width */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Full Width
          </Text>
          <Button
            title="Button"
            type="primary"
            size="large"
            style={{ width: '100%' }}
            onPress={() => {}}
          />
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: ButtonDemo component

export default ButtonDemo;
