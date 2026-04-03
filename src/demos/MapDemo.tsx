/**
 * File: MapDemo.tsx
 * Created At: 2026-04-03 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import {
  Screen,
  ScreenRef,
  Text,
  Colors,
  Spacing,
  NavigationScreenProps,
} from '@momo-kits/foundation';
import MapView, { Marker } from 'react-native-maps';

// AI-GENERATED START: MapDemo component
const HCM_REGION = {
  latitude: 10.8231,
  longitude: 106.6297,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

const MARKERS = [
  { id: '1', title: 'MoMo HQ', lat: 10.8231, lng: 106.6297 },
  { id: '2', title: 'Ben Thanh Market', lat: 10.7725, lng: 106.698 },
  { id: '3', title: 'Landmark 81', lat: 10.7952, lng: 106.7219 },
];

const MapDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Map Demo' });
  }, []);

  return (
    <Screen
      ref={screenRef}
      navigation={navigation}
      scrollable
      useGridLayout={false}
      backgroundColor={Colors.black_02}
    >
      <View style={{ padding: Spacing.M, gap: Spacing.L }}>
        {/* Map */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Ho Chi Minh City
          </Text>
          <View
            style={{
              height: 350,
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            <MapView
              style={{ flex: 1 }}
              initialRegion={HCM_REGION}
              scrollEnabled
              zoomEnabled
            >
              {MARKERS.map((marker) => (
                <Marker
                  key={marker.id}
                  coordinate={{
                    latitude: marker.lat,
                    longitude: marker.lng,
                  }}
                  title={marker.title}
                />
              ))}
            </MapView>
          </View>
        </View>

        {/* Markers Info */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Markers
          </Text>
          {MARKERS.map((marker) => (
            <View
              key={marker.id}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: Spacing.S,
                paddingVertical: Spacing.XS,
              }}
            >
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: Colors.pink_06,
                }}
              />
              <Text
                typography="body_default_regular"
                color={Colors.black_11}
              >
                {marker.title}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: MapDemo component

export default MapDemo;
