import { render } from '@testing-library/svelte'

import ContrastStatus from '../ContrastStatus'

describe('ContrastStatus', () => {
	it('should show "pass" text when status is passed', () => {
		const { getByTestId } = render(ContrastStatus, { isPass: true })

		expect(getByTestId('contrast-item-status')).toHaveTextContent(/pass/i)
	})

	it('should show "fail" text when status is not passed', () => {
		const { getByTestId } = render(ContrastStatus, { isPass: false })

		expect(getByTestId('contrast-item-status')).toHaveTextContent(/fail/i)
	})
})
