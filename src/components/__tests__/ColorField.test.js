import { render, fireEvent } from '@testing-library/svelte'

import ColorField from '../ColorField'

const ARROW_UP = {
	code: 'ArrowUp',
}
const ARROW_DOWN = {
	code: 'ArrowDown',
}

describe('ColorField', () => {
	const mockUpdateColor = jest.fn()
	const mockProps = {
		identifier: 'mockIdentifier',
		label: 'mockLabel',
		max: 100,
		min: 0,
		updateColor: mockUpdateColor,
	}

	it('should update color if new value is within the min/max range', () => {
		const { getByTestId } = render(ColorField, {
			...mockProps,
			value: 50,
			min: 0,
			max: 100,
		})

		fireEvent.input(getByTestId('color-field'), {
			target: { value: '52' },
		})

		expect(mockUpdateColor).toHaveBeenCalledWith('52')
	})

	it('should not update color if new value is larger than the max', () => {
		const { getByTestId } = render(ColorField, {
			...mockProps,
			value: 50,
			min: 0,
			max: 100,
		})

		fireEvent.input(getByTestId('color-field'), { target: { value: '103' } })

		expect(mockUpdateColor).not.toHaveBeenCalled()
	})

	it('should not update color if new value is smaller than the min', () => {
		const { getByTestId } = render(ColorField, {
			...mockProps,
			value: 50,
			min: 0,
			max: 100,
		})

		fireEvent.input(getByTestId('color-field'), { target: { value: '-5' } })

		expect(mockUpdateColor).not.toHaveBeenCalled()
	})

	it('should increment by one when up arrow key is pressed', () => {
		const { getByTestId } = render(ColorField, {
			...mockProps,
			value: 50,
		})

		fireEvent.keyDown(getByTestId('color-field'), ARROW_UP)

		expect(mockUpdateColor).toHaveBeenCalledWith(51)
	})

	it('should decrement by one when up arrow key is pressed', () => {
		const { getByTestId } = render(ColorField, {
			...mockProps,
			value: 50,
		})

		fireEvent.keyDown(getByTestId('color-field'), ARROW_DOWN)

		expect(mockUpdateColor).toHaveBeenCalledWith(49)
	})

	it('should not increment beyond max value when up arrow is pressed', () => {
		const { getByTestId } = render(ColorField, {
			...mockProps,
			value: 100,
			max: 100,
		})

		fireEvent.keyDown(getByTestId('color-field'), ARROW_UP)

		expect(mockUpdateColor).not.toHaveBeenCalled()
	})

	it('should not decrement below min value when down arrow is pressed', () => {
		const { getByTestId } = render(ColorField, {
			...mockProps,
			value: 10,
			min: 10,
		})

		fireEvent.keyDown(getByTestId('color-field'), ARROW_DOWN)

		expect(mockUpdateColor).not.toHaveBeenCalled()
	})

	it('should not attempt to increment or decrement if it is a HEX field', () => {
		const { getByTestId } = render(ColorField, {
			...mockProps,
			value: 'ABABAB',
			isHex: true,
		})

		const input = getByTestId('color-field')

		fireEvent.keyDown(input, ARROW_UP)
		fireEvent.keyDown(input, ARROW_DOWN)

		expect(mockUpdateColor).not.toHaveBeenCalled()
	})

	it('should not update the color value if attempting to exceed max HEX character count', () => {
		const { getByTestId } = render(ColorField, {
			...mockProps,
			value: 'ABABAB',
			isHex: true,
		})

		fireEvent.input(getByTestId('color-field'), {
			target: { value: 'ABABABA' },
		})

		expect(mockUpdateColor).not.toHaveBeenCalled()
	})

	it('should render a prefix if one is provided', () => {
		const { getByTestId } = render(ColorField, {
			...mockProps,
			prefix: '#',
			value: 'FFFFFF',
		})

		expect(getByTestId('color-prefix')).toHaveTextContent('#')
	})

	it('should render a suffix if one is provided', () => {
		const { getByTestId } = render(ColorField, {
			...mockProps,
			suffix: '%',
			value: 50,
		})

		expect(getByTestId('color-suffix')).toHaveTextContent('%')
	})

	it('should not render prefix or suffix elements if none are provided', () => {
		const { queryByTestId } = render(ColorField, { ...mockProps })

		expect(queryByTestId('color-prefix')).toBeNull()
		expect(queryByTestId('color-suffix')).toBeNull()
	})
})
