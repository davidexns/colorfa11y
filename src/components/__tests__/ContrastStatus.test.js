import React from 'react'
import { render } from '@testing-library/react'

import ContrastStatus from '../ContrastStatus'

describe('ContrastStatus', () => {
  test('should show pass text in green when status is passed', () => {
    const { getByTestId, getByText } = render(<ContrastStatus isPass />)

    expect(getByTestId('contrast-item-status')).toHaveTextContent(/pass/i)
    // TODO: Refactor this assertion to be less brittle after adding ThemeProvider
    expect(getByText(/pass/i)).toHaveStyleRule('color', 'hsl(133,42%,24%)')
  })

  test('should show fail text in red when status is not passed', () => {
    const { getByTestId, getByText } = render(<ContrastStatus isPass={false} />)

    expect(getByTestId('contrast-item-status')).toHaveTextContent(/fail/i)
    // TODO: Refactor this assertion to be less brittle after adding ThemeProvider
    expect(getByText(/fail/i)).toHaveStyleRule('color', 'hsl(358,58%,32%)')
  })
})
