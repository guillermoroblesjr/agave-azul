import { connect } from 'react-redux'
import Scroll from './Scroll'
import { mapStateToProps, mapDispatchToProps } from './ScrollContainer'

export default connect(mapStateToProps, mapDispatchToProps)(Scroll)
