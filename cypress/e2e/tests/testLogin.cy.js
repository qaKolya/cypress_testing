import Login from "../pageObject/loginPage"
import config from "../../../config.json"


describe('Login', function () {

    const login = new Login()


    it('Sign in', function () {
        cy.visit(config.baseUrl)
        login.emailOrUserName()
            .enterPassword()
            .clickLoginButton()
            .toAdmin()
            .shouldShowAdministrator()
            .shouldBeAdminUrl();
    })
})

