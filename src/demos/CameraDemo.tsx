/**
 * File: CameraDemo.tsx
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
  Button,
  Colors,
  Spacing,
  Icon,
  NavigationScreenProps,
} from '@momo-kits/foundation';

// AI-GENERATED START: CameraDemo component
const CameraDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Camera Demo' });
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
        {/* Camera Preview Placeholder */}
        <View
          style={{
            backgroundColor: Colors.black_09,
            borderRadius: 12,
            height: 350,
            alignItems: 'center',
            justifyContent: 'center',
            gap: Spacing.M,
          }}
        >
          <Icon source="24_basic_camera" size={48} color={Colors.white} />
          <Text typography="body_default_regular" color={Colors.white}>
            Camera preview area
          </Text>
          <Text
            typography="body_s_regular"
            color={Colors.black_05}
          >
            Requires physical device to run
          </Text>
        </View>

        {/* Capture Controls */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Controls
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              gap: Spacing.L,
            }}
          >
            <Button
              title="Capture"
              type="primary"
              size="large"
              icon="24_basic_camera"
              onPress={() => {}}
            />
            <Button
              title="Flip"
              type="secondary"
              size="large"
              icon="24_basic_refresh"
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: CameraDemo component

export default CameraDemo;
