/**
 * File: CarouselDemo.tsx
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
} from '@momo-kits/foundation';
import { Carousel } from '@momo-kits/carousel';

// AI-GENERATED START: CarouselDemo component
const data = [
  { id: '1', title: 'Slide 1', color: Colors.pink_03 },
  { id: '2', title: 'Slide 2', color: Colors.blue_03 },
  { id: '3', title: 'Slide 3', color: Colors.mint_03 },
  { id: '4', title: 'Slide 4', color: Colors.violet_03 },
  { id: '5', title: 'Slide 5', color: Colors.indigo_03 },
];

const CarouselDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Carousel Demo' });
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
        {/* Basic Carousel */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Basic Carousel
          </Text>
          <Carousel
            data={data}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: item.color,
                  borderRadius: 12,
                  padding: Spacing.XL,
                  alignItems: 'center',
                }}
              >
                <Text
                  typography="header_default_bold"
                  color={Colors.black_11}
                >
                  {item.title}
                </Text>
              </View>
            )}
            onSnapToItem={setActiveIndex}
          />
          <Pagination
            activeIndex={activeIndex}
            dataLength={data.length}
            type="default"
          />
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: CarouselDemo component

export default CarouselDemo;
