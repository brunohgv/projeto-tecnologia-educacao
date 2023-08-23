import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import colors from '../constants/colors'

export default function Item({title, image, navigateTo, navigateProps}) {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      title={title}
      style={styles.itemButton}
      onPress={() => navigation.navigate(navigateTo, navigateProps)}
    >
        {image && <Image source={{ uri: image}} height={80} width={90} style={styles.image}></Image>}
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemButton: {
    backgroundColor: '#D4E2D4',
    borderColor: '#FFCACC',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: '#383B53',
    textAlign: 'center',
    fontSize: 32,
  },
  image: {
    objectFit: 'contain',
    marginRight: 8,
  }
});
