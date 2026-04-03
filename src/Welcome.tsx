import React, {useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Colors,
  Icon,
  NavigationScreenProps,
  Screen,
  ScreenRef,
  Spacing,
  Text,
} from '@momo-kits/foundation';
import {Tab, TabView} from '@momo-kits/tab-view';

const renderDemoCard = (title: string, description: string) => (
  <View style={styles.demoCard}>
    <Text typography="header_default_bold" color={Colors.black_11}>
      {title}
    </Text>
    <Text typography="description_default_regular" color={Colors.black_10}>
      {description}
    </Text>
  </View>
);

const renderTabIcon = (active: boolean, source: string) => (
  <Icon
    source={source}
    color={active ? Colors.pink_06 : Colors.black_09}
    size={20}
  />
);

const WelcomeScreen: React.FC<NavigationScreenProps> = ({navigation}) => {
  const screenRef = useRef<ScreenRef>(null);

  const basicTabs: Tab[] = [
    {
      title: 'Overview',
      component: renderDemoCard(
        'Basic tabs',
        'Cau hinh toi thieu voi tabs va fitContent de render tot tren web.',
      ),
    },
    {
      title: 'Usage',
      component: renderDemoCard(
        'Basic content',
        'Moi tab chi can title va component la da dung duoc.',
      ),
    },
    {
      title: 'Notes',
      component: renderDemoCard(
        'Web-friendly',
        'Dang dung fitContent nen khong can pager native van preview on.',
      ),
    },
  ];

  const statusTabs: Tab[] = [
    {
      title: 'Home',
      icon: '24_basic_home',
      component: renderDemoCard(
        'icon',
        'Tab nay demo icon string qua prop icon.',
      ),
    },
    {
      title: 'Activity',
      badgeValue: 8,
      component: renderDemoCard(
        'badgeValue',
        'Badge hien so thong bao neu ban truyen badgeValue.',
      ),
    },
    {
      title: 'Alerts',
      showDot: true,
      dotSize: 'large',
      component: renderDemoCard(
        'showDot + dotSize',
        'Dot indicator hop voi cac case co cap nhat moi nhung chua can so cu the.',
      ),
    },
  ];

  const iconTabs: Tab[] = [
    {
      title: 'Wallet',
      renderIcon: active => renderTabIcon(active, '24_finance_wallet'),
      component: renderDemoCard(
        'renderIcon',
        'Ban co the tu custom icon theo active state.',
      ),
    },
    {
      title: 'Bills',
      renderIcon: active => renderTabIcon(active, '24_finance_card_1'),
      component: renderDemoCard(
        'direction="row"',
        'Case nay cho icon nam ngang voi label.',
      ),
    },
    {
      title: 'Scan',
      renderIcon: active => renderTabIcon(active, '24_basic_setting'),
      component: renderDemoCard(
        'selectedColor',
        'Mau active va inactive co the doi bang selectedColor va unselectedColor.',
      ),
    },
  ];

  const scrollableTabs: Tab[] = [
    {
      title: 'All',
      component: renderDemoCard('Scrollable tabs', 'Demo scrollable voi nhieu tab hon chieu rong man hinh.'),
    },
    {
      title: 'Payments',
      component: renderDemoCard('Payments', 'Khi scrollable=true, tab bar se co thanh indicator theo chieu ngang.'),
    },
    {
      title: 'Transfer',
      component: renderDemoCard('Transfer', 'Hop voi title dai hoac so luong tab lon.'),
    },
    {
      title: 'Savings',
      component: renderDemoCard('Savings', 'Moi tab van co the gan badge, icon, dot neu can.'),
    },
    {
      title: 'Rewards',
      component: renderDemoCard('Rewards', 'Scrollable tab bar tren web thuong hop hon fixed width.'),
    },
    {
      title: 'Profile',
      component: renderDemoCard('Profile', 'Ban co the combine voi initialPage de mo san tab mong muon.'),
    },
  ];

  const cardTabs: Tab[] = [
    {
      title: 'Flights',
      renderIcon: active => renderTabIcon(active, '24_travel_plane'),
      component: renderDemoCard(
        'type="card"',
        'Kieu card phu hop cho landing section can nhan manh tab dang duoc chon.',
      ),
    },
    {
      title: 'Hotels',
      badgeValue: 2,
      component: renderDemoCard(
        'badgeValue in card',
        'Card tab van ho tro badge va icon.',
      ),
    },
    {
      title: 'Food',
      showDot: true,
      component: renderDemoCard(
        'showDot in card',
        'Dot indicator cung hoat dong trong card tab.',
      ),
    },
  ];

  useEffect(() => {
    screenRef.current?.setOptions({
      hiddenBack: true,
      headerTitle: 'Welcome',
      headerRight: {
        useShortcut: false,
        useMore: false,
        useCloseIcon: false,
        tools: [
          {
            title: {vi: 'Tiện ích', en: 'Tools'},
            items: [
              {
                icon: '24_basic_setting',
                name: {vi: 'Cài đặt', en: 'Settings'},
                key: 'settings',
              },
            ],
          },
        ],
      },
    });
  }, []);

  return (
    <Screen
      ref={screenRef}
      navigation={navigation}
      scrollable
      useGridLayout={false}
      backgroundColor={Colors.black_02}>
      <View style={styles.bodyPadding}>
        <Text
          typography="header_default_bold"
          color={Colors.black_11}
          style={styles.pageTitle}>
          TabView demo
        </Text>

        <Text typography="description_default_regular" color={Colors.black_10}>
          Man nay dang demo cac props hay dung cua `TabView` de ban copy nhanh
          sang case that.
        </Text>

        <View style={styles.section}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Basic + fitContent
          </Text>
          <TabView tabs={basicTabs} fitContent />
        </View>

        <View style={styles.section}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Icon, badge, dot
          </Text>
          <TabView tabs={statusTabs} fitContent initialPage={1} />
        </View>

        <View style={styles.section}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Custom color + direction row + renderIcon
          </Text>
          <TabView
            tabs={iconTabs}
            fitContent
            direction="row"
            selectedColor={Colors.pink_06}
            unselectedColor={Colors.black_09}
          />
        </View>

        <View style={styles.section}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Scrollable + initialPage
          </Text>
          <TabView
            tabs={scrollableTabs}
            fitContent
            scrollable
            initialPage={2}
            selectedColor={Colors.blue_06}
            unselectedColor={Colors.black_09}
          />
        </View>

        <View style={styles.section}>
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Card type
          </Text>
          <TabView
            tabs={cardTabs}
            fitContent
            type="card"
            selectedColor={Colors.pink_06}
            unselectedColor={Colors.black_10}
          />
        </View>
      </View>
    </Screen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  bodyPadding: {
    padding: Spacing.M,
    gap: Spacing.L,
  },
  pageTitle: {
    alignSelf: 'flex-start',
  },
  section: {
    gap: Spacing.S,
  },
  demoCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: Spacing.M,
    gap: Spacing.S,
    marginTop: Spacing.M,
  },
});
