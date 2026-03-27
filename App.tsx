import {StyleSheet} from 'react-native';
import {defaultTheme, Localize, NavigationContainer} from "@momo-kits/foundation";
import language from './localization/language.json';
import Welcome from "@/src/Welcome";
import {Platform} from "react-native";

if (Platform.OS === 'web' && typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = 'input,textarea{border:none!important;outline:none!important}';
  document.head.appendChild(style);
}
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
