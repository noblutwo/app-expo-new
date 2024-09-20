import {StyleSheet} from 'react-native';

import { useResponsiveDimensions } from '../hooks/useResponsiveDimensions';
import { lightTheme } from './theme';
import { blue100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { Colors } from '@/constants/Colors';

export const useStyles = () => {
  const dimensions = useResponsiveDimensions();
  const itemWidth = (dimensions.width - 40) / 3;
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
      paddingHorizontal:25
    },
    indicatorContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position:'absolute',
      right:0,
      left:0,
      bottom:150
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
    textButton:{
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
      flex:1
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
    imageSliderIconLogin:{
      width: 18,
      height: 18,
      marginLeft: 10,
    },
    imageSliderLogin:{
      width: 30,
      height: 30
    },
    rowTitleLogin:{flexDirection:'row'},
    textLogin:{
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

    //LayoutHome

    containerSectionContainerHome: {
      flex: 1,
      backgroundColor: "#fff",
    },
    topSectionHome: {
      flex:1,
      height: '100%',
    },
    bottomSectionHome: {
      flex: 1
    },
    childBottomSectionHome:{
      flex: 1,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: 'black',
      width: dimensions.width,
      // height: dimensions.height,
      position:'absolute',
      top: 700,
      left: 0
    },
    backgroundImageHome: {
      width: dimensions.width,
      height: 200,
    },
    headerImage: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
      paddingVertical: 40
    },
    headerContainer:{
      height: 300,
    },
    headerContainerHome: {
      // flex: 1,
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 10,
    },
    profileContainerHome: {
      flexDirection: "row",
      gap: 10,
      alignItems: 'center',
    },
    profileImageHome: {
      width: 60,
      height: 60,
      borderRadius: 100,
    },
    nameContainerHome: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
    },
    nameTagHome: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "white",
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      gap: 10,
    },
    identityIconHome: {
      width: 20,
      height: 20,
    },
    searchButtonHome: {
      width: 30,
      height: 30,
      paddingBottom:2,
      borderRadius: 50,
      backgroundColor: 'white',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
    profileImageHomeBottom:{
      width: '100%',
      height: 60,
      borderRadius: 10,
    },
    bottomSectionLayoutHome: {
      flex: 1,
      backgroundColor: "#fff",
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      marginTop: -100,
    },
    contentSectionLayoutHome: {
      padding: 20,
      paddingTop: 30,
      width: dimensions.width
    },
    textSectionLayoutHome: {
      fontSize: 16,
      fontWeight: "bold",
      fontFamily: lightTheme.fontSizes.fontFamilyRegular,
    },
    serviceGroupContainerHome:{
     width: dimensions.width * 0.9,
     flexDirection: "row",
     alignContent: "center",
     justifyContent:"space-between",
     marginVertical: 20
    },
    serviceItemHome:{
      flex:1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
     
    },
    serviceItemTextHome:{
     position: "absolute",
     textAlign: "center",
     top: -15,
     width: 40,
     paddingVertical:1,
     borderRadius: 50,
     backgroundColor:Colors.colorButtonLogin,
     color: 'white',
     left: 50
    },
    iconserviceItemHome:{
      width: 40,
      height: 40,
    },
    serviceItemTitleHome: {},
    textContainer: {
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5, 
    },
    serviceText: {
      textAlign: 'center',
      fontSize: 13, 
      fontFamily: lightTheme.fontSizes.fontFamilyRegular, 
      
    },
    slideLayoutHome: {
      width: dimensions.width,
      justifyContent: "center",
      alignItems: "center",
    },
    titleLayoutHome: {
      fontSize: 15,
      textAlign: "center",
      marginTop: 40,
      fontWeight: "700",
      fontFamily: "sans-serif",
      paddingHorizontal: 10,
      width: 280,
    },
    containerOverlap: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    rowOverlap: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    itemOverlap: {
      width: itemWidth,
      alignItems: 'center',
    },
    imageOverlap: {
      width: 50,
      height: 50,
      marginBottom: 10,
      resizeMode: 'cover',
    },
    titleOverlap: {
      textAlign: 'center',
    },
  });


};