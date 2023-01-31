import React, { memo } from 'react'
import styled from 'styled-components/native'
import { useAppDispatch } from '~/src/store/hooks'
import { decrement } from '~/src/actions/counter'

// Internal Components
const DecrementButton = styled.Button`
  color: #fff;
  font-size: 40px;
`

// Props
export type Props = {}

// Memo'd Component
const Decrement: React.FC<Props> = memo(function Decrement() {
  const dispatch = useAppDispatch()
  return (
    <DecrementButton
      title={`Decrement`}
      onPress={() => dispatch(decrement())}
    />
  )
})

// Default Export
export default Decrement