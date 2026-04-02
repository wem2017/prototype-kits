// File: Home.tsx
// Created At: 2026-04-02 12:00:00 +07:00
// Created By: AI
// AI Agent: Claude Code
// Model: claude-opus-4-6

import React, { useContext, useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  ApplicationContext,
  Colors,
  Icon,
  NavigationScreenProps,
  Screen,
  ScreenRef,
  Spacing,
  Text,
} from '@momo-kits/foundation';

// AI-GENERATED START: demo screen imports
import ButtonDemo from './demos/ButtonDemo';
import TextIconDemo from './demos/TextIconDemo';
import InputDemo from './demos/InputDemo';
import InputAdvancedDemo from './demos/InputAdvancedDemo';
import SelectionDemo from './demos/SelectionDemo';
import BadgeTagDemo from './demos/BadgeTagDemo';
import AvatarDemo from './demos/AvatarDemo';
import ChipDemo from './demos/ChipDemo';
import DividerDemo from './demos/DividerDemo';
import FeedbackDemo from './demos/FeedbackDemo';
import LoadingDemo from './demos/LoadingDemo';
import TabViewDemo from './demos/TabViewDemo';
import CarouselDemo from './demos/CarouselDemo';
import CollapseSwipeDemo from './demos/CollapseSwipeDemo';
import StepsDemo from './demos/StepsDemo';
import SliderRatingDemo from './demos/SliderRatingDemo';
import StepperDemo from './demos/StepperDemo';
import DatePickerDemo from './demos/DatePickerDemo';
import UploaderDemo from './demos/UploaderDemo';
import InformationDemo from './demos/InformationDemo';
import PaginationDemo from './demos/PaginationDemo';
import TooltipDemo from './demos/TooltipDemo';
// AI-GENERATED END: demo screen imports

// AI-GENERATED START: demo entries config
interface DemoEntry {
  label: string;
  icon: string;
  screen: React.ComponentType<any>;
}

const DEMO_ENTRIES: DemoEntry[] = [
  { label: 'Button', icon: '24_basic_cursor', screen: ButtonDemo },
  { label: 'Text & Icon', icon: '24_basic_text', screen: TextIconDemo },
  { label: 'Input', icon: '24_basic_edit', screen: InputDemo },
  { label: 'Input Advanced', icon: '24_basic_edit', screen: InputAdvancedDemo },
  { label: 'Selection', icon: '24_basic_check_circle', screen: SelectionDemo },
  { label: 'Badge & Tag', icon: '24_basic_tag', screen: BadgeTagDemo },
  { label: 'Avatar', icon: '24_basic_user', screen: AvatarDemo },
  { label: 'Chip', icon: '24_basic_filter', screen: ChipDemo },
  { label: 'Divider', icon: '24_basic_minus', screen: DividerDemo },
  { label: 'Feedback', icon: '24_basic_notification', screen: FeedbackDemo },
  { label: 'Loading', icon: '24_basic_refresh', screen: LoadingDemo },
  { label: 'TabView', icon: '24_basic_menu', screen: TabViewDemo },
  { label: 'Carousel', icon: '24_basic_image', screen: CarouselDemo },
  { label: 'Collapse & Swipe', icon: '24_basic_arrow_down', screen: CollapseSwipeDemo },
  { label: 'Steps & Progress', icon: '24_basic_flag', screen: StepsDemo },
  { label: 'Slider & Rating', icon: '24_basic_star', screen: SliderRatingDemo },
  { label: 'Stepper', icon: '24_basic_add_circle', screen: StepperDemo },
  { label: 'DatePicker', icon: '24_basic_calendar', screen: DatePickerDemo },
  { label: 'Uploader', icon: '24_basic_upload', screen: UploaderDemo },
  { label: 'Information', icon: '24_basic_info', screen: InformationDemo },
  { label: 'Pagination', icon: '24_basic_more', screen: PaginationDemo },
  { label: 'Tooltip', icon: '24_basic_help', screen: TooltipDemo },
];
// AI-GENERATED END: demo entries config

// AI-GENERATED START: home screen component
const HomeScreen: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);
  const { navigator } = useContext(ApplicationContext);

  useEffect(() => {
    screenRef.current?.setOptions({
      hiddenBack: true,
      headerTitle: 'Component Kit',
    });
  }, []);

  const handlePress = (entry: DemoEntry) => {
    navigator?.push({ screen: entry.screen });
  };

  return (
    <Screen
      ref={screenRef}
      navigation={navigation}
      scrollable
      useGridLayout={false}
      backgroundColor={Colors.black_02}>
      <View style={styles.grid}>
        {DEMO_ENTRIES.map((entry) => (
          <TouchableOpacity
            key={entry.label}
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => handlePress(entry)}>
            <Icon
              source={entry.icon}
              size={24}
              color={Colors.pink_06}
            />
            <Text
              typography="description_default_semibold"
              color={Colors.black_11}
              style={styles.cardLabel}>
              {entry.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Screen>
  );
};

export default HomeScreen;
// AI-GENERATED END: home screen component

// AI-GENERATED START: styles
const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: Spacing.M,
    gap: Spacing.M,
  },
  card: {
    width: '47%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: Spacing.M,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.S,
  },
  cardLabel: {
    textAlign: 'center',
  },
});
// AI-GENERATED END: styles
