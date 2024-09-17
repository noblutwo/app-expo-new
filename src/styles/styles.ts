import {StyleSheet} from 'react-native';

import {useResponsiveDimensions} from '../hooks/useResponsiveDimensions';
import {lightTheme} from './theme';

export const useStyles = () => {
    const dimensions = useResponsiveDimensions();
    return StyleSheet.create({
        container: {
            flex: 1,
            paddingVertical: 20,
        },
        containerSlider: {
            flex: 5,
            alignItems: 'center',
            justifyContent: 'center',
        },
        imageSlider: {
            height: 50,
            width: 50,
        },
        slide: {
            width: dimensions.width,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingHorizontal: 60,
            backgroundColor: 'red'
        },
        image: {
            width: dimensions.width * 0.8,
            height: 280,
            marginBottom: 10,
            marginTop: 60,
        },
        title: {
            fontSize: 14,
            textAlign: 'center',
            marginTop: 35,
            marginBottom: 10,
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            paddingHorizontal: 25
        },
        indicatorContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: 0,
            left: 0,
            bottom: 150
        },
        indicator: {
            marginHorizontal: 3,
            borderRadius: 50,
        },
        buttonRow: {
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            paddingHorizontal: 20,
            marginTop: 20,
            gap: 20,
        },
        // home screen
        homeContainer: {
            flex: 1,
        },


        //RootLayout
        loadingContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        containerLyout: {
            flex: 1,
            // backgroundColor: '#79797e',
        },
        contentLayout: {
            flex: 1,
        },
        loadingImage: {
            width: dimensions.width,
            height: dimensions.height,
        },
        sliderFooter: {
            flex: 2
        },
        backgroundImage: {
            width: dimensions.width,
            height: dimensions.height,
        },
        // Button Click
        buttonClick: {
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 100,
            padding: 10,
        },
        textButton: {
            color: lightTheme.colors.white,
            fontSize: lightTheme.fontSizes.medium,
            fontWeight: 'bold',
            fontFamily: 'sans-serif'
        },
        //login
        containerLogin: {
            width: dimensions.width,
            paddingHorizontal: dimensions.width * 0.05,
            paddingVertical: dimensions.width * 0.005,
            backgroundColor: '#fff',
            flex: 1
        },
        titleLogin: {
            fontSize: dimensions.width < 600 ? 20 : 28,
            fontWeight: "bold"
        },
        contentLogin: {
            flexDirection: "column",
        },
        buttonLogin: {
            paddingVertical: 5,
            borderRadius: 10,
            marginVertical: 5,
        },
        buttonLabelLogin: {
            color: "white",
            fontFamily: lightTheme.fontSizes.fontFamilyRegular,
            fontWeight: "bold",
            fontSize: lightTheme.fontSizes.medium,
        },
        imageSliderIconLogin: {
            width: 18,
            height: 18,
            marginLeft: 10,
        },
        imageSliderLogin: {
            width: 30,
            height: 30
        },
        rowTitleLogin: {flexDirection: 'row'},
        textLogin: {
            fontSize: lightTheme.fontSizes.medium,
            fontFamily: lightTheme.fontSizes.fontFamilyRegular,
        },
        columnIconTitleLogin: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        rowIconTitleLogin: {
            flexDirection: 'row'
        },
        //   page setting
        wrapSetting: {
            width: "60%",
            justifyContent: 'center',

        },
        wrapIconSetting: {
            width: "40%",
            justifyContent: 'center',
        }
    });
};