/**
 * File: TabViewDemo.tsx
 * Created At: 2026-04-02 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Screen,
  ScreenRef,
  Text,
  Colors,
  Spacing,
  NavigationScreenProps,
} from '@momo-kits/foundation';
import { TabView, Tab } from '@momo-kits/tab-view';

// AI-GENERATED START: TabViewDemo component
const TabViewDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'TabView Demo' });
  }, []);

  // Basic TabView — 3 tabs with fitContent
  const basicTabs: Tab[] = [
    {
      title: 'Tab 1',
      component: (
        <View style={styles.card}>
          <Text typography="body_default_regular">Content 1</Text>
        </View>
      ),
    },
    {
      title: 'Tab 2',
      component: (
        <View style={styles.card}>
          <Text typography="body_default_regular">Content 2</Text>
        </View>
      ),
    },
    {
      title: 'Tab 3',
      component: (
        <View style={styles.card}>
          <Text typography="body_default_regular">Content 3</Text>
        </View>
      ),
    },
  ];

  // With Badge — tabs with badgeValue and showDot
  const badgeTabs: Tab[] = [
    {
      title: 'Home',
      badgeValue: 5,
      component: (
        <View style={styles.card}>
          <Text typography="body_default_regular">
            Badge shows notification count via badgeValue.
          </Text>
        </View>
      ),
    },
    {
      title: 'Alerts',
      showDot: true,
      dotSize: 'large',
      component: (
        <View style={styles.card}>
          <Text typography="body_default_regular">
            Dot indicator for new updates without a specific count.
          </Text>
        </View>
      ),
    },
    {
      title: 'Messages',
      badgeValue: 12,
      component: (
        <View style={styles.card}>
          <Text typography="body_default_regular">
            Another badge example with a higher count.
          </Text>
        </View>
      ),
    },
  ];

  // Card type tabs
  const cardTabs: Tab[] = [
    {
      title: 'Flights',
      component: (
        <View style={styles.card}>
          <Text typography="body_default_regular">
            Card type highlights the selected tab with a card style.
          </Text>
        </View>
      ),
    },
    {
      title: 'Hotels',
      component: (
        <View style={styles.card}>
          <Text typography="body_default_regular">
            Suitable for landing sections that need emphasis.
          </Text>
        </View>
      ),
    },
    {
      title: 'Food',
      component: (
        <View style={styles.card}>
          <Text typography="body_default_regular">
            Card tabs also support badge, dot, and icon props.
          </Text>
        </View>
      ),
    },
  ];

  // Scrollable tabs — 6+ tabs
  const scrollableTabs: Tab[] = [
    {
      title: 'All',
      component: (
        <View style={styles.card}>
          <Text typography="body_default_regular">
            Scrollable mode for many tabs.
          </Text>
        </View>
      ),
    },
    {
      title: 'Payments',
      component: (
        <View style={styles.card}>
          <Text typography="body_default_regular">
            Tab bar scrolls horizontally when tabs exceed screen width.
          </Text>
        </View>
      ),
    },
    {
      title: 'Transfer',
      component: (
        <View style={styles.card}>
          <Text typography="body_default_regular">
            Works well with long titles or many tabs.
          </Text>
        </View>
      ),
    },
    {
      title: 'Savings',
      component: (
        <View style={styles.card}>
          <Text typography="body_default_regular">
            Each tab can still use badge, icon, or dot.
          </Text>
        </View>
      ),
    },
    {
      title: 'Rewards',
      component: (
        <View style={styles.card}>
          <Text typography="body_default_regular">
            Scrollable tabs on web are often more usable than fixed width.
          </Text>
        </View>
      ),
    },
    {
      title: 'Profile',
      component: (
        <View style={styles.card}>
          <Text typography="body_default_regular">
            Combine with initialPage to open a specific tab.
          </Text>
        </View>
      ),
    },
  ];

  return (
    <Screen
      ref={screenRef}
      navigation={navigation}
      scrollable
      useGridLayout={false}
      backgroundColor={Colors.black_02}
    >
      <View style={{ padding: Spacing.M, gap: Spacing.L }}>
        {/* Basic TabView */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Basic + fitContent
          </Text>
          <TabView tabs={basicTabs} fitContent />
        </View>

        {/* With Badge */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            With Badge & Dot
          </Text>
          <TabView tabs={badgeTabs} fitContent />
        </View>

        {/* Card type */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Card Type
          </Text>
          <TabView tabs={cardTabs} fitContent type="card" />
        </View>

        {/* Scrollable */}
        <View style={{ gap: Spacing.S }}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Scrollable
          </Text>
          <TabView tabs={scrollableTabs} fitContent scrollable />
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: TabViewDemo component

export default TabViewDemo;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: Spacing.M,
    marginTop: Spacing.S,
  },
});
