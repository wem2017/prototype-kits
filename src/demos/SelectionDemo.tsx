/**
 * File: SelectionDemo.tsx
 * Created At: 2026-04-02 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import {
  CheckBox,
  Radio,
  Switch,
  Screen,
  ScreenRef,
  Text,
  Colors,
  Spacing,
  NavigationScreenProps,
} from '@momo-kits/foundation';
import { Chip } from '@momo-kits/chip';

// AI-GENERATED START: SelectionDemo component
const SelectionDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [radio, setRadio] = useState('a');
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const [chip1, setChip1] = useState(false);
  const [chip2, setChip2] = useState(true);
  const [chip3, setChip3] = useState(false);
  const [chip4, setChip4] = useState(false);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Selection Demo' });
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
        {/* CheckBox Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            CheckBox
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <CheckBox
              value={checked1}
              onChange={setChecked1}
              label="Option A"
            />
            <CheckBox
              value={checked2}
              onChange={setChecked2}
              label="Option B"
            />
          </View>
        </View>

        {/* Radio Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Radio
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <Radio
              value="a"
              groupValue={radio}
              onChange={() => setRadio('a')}
              label="Radio A"
            />
            <Radio
              value="b"
              groupValue={radio}
              onChange={() => setRadio('b')}
              label="Radio B"
            />
            <Radio
              value="c"
              groupValue={radio}
              onChange={() => setRadio('c')}
              label="Radio C"
            />
          </View>
        </View>

        {/* Switch Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Switch
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
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text typography="description_default_regular" color={Colors.black_11}>
                Notifications
              </Text>
              <Switch value={switch1} onChange={setSwitch1} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text typography="description_default_regular" color={Colors.black_11}>
                Dark Mode
              </Text>
              <Switch value={switch2} onChange={setSwitch2} />
            </View>
          </View>
        </View>

        {/* Chip Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Chip
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
                label="Filter 1"
                selected={chip1}
                onPress={() => setChip1(!chip1)}
                size="large"
              />
              <Chip
                label="Filter 2"
                selected={chip2}
                onPress={() => setChip2(!chip2)}
                size="large"
              />
              <Chip
                label="Filter 3"
                selected={chip3}
                onPress={() => setChip3(!chip3)}
                size="large"
              />
              <Chip
                label="Filter 4"
                selected={chip4}
                onPress={() => setChip4(!chip4)}
                size="large"
              />
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: SelectionDemo component

export default SelectionDemo;
