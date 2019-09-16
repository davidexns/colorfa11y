import React from 'react'
import { render } from '@testing-library/react'

import ContrastLevel from '../ContrastLevel'

describe('ContrastLevel', () => {
  test('should show text indicating the contrast is compliant when they meet minimum', () => {
    const { getByText } = render(
      <ContrastLevel
        level="AA"
        contrast={5}
        textMin={4.5}
        largeTextMin={3}
        graphicalMin={3}
      />
    )

    expect(getByText(/is AA compliant/i)).toBeInTheDocument()
  })

  test('should show text indicating the contrast is not compliant when at least one item does not meet minimum', () => {
    const { getByText } = render(
      <ContrastLevel
        level="AA"
        contrast={4}
        textMin={4.5}
        largeTextMin={3}
        graphicalMin={3}
      />
    )

    expect(getByText(/is not AA compliant/i)).toBeInTheDocument()
  })
})
