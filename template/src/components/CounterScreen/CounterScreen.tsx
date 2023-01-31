import React, { memo } from 'react'
import type { StackScreenProps } from '@react-navigation/stack'
import Counter from '~/src/components/Counter'
import { RootStackParamList, Screens } from '~/src/components/Navigation'

// Internal Components
// ...

// Props
export type Props = StackScreenProps<RootStackParamList, Screens.Counter>

// Memo'd Component
const CounterScreen: React.FC<Props> = memo(function CounterScreen(props: Props) {
  return (
    <Counter navigation={props.navigation} route={props.route} />
  )
})

// Default Export
export default CounterScreen
