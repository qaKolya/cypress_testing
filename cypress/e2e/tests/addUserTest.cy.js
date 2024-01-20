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

        
        const lastName = FakerUtils.generateSurname();
        const email = FakerUtils.generateEmail();
        const username = FakerUtils.generateUsername();

        user.clickAddUserBtn()
            .enterFirstName()
            .enterLastName()
            .enterEmail()
            .enterUserName()
            .descriptionInp()
            .clickUserTypeDrpd()
            .selectType()
            .timeZoneDrpd()
            .selectTimeZone()
            .clickLangDrpd()
            .selectLang()
            .excludeCheckBox()
            .addUserSbmt()
            .shouldBeVisible();
    })
})