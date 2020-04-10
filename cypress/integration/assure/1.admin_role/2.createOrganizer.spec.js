describe('Admin ', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#mat-input-0').type("master")
        cy.get('#mat-input-1').type("Assure123!")
        cy.get('.submit-button').click()
    })
    it('should open profile menu', () => {
        cy.get('#profileButton').click()
        cy.get('.mat-menu-content')
          .should('be.visible')
          .and('contain', 'Admin Tools')
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
        cy.get('.create-icon').click({force: true})
        cy.get('#mat-dialog-title-0').contains('Invite New Organizer')
        cy.get('[formcontrolname="organizerType"]').click()
            cy.get('mat-option').contains('Individual').then(option => {
                cy.wrap(option).contains('Individual');        
                option[0].click(); 
                cy.get('[formcontrolname="organizerType"]').contains('Individual')  
            });
        cy.get('[formcontrolname="organizerCountry"]').click()
            cy.get('mat-option').contains('United States').then(option => {                             // select country from option as United States
                cy.wrap(option).contains('United States');        
                option[0].click(); 
                cy.get('[formcontrolname="organizerCountry"]').contains('United States')  
            });
        cy.get('[formcontrolname="organizerState"]').click()
            cy.get('mat-option').contains('Utah').then(option => {                                      // select state option as Utah
                cy.wrap(option).contains('Utah');        
                option[0].click(); 
                cy.get('[formcontrolname="organizerState"]').contains('Utah')  
            });        
        cy.get('[formcontrolname="userFirstName"]').type('Seva')
        cy.get('[formcontrolname="userLastName"]').type('Cypress')
        cy.get('[formcontrolname="userEmail"]').type('tester04@sevadev.com')
        cy.get('[formcontrolname="userTitle"]').type('Mr.')
        cy.get('.mat-dialog-actions > :nth-child(2)').should('be.enabled')
        // cy.get('.mat-dialog-actions > :nth-child(2)').click()                                     // enable this section to invite new organizer
        cy.get('.mat-dialog-actions > :nth-child(1)').click()
    })

})