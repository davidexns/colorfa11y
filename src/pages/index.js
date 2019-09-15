import React, { Component } from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Section from '../components/Section'
import ColorSet from '../components/ColorSet'
import SampleText from '../components/SampleText'
import ContrastItem from '../components/ContrastItem'
import {
  convertFromHsl,
  convertFromRgb,
  convertFromHex,
} from '../utils/color-converter'
import { calculateContrast } from '../utils/contrast-calculator'

class IndexPage extends Component {
  state = {
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

  updateColors = (key, val, stateKey) => {
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
      const { hsl, rgb } = convertFromHex(val)
      updatedValues = {
        ...hsl,
        ...rgb,
        [key]: val,
      }
    }

    this.setState({ [stateKey]: { ...updatedValues } })
  }

  updateForegroundColors = (key, val) => {
    this.updateColors(key, val, 'foreground')
  }

  updateBackgroundColors = (key, val) => {
    this.updateColors(key, val, 'background')
  }

  render() {
    const { background, foreground } = this.state
    const contrast = calculateContrast(foreground, background)

    return (
      <Layout>
        <SEO title="Home" />
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
            css="font-size: 48px;font-weight: 500;text-align: center;margin: 24px 0 36px;"
            data-testid="contrast-ratio"
          >
            {contrast.toFixed(3)}
          </p>
          <div css="display: flex;flex-wrap: wrap;justify-content: space-between;margin-bottom: 32px;">
            <ContrastItem label="Normal text" contrast={contrast} />
            <ContrastItem label="Large text" contrast={contrast} isLarge />
            <ContrastItem
              label="Graphical objects"
              contrast={contrast}
              isText={false}
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
