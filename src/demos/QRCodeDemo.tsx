/**
 * File: QRCodeDemo.tsx
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
import { QRCodeView, BarCodeView } from '@momo-kits/qrcode';

// AI-GENERATED START: QRCodeDemo component
const QRCodeDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'QR Code Demo' });
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
        {/* QR Code */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
            alignItems: 'center',
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            QR Code
          </Text>
          <QRCodeView
            value="https://momo.vn"
            size={200}
          />
          <Text typography="body_default_regular" color={Colors.black_07}>
            https://momo.vn
          </Text>
        </View>

        {/* QR Code Sizes */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            QR Sizes
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'flex-end',
            }}
          >
            <View style={{ alignItems: 'center', gap: Spacing.XS }}>
              <QRCodeView value="small" size={80} />
              <Text typography="body_s_regular" color={Colors.black_07}>
                Small
              </Text>
            </View>
            <View style={{ alignItems: 'center', gap: Spacing.XS }}>
              <QRCodeView value="medium" size={120} />
              <Text typography="body_s_regular" color={Colors.black_07}>
                Medium
              </Text>
            </View>
          </View>
        </View>

        {/* Bar Code */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
            alignItems: 'center',
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Bar Code
          </Text>
          <BarCodeView value="1234567890" />
          <Text typography="body_s_regular" color={Colors.black_07}>
            1234567890
          </Text>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: QRCodeDemo component

export default QRCodeDemo;
