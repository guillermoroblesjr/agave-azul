import React, { memo } from 'react'
import type { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList, Screens } from '~/src/components/Navigation'
import Home from '~/src/components/Home'

// Internal Components
// ...

// Props
export type Props = StackScreenProps<RootStackParamList, Screens.Home>

// Memo'd Component
const HomeScreen: React.FC<Props> = memo(function HomeScreen(props: Props) {
  return (
    <Home navigation={props.navigation} route={props.route} />
  )
})

// Default Export
export default HomeScreen
