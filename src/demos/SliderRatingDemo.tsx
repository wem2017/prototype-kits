/**
 * File: SliderRatingDemo.tsx
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
} from '@momo-kits/foundation';
import { Slider } from '@momo-kits/slider';
import { Rating } from '@momo-kits/rating';

// AI-GENERATED START: SliderRatingDemo component
const SliderRatingDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  const [low, setLow] = useState(20);
  const [high, setHigh] = useState(80);
  const [val, setVal] = useState(50);
  const [rating, setRating] = useState(3);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Slider & Rating Demo' });
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
        {/* Slider Range Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Slider (Range)
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <Slider
              min={0}
              max={100}
              step={1}
              low={low}
              high={high}
              onValueChanged={(l, h) => {
                setLow(l);
                setHigh(h);
              }}
            />
            <Text typography="body_default_regular" color={Colors.black_11}>
              Range: {low} - {high}
            </Text>
          </View>
        </View>

        {/* Slider Single Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Slider (Single)
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <Slider
              min={0}
              max={100}
              step={5}
              low={val}
              disableRange
              onValueChanged={(l) => setVal(l)}
            />
            <Text typography="body_default_regular" color={Colors.black_11}>
              Value: {val}
            </Text>
          </View>
        </View>

        {/* Rating Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Rating
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <Rating
              numOfStars={5}
              rating={rating}
              onRatingChange={setRating}
              size="large"
            />
            <Text typography="body_default_regular" color={Colors.black_11}>
              Rating: {rating}/5
            </Text>
          </View>
        </View>

        {/* Rating Small Section */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Rating (Small)
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: Spacing.M,
              gap: Spacing.S,
            }}
          >
            <Rating numOfStars={5} rating={4} size="small" />
          </View>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: SliderRatingDemo component

export default SliderRatingDemo;
