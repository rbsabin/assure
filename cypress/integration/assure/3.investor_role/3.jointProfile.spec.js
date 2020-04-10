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
        cy.get('[formcontrolname="amount"]').type('100000')
    })
    it('should create joint profile', () =>{
        cy.get('[formcontrolname="profile"]').click()
            cy.get('mat-option').contains('Create New Profile').then(option => {
                cy.wrap(option).contains('Create New Profile');        
                option[0].click(); 
                cy.get('[formcontrolname="profile"]').contains('Create New Profile')  
            })
        cy.get('#mat-dialog-title-0').contains('Create New Investor Profile')
        cy.get('[style="margin: 8px 0;"]').contains('Joint').click()
        cy.get('[formcontrolname="jointAccountName"]').type('Cypress Joint')                                         //joint Account name
        cy.get('[formcontrolname="jointType"]').click()                                
        cy.get('mat-option').contains('Community Property').then(option => {                             //joint type
            cy.wrap(option).contains('Community Property');        
            option[0].click(); 
            cy.get('[formcontrolname="jointType"]').contains('Community Property')  
        })
        cy.get('.investorProfileDialog').contains('Next').click()
// 2. Contact section    
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
        cy.get('#mat-checkbox-2').click()                                                  //check Delivery address same as address
        cy.get('.buttons-container').contains('Next').click() 
// 3. Joint Parties section 
    // Add Primary Signatory
        cy.get(':nth-child(2) > .mat-list-item > .mat-list-item-content').contains('Add Signatory').click()
        cy.get('#mat-dialog-1').contains('Add Signer')                                           
        cy.get('[formcontrolname="firstName"]').type('Cypress')                            //first name
        cy.get('[formcontrolname="lastName"]').type('P. Signer')                          //last name
        cy.get('[formcontrolname="title"]').type('Primary')                               //Title
        cy.get('[formcontrolname="email"]').type('tester10@sevadev.com')                     //email
        cy.get('[formcontrolname="phoneNumber"]').type('9770987654321')                   // phone number
        cy.get('[formcontrolname="dob"]').type('11111975')                                 //dob
        cy.get('#mat-checkbox-3').click()                                               //Address same as joint account address
        cy.get('#mat-input-26').type('000001112')                                //ssn
        cy.get('.save-button').click()
    //Add Additional Authorized Signatory
        cy.get(':nth-child(4) > .mat-list-item > .mat-list-item-content').contains('Add Signatory').click()
        cy.get('#mat-dialog-2').contains('Add Signer')                                           
        cy.get('[formcontrolname="firstName"]').type('Cypress')                            //first name
        cy.get('[formcontrolname="lastName"]').type('Additional Auth. Signer')                          //last name
        cy.get('[formcontrolname="title"]').type('Additional Authorized')                               //Title
        cy.get('[formcontrolname="email"]').type('tester09@sevadev.com')                     //email
        cy.get('[formcontrolname="phoneNumber"]').type('9771234567890')                   // phone number
        cy.get('[formcontrolname="dob"]').type('09091980')                                 //dob
        cy.get('#mat-checkbox-4').click()                                               //Address same as joint account address
        cy.get('#mat-input-36').type('0443322111')                                //ssn
        cy.get('.save-button').click()
        cy.get('.buttons-container').contains('Next').click({ force: true })     
// 4. Status
        cy.get('.mat-selection-list > :nth-child(1) > .mat-list-item-content').click()
        cy.get('.buttons-container').contains('Save').click()
    })
})