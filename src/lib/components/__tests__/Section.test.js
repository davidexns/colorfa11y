import { render, screen } from '@testing-library/svelte'

import TestSectionWrapper from './TestSectionWrapper.svelte'

it('Section should render section header and children', () => {
	render(TestSectionWrapper)

	expect(screen.getByText(/mock header/i)).toBeInTheDocument()
	expect(screen.getByText(/section content/i)).toBeInTheDocument()
})
