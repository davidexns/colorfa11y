import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getTextColor, getBackgroundColor } from '../utils/style-utils'

const Container = styled.span`
  width: 96px;
  text-align: center;
  padding: 8px 16px;
  border-radius: 24px;
  background-color: ${props => getBackgroundColor(props.isPass)};
  color: ${props => getTextColor(props.isPass)};
  font-weight: 700;
  transition: color 150ms ease-in-out, background-color 150ms ease-in-out;
`

const ContrastStatus = ({ isPass }) => {
  return <Container isPass={isPass}>{isPass ? 'PASS' : 'FAIL'}</Container>
}

ContrastStatus.propTypes = {
  isPass: PropTypes.bool.isRequired,
}

export default ContrastStatus
