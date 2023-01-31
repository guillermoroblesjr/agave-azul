import React, { memo } from 'react';
import Navigation from '~/src/components/Navigation'

// This component should only include the components that come AFTER Redux
// and BEFORE the Navigation.

// Internal Components
// ...

// Props
export type Props = {}

// Memo'd Component
const Main: React.FC<Props> = memo(function Main() {
  return (
    <Navigation />
  )
})

// Default Export
export default Main
