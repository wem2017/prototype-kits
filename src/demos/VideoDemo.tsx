/**
 * File: VideoDemo.tsx
 * Created At: 2026-04-03 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import {
  Screen,
  ScreenRef,
  Text,
  Button,
  Colors,
  Spacing,
  NavigationScreenProps,
} from '@momo-kits/foundation';
import Video from 'react-native-video';

// AI-GENERATED START: VideoDemo component
const SAMPLE_VIDEO =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const VideoDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);
  const videoRef = useRef<any>(null);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Video Demo' });
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
        {/* Video Player */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Video Player
          </Text>
          <View
            style={{
              height: 220,
              borderRadius: 12,
              overflow: 'hidden',
              backgroundColor: Colors.black_11,
            }}
          >
            <Video
              ref={videoRef}
              source={{ uri: SAMPLE_VIDEO }}
              style={{ flex: 1 }}
              resizeMode="contain"
              paused={paused}
              repeat
            />
          </View>
        </View>

        {/* Controls */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            Controls
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              gap: Spacing.M,
            }}
          >
            <Button
              title={paused ? 'Play' : 'Pause'}
              type="primary"
              size="medium"
              onPress={() => setPaused(!paused)}
            />
            <Button
              title="Restart"
              type="secondary"
              size="medium"
              onPress={() => {
                videoRef.current?.seek(0);
                setPaused(false);
              }}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: VideoDemo component

export default VideoDemo;
