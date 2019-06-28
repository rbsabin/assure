describe('Admin Login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#mat-input-0').type("master")
        cy.get('#mat-input-1').type("Assure123!")
        cy.get('.submit-button').click()
        cy.wait(5000)
    })
 
    it('should land on dash board page', () => {
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/dashboard')
    })
    
    it('should go to Contact Page', () => {
        cy.get(':nth-child(4) > .nav-link > .nav-link-title').click()
        cy.wait(5000)
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/contacts')
    })
    it('should open add new Contact Form', () => {
        cy.get(':nth-child(4) > .nav-link > .nav-link-title').click()
        cy.wait(5000)
        cy.get('.ng-tns-c18-9.mat-raised-button').click()
    })
    
    it('should add new contact in the list', () => {
        cy.get(':nth-child(4) > .nav-link > .nav-link-title').click()
        cy.wait(5000)
        cy.get('.ng-tns-c18-9.mat-raised-button').click()
        cy.wait(5000)
        cy.get('#mat-input-2').type("Sabin")
        cy.get('#mat-input-3').type("Ranabhat")
        cy.get('#mat-input-4').type("sranabhat@sevadev.com")
        cy.get('#mat-input-5').type("987654321")
        cy.get('#mat-input-6').type("tanahun")
        cy.get('#mat-input-7').type("tanahun")
        // cy.get(':nth-child(7) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').select('Nepal')
        cy.get('#mat-input-8').type("11111")
        cy.get('#mat-input-9').type("I live in kathamndu")
        cy.get('.save-button').click()
        
    })
    
    it('should edit the Contact', () => {
        cy.get(':nth-child(4) > .nav-link > .nav-link-title').click()
        cy.get(':nth-child(2) > .cdk-column-actions > [style="cursor: pointer; padding-right: 8px"] > .mat-icon').click()
        cy.get('#mat-input-2').clear().type("Sabin Edited")
        cy.get('#mat-input-3').clear().type("RanabhatEdi")
        cy.get('#mat-input-4').clear().type("sranabhatEdited@sevadev.com")
        cy.get('#mat-input-5').clear().type("123456789")
        cy.get('#mat-input-6').clear().type("Kathmandu")
        cy.get('#mat-input-7').clear().type("lamjung")
        //cy.get(':nth-child(7) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').select("Nepal")
        cy.get('#mat-input-8').clear().type("64555")
        cy.get('#mat-input-9').clear().type("I live in lamjung")
        cy.get('.save-button').click()
     
    })
    it('should delete the contact', () => {
        cy.get(':nth-child(4) > .nav-link > .nav-link-title').click()
        cy.wait(5000)
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/contacts')
        cy.get(':nth-child(1) > .cdk-column-actions > [style="cursor: pointer"] > .mat-icon').click()
        // cy.get('#mat-dialog-0').contains('No').and('Yes')
        cy.get('.mat-accent > .mat-button-wrapper').click()
    })
    it('should delete selected multiple contacts', () => {
        cy.get(':nth-child(4) > .nav-link > .nav-link-title').click()
        cy.wait(5000)
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/contacts')
        cy.get('#mat-checkbox-3').click()
        cy.get('#mat-checkbox-4').click()
        cy.get('#delete-contacts-button').should('be.visible')
        cy.get('#delete-contacts-button').click()
        cy.get('.buttons-container > .ng-star-inserted > .mat-accent').click()
    })
   
    })