import { connect } from 'react-redux'
import Faq from './Faq'
import { mapStateToProps, mapDispatchToProps } from './FaqContainer'

export default connect(mapStateToProps, mapDispatchToProps)(Faq)
