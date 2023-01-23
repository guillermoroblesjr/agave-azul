import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Root = styled.ScrollView``

export default class Scroll extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  static defaultProps = {}

  constructor (props) {
    super(props)
    this.fileIdentifier = `Scroll.js`
    this.state = {}
  }

  render() {
    return (
      <Root keyboardShouldPersistTaps={`always`}>
        {this.props.children}
      </Root>
    )
  }
}
