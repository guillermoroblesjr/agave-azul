import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { Container as Screen } from '~/src/components/Screen'

const Root = styled.View``
const Name = styled.Text``

export default class FaqScreen extends PureComponent {
  static propTypes = {}
  static defaultProps = {}

  constructor (props) {
    super(props)
    this.fileIdentifier = `FaqScreen.js`
    this.state = {}
  }

  render() {
    return (
      <Screen>
        <Root>
          <Name>FaqScreen</Name>
        </Root>
      </Screen>
    )
  }
}
