/**
 * File: ImageDemo.tsx
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
  Image,
  Colors,
  Spacing,
  NavigationScreenProps,
} from '@momo-kits/foundation';

// AI-GENERATED START: ImageDemo component
const ImageDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Image Demo' });
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
        {/* Basic Sizes */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Sizes
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              gap: Spacing.M,
            }}
          >
            <View style={{ alignItems: 'center', gap: Spacing.XS }}>
              <Image
                source={{ uri: 'https://picsum.photos/80/80' }}
                style={{ width: 48, height: 48, borderRadius: 8 }}
                loading
              />
              <Text typography="body_s_regular" color={Colors.black_07}>
                48px
              </Text>
            </View>
            <View style={{ alignItems: 'center', gap: Spacing.XS }}>
              <Image
                source={{ uri: 'https://picsum.photos/160/160' }}
                style={{ width: 80, height: 80, borderRadius: 8 }}
                loading
              />
              <Text typography="body_s_regular" color={Colors.black_07}>
                80px
              </Text>
            </View>
            <View style={{ alignItems: 'center', gap: Spacing.XS }}>
              <Image
                source={{ uri: 'https://picsum.photos/240/240' }}
                style={{ width: 120, height: 120, borderRadius: 8 }}
                loading
              />
              <Text typography="body_s_regular" color={Colors.black_07}>
                120px
              </Text>
            </View>
          </View>
        </View>

        {/* Rounded */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Rounded
          </Text>
          <View
            style={{ flexDirection: 'row', gap: Spacing.M }}
          >
            <Image
              source={{ uri: 'https://picsum.photos/200/200' }}
              style={{ width: 80, height: 80, borderRadius: 40 }}
              loading
            />
            <Image
              source={{ uri: 'https://picsum.photos/201/201' }}
              style={{ width: 80, height: 80, borderRadius: 12 }}
              loading
            />
            <Image
              source={{ uri: 'https://picsum.photos/202/202' }}
              style={{ width: 80, height: 80, borderRadius: 0 }}
              loading
            />
          </View>
        </View>

        {/* Full Width */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Full Width
          </Text>
          <Image
            source={{ uri: 'https://picsum.photos/600/300' }}
            style={{
              width: '100%',
              height: 180,
              borderRadius: 12,
            }}
            loading
          />
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: ImageDemo component

export default ImageDemo;
