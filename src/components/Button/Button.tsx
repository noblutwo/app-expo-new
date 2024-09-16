
import { FontSize } from '@/constants/Colors'
import { theme } from '@/hooks/theme'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'

export const Button = ({ mode, style, ...props }: any) => {
  return (
    <PaperButton
         style={[
              styles.button,
              mode === 'outlined' && { backgroundColor: theme.colors.surface },
              style,
          ]}
          labelStyle={styles.text}
          mode={mode}
          {...props}    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    // paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: FontSize.textLowercase,
    lineHeight: 26,
  },
})