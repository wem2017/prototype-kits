/**
 * File: CalendarDemo.tsx
 * Created At: 2026-04-03 12:00:00 +07:00
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
import { Calendar } from '@momo-kits/calendar';

// AI-GENERATED START: CalendarDemo component
const CalendarDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Calendar Demo' });
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
        {/* Basic Calendar */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Basic Calendar
          </Text>
          <Calendar
            onDayPress={(day: any) => setSelectedDate(day.dateString)}
          />
          {selectedDate !== '' && (
            <Text
              typography="body_default_regular"
              color={Colors.black_07}
            >
              Selected: {selectedDate}
            </Text>
          )}
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: CalendarDemo component

export default CalendarDemo;
