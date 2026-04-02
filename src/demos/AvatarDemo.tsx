/**
 * File: AvatarDemo.tsx
 * Created At: 2026-04-02 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { Avatar } from '@momo-kits/avatar';
import {
  Screen,
  ScreenRef,
  Text,
  Colors,
  Spacing,
  NavigationScreenProps,
} from '@momo-kits/foundation';

// AI-GENERATED START: AvatarDemo component
const AvatarDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Avatar Demo' });
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
        {/* Sizes */}
        <View
          style={{
            backgroundColor: Colors.white,
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
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: Spacing.S,
            }}
          >
            {[24, 32, 40, 48, 56, 72].map((size) => (
              <Avatar
                key={size}
                size={size}
                image="https://i.pravatar.cc/150?img=1"
                name="John"
                rounded={true}
              />
            ))}
          </View>
        </View>

        {/* Initials fallback */}
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Initials Fallback
          </Text>
          <Avatar size={48} name="Jane Doe" rounded />
        </View>

        {/* Square */}
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Square
          </Text>
          <Avatar
            size={48}
            image="https://i.pravatar.cc/150?img=2"
            name="Bob"
            rounded={false}
          />
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: AvatarDemo component

export default AvatarDemo;
