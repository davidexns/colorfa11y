import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getTextColor, getBackgroundColor } from '../utils/style-utils'

const Container = styled.span`
  height: 48px;
  width: 96px;
  text-align: center;
  padding: 11px 16px;
  border-radius: 24px;
  background-color: ${props => getBackgroundColor(props.isPass)};
  color: ${props => getTextColor(props.isPass)};
  font-weight: 700;
  transition: color 150ms ease-in-out, background-color 150ms ease-in-out;
`

const GraphicalContrastIndicator = ({ contrast }) => {
  const isPass = contrast >= 3

  return <Container isPass={isPass}>{isPass ? 'PASS' : 'FAIL'}</Container>
}

GraphicalContrastIndicator.propTypes = {
  contrast: PropTypes.number.isRequired,
}

export default GraphicalContrastIndicator
