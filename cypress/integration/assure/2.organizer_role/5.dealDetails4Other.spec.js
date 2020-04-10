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
    it('should add other information like managerment fee ',()=> {
        cy.get('.mat-tab-labels').contains('Details').click({ force: true })
        cy.get('.mat-horizontal-stepper-header-container').contains('Other').click()
        cy.get('[formcontrolname="arbitrationState"]').click();
        cy.get('mat-option').contains('Utah').then(option => {
            cy.wrap(option).contains('Utah');        
            option[0].click(); 
            cy.get('[formcontrolname="arbitrationState"]').contains('Utah')  
          });
          cy.get('[formcontrolname="arbitrationCity"]').clear().type('Provo')
        cy.get('[formcontrolname="hasManagementFee"]').contains('Yes').click()
        cy.get('[formcontrolname="managementFeeAmount"]').clear().type('44')
        cy.get('[formcontrolname="managementFeeFrequency"]').click();
        cy.get('mat-option').contains('Quarterly').then(option => {
            cy.wrap(option).contains('Quarterly');        
            option[0].click(); 
            cy.get('[formcontrolname="managementFeeFrequency"]').contains('Quarterly')  
          });
        cy.get('[formcontrolname="managementFeeDuration"]').clear().type('5')
        cy.get('.ng-invalid > [fxlayout="row"]').contains('Save').click()
    })
    
})