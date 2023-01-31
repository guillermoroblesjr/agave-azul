import React, { memo } from 'react'
import Splash from '~/src/components/Splash'
import { RootStackParamList, Screens } from '~/src/components/Navigation'
import type { StackScreenProps } from '@react-navigation/stack'

// Internal Components
// ...

// Props
export type Props = StackScreenProps<RootStackParamList, Screens.Splash>

// Memo'd Component
const SplashScreen: React.FC<Props> = memo(function SplashScreen(props: Props) {
  return (
    <Splash navigation={props.navigation} route={props.route} />
  )
})

// Default Export
export default SplashScreen
