describe('Assure Glassboard', () => {
    beforeEach(() => {
        cy.visit('/admin/forgot-password')  
        cy.clearCookies()
    })
    it('should check Back to Login functionality', () => {
        cy.get('.link').click()
        cy.url().should('eq', 'https://gb-client-spv-qa.assure.co/admin/login')
    })
    it('should check forget password functionality with invalid Username', () => {
        cy.get('#mat-input-0').type("invalid")
        cy.get('.submit-button').should('be.disabled')
        cy.get('#forgot-password-form').click()
        cy.get('#mat-error-0').should('contain', 'No user exists with that username')

    })
    it('should check forget password functionality with valid Username', () => {
        cy.get('#mat-input-0').type("cypressadmin").wait(3000)                                                      // Enter registered username
        cy.get('.submit-button').should('not.be.disabled')
        cy.get('.submit-button').click()
        cy.get('#forgot-password-form').should('contain', 'An email has been sent to the email address on your account')
    })
    it('should check forget Username functionality', () => {
        cy.get('.forgot-password').click()
        cy.url().should('eq', 'https://gb-client-spv-qa.assure.co/admin/forgot-username')
    })
   
})

