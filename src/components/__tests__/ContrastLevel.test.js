import { render, within } from '@testing-library/svelte'

import ContrastLevel from '../ContrastLevel'

const mockRequiredProps = {
	level: 'mockLevel',
	contrast: 10,
}

describe('ContrastLevel', () => {
	it('should render the header based on the level provided', () => {
		const { getByText } = render(ContrastLevel, mockRequiredProps)

		expect(getByText(/mocklevel compliance/i)).toBeInTheDocument()
	})

	it('should render normal text minimum contrast description that is provided', () => {
		const { getAllByTestId } = render(ContrastLevel, {
			...mockRequiredProps,
			textMin: 7,
		})

		const [normalText] = getAllByTestId('contrast-item')
		const { getByText } = within(normalText)

		expect(getByText(/normal text/i)).toBeInTheDocument()
		expect(getByText(/greater than 7/i)).toBeInTheDocument()
	})

	it('should render large text minimum contrast description that is provided', () => {
		const { getAllByTestId } = render(ContrastLevel, {
			...mockRequiredProps,
			largeTextMin: 5.4,
		})

		const [, largeText] = getAllByTestId('contrast-item')
		const { getByText } = within(largeText)

		expect(getByText(/large text/i)).toBeInTheDocument()
		expect(getByText(/greater than 5.4/i)).toBeInTheDocument()
	})

	it('should render graphical object minimum contrast description that is provided', () => {
		const { getAllByTestId } = render(ContrastLevel, {
			...mockRequiredProps,
			graphicalMin: 3.6,
		})

		const [, , graphicalObj] = getAllByTestId('contrast-item')
		const { getByText } = within(graphicalObj)

		expect(getByText(/graphical objects/i)).toBeInTheDocument()
		expect(getByText(/greater than 3.6/i)).toBeInTheDocument()
	})

	it('should default to AA normal text when no minimum is provided', () => {
		const { getAllByTestId } = render(ContrastLevel, mockRequiredProps)

		const [normalText] = getAllByTestId('contrast-item')
		const { getByText } = within(normalText)

		expect(getByText(/normal text/i)).toBeInTheDocument()
		expect(getByText(/greater than 4.5/i)).toBeInTheDocument()
	})

	it('should default to AA large text when no minimum is provided', () => {
		const { getAllByTestId } = render(ContrastLevel, mockRequiredProps)

		const [, largeText] = getAllByTestId('contrast-item')
		const { getByText } = within(largeText)

		expect(getByText(/large text/i)).toBeInTheDocument()
		expect(getByText(/greater than 3/i)).toBeInTheDocument()
	})

	it('should default to AA graphical object when no minimum is provided', () => {
		const { getAllByTestId } = render(ContrastLevel, mockRequiredProps)

		const [, , graphicalObj] = getAllByTestId('contrast-item')
		const { getByText } = within(graphicalObj)

		expect(getByText(/graphical objects/i)).toBeInTheDocument()
		expect(getByText(/greater than 3/i)).toBeInTheDocument()
	})
})
