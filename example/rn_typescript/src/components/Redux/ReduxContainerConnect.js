import { connect } from 'react-redux'
import Redux from './Redux'
import { mapStateToProps, mapDispatchToProps } from './ReduxContainer'

export default connect(mapStateToProps, mapDispatchToProps)(Redux)
