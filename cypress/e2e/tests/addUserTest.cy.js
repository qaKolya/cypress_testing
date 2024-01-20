import AddUserPage from "../pageObject/addUserPage"
import Login from "../pageObject/loginPage"
import FakerUtils from "../utils/fakerUtils"
import config from "../../../config.json"




Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});



describe('Adding user', function(){

    beforeEach(() => {
        const login = new Login()
        cy.visit(config.baseUrl)
        login.emailOrUserName()
            .enterPassword()
            .clickLoginButton()
            .toAdmin()
            .shouldShowAdministrator()
            .shouldBeAdminUrl();
    });

    it('Should add ne user', () => {
        
        const user = new AddUserPage()

        
        const firstName = FakerUtils.generateName()
        const lastName = FakerUtils.generateSurname();
        const email = FakerUtils.generateEmail();
        const username = FakerUtils.generateUsername();

        user.addUserBtn().click()
        user.firstNameInpt().type(firstName)
        user.lastNameInpt().type(lastName)
        user.emailInpt().type(email)
        user.userNameInpt().type(username)
        user.descriptionInp().type('The best training student')
        user.userTypeDrpd().first().click()
        user.selectType().click();
        user.timeZoneDrpd().click()
        user.selectTimeZone().click()
        user.langDrpd().click()
        user.selectLang().click()
        user.excludeCheckBox().click()
        user.addUserSbmt().click()
        cy.contains(lastName).should('be.visible')
    })
})