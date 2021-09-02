import { render, screen } from '@testing-library/svelte'

import ContrastItem from '../ContrastItem'

describe('ContrastItem', () => {
	it('should render ContrastItem with the provided data', () => {
		render(ContrastItem, {
			label: 'mockLabel',
			subtext: 'mockSubtext',
			contrast: 7.5,
			min: 4,
		})

		expect(screen.getByText(/mocklabel/i)).toBeInTheDocument()
		expect(screen.getByText(/mocksubtext/i)).toBeInTheDocument()
	})

	it('should show a PASS status if the contrast exceeds the minimum', () => {
		render(ContrastItem, {
			label: 'mockLabel',
			subtext: 'mockSubtext',
			contrast: 7.5,
			min: 4,
		})

		expect(screen.getByText(/pass/i)).toBeInTheDocument()
		expect(screen.queryByText(/fail/i)).not.toBeInTheDocument()
	})

	it('should show a FAIL status if the contrast does not meet the minimum', () => {
		render(ContrastItem, {
			label: 'mockLabel',
			subtext: 'mockSubtext',
			contrast: 2.75,
			min: 4,
		})

		expect(screen.getByText(/fail/i)).toBeInTheDocument()
		expect(screen.queryByText(/pass/i)).not.toBeInTheDocument()
	})

	it('should show a PASS status if the contrast is equal to the minimum', () => {
		render(ContrastItem, {
			label: 'mockLabel',
			subtext: 'mockSubtext',
			contrast: 4,
			min: 4,
		})

		expect(screen.getByText(/pass/i)).toBeInTheDocument()
		expect(screen.queryByText(/fail/i)).not.toBeInTheDocument()
	})

	it('should not render a subtext element if no subtext is provided', () => {
		render(ContrastItem, {
			label: 'mockLabel',
			contrast: 7.5,
			min: 4,
		})

		expect(screen.queryByTestId('contrast-subtext')).not.toBeInTheDocument()
	})
})
