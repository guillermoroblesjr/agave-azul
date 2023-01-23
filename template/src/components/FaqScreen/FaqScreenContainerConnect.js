import { connect } from 'react-redux'
import FaqScreen from './FaqScreen'
import { mapStateToProps, mapDispatchToProps } from './FaqScreenContainer'

export default connect(mapStateToProps, mapDispatchToProps)(FaqScreen)
