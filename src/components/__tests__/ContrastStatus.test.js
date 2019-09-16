import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import ContrastStatus from '../ContrastStatus'

describe('ContrastStatus', () => {
  test('should show pass text in green when status is passed', () => {
    const mockStatusPassText = 'hsl(133,45%,25%)'
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={{ statusPassForeground: mockStatusPassText }}>
        <ContrastStatus isPass />
      </ThemeProvider>
    )

    expect(getByTestId('contrast-item-status')).toHaveTextContent(/pass/i)
    expect(getByText(/pass/i)).toHaveStyleRule('color', mockStatusPassText)
  })

  test('should show fail text in red when status is not passed', () => {
    const mockStatusFailText = 'hsl(358,45%,25%)'
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={{ statusFailForeground: mockStatusFailText }}>
        <ContrastStatus isPass={false} />
      </ThemeProvider>
    )

    expect(getByTestId('contrast-item-status')).toHaveTextContent(/fail/i)
    expect(getByText(/fail/i)).toHaveStyleRule('color', mockStatusFailText)
  })
})
