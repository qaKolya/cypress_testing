import Login from "../pageObject/loginPage"


describe('Login', function () {

    const login = new Login()


    it('Sign in', function () {
        cy.visit('https://kolya.talentlms.com/index')
        login.emailOrUserName().type('dodryak98')
        login.password().type('Man4ester')
        login.loginBTN().should('be.visible').click()
        login.toAdmin().click();
        cy.contains('Administrator').should('be.visible');
        cy.url().should('include', '/role:administrator');
    })
})

