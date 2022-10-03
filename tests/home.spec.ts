import { test, expect } from '@playwright/test'

test.describe('Given I am on the home page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/')
	})

	test.describe('when I change the foreground HSL color', () => {
		test('should update the RGB and HEX color values', async ({ page }) => {
			const foreground = page.locator('form', { has: page.locator('text=Foreground') })

			await foreground.locator('text=Hue').fill('268')
			await foreground.locator('text=Saturation').fill('64')
			await foreground.locator('text=Lightness').fill('38')

			await expect(foreground.locator('text=Red')).toHaveValue('93')
			await expect(foreground.locator('text=Green')).toHaveValue('35')
			await expect(foreground.locator('text=Blue')).toHaveValue('159')
			await expect(foreground.locator('label:text("Hex")')).toHaveValue('5d239f')
		})

		test('should calculate the contrast ratio', async ({ page }) => {
			const foreground = page.locator('form', { has: page.locator('text=Foreground') })

			await foreground.locator('text=Hue').fill('268')
			await foreground.locator('text=Saturation').fill('64')
			await foreground.locator('text=Lightness').fill('38')

			await expect(page.locator('data-testid=contrast-ratio')).toHaveText('9.517')
		})
	})

	test.describe('when I change the foreground RGB color', () => {
		test('should update the HSL and HEX color values', async ({ page }) => {
			const foreground = page.locator('form', { has: page.locator('text=Foreground') })

			await foreground.locator('text=Red').fill('93')
			await foreground.locator('text=Green').fill('35')
			await foreground.locator('text=Blue').fill('159')

			await expect(foreground.locator('text=Hue')).toHaveValue('268')
			await expect(foreground.locator('text=Saturation')).toHaveValue('64')
			await expect(foreground.locator('text=Lightness')).toHaveValue('38')
			await expect(foreground.locator('label:text("Hex")')).toHaveValue('5d239f')
		})

		test('should calculate the contrast ratio', async ({ page }) => {
			const foreground = page.locator('form', { has: page.locator('text=Foreground') })

			await foreground.locator('text=Red').fill('93')
			await foreground.locator('text=Green').fill('35')
			await foreground.locator('text=Blue').fill('159')

			await expect(page.locator('data-testid=contrast-ratio')).toHaveText('9.517')
		})
	})

	test.describe('when I change the foreground HEX color', () => {
		test('should update the HSL and RGB color values', async ({ page }) => {
			const foreground = page.locator('form', { has: page.locator('text=Foreground') })
			await foreground.locator('label:text("Hex")').fill('5d239f')

			await expect(foreground.locator('text=Hue')).toHaveValue('268')
			await expect(foreground.locator('text=Saturation')).toHaveValue('64')
			await expect(foreground.locator('text=Lightness')).toHaveValue('38')
			await expect(foreground.locator('text=Red')).toHaveValue('93')
			await expect(foreground.locator('text=Green')).toHaveValue('35')
			await expect(foreground.locator('text=Blue')).toHaveValue('159')
		})

		test('should calculate the contrast ratio', async ({ page }) => {
			const foreground = page.locator('form', { has: page.locator('text=Foreground') })

			await foreground.locator('label:text("Hex")').fill('5d239f')

			await expect(page.locator('data-testid=contrast-ratio')).toHaveText('9.517')
		})
	})

	test.describe('when I change the background HSL color', () => {
		test('should update the RGB and HEX color values', async ({ page }) => {
			const background = page.locator('form', { has: page.locator('text=Background') })

			await background.locator('text=Hue').fill('268')
			await background.locator('text=Saturation').fill('38')
			await background.locator('text=Lightness').fill('64')

			await expect(background.locator('text=Red')).toHaveValue('161')
			await expect(background.locator('text=Green')).toHaveValue('128')
			await expect(background.locator('text=Blue')).toHaveValue('198')
			await expect(background.locator('label:text("Hex")')).toHaveValue('a180c6')
		})

		test('should calculate the contrast ratio', async ({ page }) => {
			const background = page.locator('form', { has: page.locator('text=Background') })

			await background.locator('text=Hue').fill('268')
			await background.locator('text=Saturation').fill('38')
			await background.locator('text=Lightness').fill('64')

			await expect(page.locator('data-testid=contrast-ratio')).toHaveText('6.419')
		})
	})

	test.describe('when I change the background RGB color', () => {
		test('should update the HSL and HEX color values', async ({ page }) => {
			const background = page.locator('form', { has: page.locator('text=Background') })

			await background.locator('text=Red').fill('161')
			await background.locator('text=Green').fill('128')
			await background.locator('text=Blue').fill('198')

			await expect(background.locator('text=Hue')).toHaveValue('268')
			await expect(background.locator('text=Saturation')).toHaveValue('38')
			await expect(background.locator('text=Lightness')).toHaveValue('64')
			await expect(background.locator('label:text("Hex")')).toHaveValue('a180c6')
		})

		test('should calculate the contrast ratio', async ({ page }) => {
			const background = page.locator('form', { has: page.locator('text=Background') })

			await background.locator('text=Red').fill('161')
			await background.locator('text=Green').fill('128')
			await background.locator('text=Blue').fill('198')

			await expect(page.locator('data-testid=contrast-ratio')).toHaveText('6.419')
		})
	})

	test.describe('when I change the background HEX color', () => {
		test('should update the HSL and RGB color values', async ({ page }) => {
			const background = page.locator('form', { has: page.locator('text=Background') })
			await background.locator('label:text("Hex")').fill('a180c6')

			await expect(background.locator('text=Hue')).toHaveValue('268')
			await expect(background.locator('text=Saturation')).toHaveValue('38')
			await expect(background.locator('text=Lightness')).toHaveValue('64')
			await expect(background.locator('text=Red')).toHaveValue('161')
			await expect(background.locator('text=Green')).toHaveValue('128')
			await expect(background.locator('text=Blue')).toHaveValue('198')
		})

		test('should calculate the contrast ratio', async ({ page }) => {
			const background = page.locator('form', { has: page.locator('text=Background') })

			await background.locator('label:text("Hex")').fill('a180c6')

			await expect(page.locator('data-testid=contrast-ratio')).toHaveText('6.419')
		})
	})

	test.describe('when I select a fully AA-compliant color pairing', () => {
		test('should show PASS status for all 3 AA items', async ({ page }) => {
			await page
				.locator('form', { has: page.locator('text=Foreground') })
				.locator('label:text("Hex")')
				.fill('707070')

			await page
				.locator('form', { has: page.locator('text=Background') })
				.locator('label:text("Hex")')
				.fill('fff')

			const aaSection = page.locator('data-testid=AA-compliance')

			await expect(aaSection.locator('text=pass')).toHaveCount(3)
		})

		test('should show FAIL status for AAA normal text', async ({ page }) => {
			await page
				.locator('form', { has: page.locator('text=Foreground') })
				.locator('label:text("Hex")')
				.fill('707070')

			await page
				.locator('form', { has: page.locator('text=Background') })
				.locator('label:text("Hex")')
				.fill('fff')

			const aaaSection = page.locator('data-testid=AAA-compliance')

			await expect(
				aaaSection
					.locator('data-testid=contrast-item', { hasText: 'Greater than 7' })
					.locator('data-testid=contrast-item-status')
			).toHaveText(/fail/i)
			await expect(aaaSection.locator('text=pass')).toHaveCount(2)
		})
	})

	test.describe('when I select a fully AAA-compliant color pairing', () => {
		test('should show PASS status for all 3 AAA items', async ({ page }) => {
			await page
				.locator('form', { has: page.locator('text=Foreground') })
				.locator('label:text("Hex")')
				.fill('525252')

			await page
				.locator('form', { has: page.locator('text=Background') })
				.locator('label:text("Hex")')
				.fill('fff')

			const aaaSection = page.locator('data-testid=AAA-compliance')

			await expect(aaaSection.locator('text=pass')).toHaveCount(3)
		})
	})
})
