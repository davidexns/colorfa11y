import React from 'react'
import { render } from '@testing-library/react'

import SampleText from '../SampleText'

describe('SampleText', () => {
  test('should render container with the colors provided', () => {
    const { getByTestId, getByText } = render(
      <SampleText
        foreground={{ r: 180, g: 120, b: 60 }}
        background={{ r: 45, g: 90, b: 135 }}
      />
    )

    expect(getByText(/sample large text/i)).toHaveStyleRule(
      'color',
      'rgb(180,120,60)'
    )
    expect(getByText(/sample smaller text/i)).toHaveStyleRule(
      'color',
      'rgb(180,120,60)'
    )
    expect(getByTestId('color-preview')).toHaveStyleRule(
      'background-color',
      'rgb(45,90,135)'
    )
  })
})
