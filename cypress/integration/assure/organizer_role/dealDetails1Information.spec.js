import 'cypress-file-upload';

describe('Organizer login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#mat-input-0').type("cytester")
        cy.get('#mat-input-1').type("Assure123!")
        cy.get('.submit-button').click()
        cy.wait(5000)
        cy.get('.navbar-content').contains('Deals').click()
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/deals')
        cy.get('.icons-container > :nth-child(1)').click()
        cy.get('#mat-input-2').type('pending')
        cy.get('[style="left: 0px; width: calc(((33.3333% - 10px) * 1) + 0px); top: 0px; height: calc(300px);"] > .mat-figure > .deal').should('contain', 'PENDING').click()
    })
    it('should add Marketing Slogan and Marketing Link', () => {
        cy.get('.media-upload > .mat-icon').click()
        cy.get('[formcontrolname="marketingSlogan"]').clear().type('सेवा नै धर्म हो।')                      // Marketing Slogan
        cy.get('[formcontrolname="marketingLink"]').clear().type('sevadevelopment.com')                     // Marketing Link
        cy.get('.img-upload-btn').click({ force: true })

        const fileName = 'images/seva.png';
        cy.fixture(fileName).then(fileContent => {
            cy.get('#dropZone').upload(
                { fileContent, fileName, mimeType: 'image/png' },
                { subjectType: 'drag-n-drop' }
            )
        })
        cy.get('.mat-dialog-actions').contains('Upload').click()
        cy.get('.img-upload-btn').contains('Upload New Deal Logo')     
        cy.get('.media-upload > .mat-icon').click({ force: true })
        cy.contains('सेवा नै धर्म हो।')        
    })
    it('should navigate to Details Section of the deal and select fund manager', () => {
        cy.get('.mat-tab-labels').contains('Details').click({ force: true })
        cy.get('.mat-card').contains('Deal Information')
        cy.get('[formcontrolname="fundManager"]').click();
        cy.get('mat-option').contains('Robb Kunz').then(option => {
            cy.wrap(option).contains('Robb Kunz');        
            option[0].click(); 
            cy.get('[formcontrolname="fundManager"]').contains('Robb Kunz')  
          });
    })
    it('should select and fill number of asset type', () => {
        cy.get('.mat-tab-labels').contains('Details').click({ force: true })
        cy.get('.mat-card').contains('Deal Information')
        cy.get('[formcontrolname="fundManager"]').should('be.exist');
        cy.get('[value="MULTIPLE"]').click()
        cy.get('[value="SINGLE"]').click()
        cy.get('[formcontrolname="assetType"]').should('not.be.hidden')
        cy.get('[formcontrolname="assetType"]').click();
            cy.get('mat-option').contains('Common Stock').then(option => {
            cy.wrap(option).contains('Common Stock');        
            option[0].click(); 
            cy.get('[formcontrolname="assetType"]').contains('Common Stock')  
        });
        cy.get('[formcontrolname="portfolioName"]').clear().type('seva') 
        cy.get('[formcontrolname="portfolioEntityType"]').click();
            cy.get('mat-option').contains('Limited Liability Company').then(option => {
            cy.wrap(option).contains('Limited Liability Company');        
            option[0].click(); 
            cy.get('[formcontrolname="portfolioEntityType"]').contains('Limited Liability Company')  
        })
        cy.get('[formcontrolname="portfolioCountry"]').click()
        cy.get('mat-option').contains('United States').then(option => {
            cy.wrap(option).contains('United States');        
            option[0].click(); 
            cy.get('[formcontrolname="portfolioCountry"]').contains('United States')  
        })
        cy.get('[formcontrolname="portfolioState"]').click()
        cy.get('mat-option').contains('Utah').then(option => {
            cy.wrap(option).contains('Utah');        
            option[0].click(); 
            cy.get('[formcontrolname="portfolioState"]').contains('Utah')  
        })
        cy.get('.content-container > [fxlayout="row"]').contains('Save').click()
        cy.wait(2000)
    })
    it('should add Carry Percentage and Additional Carry Percentage',()=> {
        cy.get('.mat-tab-labels').contains('Details').click({ force: true })
        cy.get('.mat-card').contains('Deal Information')
        cy.get('[formcontrolname="carryPercentage"]').clear().type('33')
        cy.get('.total-carry-percent').contains('33')

    // Add Additional Carry percentage
        cy.get('.add-btn').click()
        cy.get('#mat-dialog-title-0').contains('Add Carry Recipient')
        cy.get('.carry-radio').contains('LLC').click()

        cy.get('[formcontrolname="carryPercentage"]').clear({force: true}).invoke('val',55)

        cy.get('[formcontrolname="name"]').clear().type('Cypress Carry Entity')
        cy.get('[formcontrolname="countryOfFormation"]').click()
            cy.get('mat-option').contains('United States').then(option => {
                cy.wrap(option).contains('United States');        
                option[0].click(); 
                cy.get('[formcontrolname="countryOfFormation"]').contains('United States')  
            })
        cy.get('[formcontrolname="stateOfFormation"]').click()
            cy.get('mat-option').contains('Utah').then(option => {
                cy.wrap(option).contains('Utah');        
                option[0].click(); 
                cy.get('[formcontrolname="stateOfFormation"]').contains('Utah')  
            })
        cy.get('[formcontrolname="street"]').clear().type('CypressCarryStreet')
        cy.get('[formcontrolname="city"]').clear().type('CypressCity')
        cy.get('[formcontrolname="country"]').click()
            cy.get('mat-option').contains('Nepal').then(option => {
                cy.wrap(option).contains('Nepal');        
                option[0].click(); 
                cy.get('[formcontrolname="country"]').contains('Nepal')  
            })        
        cy.get('[formcontrolname="zip"]').clear().type('33603')
        cy.get('#mat-dialog-0').contains('Save').should('be.enabled')
        cy.get('#mat-dialog-0').contains('Save').click()        
    })
    
})