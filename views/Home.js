import React from 'react'
import Item from '../components/Item';

import { root } from '../db'
import Container from '../components/Container';
import { Text, Image } from 'react-native';
import image from '../assets/logo-removebg-preview.png'
export default function AppListPage() {
  return (
    <Container>
      <Image source={image} height={80} width={90} />
      <Item title="Aperte aqui para começar" navigateTo="AppList" >Aperte aqui para começar</Item>
    </Container>
  )
}
