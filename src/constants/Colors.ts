import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
export const FontSize = {
    textLowercase: 16,
    textBigLetters: 18,
    textSmallLetters: 14,
    textSmallTitle: 15,
    textSmall: 13,
    fontSearch: {
        fontSize: 14,
        lightHeight: 20,
        color1: '#3490b5',
        colorUser: '#888888'
    },
    fontSearchBottom: {
        fontSize: 12,
        lightHeight: 20,
        color1: '#3490b5',
        colorUser: '#888888'
    },
    fontFamilyRegular: 'sans-serif',

    fontFamilyMedium: 'Roboto-Medium',

    colorUser: 'rgb(83,84,86)',
    lineOne: 'rgb(94,94,94)',
    lineTwo: 'rgb(210,215,221)',

    colorServiceTitle: 'rgb(39,94,159)',
    colorUserTitle: 'rgb(119,119,119)'
}

export const Colors = {
    colorButtonLogin: '#D71A20',
    colorTextLogin: '#CC122A',
    colorLogin: 'transparent',
    colorSilver: '#9BA1A6',
    light: {
        text: '#11181C',
        background: '#fff',
        icon: '#687076',
        tabIconDefault: '#687076',
    },

    dark: {
        text: '#ECEDEE',
        background: '#151718',

        icon: '#9BA1A6',
        tabIconDefault: '#9BA1A6',
    },
};

export const rS = (size: number) => {
    return scale(size)
}
export const rV = (size: number) => {
    return verticalScale(size)
}
export const rMS = (size: number) => {
    return moderateScale(size)
}