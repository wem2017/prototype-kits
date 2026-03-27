import {StyleSheet} from 'react-native';
import {defaultTheme, Localize, NavigationContainer} from "@momo-kits/foundation";
import language from './localization/language.json';
import Welcome from "@/src/Welcome";

export default function App() {
  return (
      <NavigationContainer
          localize={new Localize(language)}
          theme={defaultTheme}
          screen={Welcome}
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
