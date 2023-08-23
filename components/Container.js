import { View, Text, StyleSheet } from 'react-native'
import React, { Children } from 'react'
import colors from '../constants/colors'

export default function Container({children}) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: '#FAF3F0',
    alignItems: 'center',
    justifyContent: 'center',
  }
})