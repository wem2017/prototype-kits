import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';

import App from './App';
import { withIPhoneBezel } from './IPhoneBezel';

const RootComponent = Platform.OS === 'web' ? withIPhoneBezel(App) : App;

registerRootComponent(RootComponent);
