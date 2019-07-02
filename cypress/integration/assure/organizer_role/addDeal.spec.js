describe('Organizer login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#mat-input-0').type("cytester")
        cy.get('#mat-input-1').type("Assure123!")
        cy.get('.submit-button').click()
        cy.wait(5000)
    })
    it('should land on dash board page', () => {
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/dashboard')
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
        cy.get('#mat-input-2').type("Cypress Deal 1")                            // This is Deal Title ( change every run ) 
        cy.get('#mat-input-3').type("80000")                                   // This is Raise Amount(change accordingly)
        cy.get('#mat-input-4').type("10000")                                   // This is Minimum Investment(change accordingly)  
        cy.get('#mat-select-0').click()
        cy.get('#mat-option-0 > .mat-option-text').click()
        cy.get('.save-button').should('be.enabled').click()
        cy.wait(5000)
        cy.contains('Cypress Deal 1')
    })
    it('should check search deal functionality', () => {
        cy.get('.navbar-content').contains('Deals').click()
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/deals')
        cy.get('.icons-container > :nth-child(1)').click()
        cy.get('#mat-input-2').type('pending')
        cy.get('#mat-input-2').clear().type('Cypress Deal 1')                     // Seearch deals of your choice
    })

    it('should open any deal', () => {
        cy.get('.navbar-content').contains('Deals').click()
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/deals')
        cy.get('.icons-container > :nth-child(1)').click()
        cy.get('#mat-input-2').type('pending')
        cy.get('[style="left: 0px; width: calc(((33.3333% - 10px) * 1) + 0px); top: 0px; height: calc(300px);"] > .mat-figure > .deal').should('contain', 'PENDING').click()
        cy.get('#deal-view').contains('Overview')
    })
        
    
})