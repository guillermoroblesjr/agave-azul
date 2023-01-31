import React, { memo } from 'react'
import styled from 'styled-components/native'
import type { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList, Screens } from '~/src/components/Navigation'
import Increment from '~/src/components/Increment'
import Decrement from '~/src/components/Decrement'
import Count from '~/src/components/Count'
import { displayName as appName } from '~/app.json'
import { useAppSelector } from '~/src/store/hooks'
import { default as Config } from '~/src/config'

let config = Config.get()
let emojis = [
  '😂', '🔥', '😈', '😁', '😆', '😅', '🤣', '🙃', '😉', '😊',
]

// Internal Components
const Scroll = styled.ScrollView``
const Root = styled.View`  
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  padding-top: 40px;
`
const AppName = styled.Text`
  color: ${config.colors.primary};
  font-size: 40px;
  font-weight: bold;
  padding-bottom: 40px;
`
const Emoji = styled.Text`
  font-size: 80px;
`
const Spacer = styled.View`
  height: 40px;
`

// Props
export type Props = StackScreenProps<RootStackParamList, Screens.Counter>

// Memo'd Component
const Counter: React.FC<Props> = memo(function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  let getStuff = () => {
    let stuff = []

    for (let i = 0; i < Math.abs(count); i++) {
      stuff.push(<Emoji key={i}>{ (count < 0 ? "-" : "") + emojis[ Math.abs((i % 10)) ]}</Emoji>)
    }
    return stuff
  }

  let stuff = getStuff()

  return (
    <Scroll>
      <Root>
        <AppName>{appName}</AppName>
        <Count />
        <Increment />
        <Decrement />
        <Spacer />
        {stuff}
      </Root>
    </Scroll>
  )
})

// Default Export
export default Counter
