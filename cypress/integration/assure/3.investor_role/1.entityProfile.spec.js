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

// Add Entity profile    

    it('should create entity profile', () =>{
        cy.get('[formcontrolname="profile"]').click()
            cy.get('mat-option').contains('Create New Profile').then(option => {
                cy.wrap(option).contains('Create New Profile');        
                option[0].click(); 
                cy.get('[formcontrolname="profile"]').contains('Create New Profile')  
            })
        cy.get('#mat-dialog-title-0').contains('Create New Investor Profile')
        cy.get('[style="margin: 8px 0;"]').contains('Entity').click()
        cy.get('[formcontrolname="entityAccountName"]').type('Cypress Entity')                                         //Entity Account name
        cy.get('[formcontrolname="entityType"]').click()                                
        cy.get('mat-option').contains('Limited Liability Company').then(option => {                             //Entity type
            cy.wrap(option).contains('Limited Liability Company');        
            option[0].click(); 
            cy.get('[formcontrolname="entityType"]').contains('Limited Liability Company')  
        })
        cy.get('[formcontrolname="isUSPerson"]').contains('Yes').click()                                       //Is entity a US person ---> Yes

        cy.get('[formcontrolname="taxId"]').type('0987654321')                                              //EIN
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
        cy.get('.mat-checkbox-label').click()                                                  //check Delivery address same as address
        cy.get('.buttons-container').contains('Next').click() 
    // 3. Signatories section 
        cy.get(':nth-child(2) > .mat-list-item > .mat-list-item-content').contains('Add Signatory').click()
        cy.get('#mat-dialog-1').contains('Add Signer')                                           
        cy.get('[formcontrolname="firstName"]').type('Cypress')                            //first name
        cy.get('[formcontrolname="lastName"]').type('P. Signer')                          //last name
        cy.get('[formcontrolname="title"]').type('Primary')                               //Title
        cy.get('[formcontrolname="email"]').type('tester10@sevadev.com')                     //email
        cy.get('[formcontrolname="phoneNumber"]').type('9770987654321')                   // phone number
        cy.get('#mat-input-28').type('000001112')                                //ssn
        cy.get('[formcontrolname="dob"]').type('11111975')                                 //dob
        cy.get('#mat-checkbox-3').click()                                               //Address same as entity account address
        cy.get('.save-button').click()
        cy.get('.buttons-container').contains('Next').click({ force: true }) 
    // 4. Additional Information
        cy.get('#cdk-step-content-1-3 > div.ng-star-inserted').contains('Add Beneficial Owner').click({ force: true })
        cy.get('#mat-dialog-2').contains('Add Beneficial Owner')                                           
        cy.get('[formcontrolname="firstName"]').type('Cypress')                            //first name
        cy.get('[formcontrolname="lastName"]').type('B. Owner')                          //last name
        cy.get('[formcontrolname="email"]').type('tester09@sevadev.com')                     //email
        cy.get('[formcontrolname="phoneNumber"]').type('9770987654321')                   // phone number
        cy.get('.us-person-container').contains('Yes').click({ force: true })                                       //Is Beneficial owner a US person ---> Yes
        cy.get('#mat-input-37').type('112233000')                                //ssn
        cy.get('[formcontrolname="dob"]').type('11111975')                                 //dob
        cy.get('#mat-checkbox-4').click()                                               //Address same as entity account address
        cy.get('.save-button').click()
        cy.get('#cdk-step-content-1-3 > [style=""] > .buttons-container > [matsteppernext=""]').click() 
    // 5. Status
        cy.get(':nth-child(2) > .mat-list-item-content').click()
        cy.get('.ng-untouched.ng-star-inserted > .buttons-container > .spaced-out-buttons').contains('Save').click()
    })

// edited entity profile

    it('should edit entity profile', () =>{
        cy.get('[formcontrolname="profile"]').click().wait(1000)
            cy.get('mat-option').contains('Cypress Entity').then(option => {
                cy.wrap(option).contains('Cypress Entity');        
                option[0].click(); 
                cy.get('[formcontrolname="profile"]').contains('Cypress Entity')  
            })
        cy.contains('edit').click()
        cy.get('#mat-dialog-title-0').contains('Cypress Entity')
        cy.get('[formcontrolname="entityAccountName"]').clear().type('Cypress edit Entity')                                         //edit Entity Account name
        cy.get('[formcontrolname="entityType"]').click()                                
        cy.get('mat-option').contains('Limited Liability Company').then(option => {                             //Entity type
            cy.wrap(option).contains('Limited Liability Company');        
            option[0].click(); 
            cy.get('[formcontrolname="entityType"]').contains('Limited Liability Company')  
        })
        cy.get('[formcontrolname="isUSPerson"]').contains('No').click()                                       //Is entity a US person ---> No
        cy.get('[formcontrolname="isUSPerson"]').contains('Yes').click()                                       //Is entity a US person ---> Yes

        cy.get('[formcontrolname="taxId"]').clear().type('321852933')                                              //EIN
        cy.get('.investorProfileDialog').contains('Next').click()
    // 2. Contact section    
        cy.get('[formcontrolname="street"]').clear().type('cypress edit street 888')                                  //Street
        cy.get('[formcontrolname="city"]').clear().type('Melbourne')                                                //City
        cy.get('[formcontrolname="country"]').click()                                
            cy.get('mat-option').contains('Australia').then(option => {                             //Country
                cy.wrap(option).contains('Australia');        
                option[0].click(); 
                cy.get('[formcontrolname="country"]').contains('Australia')  
            })
        cy.get('[formcontrolname="state"]').click()
            cy.get('mat-option').contains('Victoria').then(option => {                                      //States
                cy.wrap(option).contains('Victoria');        
                option[0].click(); 
                cy.get('[formcontrolname="state"]').contains('Victoria')  
            })
        cy.get('[formcontrolname="postalCode"]').clear().type('9978785')                              //postalcode
        cy.get('.mat-checkbox-label').click()                                                  //uncheck Delivery address same as address
        cy.get('.mat-checkbox-label').click()                                                  //check Delivery address same as address
        cy.get('.buttons-container').contains('Next').click() 
    // 3. Signatories section 
        cy.get(':nth-child(2) > .mat-list-item > .mat-list-item-content').contains('edit').click()
        cy.get('#mat-dialog-1').contains('Edit Signer')                                           
        cy.get('[formcontrolname="firstName"]').clear().type('Cypress edit')                            //first name
        cy.get('[formcontrolname="lastName"]').clear().type('P. Signer')                          //last name
        cy.get('[formcontrolname="title"]').clear().type('Edited Primary')                               //Title
        cy.get('[formcontrolname="email"]').clear().type('tester10@sevadev.com')                     //email
        cy.get('[formcontrolname="phoneNumber"]').clear().type('9779879813222')                   // phone number
        cy.get('#mat-input-24').clear().type('222-66-6600')                                     //ssn
        cy.get('[formcontrolname="dob"]').clear().type('03031989')                                 //dob
        cy.get('.mat-checkbox-label').click({ multiple: true, force: true })                                               //check Address same as entity account address
        cy.get('.save-button').click()
        cy.get(':nth-child(2) > .mat-list-item > .mat-list-item-content').contains('Cypress edit P. Signer')
        cy.get('.buttons-container').contains('Back').click({ multiple: true, force: true }) 
        cy.get('.mat-checkbox-label').click()                                                  //check Delivery address same as address
        cy.get('.buttons-container').contains('Next').click({ multiple: true, force: true }) 
        cy.get('.buttons-container').contains('Next').click({ multiple: true, force: true }) 
    // 4. Additional Information
        cy.get('#cdk-step-content-1-3 > div.ng-star-inserted').contains('edit').click({ force: true })
        cy.get('#mat-dialog-2').contains('Edit Beneficial Owner').wait(1000)                                           
        cy.get('[formcontrolname="firstName"]').wait(1000).clear().type('Cypress edit')                            //first name
        cy.get('[formcontrolname="lastName"]').clear().type('B. Owner')                          //last name
        cy.get('[formcontrolname="email"]').clear().type('tester09@sevadev.com')                     //email
        cy.get('[formcontrolname="phoneNumber"]').clear().type('9779855666666')                   // phone number
        cy.get('.us-person-container').contains('No').click({ force: true })                                       //Is Beneficial owner a US person ---> Yes
        cy.get('.us-person-container').contains('Yes').click({ force: true })                                       //Is Beneficial owner a US person ---> Yes
        cy.get('#mat-input-35').clear().type('222-66-6600')                                //ssn
        cy.get('[formcontrolname="dob"]').clear().type('09091980')                                 //dob
        // cy.get('.mat-checkbox-label').click({ multiple: true, force: true })                                               //uncheck Address same as entity account address
        cy.get('.mat-checkbox-label').click({ multiple: true, force: true })                                               //Address same as entity account address
        cy.get('.save-button').click()
        cy.get('#cdk-step-content-1-3 > div.ng-star-inserted').contains('Cypress edit B. Owner')
        cy.get('#cdk-step-content-1-3 > [style=""] > .buttons-container > [matsteppernext=""]').click() 
    // 5. Status
        cy.get(':nth-child(2) > .mat-list-item-content').click()               // uncheck status 1
        cy.get(':nth-child(2) > .mat-list-item-content').click()
        cy.get('.ng-untouched.ng-star-inserted > .buttons-container > .spaced-out-buttons').contains('Save').click()
    })
})