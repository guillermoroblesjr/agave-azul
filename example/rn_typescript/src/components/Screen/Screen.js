import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const StatusBar = styled.StatusBar`
  background-color: #A30832;
`
const Root = styled.SafeAreaView`
  flex: 1;
`

export default class Screen extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  static defaultProps = {}

  constructor (props) {
    super(props)
    this.fileIdentifier = `Screen.js`
    this.state = {}
  }

  render() {
    return (
      <Root>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={"#A30832"}
        />
        {this.props.children}
      </Root>
    )
  }
}
