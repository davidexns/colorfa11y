import { render } from '@testing-library/svelte'
import html from 'svelte-htm'

import Section from '../Section'

it('Section should render section header and children', () => {
	const { getByText } = render(
		html`
			<${Section} header="Mock header">
				<div>Section content</div>
			<//>
		`
	)

	expect(getByText(/mock header/i)).toBeInTheDocument()
	expect(getByText(/section content/i)).toBeInTheDocument()
})
