import { render, screen, within } from '@testing-library/svelte'

import ContrastLevel from '../ContrastLevel.svelte'

const mockRequiredProps = {
	level: 'mockLevel',
	contrast: 10,
}

describe('ContrastLevel', () => {
	it('should render the header based on the level provided', () => {
		render(ContrastLevel, mockRequiredProps)

		expect(screen.getByText(/mocklevel compliance/i)).toBeInTheDocument()
	})

	it('should render normal text minimum contrast description that is provided', () => {
		render(ContrastLevel, {
			...mockRequiredProps,
			textMin: 7,
		})

		const [normalText] = screen.getAllByTestId('contrast-item')
		const { getByText } = within(normalText)

		expect(getByText(/normal text/i)).toBeInTheDocument()
		expect(getByText(/greater than 7/i)).toBeInTheDocument()
	})

	it('should render large text minimum contrast description that is provided', () => {
		render(ContrastLevel, {
			...mockRequiredProps,
			largeTextMin: 5.4,
		})

		const [, largeText] = screen.getAllByTestId('contrast-item')
		const { getByText } = within(largeText)

		expect(getByText(/large text/i)).toBeInTheDocument()
		expect(getByText(/greater than 5.4/i)).toBeInTheDocument()
	})

	it('should render graphical object minimum contrast description that is provided', () => {
		render(ContrastLevel, {
			...mockRequiredProps,
			graphicalMin: 3.6,
		})

		const [, , graphicalObj] = screen.getAllByTestId('contrast-item')
		const { getByText } = within(graphicalObj)

		expect(getByText(/graphical objects/i)).toBeInTheDocument()
		expect(getByText(/greater than 3.6/i)).toBeInTheDocument()
	})

	it('should default to AA normal text when no minimum is provided', () => {
		render(ContrastLevel, mockRequiredProps)

		const [normalText] = screen.getAllByTestId('contrast-item')
		const { getByText } = within(normalText)

		expect(getByText(/normal text/i)).toBeInTheDocument()
		expect(getByText(/greater than 4.5/i)).toBeInTheDocument()
	})

	it('should default to AA large text when no minimum is provided', () => {
		render(ContrastLevel, mockRequiredProps)

		const [, largeText] = screen.getAllByTestId('contrast-item')
		const { getByText } = within(largeText)

		expect(getByText(/large text/i)).toBeInTheDocument()
		expect(getByText(/greater than 3/i)).toBeInTheDocument()
	})

	it('should default to AA graphical object when no minimum is provided', () => {
		render(ContrastLevel, mockRequiredProps)

		const [, , graphicalObj] = screen.getAllByTestId('contrast-item')
		const { getByText } = within(graphicalObj)

		expect(getByText(/graphical objects/i)).toBeInTheDocument()
		expect(getByText(/greater than 3/i)).toBeInTheDocument()
	})
})
