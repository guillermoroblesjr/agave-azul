import { connect } from 'react-redux'
import Screen from './Screen'
import { mapStateToProps, mapDispatchToProps } from './ScreenContainer'

export default connect(mapStateToProps, mapDispatchToProps)(Screen)
