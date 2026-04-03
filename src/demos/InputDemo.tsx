/**
 * File: InputDemo.tsx
 * Created At: 2026-04-02 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import {
  Input,
  InputSearch,
  InputTextArea,
  Screen,
  ScreenRef,
  Text,
  Colors,
  Spacing,
  NavigationScreenProps,
} from '@momo-kits/foundation';

// AI-GENERATED START: InputDemo screen component
const InputDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Input Demo' });
  }, []);

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [code, setCode] = useState('');
  const [query, setQuery] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <Screen
      ref={screenRef}
      navigation={navigation}
      scrollable
      useGridLayout={false}
      backgroundColor={Colors.black_02}
    >
      <View style={{ padding: Spacing.M, gap: Spacing.L }}>
        {/* Section 1: Basic Input */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Basic Input
          </Text>
          <Input
            floatingValue="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email"
          />
        </View>

        {/* Section 2: Input with error */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Input with Error
          </Text>
          <Input
            floatingValue="Password"
            value={pw}
            onChangeText={setPw}
            errorMessage="Invalid password"
          />
        </View>

        {/* Section 3: Small Input */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Small Input
          </Text>
          <Input
            floatingValue="Code"
            value={code}
            onChangeText={setCode}
            size="small"
          />
        </View>

        {/* Section 4: InputSearch */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            InputSearch
          </Text>
          <InputSearch
            placeholder="Search..."
            value={query}
            onChangeText={setQuery}
            showButtonText
            buttonText="Cancel"
            onPressButtonText={() => setQuery('')}
          />
        </View>

        {/* Section 5: InputTextArea */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            InputTextArea
          </Text>
          <InputTextArea
            floatingValue="Description"
            value={desc}
            onChangeText={setDesc}
            placeholder="Enter description..."
            maxLength={500}
            height={120}
          />
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: InputDemo screen component

export default InputDemo;
