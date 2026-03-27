import React, {useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, NavigationScreenProps, Screen, ScreenRef, Spacing, Text,} from '@momo-kits/foundation';

const WelcomeScreen: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);


  useEffect(() => {
    screenRef.current?.setOptions({
      hiddenBack: true,
      headerTitle: "Welcome",
      headerRight: {
        useShortcut: false,
        useMore: false,
        useCloseIcon: false,
        tools: [
          {
            title: { vi: 'Tiện ích', en: 'Tools' },
            items: [
              {
                icon: '24_basic_setting',
                name: { vi: 'Cài đặt', en: 'Settings' },
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
      backgroundColor={Colors.black_02}
    >
      <View style={styles.bodyPadding}>

        <Text
          typography="description_default_regular"
          color={Colors.black_12}
        >
          Welcome
        </Text>
      </View>
    </Screen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  bodyPadding: {
    padding: Spacing.M,
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
  },

});
