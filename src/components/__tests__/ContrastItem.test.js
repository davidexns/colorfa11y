import React from 'react'
import { render } from '@testing-library/react'

import ContrastItem from '../ContrastItem'

describe('ContrastItem', () => {
  test('should render ContrastItem with the provided data', () => {
    const { getByText } = render(
      <ContrastItem
        label="mockLabel"
        subtext="mockSubtext"
        contrast={7.5}
        min={4}
      />
    )

    expect(getByText(/mocklabel/i)).toBeInTheDocument()
    expect(getByText(/mocksubtext/i)).toBeInTheDocument()
  })

  test('should show a PASS status if the contrast exceeds the minimum', () => {
    const { getByText, queryByText } = render(
      <ContrastItem
        label="mockLabel"
        subtext="mockSubtext"
        contrast={7.5}
        min={4}
      />
    )

    expect(getByText(/pass/i)).toBeInTheDocument()
    expect(queryByText(/fail/i)).toBeNull()
  })

  test('should show a FAIL status if the contrast does not meet the minimum', () => {
    const { getByText, queryByText } = render(
      <ContrastItem
        label="mockLabel"
        subtext="mockSubtext"
        contrast={2.75}
        min={4}
      />
    )

    expect(getByText(/fail/i)).toBeInTheDocument()
    expect(queryByText(/pass/i)).toBeNull()
  })

  test('should show a PASS status if the contrast is equal to the minimum', () => {
    const { getByText, queryByText } = render(
      <ContrastItem
        label="mockLabel"
        subtext="mockSubtext"
        contrast={4}
        min={4}
      />
    )

    expect(getByText(/pass/i)).toBeInTheDocument()
    expect(queryByText(/fail/i)).toBeNull()
  })

  test('should not render a subtext element if no subtext is provided', () => {
    const { queryByTestId } = render(
      <ContrastItem label="mockLabel" contrast={4} min={4} />
    )

    expect(queryByTestId('contrast-subtext')).toBeNull()
  })
})
