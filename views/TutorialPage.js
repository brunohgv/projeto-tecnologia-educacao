import { StyleSheet, Text } from 'react-native'
import React, { useEffect } from 'react'
import Container from '../components/Container'
import { useRoute } from '@react-navigation/native'
import YoutubePlayer from 'react-native-youtube-iframe'

export default function TutorialPage({ navigation }) {
  const route = useRoute()
  const { app, resource } = route.params

  useEffect(() => {
    navigation.setOptions({ title: app })
  }, [])

  return (
    <Container>
      <Text style={styles.text}>{resource.title}</Text>
      <YoutubePlayer
        height={400}
        width={'100%'}
        videoId={resource.url.replace('https://www.youtube.com/watch?v=', '')}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginBottom: 8,
  }
})