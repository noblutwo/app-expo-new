import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { imageSources } from './ImgReq'
import { useStyles } from '@/styles/styles';

export default function Logo() {
  const styles = useStyles();
  return <Image source={imageSources["light"]} style={styles.imageLogo} />
}
