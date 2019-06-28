describe('Assure Glassboard', () => {
    beforeEach(() => {
        cy.visit('/')  
        cy.clearCookies()
        cy.get('#mat-input-0').type("master")
        cy.get('#mat-input-1').type("Assure123!")
        
    })      
    it('should check login validation for invalid username and valid password', () => {
        cy.get('#mat-input-0').clear().type("fake")
        cy.get('#mat-input-1').clear().type("Assure123!")
        cy.get('.submit-button').click()
        cy.get('.error').should('contain', 'The server was unable to verify the credentials. Please try again.')
    })
    it('should check login validation for valid username and invalid password', () => {
        cy.get('#mat-input-0').clear().type("master")
        cy.get('#mat-input-1').clear().type("fake")
        cy.get('.submit-button').click()    
        cy.get('.error').should('contain', 'The server was unable to verify the credentials. Please try again.')
    })
    it('should check login validation for invalid username and invalid password', () => {
        cy.get('#mat-input-0').clear().type("fake")
        cy.get('#mat-input-1').clear().type("fake")
        cy.get('.submit-button').click()
        cy.get('.error').should('contain', 'The server was unable to verify the credentials. Please try again.')
    })
    it('should check Show Password functionality', () => {
        cy.get('.mat-form-field-suffix > .mat-icon').click()
        cy.get('#mat-input-1').should('have.value', 'Assure123!')
    })
    it('should check login with valid username and valid password', () => {
        cy.get('.submit-button').click()            
    })  
    it('should check save username functionality', () => {
        cy.get('.mat-checkbox').click()
        cy.get('.submit-button').click()  
        cy.get('.logout-button').click()
        cy.get('#mat-input-0').should('have.value', 'master')        
    })    
 
    it('should check forget password functionality', () => {
        cy.get('.forgot-password[_ngcontent-c12]').click()
        cy.url().should('eq', 'https://gb-client-spv-qa.assure.co/admin/forgot-password')
    })
    
})