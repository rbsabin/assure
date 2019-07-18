describe('Admin Login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#mat-input-0').type("master")
        cy.get('#mat-input-1').type("Assure123!")
        cy.get('.submit-button').click()
        cy.wait(5000)
    })
    
    it('should go to Contact Page', () => {
        cy.get('.navbar-content').contains('Contacts').click()
        // cy.wait(5000)
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/contacts')
    })
     
    it('should add new contact in the list', () => {
        cy.get('.navbar-content').contains('Contacts').click()
        // cy.wait(5000)
        cy.get('.buttons-container').contains('Add Contact').click()
        cy.wait(3000)
        cy.get('[formcontrolname="firstName"]').type("Sabin")                                   // firstname
        cy.get('[formcontrolname="lastName"]').type("Ranabhat")                                  //lastname
        cy.get('[formcontrolname="email"]').type("sranabhat@sevadev.com")                      //email
        cy.get('[formcontrolname="phone"]').type("987654321")                                //phone number
        cy.get('[formcontrolname="street"]').type("street856")                                 //street  
        cy.get('[formcontrolname="city"]').type("provo")                                     //city
        cy.get('[formcontrolname="country"]').click()
            cy.get('mat-option').contains('United States').then(option => {
                cy.wrap(option).contains('United States');                                      // country
                option[0].click(); 
                cy.get('[formcontrolname="country"]').contains('United States')  
            })
        cy.get('[formcontrolname="state"]').click()
            cy.get('mat-option').contains('California').then(option => {
                cy.wrap(option).contains('California');                                          // state
                option[0].click(); 
                cy.get('[formcontrolname="state"]').contains('California')  
            })
        cy.get('[formcontrolname="zip"]').type("11111")                                          //zip
                                                           
        cy.get('[formcontrolname="notes"]').type(contactNotes())                                  //add random text in contact notes
            function contactNotes() {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (var i = 0; i < 100; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
                return text;
            }

        cy.get('.save-button').click()
        cy.wait(3000)        
    })
})
