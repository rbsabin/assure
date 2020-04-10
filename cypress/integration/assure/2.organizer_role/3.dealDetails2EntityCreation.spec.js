describe('Organizer login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#mat-input-0').type("cypressadmin")
        cy.get('#mat-input-1').type("Assure123!")
        cy.get('.submit-button').click()
        cy.wait(5000)
        cy.get('.navbar-content').contains('Deals').click()
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/deals')
        cy.get('.icons-container > :nth-child(1)').click()
        cy.get('#mat-input-2').type('pending')
        cy.get('[style="left: 0px; width: calc(((33.3333% - 10px) * 1) + 0px); top: 0px; height: calc(300px);"] > .mat-figure > .deal').should('contain', 'PENDING').click()
    })
    it('should select master / series ',()=> {
        cy.get('.mat-tab-labels').contains('Details').click({ force: true })
        cy.get('.mat-horizontal-stepper-header-container').contains('Entity Creation').click()
        cy.get('[formcontrolname="limitedEntityType"]').contains('Master / Series').click()
        cy.get('[formcontrolname="masterEntity"]').click();
        cy.get('mat-option').contains('Jackie').then(option => {
            cy.wrap(option).contains('Jackie');        
            option[0].click(); 
            cy.get('[formcontrolname="masterEntity"]').contains('Jackie')  
          });
        cy.get('[formcontrolname="legalName"]').clear().type('serve')
        cy.get('.mat-horizontal-content-container').contains('Save').click()

        cy.get('#mat-dialog-0').should('contain','No').and('contain','Yes')
        cy.get('[type="submit"]').click()
        cy.wait(1500)
    })
})