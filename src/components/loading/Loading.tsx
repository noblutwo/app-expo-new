import React, { useEffect, useRef } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import {
  StyleSheet,
  Modal,
  Animated,
  Easing,
  View,
} from "react-native";

interface LoginProps {
  isLoading: boolean;
}

const Loader = ({ isLoading }: LoginProps) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.parallel([
          Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.sequence([
            Animated.timing(scaleAnim, {
              toValue: 1.5,
              duration: 1000,
              easing: Easing.out(Easing.ease),
              useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
              toValue: 1,
              duration: 1000,
              easing: Easing.in(Easing.ease),
              useNativeDriver: true,
            }),
          ]),
        ])
      ).start();
    } else {
      rotateAnim.setValue(0);
      scaleAnim.setValue(1);
    }
  }, [isLoading]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isLoading}
      style={{ zIndex: 1100 }}
      onRequestClose={() => {}}
    >
      <View style={styles.centeredView}>
        <View style={styles.loaderContainer}>
        <Animated.View style={{
              transform: [{ rotate: spin }],
              width: 62,
              height: 62,
              borderRadius: 50,
              position: 'absolute',
            }}>
              <LinearGradient
                colors={['#0393f3', 'transparent', 'transparent']}
                style={styles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              />
            </Animated.View>
          <View style={styles.logoContainer}>
            {/* <AppImage
              source="logo"
              style={styles.logo}
              resizeMode="contain"
            /> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent", 
  },
  loaderContainer: {
    width: 62,
    height: 62,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  spinner: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderTopColor: '#0393f3',
    borderRightColor: '#0393f3',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  logoContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
  },
});

export default Loader;