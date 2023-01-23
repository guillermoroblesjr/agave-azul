import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Root = styled.View``
const Name = styled.Text``

export default class Faq extends PureComponent {
  static propTypes = {}
  static defaultProps = {}

  constructor (props) {
    super(props)
    this.fileIdentifier = `Faq.js`
    this.state = {}
  }

  render() {
    return (
      <Root>
        <Name>Faq</Name>
      </Root>
    )
  }
}
