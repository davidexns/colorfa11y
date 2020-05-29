import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Section from '../components/Section'
import ColorSet from '../components/ColorSet'
import SampleText from '../components/SampleText'
import {
  convertFromHsl,
  convertFromRgb,
  convertFromHex,
} from '../utils/color-converter'
import { calculateContrast } from '../utils/contrast-calculator'
import ContrastLevel from '../components/ContrastLevel'

const StyledH2 = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  padding: 12px 24px;
  margin: 0 auto 16px;
  border-left: 3px solid var(--decorative-brackets);
  border-right: 3px solid var(--decorative-brackets);
  border-radius: 12px;
`

type State = {
  background: ColorSet
  foreground: ColorSet
}

class IndexPage extends Component {
  state: State = {
    background: {
      h: 0,
      s: 0,
      l: 100,
      r: 255,
      g: 255,
      b: 255,
      hex: 'FFFFFF',
    },
    foreground: {
      h: 0,
      s: 0,
      l: 0,
      r: 0,
      g: 0,
      b: 0,
      hex: '000000',
    },
  }

  updateColors = (
    key: string,
    val: ColorFieldInput,
    stateKey: string
  ): void => {
    if (val === '') {
      this.setState(prevState => {
        const oldVals = prevState[stateKey]
        return {
          [stateKey]: { ...oldVals, [key]: val },
        }
      })
      return
    }
    let updatedValues = {}
    const { h, s, l, r, g, b } = this.state[stateKey]

    if (['h', 's', 'l'].includes(key)) {
      const argSet = {
        h,
        s,
        l,
        [key]: Number(val),
      }

      const { rgb, hex } = convertFromHsl(argSet)
      updatedValues = {
        ...rgb,
        hex,
        ...argSet,
      }
    } else if (['r', 'g', 'b'].includes(key)) {
      const argSet = {
        r,
        g,
        b,
        [key]: Number(val),
      }

      const { hsl, hex } = convertFromRgb(argSet)
      updatedValues = {
        ...hsl,
        hex,
        ...argSet,
      }
    } else {
      const { hsl, rgb } = convertFromHex(String(val))
      updatedValues = {
        ...hsl,
        ...rgb,
        [key]: val,
      }
    }

    this.setState({ [stateKey]: { ...updatedValues } })
  }

  updateForegroundColors = (key: string, val: ColorFieldInput): void => {
    this.updateColors(key, val, 'foreground')
  }

  updateBackgroundColors = (key: string, val: ColorFieldInput): void => {
    this.updateColors(key, val, 'background')
  }

  render() {
    const { background, foreground } = this.state
    const contrast = calculateContrast(foreground, background)

    return (
      <Layout>
        <SEO title="Color Utility" />
        <StyledH2>
          Color-fully! Match colors that support an accessible web.
        </StyledH2>
        <Section header="Select Colors">
          <ColorSet
            header="Foreground"
            colors={foreground}
            setIdentifier="foreground"
            updateColor={this.updateForegroundColors}
          />
          <ColorSet
            header="Background"
            colors={background}
            setIdentifier="background"
            updateColor={this.updateBackgroundColors}
          />
        </Section>
        <Section header="Contrast Ratio">
          <p
            css="font-size: 48px;font-weight: 500;text-align: center;margin: 24px 0;"
            data-testid="contrast-ratio"
          >
            {contrast.toFixed(3)}
          </p>
          <div css="display: flex;flex-wrap: wrap;">
            <ContrastLevel level="AA" contrast={contrast} />
            <ContrastLevel
              level="AAA"
              contrast={contrast}
              textMin={7.0}
              largeTextMin={4.5}
            />
          </div>
        </Section>
        <Section header="Preview">
          <SampleText foreground={foreground} background={background} />
        </Section>
      </Layout>
    )
  }
}

export default IndexPage
