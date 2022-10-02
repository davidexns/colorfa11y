import { test, expect } from '@playwright/test'

test.describe('Given I am on the home page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/')
	})

	test.describe('when I change the foreground HSL color', () => {
		test('should update the RGB and HEX color values', async ({ page }) => {
			const foreground = await page.locator('data-testid=Foreground-form')

			await foreground.locator('text=Hue').fill('268')
			await foreground.locator('text=Saturation').fill('64')
			await foreground.locator('text=Lightness').fill('38')

			await expect(foreground.locator('text=Red')).toHaveValue('93')
			await expect(foreground.locator('text=Green')).toHaveValue('35')
			await expect(foreground.locator('text=Blue')).toHaveValue('159')
			await expect(foreground.locator('label:text("Hex")')).toHaveValue('5d239f')
		})

		test('should calculate the contrast ratio', async ({ page }) => {
			const foreground = await page.locator('data-testid=Foreground-form')

			await foreground.locator('text=Hue').fill('268')
			await foreground.locator('text=Saturation').fill('64')
			await foreground.locator('text=Lightness').fill('38')

			await expect(page.locator('data-testid=contrast-ratio')).toHaveText('9.517')
		})
	})
})
