import React, { memo } from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'
import type { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList, Screens } from '~/src/components/Navigation'
import { displayName as appName } from '~/app.json'
import { default as Config } from '~/src/config'

let config = Config.get()

// Internal Components
const Root = styled.View`  
  background: ${config.colors.primary};
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`
const AppName = styled.Text`
  color: #fff;
  font-size: 60px;
  font-weight: bold;
  padding-bottom: 40px;
`

// Props
export type Props = StackScreenProps<RootStackParamList, Screens.Splash>

// Memo'd Component
const SplashScreen: React.FC<Props> = memo(function SplashScreen(props: Props) {

  // Navigate away from the SplashScreen and prevent user from going back
  setTimeout(() => {
    props.navigation.replace("Home")
  }, 800)

  return (
    <Root>
      <StatusBar barStyle="light-content" backgroundColor={config.colors.primary} />
      <AppName>{appName}</AppName>
    </Root>
  )
})

// Default Export
export default SplashScreen
