import React from 'react'
import styled from 'styled-components'

const Container = styled.span<{ isPass: boolean }>`
  width: 96px;
  text-align: center;
  padding: 8px 16px;
  border-radius: 24px;
  background: ${props =>
    props.isPass
      ? 'var(--status-pass-background)'
      : 'var(--status-fail-background)'};
  color: ${props =>
    props.isPass
      ? 'var(--status-pass-foreground)'
      : 'var(--status-fail-foreground)'};
  font-weight: 700;
  transition: color 150ms ease-in-out, background 150ms ease-in-out;
  will-change: color, background;
`

const ContrastStatus = ({ isPass }: Props) => {
  return (
    <Container isPass={isPass} data-testid="contrast-item-status">
      {isPass ? 'PASS' : 'FAIL'}
    </Container>
  )
}

type Props = {
  isPass: boolean
}

export default ContrastStatus
