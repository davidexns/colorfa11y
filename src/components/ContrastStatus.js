import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.span`
  width: 96px;
  text-align: center;
  padding: 8px 16px;
  border-radius: 24px;
  background: ${props =>
    props.isPass
      ? props.theme.statusPassBackground
      : props.theme.statusFailBackground};
  color: ${props =>
    props.isPass
      ? props.theme.statusPassForeground
      : props.theme.statusFailForeground};
  font-weight: 700;
  transition: color 150ms ease-in-out, background 150ms ease-in-out;
`

const ContrastStatus = ({ isPass }) => {
  return (
    <Container isPass={isPass} data-testid="contrast-item-status">
      {isPass ? 'PASS' : 'FAIL'}
    </Container>
  )
}

ContrastStatus.propTypes = {
  isPass: PropTypes.bool.isRequired,
}

export default ContrastStatus
