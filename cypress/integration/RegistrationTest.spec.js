
describe('Actions', function(){
    it('RegisterInputsTest', function() {
        cy.visit('http://localhost:3000')

        cy.contains('Login').click()
        cy.contains('Not A User Yet?').click()
        
        cy.url()
            .should('include', '/Registration')

        cy.get('.action-username')
            .type('TestUsername')
            .should('have.value', 'TestUsername')

        cy.get('.action-email')
            .type('Test@Email.com')
            .should('have.value', 'Test@Email.com')

        cy.get('.action-password1')
            .type('TestPassword')
            .should('have.value', 'TestPassword')

        cy.get('.action-password2')
            .type('TestPassword')
            .should('have.value', 'TestPassword')
    })

    it('LoginCorrectTest', function() {
        cy.visit('http://localhost:3000')

        cy.contains('Login').click()

        cy.url()
            .should('include', '/Registration')
        
        cy.get('.action-username')
            .type('TestUsername')
            .should('have.value', 'TestUsername')

        cy.get('.action-password')
            .type('TestPassword')
            .should('have.value', 'TestPassword')

        cy.contains('Log-In').click()

        cy.contains('Succesvol ingelogd')
            .should('be.visible')
    })

    it('LoginFalseTest', function() {
        cy.visit('http://localhost:3000')

        cy.contains('Login').click()

        cy.url()
            .should('include', '/Registration')
        
        cy.get('.action-username')
            .type('FalseUsername')
            .should('have.value', 'FalseUsername')

        cy.get('.action-password')
            .type('FalsePassword')
            .should('have.value', 'FalsePassword')

        cy.contains('Log-In').click()

        cy.contains('Uw inloggegevens waren incorrect')
            .should('be.visible')
    })
})