describe('Admin ', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#mat-input-0').type("master")
        cy.get('#mat-input-1').type("Assure123!")
        cy.get('.submit-button').click()
    })
    it('should land on dashboard page', () => {
            cy.url().should('eq', 'https://gb-client-spv-qa.assure.co/dashboard')
            cy.get('.navbar-content').should('be.visible')
    })
    it('should open profile menu', () => {
        cy.get('#profileButton').click()
        cy.get('.mat-menu-content')
          .should('be.visible')
          .and('contain', 'Admin Tools')
    })
    it('should open Admin Tools', () => {
        cy.get('#profileButton').click()
        cy.get('.mat-menu-content > :nth-child(3)').click()
        cy.url().should('eq', 'https://gb-client-spv-qa.assure.co/admin/admin-tools/5cfad53230145d7bebed5d5b')
    })
    it('should open Invite New Organizer form', () => {
        cy.get('#profileButton').click()
        cy.get('.mat-menu-content > :nth-child(3)').click()
        cy.get('.create-icon').click()
        cy.get('#mat-dialog-title-0').contains('Invite New Organizer')
        cy.get('[disabled=""]').should('be.disabled')
    })
    it('should enter details and invite organizer', () => {
        cy.get('#profileButton').click()
        cy.get('.mat-menu-content > :nth-child(3)').click()
        cy.get('.create-icon').click()
        cy.get('#mat-dialog-title-0').contains('Invite New Organizer')
        cy.get('[formcontrolname="organizerType"]').click()
        cy.get('#mat-option-0').contains('Individual').click()
        cy.get('#mat-select-1').click()
        cy.get('#mat-option-60').contains('Utah').click()

        cy.get('#mat-input-3').type('Seva')
        cy.get('#mat-input-4').type('Cypress')
        cy.get('#mat-input-5').type('tester09@sevadev.com')
        cy.get('#mat-input-6').type('Mr.')
        cy.get('.mat-dialog-actions > :nth-child(2)').should('be.enabled')
        // cy.get('.mat-dialog-actions > :nth-child(2)').click()                // enable this section to invite new organizer
        cy.get('.mat-dialog-actions > :nth-child(1)').click()
    })

})