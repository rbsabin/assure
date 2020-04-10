import 'cypress-file-upload';

describe('Organizer login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#mat-input-0').type("cypressadmin")
        cy.get('#mat-input-1').type("Assure123!")
        cy.get('.submit-button').click()
        cy.wait(5000)
        cy.get('.navbar-content').contains('Documents').click()

    })
    it('should open document view page', () => {
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/documents/view')
    })
    it('should open upload document page', () => {
        cy.get('.navbar-content').contains('Upload').click()
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/documents/upload')
    })
    it('should upload document', () => {
        cy.get('.navbar-content').contains('Upload').click()
        cy.get('.upload-view').contains('Add files').click()
        const fileName = 'documents/sample.pdf';
        cy.fixture(fileName).then(fileContent => {
            cy.get('.upload-container').upload(
                { fileContent, fileName, mimeType: 'application/pdf' },
                { subjectType: 'drag-n-drop' }
            )
        })
        cy.get('.upload-view').contains('UPLOAD').click()
        cy.get('.button-options').contains('SUBMIT').should('be.disabled')
        cy.get('[formcontrolname="associatedDeal"]').click()
        cy.get('#mat-option-1').click()
        cy.get('.button-options').contains('SUBMIT').should('be.enabled').click()     .wait(1000)
        cy.get('.mat-snack-bar-container').contains('Documents successfully uploaded.')
        
    })
})