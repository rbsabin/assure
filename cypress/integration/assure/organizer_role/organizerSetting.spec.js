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
    it('should open profile menu', () => {        
        cy.get('.mat-menu-content')
          .should('be.visible')
          .and('contain', 'Organizer Settings')
    })
    it('should open Organizer Settings', () => {
        cy.get('.mat-menu-content > :nth-child(1)').click()
        cy.url().should('eq', 'https://gb-client-spv-qa.assure.co/organizers')
    })
    it('should Update Organizer Information in Organizer Settings', () => {
        cy.get('.mat-menu-content > :nth-child(1)').click()
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
        cy.get('.mat-menu-content > :nth-child(1)').click()
        cy.get('#mat-input-2').clear().type('Jason Packham')                                                          // Registered Agent Name
        cy.get('#mat-input-3').clear().type('Street-610')                                                           // Street
        cy.get('#mat-input-4').clear().type('Salt lake City')                                                           // City  
        cy.get('#mat-select-1').click()    
        cy.get('#mat-option-250 ').click()                                                                              // Country 
        cy.get('#mat-select-5').click()    
        cy.get('#mat-option-548').click()                                                                                // State
        cy.get('#mat-input-5').clear().type('84101')                                                                   // Postal Code       
        cy.get('#registered-agent-edit > .flow-scroll > [fxlayout="row"] > .mat-raised-button').click()
        cy.wait(2000)

    })
    it('should open New Fund Manager form', () => {
        cy.get('.mat-menu-content > :nth-child(1)').click()
        cy.get('.fundManager-btn').click()                                                         
        cy.get('.dialog-wrapper')
          .should('contain', 'New Fund Manager')
          .and('contain', 'Manager Entity Type')                                                 
    })
    it('should add New Fund Manager', () => {
        cy.get('.mat-menu-content > :nth-child(1)').click()
        cy.get('.fundManager-btn').click()                                                           
        cy.get('#mat-input-22').clear().type('Mr.')                                                           // Title
        cy.get('#mat-input-23').clear().type('Robb')                                                           // First name
        cy.get('#mat-input-24').clear().type('Kunz')                                                         // Last name  
        cy.get('.save-button').should('be.disabled')
        cy.get('#mat-input-25').clear().type('tester04@sevadev.com')                                                         // Email  
        cy.get('.save-button').click()
        cy.wait(2000)

    })
    it('should edit selected Fund Manager', () => {
        cy.get('.mat-menu-content > :nth-child(1)').click()
        cy.get('.fundManager-btn').click()                                                           
        cy.get('#mat-input-22').clear().type('Mr.')                                                           // Title  edit
        cy.get('#mat-input-23').clear().type('RobbEdited')                                                           // First name
        cy.get('#mat-input-24').clear().type('KunzEdited')                                                         // Last name  
        cy.get('#mat-input-25').clear().type('testerEdited@sevadev.com')                                                         // Email  
        cy.get('#mat-input-26').clear().type('04536588765')                                                         // City  
        cy.get('#mat-input-27').clear().type('street-00111')                                                         // City  
        cy.get('#mat-input-28').clear().type('Salt lake City')                                                         // City  
        cy.get('#mat-select-7').click()    
        cy.get('#mat-option-558').click()                                                                              // Country 
        cy.get('#mat-select-8').click()    
        cy.get('#mat-option-853').click()                                                                                // State
        cy.get('#mat-input-29').clear().type('84104')                                                                   // Postal Code       
        cy.get('.save-button').click()
        cy.wait(2000)
    })
    it('should delete Individual Fund Manager', () => {
        cy.get('.mat-menu-content > :nth-child(1)').click()
        cy.get('.mat-table > :nth-child(3)').click({force: true})     
        cy.get('.m-0 > .mat-icon-button')
          .should('be.enabled').click() 
        cy.wait(2000)
        cy.get('.mat-accent > .mat-button-wrapper').click({force: true})     
    })
    it('should delete selected Multiple Fund Manager', () => {
        cy.get('.mat-menu-content > :nth-child(1)').click()
        cy.get('#mat-checkbox-8').click()     
        cy.get('#delete-contacts-button')
          .should('be.enabled').click() 
        cy.wait(2000)
        cy.get('.mat-accent > .mat-button-wrapper').click({force: true})     
    })
    
})