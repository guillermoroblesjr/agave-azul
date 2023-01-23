import React, { memo } from 'react'
import styled from 'styled-components/native'

const Root = styled.View`  
  background: #A30832;
  position: absolute;
  height: 100%;
  width: 100%;
`
const AppName = styled.Text`
  color: #fff;
  font-size: 100;
`

interface PropsFromState {}

interface Props {
  name: String
}

type ComponentProps = Props & PropsFromState

const SplashScreen: React.FC<ComponentProps> = memo(function SplashScreen({ name }) {
  return (
    <Root>
      <AppName>{name}</AppName>
    </Root>
  )
})

export default SplashScreen
