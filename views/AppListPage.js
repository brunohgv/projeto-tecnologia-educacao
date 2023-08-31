import { FlatList } from 'react-native'
import React, { useEffect } from 'react'
import Item from '../components/Item';

import { root } from '../db'
import Container from '../components/Container';

export default function AppListPage({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ title: 'Aplicativos' })
  }, [])

  return (
    <Container>
      <FlatList
        style={{width: '100%'}}
        data={root.apps}
        renderItem={({item}) => <Item title={item.name} image={item.image} navigateTo="App" navigateProps={{ app: item.name }} />}
        keyExtractor={item => item.name}
      />
    </Container>
  )
}

