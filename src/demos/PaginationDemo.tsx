/**
 * File: PaginationDemo.tsx
 * Created At: 2026-04-02 12:00:00 +07:00
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
  Pagination,
  Button,
} from '@momo-kits/foundation';

// AI-GENERATED START: PaginationDemo component
const PaginationDemo = ({ navigation }: NavigationScreenProps) => {
  const screenRef = useRef<ScreenRef>(null);
  const [page, setPage] = useState(0);
  const [page2, setPage2] = useState(0);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Pagination' });
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
        {/* Default */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Default
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
              alignItems: 'center',
            }}
          >
            <Pagination
              activeIndex={page}
              dataLength={5}
              type="default"
            />
            <View style={{ flexDirection: 'row', gap: Spacing.S }}>
              <Button
                title="Prev"
                type="outline"
                size="small"
                onPress={() => setPage(p => Math.max(0, p - 1))}
              />
              <Button
                title="Next"
                type="outline"
                size="small"
                onPress={() => setPage(p => Math.min(4, p + 1))}
              />
            </View>
          </View>
        </View>

        {/* Number type */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Number type
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
              alignItems: 'center',
            }}
          >
            <Pagination
              activeIndex={page2}
              dataLength={10}
              type="number"
            />
            <View style={{ flexDirection: 'row', gap: Spacing.S }}>
              <Button
                title="Prev"
                type="outline"
                size="small"
                onPress={() => setPage2(p => Math.max(0, p - 1))}
              />
              <Button
                title="Next"
                type="outline"
                size="small"
                onPress={() => setPage2(p => Math.min(9, p + 1))}
              />
            </View>
          </View>
        </View>

        {/* Black & white */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Black & white
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
              alignItems: 'center',
            }}
          >
            <Pagination
              activeIndex={page}
              dataLength={5}
              type="black_white"
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: PaginationDemo component

export default PaginationDemo;
