/**
 * File: InputAdvancedDemo.tsx
 * Created At: 2026-04-02 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import {
  InputDropDown,
  InputPhoneNumber,
  InputMoney,
  InputOTP,
  Screen,
  ScreenRef,
  Text,
  Colors,
  Spacing,
  NavigationScreenProps,
} from '@momo-kits/foundation';

// AI-GENERATED START: InputAdvancedDemo screen component
const InputAdvancedDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Input Advanced Demo' });
  }, []);

  const [province, setProvince] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [otp, setOtp] = useState('');

  return (
    <Screen
      ref={screenRef}
      navigation={navigation}
      scrollable
      useGridLayout={false}
      backgroundColor={Colors.black_02}
    >
      <View style={{ padding: Spacing.M, gap: Spacing.L }}>
        {/* Section 1: InputDropDown */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            InputDropDown
          </Text>
          <InputDropDown
            floatingValue="Province"
            value={province}
            placeholder="Choose..."
            onPress={() => {}}
          />
        </View>

        {/* Section 2: InputPhoneNumber */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            InputPhoneNumber
          </Text>
          <InputPhoneNumber
            value={phone}
            onChangeText={setPhone}
            placeholder="0123456789"
          />
        </View>

        {/* Section 3: InputMoney */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            InputMoney
          </Text>
          <InputMoney
            floatingValue="Amount"
            value={amount}
            onChangeText={setAmount}
            currency="đ"
            placeholder="0đ"
          />
        </View>

        {/* Section 4: InputOTP */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            InputOTP
          </Text>
          <InputOTP
            floatingValue="Enter OTP"
            length={6}
            value={otp}
            onChangeText={setOtp}
            dataType="number"
          />
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: InputAdvancedDemo screen component

export default InputAdvancedDemo;
