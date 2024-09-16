import React from 'react';
import { ImageBackground, ViewStyle, ImageSourcePropType, StyleSheet } from 'react-native';
import { useStyles } from '@/styles/styles';
import { useResponsiveDimensions } from '@/hooks/useResponsiveDimensions';

interface BackgroundImageProps {
  source: ImageSourcePropType;
  children?: React.ReactNode;
  style?: ViewStyle;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ source, children, style }) => {
  const globalStyles = useStyles();
  const dimensions = useResponsiveDimensions();
  return (
    <ImageBackground 
      source={source} 
      style={[
        // styles.backgroundImage, 
        globalStyles.backgroundImage, 
        { width: dimensions.screenWidth, height: dimensions.screenHeight },
        style
      ]} 
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
// });

export default BackgroundImage;