import {StyleSheet, View} from 'react-native';
import {defaultTheme, Localize, NavigationContainer} from "@momo-kits/foundation";
import language from './localization/language.json';

export default function App() {
  return (
      <NavigationContainer
          localize={new Localize(language)}
          theme={defaultTheme}
          screen={() => {
            return <View style={{flex: 1, backgroundColor: 'red'}}/>;
          }}
          maxApi={undefined}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
