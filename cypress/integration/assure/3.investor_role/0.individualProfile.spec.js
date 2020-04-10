describe('Organizer login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#mat-input-0').type("cyinvestor")
        cy.get('#mat-input-1').type("Assure123!")
        cy.get('.submit-button').click()
        cy.get('.navbar-content').contains('Investments').click()
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/investments')
        cy.get('.actions-icons-container > :nth-child(1)').click()
        cy.wait(5000)
        cy.get('.invest-search').type('pending')
        cy.get(':nth-child(1) > .card-content > .card-footer').should('contain', 'PENDING').click()
    })
    it('should open Investor experience of deal', () => {
        cy.get('.investment-co-card').contains('Minimum Subscription Amount')
        cy.get('.documents-card').contains('Fund Documents')
        cy.get('[formcontrolname="amount"]').clear().type('100000')
    })
    it('should create individual profile', () =>{
        cy.get('[formcontrolname="profile"]').click()
            cy.get('mat-option').contains('Create New Profile').then(option => {
                cy.wrap(option).contains('Create New Profile');        
                option[0].click(); 
                cy.get('[formcontrolname="profile"]').contains('Create New Profile')  
            })
        cy.get('#mat-dialog-title-0').contains('Create New Investor Profile')
        cy.get('[formcontrolname="firstName"]').type('Cypress')                                         //firstname
        cy.get('[formcontrolname="lastName"]').type('Individual')                                       //lastname
        cy.get('[formcontrolname="dob"]').type('10101980')                                              //dob
        cy.get('[style="padding-top: 12px; margin-bottom: 16px;"]').contains('No').click()              // Are you a US person? --> No 
        cy.get('[formcontrolname="passport"]').type('44455522')                                         //passport
        cy.get('[formcontrolname="itin"]').type('777766666')                                            //ITIN
        cy.get('.investorInfoForm').contains('Next').click()
        cy.get('[formcontrolname="street"]').type('cypress street 44')                                  //Street
        cy.get('[formcontrolname="city"]').type('Logan')                                                //City
        cy.get('[formcontrolname="country"]').click()                                
            cy.get('mat-option').contains('United States').then(option => {                             //Country
                cy.wrap(option).contains('United States');        
                option[0].click(); 
                cy.get('[formcontrolname="country"]').contains('United States')  
            })
        cy.get('[formcontrolname="state"]').click()
            cy.get('mat-option').contains('Utah').then(option => {                                      //States
                cy.wrap(option).contains('Utah');        
                option[0].click(); 
                cy.get('[formcontrolname="state"]').contains('Utah')  
            })
        cy.get('[formcontrolname="postalCode"]').type('84322')                              //postalcode
        cy.get('.mat-checkbox-layout').click()                                                  //check Delivery address same as address
        cy.get('[formcontrolname="phoneNumber"]').type('97798764321')                       //phone number
        cy.get('[formcontrolname="email"]').type('tester06@sevadev.com')                    //email
        cy.get('.buttons-container').contains('Next').click() 
        cy.get(':nth-child(1) > .mat-list-item-content').click()
        cy.get('#cdk-step-content-1-2 > .ng-star-inserted.ng-dirty > .buttons-container').contains('Save').click()
        cy.wait(1500)
    })
    it('should edit individual profile', () =>{
        cy.get('[formcontrolname="profile"]').click().wait(1000)
            cy.get('mat-option').contains('Cypress Individual').then(option => {
                cy.wrap(option).contains('Cypress Individual');        
                option[0].click(); 
                cy.get('[formcontrolname="profile"]').contains('Cypress Individual')  
            })
        cy.contains('edit').click()
        cy.get('#mat-dialog-title-0').contains('Cypress Individual')
        cy.get('[formcontrolname="firstName"]').clear().type('Cypress Edit')                                         //Edited firstname
        cy.get('[formcontrolname="lastName"]').clear().type('Individual')                                       //Edited lastname
        cy.get('[formcontrolname="dob"]').clear().type('11111960')                                              // edited dob
        cy.get('[style="padding-top: 12px; margin-bottom: 16px;"]').contains('Yes').click()              // Are you a US person? --> Yes 
        cy.get('[style="padding-top: 12px; margin-bottom: 16px;"]').contains('No').click()              // Are you a US person? --> No 
        cy.get('[formcontrolname="passport"]').clear().type('9988772')                                         //edited passport
        cy.get('[formcontrolname="itin"]').clear().type('777766666')                                            // edited ITIN
        cy.get('.investorInfoForm').contains('Next').click()
        cy.get('[formcontrolname="street"]').clear().type('cypress edited street')                                  //edited Street
        cy.get('[formcontrolname="city"]').clear().type('Melbourne')                                                //edited City
        cy.get('[formcontrolname="country"]').click()                                
            cy.get('mat-option').contains('Australia').then(option => {                             //edited Country
                cy.wrap(option).contains('Australia');        
                option[0].click(); 
                cy.get('[formcontrolname="country"]').contains('Australia')  
            })
        cy.get('[formcontrolname="state"]').click()
            cy.get('mat-option').contains('Victoria').then(option => {                                      //edited States
                cy.wrap(option).contains('Victoria');        
                option[0].click(); 
                cy.get('[formcontrolname="state"]').contains('Victoria')  
            })
        cy.get('[formcontrolname="postalCode"]').clear().type('987422')                              //edited postalcode
        cy.get('.mat-checkbox-layout').click()                                                  //uncheck Delivery address same as address
        cy.get('.mat-checkbox-layout').click()                                                  //check Delivery address same as address
        cy.get('[formcontrolname="phoneNumber"]').type('97798764321')                       //edited phone number
        cy.get('[formcontrolname="email"]').clear().type('tester06@sevadev.com')                    //edited email
        cy.get('.buttons-container').contains('Next').click() 
        cy.get(':nth-child(1) > .mat-list-item-content').click()                              //uncheck status option
        cy.get(':nth-child(1) > .mat-list-item-content').click()                                //check status option
        cy.get('#cdk-step-content-1-2 > .ng-star-inserted.ng-dirty > .buttons-container').contains('Save').click()
        cy.get('[formcontrolname="profile"]').click().contains('Cypress Edit Individual')

    })
})