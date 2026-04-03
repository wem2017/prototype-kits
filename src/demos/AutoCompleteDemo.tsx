/**
 * File: AutoCompleteDemo.tsx
 * Created At: 2026-04-03 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  Screen,
  ScreenRef,
  Text,
  Input,
  Colors,
  Spacing,
  NavigationScreenProps,
} from '@momo-kits/foundation';

// AI-GENERATED START: AutoCompleteDemo component
const CITIES = [
  'Ho Chi Minh',
  'Ha Noi',
  'Da Nang',
  'Hue',
  'Can Tho',
  'Nha Trang',
  'Hai Phong',
  'Da Lat',
  'Vung Tau',
  'Quy Nhon',
];

const AutoCompleteDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState<string[]>([]);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'AutoComplete Demo' });
  }, []);

  const handleChange = (text: string) => {
    setQuery(text);
    if (text.length > 0) {
      setFiltered(
        CITIES.filter((c) =>
          c.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setFiltered([]);
    }
  };

  return (
    <Screen
      ref={screenRef}
      navigation={navigation}
      scrollable
      useGridLayout={false}
      backgroundColor={Colors.black_02}
    >
      <View style={{ padding: Spacing.M, gap: Spacing.L }}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            City Search
          </Text>
          <Input
            floatingValue="Search city"
            value={query}
            onChangeText={handleChange}
            placeholder="Type a city name..."
          />
          {filtered.length > 0 && (
            <View
              style={{
                backgroundColor: Colors.black_01,
                borderRadius: 8,
                padding: Spacing.S,
                gap: Spacing.XS,
              }}
            >
              {filtered.map((city) => (
                <TouchableOpacity
                  key={city}
                  onPress={() => {
                    setQuery(city);
                    setFiltered([]);
                  }}
                  style={{ padding: Spacing.S }}
                >
                  <Text
                    typography="body_default_regular"
                    color={Colors.black_11}
                  >
                    {city}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: AutoCompleteDemo component

export default AutoCompleteDemo;
