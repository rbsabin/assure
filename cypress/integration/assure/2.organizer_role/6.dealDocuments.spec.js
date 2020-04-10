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
        cy.get('#mat-input-2').type('pending').wait(1000)
        cy.get('[style="left: 0px; width: calc(((33.3333% - 10px) * 1) + 0px); top: 0px; height: calc(300px);"] > .mat-figure > .deal').should('contain', 'PENDING').click()
    })   
    it('should upload other Documents',() => {
        cy.get('.mat-tab-labels').contains('Documents').click({ force: true }).wait(1000)
        cy.get('.mat-tab-labels').contains('Details').click({ force: true }).wait(1000)
        cy.get('.mat-tab-labels').contains('Documents').click({ force: true })
        cy.get('.uploads-icon').click({ force: true })
        const fileName = 'documents/otherDoc.pdf';
        cy.fixture(fileName).then(fileContent => {
            cy.get('#dropZone').upload(
                { fileContent, fileName, mimeType: 'application/pdf' },
                { subjectType: 'drag-n-drop' }
            )
        })
        cy.get('[formcontrolname="documentName"]').type('uploaded Document')
        cy.get('.mat-dialog-actions').contains('Upload').click()
        cy.get('.mat-grid-list').contains('uploaded Document')
    })
    it('should auto generate documents', () => {
        cy.get('.mat-tab-labels').contains('Documents').click({ force: true }).wait(1000)
        cy.get('.mat-tab-labels').contains('Details').click({ force: true }).wait(1000)
        cy.get('.mat-tab-labels').contains('Documents').click({ force: true })
        cy.get('.no-docs').contains('GENERATE').click({ force: true }).wait(1000)
        cy.get('#confirm-dialog').contains('Confirm')
        cy.get('.buttons-container').contains('Yes').click()
        cy.get('.mat-snack-bar-container').should('contain.text', 'Your docs will be available shortly.')
    })
})