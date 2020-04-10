describe('Organizer login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#mat-input-0').type("cyinvestor")
        cy.get('#mat-input-1').type("Assure123!")
        cy.get('.submit-button').click()
        cy.get('.navbar-content').contains('Investments').click()
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/investments')
        cy.get('.actions-icons-container > :nth-child(1)').click()
        cy.wait(5000)
        cy.get('.invest-search').type('pending')
        cy.get(':nth-child(1) > .card-content > .card-footer').should('contain', 'PENDING').click()
    })
    it('should open Investor experience of deal', () => {
        cy.get('.investment-co-card').contains('Minimum Subscription Amount')
        cy.get('.documents-card').contains('Fund Documents')
        cy.get('[formcontrolname="amount"]').type('100000')
    })
    it('should add bank wire', () =>{
        cy.get('[formcontrolname="wiringBank"]').click()
            cy.get('mat-option').contains('Add Bank Account').then(option => {
                cy.wrap(option).contains('Add Bank Account');        
                option[0].click(); 
                cy.get('[formcontrolname="wiringBank"]').contains('Add Bank Account')  
            })
        cy.get('.mat-toolbar-row').contains('Add Bank Account')
        cy.get('[formcontrolname="wiringBankName"]').type('Cypress Automated Bank')
        cy.get('[formcontrolname="nameOnWiringBankAccount"]').type('Cy Account')
        cy.get('[formcontrolname="wiringBankAccountNumber"]').type('0713456786544')
        cy.get('[formcontrolname="wiringBankInUS"]').contains('No').click({ force: true })
        cy.get('.button-container > :nth-child(2)').should('be.disabled')
        cy.get('[formcontrolname="wiringBankSubscriber"]').contains('No').click({ force: true })  
        cy.get('.button-container > :nth-child(2)').click()     
    })
})