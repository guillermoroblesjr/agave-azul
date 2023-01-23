import { connect } from 'react-redux'
import Main from './Main'
import { mapStateToProps, mapDispatchToProps } from './MainContainer'

export default connect(mapStateToProps, mapDispatchToProps)(Main)
