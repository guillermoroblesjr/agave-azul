import { connect } from 'react-redux'
import SplashScreen from './SplashScreen'
import { mapStateToProps, mapDispatchToProps } from './SplashScreenContainer'

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
