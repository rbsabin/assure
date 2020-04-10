describe('Assure Glassboard', () => {
    beforeEach(() => {
        cy.visit('/admin/login')  
        cy.clearCookies()
        cy.get('#mat-input-0').type("master")
        cy.get('#mat-input-1').type("Assure123!")        
    })      
    it('should check username field validation for empty field',()=>{
        cy.get('#mat-input-0').clear()
        cy.get('#mat-input-1').clear().type("Assure123!")
        cy.get('[name="loginForm"]').contains('Username is required')
        cy.get('.submit-button').should('be.disabled')
    })
    it('should check password field validation for empty field',()=>{
        cy.get('#mat-input-0').clear().type("master")
        cy.get('#mat-input-1').clear()
        cy.get('[name="loginForm"]').contains('Password is required')
        cy.get('.submit-button').should('be.disabled')
    })
    it('should check login validation for invalid username and valid password', () => {
        cy.get('#mat-input-0').clear().type("invalid")
        cy.get('#mat-input-1').clear().type("Assure123!")
        cy.get('.submit-button').click()
        cy.get('.error').should('contain', 'The server was unable to verify the credentials. Please try again.')
    })
    it('should check login validation for valid username and invalid password', () => {
        cy.get('#mat-input-0').clear().type("master")
        cy.get('#mat-input-1').clear().type("invalid")
        cy.get('.submit-button').click()    
        cy.get('.error').should('contain', 'The server was unable to verify the credentials. Please try again.')
    })
    it('should check login validation for invalid username and invalid password', () => {
        cy.get('#mat-input-0').clear().type("invaliduser")
        cy.get('#mat-input-1').clear().type("invalidpass")
        cy.get('.submit-button').click()
        cy.get('.error').should('contain', 'The server was unable to verify the credentials. Please try again.')
    })
    it('should check login with valid username and valid password', () => {
        cy.get('.submit-button').click()            
    })  
    it('should check forget password functionality', () => {
        cy.get('.forgot-password[_ngcontent-c12]').click()
        cy.url().should('eq', 'https://gb-client-spv-qa.assure.co/admin/forgot-password')
    })        
})