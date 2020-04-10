describe('Assure Glassboard', () => {
    beforeEach(() => {
        cy.visit('/')  
        cy.clearCookies()
        cy.get('#mat-input-0').type("master")
        cy.get('#mat-input-1').type("Assure123!")
        
    }) 
    it('should check Show Password functionality', () => {
        cy.get('.mat-form-field-suffix > .mat-icon').click()
        cy.get('#mat-input-1').should('have.value', 'Assure123!')
    }) 
 })