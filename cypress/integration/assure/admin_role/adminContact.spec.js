describe('Admin Login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#mat-input-0').type("master")
        cy.get('#mat-input-1').type("Assure123!")
        cy.get('.submit-button').click()
        cy.wait(5000)
    })
    
    it('should go to Contact Page', () => {
        cy.get('.navbar-content').contains('Contacts').click()
        // cy.wait(5000)
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/contacts')
    })
     
    it('should add new contact in the list', () => {
        cy.get('.navbar-content').contains('Contacts').click()
        // cy.wait(5000)
        cy.get('.buttons-container').contains('Add Contact').click()
        cy.wait(3000)
        cy.get('#mat-input-2').type("Sabin")
        cy.get('#mat-input-3').type("Ranabhat")
        cy.get('#mat-input-4').type("sranabhat@sevadev.com")
        cy.get('#mat-input-5').type("987654321")
        cy.get('#mat-input-6').type("tanahun")
        cy.get('#mat-input-7').type("tanahun")
        cy.get('#mat-input-8').type("11111")
        cy.get('#mat-input-9').type("2019/07/17---created_date")
        cy.get('.save-button').click()
        cy.wait(3000)        
    })
       
})