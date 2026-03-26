import React, { ComponentType, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const IPHONE_14_WIDTH = 390;
const IPHONE_14_HEIGHT = 844;
const BEZEL_RADIUS = 47;
const NOTCH_WIDTH = 126;
const NOTCH_HEIGHT = 34;

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
          {/* Notch */}
          <View style={styles.notch}>
            <View style={styles.speaker} />
            <View style={styles.camera} />
          </View>
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
  notch: {
    position: 'absolute',
    top: 0,
    left: '50%',
    marginLeft: -NOTCH_WIDTH / 2,
    width: NOTCH_WIDTH,
    height: NOTCH_HEIGHT,
    backgroundColor: '#000',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  speaker: {
    width: 60,
    height: 6,
    backgroundColor: '#1c1c1e',
    borderRadius: 3,
  },
  camera: {
    width: 12,
    height: 12,
    backgroundColor: '#1c1c1e',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#2c2c2e',
  },
  screen: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: BEZEL_RADIUS - 10,
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
