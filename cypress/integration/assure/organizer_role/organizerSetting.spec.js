describe('Organizer login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#mat-input-0').type("cytester")
        cy.get('#mat-input-1').type("Assure123!")
        cy.get('.submit-button').click()
        cy.wait(5000)
        cy.get('.navbar-content').should('be.visible')
        cy.get('#profileButton').click()
    })
    it('should open Organizer Settings', () => {
        cy.get('.mat-menu-content').contains('Organizer Settings').click()
        // cy.get('.mat-menu-content > :nth-child(1)').click()
        cy.url().should('eq', 'https://gb-client-spv-qa.assure.co/organizers')
    })
    it('should Update Organizer Information in Organizer Settings', () => {
        cy.get('.mat-menu-content').contains('Organizer Settings').click()
        cy.get('#mat-input-8').clear().type('tester03@sevadev.com')                    // Email
        cy.get('#mat-input-9').clear().type('9876543210')                              // Phone number
        cy.get('#mat-input-10').clear().type('Street-977')                             // Street  
        cy.get('#mat-input-11').clear().type('Kathmandu')                              // City 
        cy.get('#mat-input-12').clear().type('44600')                                  // Zip
        cy.get('#mat-select-4').click()
        cy.get('#mat-option-162').click()
        cy.get('#mat-select-2').click()
        cy.get('#mat-option-4').click()
        cy.get('#organizer-edit-profile > .flow-scroll > [fxlayoutalign="end"] > .mat-raised-button > .mat-button-wrapper').click()      
        cy.wait(2000)
    })
    it('should Create Registered Agent in Organizer Settings', () => {
        cy.get('.mat-menu-content').contains('Organizer Settings').click()
        cy.get('#mat-input-2').clear().type('Automated Registered Agent')                                                          // Registered Agent Name
        cy.get('#mat-input-3').clear().type('Street-999')                                                           // Street
        cy.get('#mat-input-4').clear().type('Salt lake City')                                                           // City  
        cy.get('#mat-select-1').click()    
        cy.get('#mat-option-250 ').click()                                                                              // Country 
        cy.get('#mat-select-5').click()    
        cy.get('#mat-option-548').click()                                                                                // State
        cy.get('#mat-input-5').clear().type('84101')                                                                   // Postal Code       
        cy.get('#registered-agent-edit > .flow-scroll > [fxlayout="row"] > .mat-raised-button').click()
        cy.wait(2000)
    })
    it('should add New Fund Manager', () => {
        cy.get('.mat-menu-content').contains('Organizer Settings').click()
        cy.get('.fundManager-btn').click()                                                           
        cy.get('#mat-input-22').clear().type('Mr.')                                                           // Title
        cy.get('#mat-input-23').clear().type('Robb')                                                           // First name
        cy.get('#mat-input-24').clear().type('Kunz')                                                         // Last name  
        cy.get('.save-button').should('be.disabled')
        cy.get('#mat-input-25').clear().type('tester04@sevadev.com')                                                         // Email  
        cy.get('.save-button').click()
        cy.wait(2000)
    })
    // it('should add New Master Entity', () => {
    //     cy.get('.mat-menu-content').contains('Organizer Settings').click()
    //     cy.get('.masterEntity-btn').click()                                                           
    //     cy.get('#mat-input-22').clear().type('Json')                                                           // Master Entity name
    //     cy.get('#mat-select-7').click()                                                          // Entity Type
    //     cy.get('#mat-option-557').click()
    //     cy.get('#mat-input-23').clear().type('234567765432')                                                         // EIN 
    //     cy.get('.save-button').should('be.disabled')
    //     cy.get('#mat-select-8').click()                                         // Place of formation  
    //     cy.get('#mat-option-559').click()
    //     cy.get('.save-button').click()
    //     cy.wait(2000)
    // })
  
})