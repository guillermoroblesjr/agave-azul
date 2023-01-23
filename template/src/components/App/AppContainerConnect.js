import { connect } from 'react-redux'
import App from './App'
import { mapStateToProps, mapDispatchToProps } from './AppContainer'

export default connect(mapStateToProps, mapDispatchToProps)(App)
