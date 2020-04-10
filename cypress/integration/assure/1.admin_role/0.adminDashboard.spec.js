describe('Admin Login', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('/admin/login')
        cy.get('#mat-input-0').type("master")
        cy.get('#mat-input-1').type("Assure123!") 
        cy.get('.submit-button').click()  
        cy.wait(4000)
    })
    it('should land on dashboard page', () => {
        cy.url().should('eq', 'https://gb-client-spv-qa.assure.co/dashboard')
        cy.get('.navbar-content').should('be.visible')
    })
    it('should lists Current Deals by default', () => {
        cy.get('.tabset').contains('Current').click({ force: true })
    })
    it('should check Closing Deals functionality', () => {
        cy.get('.tabset').contains('Closing').click({ force: true })
    })
    it('should check Closed Deals functionality', () => {
        cy.get('.tabset').contains('Closed').click({ force: true })
    })
    it('should check MORE functionality', () => {
        cy.wait(5000)
        cy.get('[fxlayoutalign="end"]').contains('MORE').click({ force: true })
        cy.url().should('eq', 'https://gb-client-spv-qa.assure.co/deals') 
    })
})