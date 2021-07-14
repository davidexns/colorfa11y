import { render, screen } from '@testing-library/svelte'

import ContrastStatus from '../ContrastStatus'

describe('ContrastStatus', () => {
	it('should show "pass" text when status is passed', () => {
		render(ContrastStatus, { isPass: true })

		expect(screen.getByText(/pass/i)).toBeInTheDocument()
	})

	it('should show "fail" text when status is not passed', () => {
		render(ContrastStatus, { isPass: false })

		expect(screen.getByText(/fail/i)).toBeInTheDocument()
	})
})
