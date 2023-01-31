import React, { memo } from 'react'
import styled from 'styled-components/native'
import type { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList, Screens } from '~/src/components/Navigation'
import Screen from '~/src/components/Screen'
import { default as Config } from '~/src/config'

let config = Config.get()

// Internal Components
const Root = styled.View`  
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Name = styled.Text`
  font-size: 20px;
  padding-bottom: 40px;
`
const TitleButton = styled.Pressable`
  align-items: center;
  justify-content: center;
  padding-vertical: 12px;
  padding-horizontal: 32px;
  border-radius: ${config.buttons.borderRadius}px;
  elevation: 3;
  background: ${config.colors.primary};
`
const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-size: 16px;
  line-height: 21px;
  font-weight: bold;
  letter-spacing: 0.25px;
`

// Props
export type Props = StackScreenProps<RootStackParamList, Screens.Home>

// Memo'd Component
const Home: React.FC<Props> = memo(function Home(props: Props) {
  return (
    <Screen>
      <Root>
        <Name>Try out the Counter feature!</Name>
        <TitleButton onPress={() => props.navigation.navigate("Counter")}>
          <Title>Go!</Title>
        </TitleButton>  
      </Root>
    </Screen>
  )
})

// Default Export
export default Home
