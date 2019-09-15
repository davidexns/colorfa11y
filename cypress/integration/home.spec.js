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

  describe('when I select a AA-complaint (not AAA) color pairing', () => {
    it('should tell me that I am AA compliant and not AAA compliant', () => {
      cy.findByTestId('Foreground-form').within(() => {
        cy.findByLabelText(/hex/i).type('{selectall}707070')
      })

      cy.findByTestId('Background-form').within(() => {
        cy.findByLabelText(/hex/i).type('{selectall}fff')
      })

      cy.findByText(/is AA compliant/i)
      cy.findByText(/is not AAA compliant/i)
    })

    it('should show PASS status for all 3 AA items', () => {
      cy.findByTestId('Foreground-form').within(() => {
        cy.findByLabelText(/hex/i).type('{selectall}707070')
      })

      cy.findByTestId('Background-form').within(() => {
        cy.findByLabelText(/hex/i).type('{selectall}fff')
      })

      cy.findByTestId('AA-compliance').within(() => {
        cy.queryAllByText(/pass/i).should('have.length', 3)
      })
    })

    it('should show FAIL status for AAA normal text', () => {
      cy.findByTestId('Foreground-form').within(() => {
        cy.findByLabelText(/hex/i).type('{selectall}707070')
      })

      cy.findByTestId('Background-form').within(() => {
        cy.findByLabelText(/hex/i).type('{selectall}fff')
      })

      cy.findByTestId('AAA-compliance').within(() => {
        cy.findByText(/normal text/i)
          .parent()
          .parent()
          .within(() => {
            cy.findByTestId('contrast-item-status').should('have.text', 'FAIL')
          })
        cy.queryAllByText(/pass/i).should('have.length', 2)
      })
    })
  })

  describe('when I select a AAA-complaint color pairing', () => {
    it('should tell me that I am AAA compliant', () => {
      cy.findByTestId('Foreground-form').within(() => {
        cy.findByLabelText(/hex/i).type('{selectall}525252')
      })

      cy.findByTestId('Background-form').within(() => {
        cy.findByLabelText(/hex/i).type('{selectall}fff')
      })

      cy.findByText(/is AA compliant/i)
      cy.findByText(/is AAA compliant/i)
    })
  })
})
