import React, { memo } from 'react'
import styled from 'styled-components/native'
import { useAppSelector, useAppDispatch } from '~/src/store/hooks'
import { increment } from '~/src/actions/counter'

// Internal Components
const IncrementButton = styled.Button`
  color: #fff;
  font-size: 40px;
`

// Props
export type Props = {}

// Memo'd Component
const Increment: React.FC<Props> = memo(function Increment() {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    return (
        <IncrementButton
          title={`Increment`}
          onPress={() => dispatch(increment())}
        />
      )
  })

// Default Export
export default Increment
