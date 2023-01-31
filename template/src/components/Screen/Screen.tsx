import React, { memo } from 'react'
import styled from 'styled-components/native'
import { default as Config } from '~/src/config'

let config = Config.get()

// Internal Components
const StatusBar = styled.StatusBar``
const Root = styled.SafeAreaView`
  flex: 1;
`

// Props
export type Props = {
  children: JSX.Element;
}

// Memo'd Component
const Screen: React.FC<Props> = memo(function Screen({ children }) {
  return (
    <Root>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={config.colors.primary}
      />
      {children}
    </Root>
  )
})

// Default Export
export default Screen
