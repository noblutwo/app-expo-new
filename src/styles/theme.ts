import { Platform } from "react-native";

export const lightTheme = {
    colors: {
      primary: '#888a8d',
      white: '#FFF',
      text: '#000000',
      error: '#FF3B30',
    },
    fontSizes: {
      small: 12,
      medium: 16,
      large: 20,
      fontFamilyRegular:'sans-serif',
    },
    fontFamilies: {
        sansSerif: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto',
        serif: 'Georgia',
        monospace: 'Courier New',
        display: 'Montserrat',
        displayBold: 'Montserrat-Bold',
      },
      colorButtonLogin: '#D71A20',
      colorTextLogin: '#CC122A',
  };
  
  export const darkTheme = {
    colors: {
      primary: '#888a8d',
      background: '#1C1C1E',
      text: '#FFFFFF',
      error: '#FF453A',
    },
    fontSizes: {
      small: 12,
      medium: 16,
      large: 20,
      fontFamilyRegular:'sans-serif',
    },
    fontFamilies: {
        sansSerif: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto',
        serif: 'Georgia',
        monospace: 'Courier New',
        display: 'Montserrat',
        displayBold: 'Montserrat-Bold',
      },
      colorButtonLogin: '#D71A20',
      colorTextLogin: '#CC122A',
  };
  
  export type Theme = typeof lightTheme;