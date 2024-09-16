import { useState, useEffect } from 'react';
import { Dimensions, ScaledSize, Platform, PixelRatio } from 'react-native';

interface ResponsiveDimensions extends ScaledSize {
  isSmallDevice: boolean;
  isTablet: boolean;
  isLargeDevice: boolean;
  screenWidth: number;
  screenHeight: number;
}

export const useResponsiveDimensions = (): ResponsiveDimensions => {
  const [dimensions, setDimensions] = useState<ResponsiveDimensions>(() => {
    const screen = Dimensions.get('screen');
    const window = Dimensions.get('window');
    return {
      ...window,
      screenWidth: screen.width,
      screenHeight: screen.height,
      isSmallDevice: window.width < 375,
      isTablet: isTabletDevice(window.width, window.height),
      isLargeDevice: window.width >= 1024
    };
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ screen, window }) => {
      setDimensions({
        ...window,
        screenWidth: screen.width,
        screenHeight: screen.height,
        isSmallDevice: window.width < 375,
        isTablet: isTabletDevice(window.width, window.height),
        isLargeDevice: window.width >= 1024
      });
    });
    return () => subscription?.remove();
  }, []);

  return dimensions;
};

const isTabletDevice = (width: number, height: number): boolean => {
  const pixelDensity = PixelRatio.get();
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;

  if (Platform.OS === 'android') {
    return (adjustedWidth >= 600 && adjustedHeight >= 600);
  } else {
    const aspectRatio = height / width;
    return (
      (width >= 768 && height >= 1024) || 
      (width >= 1024 && height >= 768) || 
      (aspectRatio <= 1.6 && aspectRatio >= 1/1.6)
    );
  }
};