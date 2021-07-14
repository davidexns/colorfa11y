import { render, screen } from '@testing-library/svelte'
import html from 'svelte-htm'

import Section from '../Section'

it('Section should render section header and children', () => {
	render(
		html`
			<${Section} header="Mock header">
				<div>Section content</div>
			<//>
		`
	)

	expect(screen.getByText(/mock header/i)).toBeInTheDocument()
	expect(screen.getByText(/section content/i)).toBeInTheDocument()
})
