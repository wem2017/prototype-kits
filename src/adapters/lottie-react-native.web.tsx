/**
 * File: lottie-react-native.web.tsx
 * Created At: 2026-04-03 12:00:00 +07:00
 * Created By: AI
 * AI Agent: Claude Code
 * Model: claude-opus-4-6
 */

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// AI-GENERATED START: web adapter for lottie-react-native using dotlottie-react
const LottieView = React.forwardRef<any, any>(
  ({ source, autoPlay, loop, speed, style, ...props }, ref) => {
    const src = typeof source === 'string'
      ? source
      : typeof source === 'object' && source?.uri
        ? source.uri
        : undefined;

    return (
      <div ref={ref as any} style={{ width: '100%', height: '100%', ...style }}>
        <DotLottieReact
          src={src}
          autoplay={autoPlay}
          loop={loop}
          speed={speed}
        />
      </div>
    );
  },
);

LottieView.displayName = 'LottieView';

export default LottieView;
// AI-GENERATED END: web adapter for lottie-react-native using dotlottie-react
