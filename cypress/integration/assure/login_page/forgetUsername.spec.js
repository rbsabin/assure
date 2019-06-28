describe('Assure Glassboard', () => {
    beforeEach(() => {
        cy.visit('/admin/forgot-username')  
        cy.clearCookies()
    })
    it('should check forget username functionality with invalid Email', () => {
        cy.get('#mat-input-0').type("invalid.email")
        cy.get('.submit-button').should('be.disabled')
        cy.get('#forgot-username-form').click()
        cy.get('#mat-error-0').should('contain', 'Must be a valid email address.')

    })
    it('should check forget username functionality with valid Email', () => {
        cy.get('#mat-input-0').type("tester01@sevadev.com") // Enter registered username
        cy.get('.submit-button').should('not.be.disabled')
        cy.get('.submit-button').click()
        cy.get('#forgot-username-form').should('contain', 'Please check your inbox to obtain your username.')
    })
    it('should check Back to Login functionality', () => {
        cy.get('.link').click()
        cy.url().should('eq', 'https://gb-client-spv-qa.assure.co/admin/login')
    })
})