import AddUserPage from "../pageObject/addUserPage"
import { assertUrl, loginUser } from "../../support/common_functions"


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
        cy.handleNotification()
        user.clickAddUser()
            .shouldBeVisible();
    
    })
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
        cy.handleNotification()
        user.clickAddUser()
            .shouldBeVisible();
        user.clickToInfo()
            .clickMoreInfo()
            .clickDelete()
        assertUrl('https://kolya.talentlms.com/user/index')
    })
})