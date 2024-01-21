import AddUserPage from "../pageObject/addUserPage"
// import Login from "../pageObject/loginPage"
// import config from "../../../config.json"
import { loginUserAndNavigate } from "../../support/common_functions"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Adding user', function(){

    beforeEach(() => {
        loginUserAndNavigate()
    });

    it('Should add ne user', () => {
        const user = new AddUserPage()
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
            .clickAddUser()
            .shouldBeVisible();
    })
})