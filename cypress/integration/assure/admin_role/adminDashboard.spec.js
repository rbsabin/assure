describe('Admin Login', () => {
    beforeEach(() => {
        cy.visit('/')
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
        cy.get('.tabset').should('contain', 'Current Deals')
    })
    it('should check Closing Deals functionality', () => {
        cy.get('[for="tab2"]').click()
    })
    it('should check Closed Deals functionality', () => {
        cy.get('[for="tab3"]').click()
    })
    it('should check MORE functionality', () => {
        cy.get('#footer-more').click()
        cy.url().should('eq', 'https://gb-client-spv-qa.assure.co/deals') 
    })
})