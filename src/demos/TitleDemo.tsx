/**
 * File: TitleDemo.tsx
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
  NavigationScreenProps,
} from '@momo-kits/foundation';

// AI-GENERATED START: TitleDemo component
const TitleDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Title Demo' });
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
        {/* Title Hierarchy */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.M,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Title Hierarchy
          </Text>
          <View style={{ gap: Spacing.S }}>
            <Text
              typography="header_default_bold"
              color={Colors.black_11}
            >
              Header Default Bold
            </Text>
            <Text
              typography="header_s_semibold"
              color={Colors.black_11}
            >
              Header S Semibold
            </Text>
            <Text
              typography="description_default_semibold"
              color={Colors.black_11}
            >
              Description Default Semibold
            </Text>
            <Text
              typography="body_default_semibold"
              color={Colors.black_11}
            >
              Body Default Semibold
            </Text>
            <Text
              typography="body_default_regular"
              color={Colors.black_11}
            >
              Body Default Regular
            </Text>
            <Text
              typography="body_s_regular"
              color={Colors.black_11}
            >
              Body S Regular
            </Text>
          </View>
        </View>

        {/* With Subtitle */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.M,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Title + Subtitle
          </Text>
          <View style={{ gap: Spacing.XS }}>
            <Text
              typography="header_default_bold"
              color={Colors.black_11}
            >
              Payment Confirmation
            </Text>
            <Text
              typography="body_default_regular"
              color={Colors.black_07}
            >
              Review your transaction details below
            </Text>
          </View>
          <View style={{ gap: Spacing.XS }}>
            <Text
              typography="header_s_semibold"
              color={Colors.black_11}
            >
              Account Balance
            </Text>
            <Text
              typography="body_s_regular"
              color={Colors.black_05}
            >
              Updated 5 minutes ago
            </Text>
          </View>
        </View>

        {/* Colored Titles */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Colored Titles
          </Text>
          <Text
            typography="header_default_bold"
            color={Colors.pink_06}
          >
            Pink Title
          </Text>
          <Text
            typography="header_default_bold"
            color={Colors.blue_06}
          >
            Blue Title
          </Text>
          <Text
            typography="header_default_bold"
            color={Colors.mint_06}
          >
            Green Title
          </Text>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: TitleDemo component

export default TitleDemo;
