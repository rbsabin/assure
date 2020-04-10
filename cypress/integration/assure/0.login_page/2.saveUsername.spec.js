describe('Assure Glassboard', () => {
    beforeEach(() => {
        cy.visit('/')  
        cy.clearCookies()
        cy.get('#mat-input-0').type("master")
        cy.get('#mat-input-1').type("Assure123!")
        
    }) 
    it('should check save username functionality', () => {
        cy.get('[formcontrolname="saveUsername"]').click()
        cy.get('.submit-button').click()  
        cy.get('.logout-button').click()
        cy.get('#mat-input-0').should('have.value', 'master')        
    })    
 
})