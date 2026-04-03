/**
 * File: ChipDemo.tsx
 * Created At: 2026-04-02 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { Chip } from '@momo-kits/chip';
import {
  Screen,
  ScreenRef,
  Text,
  Colors,
  Spacing,
  NavigationScreenProps,
} from '@momo-kits/foundation';

// AI-GENERATED START: ChipDemo component
const ChipDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(true);
  const [s3, setS3] = useState(false);
  const [s4, setS4] = useState(false);

  const [sm1, setSm1] = useState(false);
  const [sm2, setSm2] = useState(true);
  const [sm3, setSm3] = useState(false);
  const [sm4, setSm4] = useState(false);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Chip' });
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
        {/* Basic Chips */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Basic chips
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: Spacing.S,
              }}
            >
              <Chip
                label="Option 1"
                selected={s1}
                onPress={() => setS1(!s1)}
                size="large"
              />
              <Chip
                label="Option 2"
                selected={s2}
                onPress={() => setS2(!s2)}
                size="large"
              />
              <Chip
                label="Option 3"
                selected={s3}
                onPress={() => setS3(!s3)}
                size="large"
              />
              <Chip
                label="Option 4"
                selected={s4}
                onPress={() => setS4(!s4)}
                size="large"
              />
            </View>
          </View>
        </View>

        {/* Small Chips */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Small chips
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: Spacing.S,
              }}
            >
              <Chip
                label="Option 1"
                selected={sm1}
                onPress={() => setSm1(!sm1)}
                size="small"
              />
              <Chip
                label="Option 2"
                selected={sm2}
                onPress={() => setSm2(!sm2)}
                size="small"
              />
              <Chip
                label="Option 3"
                selected={sm3}
                onPress={() => setSm3(!sm3)}
                size="small"
              />
              <Chip
                label="Option 4"
                selected={sm4}
                onPress={() => setSm4(!sm4)}
                size="small"
              />
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: ChipDemo component

export default ChipDemo;
