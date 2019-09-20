import React from 'react'
import { render } from '@testing-library/react'

import ContrastStatus from '../ContrastStatus'

describe('ContrastStatus', () => {
  test('should show pass text in green when status is passed', () => {
    const { getByTestId } = render(<ContrastStatus isPass />)

    expect(getByTestId('contrast-item-status')).toHaveTextContent(/pass/i)
  })

  test('should show fail text in red when status is not passed', () => {
    const { getByTestId } = render(<ContrastStatus isPass={false} />)

    expect(getByTestId('contrast-item-status')).toHaveTextContent(/fail/i)
  })
})
