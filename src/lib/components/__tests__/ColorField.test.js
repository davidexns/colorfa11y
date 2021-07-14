import { render, screen, fireEvent } from '@testing-library/svelte'
import userEvent from '@testing-library/user-event'

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
		render(ColorField, {
			...mockProps,
			value: 50,
			min: 0,
			max: 100,
		})

		fireEvent.input(screen.getByRole('textbox'), {
			target: { value: '52' },
		})

		expect(mockUpdateColor).toHaveBeenCalledWith('52')
	})

	it('should not update color if new value is larger than the max', () => {
		render(ColorField, {
			...mockProps,
			value: 50,
			min: 0,
			max: 100,
		})

		fireEvent.input(screen.getByRole('textbox'), { target: { value: '103' } })

		expect(mockUpdateColor).not.toHaveBeenCalled()
	})

	it('should not update color if new value is smaller than the min', () => {
		render(ColorField, {
			...mockProps,
			value: 50,
			min: 0,
			max: 100,
		})

		fireEvent.input(screen.getByRole('textbox'), { target: { value: '-5' } })

		expect(mockUpdateColor).not.toHaveBeenCalled()
	})

	it('should increment by one when up arrow key is pressed', () => {
		render(ColorField, {
			...mockProps,
			value: 50,
		})

		userEvent.type(screen.getByRole('textbox'), '{arrowup}')

		expect(mockUpdateColor).toHaveBeenCalledWith(51)
	})

	it('should decrement by one when up arrow key is pressed', () => {
		render(ColorField, {
			...mockProps,
			value: 50,
		})

		userEvent.type(screen.getByRole('textbox'), '{arrowdown}')

		expect(mockUpdateColor).toHaveBeenCalledWith(49)
	})

	it('should not increment beyond max value when up arrow is pressed', () => {
		render(ColorField, {
			...mockProps,
			value: 100,
			max: 100,
		})

		userEvent.type(screen.getByRole('textbox'), '{arrowup}')

		expect(mockUpdateColor).not.toHaveBeenCalled()
	})

	it('should not decrement below min value when down arrow is pressed', () => {
		render(ColorField, {
			...mockProps,
			value: 10,
			min: 10,
		})

		userEvent.type(screen.getByRole('textbox'), '{arrowdown}')

		expect(mockUpdateColor).not.toHaveBeenCalled()
	})

	it('should not attempt to increment or decrement if it is a HEX field', () => {
		render(ColorField, {
			...mockProps,
			value: 'ABABAB',
			isHex: true,
		})

		const input = screen.getByRole('textbox')

		userEvent.type(input, '{arrowup}')
		userEvent.type(input, '{arrowdown}')

		expect(mockUpdateColor).not.toHaveBeenCalled()
	})

	it('should not update the color value if attempting to exceed max HEX character count', () => {
		render(ColorField, {
			...mockProps,
			value: 'ABABAB',
			isHex: true,
		})

		fireEvent.input(screen.getByRole('textbox'), {
			target: { value: 'ABABABA' },
		})

		expect(mockUpdateColor).not.toHaveBeenCalled()
	})

	it('should render a prefix if one is provided', () => {
		render(ColorField, {
			...mockProps,
			prefix: '#',
			value: 'FFFFFF',
		})

		expect(screen.getByTestId('color-prefix')).toHaveTextContent('#')
	})

	it('should render a suffix if one is provided', () => {
		render(ColorField, {
			...mockProps,
			suffix: '%',
			value: 50,
		})

		expect(screen.getByTestId('color-suffix')).toHaveTextContent('%')
	})

	it('should not render prefix or suffix elements if none are provided', () => {
		render(ColorField, { ...mockProps })

		expect(screen.queryByTestId('color-prefix')).toBeNull()
		expect(screen.queryByTestId('color-suffix')).toBeNull()
	})
})
