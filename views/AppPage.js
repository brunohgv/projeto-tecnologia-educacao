import { FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import Item from '../components/Item'

import { root } from '../db'
import Container from '../components/Container';

export default function AppPage({ navigation }) {
  const route = useRoute()
  const app = route.params.app

  useEffect(() => {
    navigation.setOptions({ title: app })
  }, [])

  const features = root.apps.find((el) => el.name == app).features
  return (
    <Container>
      <FlatList
        style={{width: '100%'}}
        data={features}
        renderItem={({item}) => <Item title={item.name} navigateTo="Tutorial" navigateProps={{ app: app, resource: item.resource}} />}
        keyExtractor={item => item.name}
      />
    </Container>
  )
}

