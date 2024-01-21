import AddUserPage from "../pageObject/addUserPage"
import { loginUser } from "../../support/common_functions"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Adding user', function(){

    beforeEach(() => {
        loginUser()
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