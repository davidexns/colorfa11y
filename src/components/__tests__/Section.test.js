import React from 'react'
import { render } from '@testing-library/react'

import Section from '../Section'

test('Section should render section header and children', () => {
  const { getByText } = render(
    <Section header="Mock header">
      <div>this is a child component</div>
    </Section>
  )

  expect(getByText(/mock header/i)).toBeInTheDocument()
  expect(getByText(/this is a child component/i)).toBeInTheDocument()
})
