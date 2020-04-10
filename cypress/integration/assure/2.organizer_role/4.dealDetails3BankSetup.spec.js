import 'cypress-file-upload';

describe('Organizer login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#mat-input-0').type("cypressadmin")
        cy.get('#mat-input-1').type("Assure123!")
        cy.get('.submit-button').click()
        cy.wait(5000)
        cy.get('.navbar-content').contains('Deals').click()
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/deals')
        cy.get('.icons-container > :nth-child(1)').click()
        cy.get('#mat-input-2').type('pending')
        cy.get('[style="left: 0px; width: calc(((33.3333% - 10px) * 1) + 0px); top: 0px; height: calc(300px);"] > .mat-figure > .deal').should('contain', 'PENDING').click()
    })
    it('should setup bank account for deal ',()=> {
        cy.get('.mat-tab-labels').contains('Details').click({ force: true })
        cy.get('.mat-horizontal-stepper-header-container').contains('Bank Setup').click()
        cy.get('#bank-acct-setup-component').contains('No').click()                             // Is Assure setting ip the bank account?--> No
        cy.get('.upload-container').contains('Upload').should('be.visible')
        cy.get(':nth-child(3) > .mat-radio-group').contains('No').click()                       // Do you want KYC/AML services?--> No   
        cy.get('.upload-btn-container > .mat-raised-button').click({force: true})
        cy.get('[formcontrolname="documentName"]').type('Cypress Bank Wire test')
        cy.get('.mat-dialog-actions').contains('Upload').should('be.disabled')

        const fileName = 'documents/bank.pdf';                                                  // upload Bank wire text file
        cy.fixture(fileName).then(fileContent => {
            cy.get('#dropZone').upload(
                { fileContent, fileName, mimeType: 'application/pdf' },
                { subjectType: 'drag-n-drop' }
            )
        })
        cy.get('.mat-dialog-actions > .mat-primary').should('be.enabled')
        cy.get('.up-file').contains('documents/bank.pdf')
        cy.get('.mat-dialog-actions').contains('Upload').click()
        cy.get('#bank-account-save').click()
    })
})