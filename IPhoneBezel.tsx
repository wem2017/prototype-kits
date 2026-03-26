import React, { ComponentType, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const IPHONE_14_WIDTH = 390;
const IPHONE_14_HEIGHT = 844;
const BEZEL_RADIUS = 47;

// iPhone 14 safe area insets (exported for reference)
export const IPHONE_14_INSETS = {
  top: 47,
  bottom: 34,
  left: 0,
  right: 0,
};

// Override Dimensions for web to return iPhone dimensions
const originalGet = Dimensions.get.bind(Dimensions);
Dimensions.get = (dim: 'window' | 'screen') => {
  if (dim === 'window' || dim === 'screen') {
    return {
      width: IPHONE_14_WIDTH,
      height: IPHONE_14_HEIGHT,
      scale: 1,
      fontScale: 1,
    };
  }
  return originalGet(dim);
};

export function withIPhoneBezel<P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> {
  return function IPhoneBezelWrapper(props: P) {
    useEffect(() => {
      // Emit dimension change event to notify components
      const dimensionData = {
        window: { width: IPHONE_14_WIDTH, height: IPHONE_14_HEIGHT, scale: 1, fontScale: 1 },
        screen: { width: IPHONE_14_WIDTH, height: IPHONE_14_HEIGHT, scale: 1, fontScale: 1 },
      };
      // @ts-ignore - internal API
      Dimensions._update?.(dimensionData);
    }, []);

    return (
      <View style={styles.container}>
        <View style={styles.device}>
          {/* Dynamic Island */}
          <View style={styles.dynamicIsland} />
          {/* Screen content */}
          <View style={styles.screen}>
            <WrappedComponent {...props} />
          </View>
          {/* Home indicator */}
          <View style={styles.homeIndicatorContainer}>
            <View style={styles.homeIndicator} />
          </View>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh' as any,
  },
  device: {
    width: IPHONE_14_WIDTH,
    height: IPHONE_14_HEIGHT,
    backgroundColor: '#000',
    borderRadius: BEZEL_RADIUS,
    borderWidth: 1,
    borderColor: '#1c1c1e',
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 40,
  },
  dynamicIsland: {
    position: 'absolute',
    top: 11,
    left: '50%',
    marginLeft: -62,
    width: 124,
    height: 36,
    backgroundColor: '#000',
    borderRadius: 20,
    zIndex: 10,
  },
  screen: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: BEZEL_RADIUS - 1,
  },
  homeIndicatorContainer: {
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#fff',
    borderRadius: 3,
    opacity: 0.3,
  },
});
