describe('Given I am on the home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000')
  })

  describe('when I change the foreground HSL color', () => {
    it('should update the RGB and HEX color values', () => {
      cy.findByTestId('Foreground-form').within(() => {
        cy.findByLabelText(/hue/i).type('268')
        cy.findByLabelText(/saturation/i).type('64')
        cy.findByLabelText(/lightness/i).type('38')

        cy.findByLabelText(/red/i).should('have.value', '93')
        cy.findByLabelText(/green/i).should('have.value', '35')
        cy.findByLabelText(/blue/i).should('have.value', '159')
        cy.findByLabelText(/hex/i).should('have.value', '5d239f')
      })
    })

    it('should calculate the contrast ratio', () => {
      cy.findByTestId('Foreground-form').within(() => {
        cy.findByLabelText(/hue/i).type('268')
        cy.findByLabelText(/saturation/i).type('64')
        cy.findByLabelText(/lightness/i).type('38')
      })

      cy.findByTestId('contrast-ratio').should('have.text', '9.517')
    })
  })

  describe('when I change the foreground RGB color', () => {
    it('should update the HSL and HEX color values', () => {
      cy.findByTestId('Foreground-form').within(() => {
        cy.findByLabelText(/red/i).type('93')
        cy.findByLabelText(/green/i).type('35')
        cy.findByLabelText(/blue/i).type('159')

        cy.findByLabelText(/hue/i).should('have.value', '268')
        cy.findByLabelText(/saturation/i).should('have.value', '64')
        cy.findByLabelText(/lightness/i).should('have.value', '38')
        cy.findByLabelText(/hex/i).should('have.value', '5d239f')
      })
    })

    it('should calculate the contrast ratio', () => {
      cy.findByTestId('Foreground-form').within(() => {
        cy.findByLabelText(/red/i).type('93')
        cy.findByLabelText(/green/i).type('35')
        cy.findByLabelText(/blue/i).type('159')
      })

      cy.findByTestId('contrast-ratio').should('have.text', '9.517')
    })
  })

  describe('when I change the foreground HEX color', () => {
    it('should update the HSL and RGB color values', () => {
      cy.findByTestId('Foreground-form').within(() => {
        cy.findByLabelText(/hex/i).type('{selectall}5d239f')

        cy.findByLabelText(/hue/i).should('have.value', '268')
        cy.findByLabelText(/saturation/i).should('have.value', '64')
        cy.findByLabelText(/lightness/i).should('have.value', '38')
        cy.findByLabelText(/red/i).should('have.value', '93')
        cy.findByLabelText(/green/i).should('have.value', '35')
        cy.findByLabelText(/blue/i).should('have.value', '159')
      })
    })

    it('should calculate the contrast ratio', () => {
      cy.findByTestId('Foreground-form').within(() => {
        cy.findByLabelText(/hex/i).type('{selectall}5d239f')
      })

      cy.findByTestId('contrast-ratio').should('have.text', '9.517')
    })
  })

  describe('when I change the background HSL color', () => {
    it('should update the RGB and HEX color values', () => {
      cy.findByTestId('Background-form').within(() => {
        cy.findByLabelText(/hue/i).type('268')
        cy.findByLabelText(/saturation/i).type('38')
        cy.findByLabelText(/lightness/i).type('{selectall}64')

        cy.findByLabelText(/red/i).should('have.value', '161')
        cy.findByLabelText(/green/i).should('have.value', '128')
        cy.findByLabelText(/blue/i).should('have.value', '198')
        cy.findByLabelText(/hex/i).should('have.value', 'a180c6')
      })
    })

    it('should calculate the contrast ratio', () => {
      cy.findByTestId('Background-form').within(() => {
        cy.findByLabelText(/hue/i).type('268')
        cy.findByLabelText(/saturation/i).type('38')
        cy.findByLabelText(/lightness/i).type('{selectall}64')
      })

      cy.findByTestId('contrast-ratio').should('have.text', '6.419')
    })
  })

  describe('when I change the background RGB color', () => {
    it('should update the HSL and HEX color values', () => {
      cy.findByTestId('Background-form').within(() => {
        cy.findByLabelText(/red/i).type('{selectall}161')
        cy.findByLabelText(/green/i).type('{selectall}128')
        cy.findByLabelText(/blue/i).type('{selectall}198')

        cy.findByLabelText(/hue/i).should('have.value', '268')
        cy.findByLabelText(/saturation/i).should('have.value', '38')
        cy.findByLabelText(/lightness/i).should('have.value', '64')
        cy.findByLabelText(/hex/i).should('have.value', 'a180c6')
      })
    })

    it('should calculate the contrast ratio', () => {
      cy.findByTestId('Background-form').within(() => {
        cy.findByLabelText(/red/i).type('{selectall}161')
        cy.findByLabelText(/green/i).type('{selectall}128')
        cy.findByLabelText(/blue/i).type('{selectall}198')
      })

      cy.findByTestId('contrast-ratio').should('have.text', '6.419')
    })
  })

  describe('when I change the background HEX color', () => {
    it('should update the HSL and RGB color values', () => {
      cy.findByTestId('Background-form').within(() => {
        cy.findByLabelText(/hex/i).type('{selectall}a180c6')

        cy.findByLabelText(/hue/i).should('have.value', '268')
        cy.findByLabelText(/saturation/i).should('have.value', '38')
        cy.findByLabelText(/lightness/i).should('have.value', '64')
        cy.findByLabelText(/red/i).should('have.value', '161')
        cy.findByLabelText(/green/i).should('have.value', '128')
        cy.findByLabelText(/blue/i).should('have.value', '198')
      })
    })

    it('should calculate the contrast ratio', () => {
      cy.findByTestId('Background-form').within(() => {
        cy.findByLabelText(/hex/i).type('{selectall}a180c6')
      })

      cy.findByTestId('contrast-ratio').should('have.text', '6.419')
    })
  })
})
