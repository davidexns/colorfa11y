import React, { FormEvent } from 'react'
import styled from 'styled-components'

import Row from './Row'
import ColorField from './ColorField'
import media from '../styles/media'

const Form = styled.form`
  display: flex;
  flex-direction: column;

  ${media.desktop} {
    flex-direction: row;
    align-items: center;
  }

  :not(:last-child) {
    margin-bottom: 1.45rem;
  }
`

const Header = styled.h3`
  display: inline-block;
  margin-bottom: 0;
  margin-right: auto;
  margin-bottom: 16px;

  ${media.desktop} {
    margin-bottom: 0;
    margin-top: 1.45rem;
  }
`

const FieldsetWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Fieldset = styled.fieldset`
  display: inline-block;
  border: none;
  border-top: 1px solid var(--kebab-border);
  margin-bottom: 0;
  :not(:last-child) {
    margin-right: 16px;
  }
`

const Legend = styled.legend`
  padding: 4px 8px;
  color: var(--supplemental-text);
  font-size: 18px;
  width: auto;
  text-align: center;
`

const InputContainer = styled(Row)`
  border: 2px solid var(--input-border);
  border-radius: 6px;
  padding: 6px;
  background-color: var(--input-background);
  margin-bottom: 0;
`

const ColorSet = (props: Props) => {
  const {
    colors: { h, s, l, r, g, b, hex },
    header,
    updateColor,
    setIdentifier,
  } = props

  return (
    <Form
      onSubmit={(e: FormEvent) => e.preventDefault()}
      data-testid={`${header}-form`}
    >
      <Header>{header}</Header>
      <FieldsetWrapper>
        <Fieldset>
          <Legend>HSL</Legend>
          <InputContainer>
            <ColorField
              identifier={`${setIdentifier}-hue`}
              label="Hue"
              value={h}
              min={0}
              max={360}
              updateColor={val => updateColor('h', val)}
            />
            <ColorField
              identifier={`${setIdentifier}-saturation`}
              label="Saturation"
              min={0}
              max={100}
              value={s}
              suffix="%"
              updateColor={val => updateColor('s', val)}
            />
            <ColorField
              identifier={`${setIdentifier}-lightness`}
              label="Lightness"
              min={0}
              max={100}
              value={l}
              suffix="%"
              updateColor={val => updateColor('l', val)}
            />
          </InputContainer>
        </Fieldset>
        <Fieldset>
          <Legend>RGB</Legend>
          <InputContainer>
            <ColorField
              identifier={`${setIdentifier}-red`}
              label="Red"
              min={0}
              max={255}
              value={r}
              updateColor={val => updateColor('r', val)}
            />
            <ColorField
              identifier={`${setIdentifier}-green`}
              label="Green"
              min={0}
              max={255}
              value={g}
              updateColor={val => updateColor('g', val)}
            />
            <ColorField
              identifier={`${setIdentifier}-blue`}
              label="Blue"
              min={0}
              max={255}
              value={b}
              updateColor={val => updateColor('b', val)}
            />
          </InputContainer>
        </Fieldset>
        <Fieldset>
          <Legend>HEX</Legend>
          <InputContainer>
            <ColorField
              identifier={`${setIdentifier}-hex`}
              label="Hex"
              value={hex}
              updateColor={val => updateColor('hex', val)}
              prefix="#"
              size={8}
              isHex
            />
          </InputContainer>
        </Fieldset>
      </FieldsetWrapper>
    </Form>
  )
}

type Props = {
  colors: {
    b: ColorNumberInput
    g: ColorNumberInput
    h: ColorNumberInput
    hex: string
    l: ColorNumberInput
    r: ColorNumberInput
    s: ColorNumberInput
  }
  header: string
  setIdentifier: string
  updateColor: (key: string, val: ColorNumberInput) => void
}

export default ColorSet
