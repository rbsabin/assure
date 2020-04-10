import 'cypress-file-upload';

describe('Organizer login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#mat-input-0').type("cypressadmin")
        cy.get('#mat-input-1').type("Assure123!")
        cy.get('.submit-button').click()
        cy.wait(5000)
        cy.get('.navbar-content').contains('Portfolio').click()
        cy.url().should('eq','https://gb-client-spv-qa.assure.co/portfolio')
    })
    it('should import investment in portfolio',()=> {
        cy.get('.ng-star-inserted').contains('Import Investments').click({ force: true })
        cy.get('.export-upload').contains('Upload').should('be.disabled')

        const fileName = 'documents/AngelList.csv';
        cy.fixture(fileName).then(fileContent => {
            cy.get('#dropZone').upload(
                { fileContent, fileName, mimeType: 'application/csv' },
                { subjectType: 'drag-n-drop' }
            )
        })
        cy.get('.export-upload').contains('Upload').should('be.enabled')
        cy.get('.export-upload').contains('Upload').click().wait(1000)
        cy.get('.mat-snack-bar-container').contains('Investments have been imported')
    })
})