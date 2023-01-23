import { memo } from 'react';
// import { Container as RootNavigator } from '~/src/components/RootNavigator'
import { Component as SplashScreen } from '~/src/components/SplashScreen'
import { name as appName } from '~/app.json'

// This component should only include the components that come AFTER Redux
// and BEFORE the RootNavigator.

interface PropsFromState {}

interface Props {}

type ComponentProps = Props & PropsFromState

const Main: React.FC<ComponentProps> = memo(function Main() {
  return (
    <SplashScreen name={appName} />
  )
})

export default Main

