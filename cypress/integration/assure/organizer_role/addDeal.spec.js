describe('Organizer login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#mat-input-0').type("cytester")
        cy.get('#mat-input-1').type("Assure123!")
        cy.get('.submit-button').click()
        cy.wait(5000)
    })
    it('should go to Deals Page', () => {
        cy.get('.navbar-content').contains('Deals').click()
        cy.wait(5000)
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/deals')
    })
    it('should open add deal form', () => {
        cy.get('.navbar-content').contains('Deals').click()
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/deals')
        cy.get('.add-deal-btn').click()
        cy.get('#mat-dialog-0').should('contain', 'Add New Deal')
        cy.get('.save-button').should('be.disabled')
    })
    it('should create new deal', () => {
        cy.get('.navbar-content').contains('Deals').click()
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/deals')
        cy.get('.add-deal-btn').click()
        cy.get('[formcontrolname="dealName"]').type("Cypress Test")                            // This is Deal Title ( change every run ) 
        cy.get('[formcontrolname="targetAmount"').type("40000")                                   // This is Raise Amount(change accordingly)
        cy.get('[formcontrolname="minInvestmentAmount"]').type("10000")                                   // This is Minimum Investment(change accordingly)  
        cy.get('[formcontrolname="typeOfDeal"]').click()
            cy.get('mat-option').contains('Crypto').then(option => {
                cy.wrap(option).contains('Crypto');        
                option[0].click(); 
                cy.get('[formcontrolname="typeOfDeal"]').contains('Crypto')  
            });       
        cy.get('.save-button').should('be.enabled').click()
        cy.wait(5000)
        cy.contains('Cypress Test')
    })
        
})