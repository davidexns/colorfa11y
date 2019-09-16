import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :not(:only-of-type):not(:last-of-type) {
    border-right: 1px solid ${props => props.theme.inputDivider};
  }
`

const Input = styled.input`
  background: transparent;
  box-sizing: content-box;
  padding: 0 16px;
  font-size: 24px;
  color: ${props => props.theme.primaryText};
  text-align: center;
  text-transform: uppercase;
  outline: none;
  border: 0;
  border-bottom: 4px solid transparent;
  border-radius: inherit;
  transition: border-bottom-color 200ms ease-out;

  &:focus {
    border-bottom-color: ${props => props.theme.focusUnderline};
  }
`

const InnerLabel = styled.label`
  color: ${props => props.theme.inputInnerLabel};
  font-size: 14px;
  line-height: 22px;
`

const SupplementalText = styled.span`
  position: absolute;
  font-size: 20px;
  color: ${props => props.theme.inputStaticText};
`

const ColorField = props => {
  const {
    identifier,
    label,
    value,
    updateColor,
    type,
    min,
    max,
    prefix,
    suffix,
    size,
    isHex,
  } = props

  function handleChange(e) {
    const newValue = e.target.value

    if (
      (newValue >= min && newValue <= max) ||
      (isHex && newValue.length <= 6)
    ) {
      updateColor(newValue)
    }
  }

  function handleKeyDown(e) {
    if (isHex) return

    if (e.keyCode === 38 && value < max) {
      e.preventDefault()
      updateColor(value + 1)
    } else if (e.keyCode === 40 && value > min) {
      e.preventDefault()
      updateColor(value - 1)
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
        type={type}
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

ColorField.defaultProps = {
  isHex: false,
  size: 4,
  type: 'text',
  value: '',
}

ColorField.propTypes = {
  identifier: PropTypes.string,
  isHex: PropTypes.bool,
  label: PropTypes.string.isRequired,
  max: PropTypes.number,
  min: PropTypes.number,
  updateColor: PropTypes.func.isRequired,
  prefix: PropTypes.string,
  size: PropTypes.number,
  suffix: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default ColorField
