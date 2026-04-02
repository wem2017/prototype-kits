/**
 * File: UploaderDemo.tsx
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
import { Uploader } from '@momo-kits/uploader';

// AI-GENERATED START: UploaderDemo component
const UploaderDemo = ({ navigation }: NavigationScreenProps) => {
  const screenRef = useRef<ScreenRef>(null);
  const [images, setImages] = useState<{ uri: string }[]>([]);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Uploader' });
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
        {/* Image Uploader */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Image Uploader
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <Uploader
              images={images}
              numberOfImages={5}
              width={80}
              height={80}
              onAdd={() => {
                setImages(prev => [
                  ...prev,
                  { uri: 'https://picsum.photos/200?random=' + Date.now() },
                ]);
              }}
              onCancel={(_, index) =>
                setImages(prev => prev.filter((__, i) => i !== index))
              }
              onPressImage={() => {}}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: UploaderDemo component

export default UploaderDemo;
