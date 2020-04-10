describe('Admin login', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('/admin/login')
        cy.get('#mat-input-0').type("cypressadmin")
        cy.get('#mat-input-1').type("Assure123!") 
        cy.get('.submit-button').click()  
        cy.wait(4000)
        cy.get('.navbar-content').contains('Deals').click()
    })
    it('should go to Deals Page', () => {
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/deals')
        cy.get('.gb-header').contains('Deals')

    })
    it('should check search deal functionality in Grid View', () => {
        cy.contains('search').click()
        cy.get('#mat-input-2').type('pending')
        cy.get('[id="footer-deal-card"]').contains('PENDING') 
        cy.get('#mat-input-2').clear().type('onboarding')
        cy.get('[id="footer-deal-card"]').contains('ONBOARDING')
        cy.get('#mat-input-2').clear().type('Cypress Deal 1')                     // Seearch deals of your choice
        cy.get('[title]').contains('Cypress Deal 1')
        cy.get('.remove-text').click()
        cy.get('#mat-input-2').should('not.exist')
    })
    it('should open any deal from Grid View', () => {
        cy.contains('search').click()
        cy.get('#mat-input-2').type('pending')
        cy.get('[id="footer-deal-card"]').should('contain', 'PENDING').first().click()         //selects first mat-card after searching 
        cy.get('#deal-view').contains('Overview')
    })
    it('should toggle the view to List',() => {
        cy.contains('reorder').click().then(() => {
            cy.get('.icons-container').contains('apps')
        })
        cy.get('.mat-card').contains('Deal Name')
        cy.get('.mat-sort-header-stem').should('be.exist')
    })   
    it('should check search functionality in List view', () => {
        cy.contains('reorder').click()
        cy.contains('search').click()
        cy.get('#mat-input-2').type('pending')
        cy.get('.cdk-column-status').contains('PENDING') 
        cy.get('#mat-input-2').clear().type('onboarding')
        cy.get('.cdk-column-status').contains('ONBOARDING')
        cy.get('#mat-input-2').clear().type('Cypress Deal')                     // Seearch deals of your choice
        cy.get('.cdk-column-name').contains('Cypress Deal')
        cy.get('.remove-text').click()
        cy.get('#mat-input-2').should('not.exist')
    })
    
})