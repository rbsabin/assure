describe('Admin Login', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('/')
        cy.get('#mat-input-0').type("master")
        cy.get('#mat-input-1').type("Assure123!")
        cy.get('.submit-button').click()
        cy.wait(5000)
    })
    
    it('should go to Contact Page', () => {
        cy.get('.navbar-content').contains('Contacts').click()
        cy.wait(3000)
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
                for (var i = 0; i < 50; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
                return text;
            }
        cy.get('.save-button').click()
        cy.wait(3000)        
    })
    it('should edit the Contact', () => {
        cy.get('.navbar-content').contains('Contacts').click({ force: true })
        cy.wait(5000)
        cy.contains('edit').first().click()
        // cy.get(':nth-child(2) > .cdk-column-actions > [style="cursor: pointer; padding-right: 8px"] > .mat-icon').click()
        cy.get('[formcontrolname="firstName"]').clear().type("SabinEdit")                                   // edit firstname
        cy.get('[formcontrolname="lastName"]').clear().type("cyEdit")                                  //edit lastname
        cy.get('[formcontrolname="email"]').clear().type("edit@cyContact.com")                      //edit email
        cy.get('[formcontrolname="phone"]').clear().type("777772222")                                //edit phone number
        cy.get('[formcontrolname="street"]').clear().type("street9922")                                 //edit street  
        cy.get('[formcontrolname="city"]').clear().type("Edited City")                                     //edit city
        cy.get('[formcontrolname="country"]').click()
            cy.get('mat-option').contains('Australia').then(option => {
                cy.wrap(option).contains('Australia');                                      // edit country
                option[0].click(); 
                cy.get('[formcontrolname="country"]').contains('Australia')  
            })
        cy.get('[formcontrolname="state"]').click()
            cy.get('mat-option').contains('Queensland').then(option => {
                cy.wrap(option).contains('Queensland');                                          // edit state
                option[0].click(); 
                cy.get('[formcontrolname="state"]').contains('Queensland')  
            })
        cy.get('[formcontrolname="zip"]').clear().type("222222")                                          //edit zip
                                                           
        const random = Math.round(Math.random() * 1e+6)
        const editNotes = `This is the edited contact notes ${random}`
        cy.get('[formcontrolname="notes"]').clear().type(editNotes)                                       //add random text in contact notes

        cy.get('.save-button').click()
        cy.wait(3000)     
    })
    it('should delete the contact', () => {
        cy.get('.navbar-content').contains('Contacts').click()
        cy.wait(5000)
        cy.contains('delete').first().click()
        cy.get('.buttons-container').contains('Yes').click()
        cy.wait(1000)
    })
})
