/**
 * File: FeedbackDemo.tsx
 * Created At: 2026-04-02 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import {
  PopupNotify,
  Button,
  Screen,
  ScreenRef,
  Text,
  Colors,
  Spacing,
  NavigationScreenProps,
} from '@momo-kits/foundation';
import { SuggestAction } from '@momo-kits/suggest-action';

// AI-GENERATED START: FeedbackDemo component
const FeedbackDemo: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);
  const suggestRef = useRef<any>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    screenRef.current?.setOptions({ headerTitle: 'Feedback Demo' });
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
        {/* PopupNotify */}
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            PopupNotify
          </Text>
          <Button
            title="Show PopupNotify"
            type="outline"
            onPress={() => setShowPopup(true)}
          />
          {showPopup && (
            <PopupNotify
              title="Delete item?"
              description="This action cannot be undone."
              primary={{
                title: 'Delete',
                onPress: () => setShowPopup(false),
              }}
              secondary={{
                title: 'Cancel',
                onPress: () => setShowPopup(false),
              }}
              onIconClose={() => setShowPopup(false)}
              onRequestClose={() => setShowPopup(false)}
            />
          )}
        </View>

        {/* SuggestAction */}
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 12,
            padding: Spacing.M,
            gap: Spacing.S,
          }}
        >
          <Text typography="header_s_semibold" color={Colors.black_11}>
            SuggestAction
          </Text>
          <SuggestAction
            ref={suggestRef}
            message="Complete your profile for better experience!"
            buttonTitle="Complete"
            boldMessage="Complete your profile"
            onPressButton={() => {}}
            onClose={() => {}}
          />
          <Button
            title="Show SuggestAction"
            type="outline"
            onPress={() => suggestRef.current?.show()}
          />
        </View>
      </View>
    </Screen>
  );
};
// AI-GENERATED END: FeedbackDemo component

export default FeedbackDemo;
