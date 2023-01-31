import React, { memo } from 'react'
import styled from 'styled-components/native'
import { useAppSelector } from '~/src/store/hooks'
import { default as Config } from '~/src/config'

let config = Config.get()

// Internal Components
const Root = styled.Text`
  color: ${config.colors.primary};
  font-size: 40px;
  padding-bottom: 40px;
`

// Props
export type Props = {}

// Memo'd Component
const Count: React.FC<Props> = memo(function Count() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)

  return (
    <Root>{count}</Root>
  )
})

// Default Export
export default Count
