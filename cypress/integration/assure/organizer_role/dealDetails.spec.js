describe('Organizer login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#mat-input-0').type("cytester")
        cy.get('#mat-input-1').type("Assure123!")
        cy.get('.submit-button').click()
        cy.wait(5000)
        cy.get('.navbar-content').contains('Deals').click()
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/deals')
        cy.get('.icons-container > :nth-child(1)').click()
        cy.get('#mat-input-2').type('pending')
        cy.get('[style="left: 0px; width: calc(((33.3333% - 10px) * 1) + 0px); top: 0px; height: calc(300px);"] > .mat-figure > .deal').should('contain', 'PENDING').click()
    })
    it('should land on Overview page of any deal', () => {       
        cy.get('#deal-view').contains('Overview')
    })
    it('should add Marketing Slogan and Marketing Link', () => {
        cy.get('.media-upload > .mat-icon').click()
        cy.get('#mat-input-10').clear().type('Seva nai Dharma ho')                      // Marketing Slogan
        cy.get('#mat-input-11').clear().type('sevadevelopment.com')                     // Marketing Link
        cy.get('.media-upload > .mat-icon').click()
        cy.contains('Seva nai Dharma ho')        
    })
    it('should navigate to Details Section of the deal', () => {
        cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click()
        cy.get('.mat-card').should('contain', 'Deal Information').and('contain', 'Entity Creation')
    })
    // it('should ch')
    
})