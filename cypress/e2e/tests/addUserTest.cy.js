import AddUserPage from "../pageObject/addUserPage"
import Login from "../pageObject/loginPage"
import FakerUtils from "../utils/fakerUtils"



Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});



describe('Adding user', function(){

    beforeEach(() => {
        const login = new Login()
        cy.visit('https://kolya.talentlms.com/index')
        login.emailOrUserName().type('dodryak98')
        login.password().type('Man4ester')
        login.loginBTN().should('be.visible').click()
        login.toAdmin().click();
        cy.contains('Administrator').should('be.visible');
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