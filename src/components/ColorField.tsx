import React, { KeyboardEvent, ChangeEvent, ReactElement } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :not(:only-of-type):not(:last-of-type) {
    border-right: 1px solid var(--input-divider);
  }
`

const Input = styled.input`
  background: transparent;
  box-sizing: content-box;
  padding: 0 16px;
  font-size: 24px;
  color: var(--primary-text);
  text-align: center;
  text-transform: uppercase;
  outline: none;
  border: 0;
  border-bottom: 4px solid transparent;
  border-radius: inherit;
  transition: border-bottom-color 200ms ease-out;
  &:focus {
    border-bottom-color: var(--focus-underline);
  }
`

const InnerLabel = styled.label`
  color: var(--input-inner-label);
  font-size: 14px;
  line-height: 22px;
`

const SupplementalText = styled.span`
  position: absolute;
  font-size: 20px;
  color: var(--input-static-text);
`

type Props = {
  identifier: string
  isHex?: boolean
  label: string
  max?: number
  min?: number
  prefix?: string
  size?: number
  suffix?: string
  updateColor: (val: ColorFieldInput) => void
  value: ColorFieldInput
}

function ColorField(props: Props): ReactElement {
  const {
    identifier,
    label,
    value = '',
    updateColor,
    min,
    max,
    prefix,
    suffix,
    size = 4,
    isHex = false,
  } = props

  function handleChange(e: ChangeEvent): void {
    const newValue = (e.target as HTMLInputElement).value

    if (
      (Number(newValue) >= min && Number(newValue) <= max) ||
      (isHex && newValue.length <= 6)
    ) {
      updateColor(newValue)
    }
  }

  function handleKeyDown(e: KeyboardEvent): void {
    if (isHex) return

    if (e.keyCode === 38 && value < max) {
      e.preventDefault()
      updateColor(Number(value) + 1)
    } else if (e.keyCode === 40 && value > min) {
      e.preventDefault()
      updateColor(Number(value) - 1)
    }
  }

  return (
    <Container>
      <InnerLabel htmlFor={identifier}>{label}</InnerLabel>
      {prefix && (
        <SupplementalText
          css="bottom: 4px;left: 8px;"
          data-testid="color-prefix"
        >
          {prefix}
        </SupplementalText>
      )}
      <Input
        id={identifier}
        data-testid="color-field"
        value={value}
        size={size}
        prefix={prefix}
        suffix={suffix}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {suffix && (
        <SupplementalText
          css="bottom: 4px;right: 8px;"
          data-testid="color-suffix"
        >
          {suffix}
        </SupplementalText>
      )}
    </Container>
  )
}

export default ColorField
