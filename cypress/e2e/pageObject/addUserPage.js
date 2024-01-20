import { th } from "@faker-js/faker";
import FakerUtils from "../utils/fakerUtils"

class AddUserPage {


    firstName = FakerUtils.generateName()
    lastName = FakerUtils.generateSurname();
    email = FakerUtils.generateEmail();
    username = FakerUtils.generateUsername();


    clickAddUserBtn() {
        cy.get('.hidden-phone').contains('a', 'Add user').click();
        return this;
    }

    enterFirstName() {
        cy.get('input[name="name"]').type(this.firstName);
        return this;
    }
    enterLastName() {
        cy.get('input[name="surname"]').type(this.lastName);
        return this;
    }
    enterEmail() {
        cy.get('input[name="email"]').type(this.email);
        return this;
    }
    enterUserName() {
        cy.get('input[name="login"]').type(this.username);
        return this;
    }
    descriptionInp() {
        cy.get('textarea[name="description"]').type('The best training student');
        return this;
    }
    clickUserTypeDrpd() {
        cy.get('span.select2-arrow > b').first().click();
        return this;
    }
    selectType() {
        cy.contains('.select2-drop-active .select2-result-label', 'Trainer-Type').click();
        return this;
    }
    timeZoneDrpd() {
        cy.get('span.select2-arrow').eq(1).click();
        return this;
    }
    selectTimeZone(){
        cy.contains('div.select2-result-label', '(GMT -10:00) Hawaii').click();
        return this;
    }
    clickLangDrpd() {
        cy.get('span.select2-arrow').eq(2).click();
        return this;
    }
    selectLang() {
        cy.contains('div.select2-result-label', 'Deutsch (German)').click();
        return this;
    }
    excludeCheckBox() {
        cy.get('input[name="restrict_email"]').click();
        return this;
    }

    clickAddUser() {
        cy.get('input[type="submit"][data-loading-text="Saving..."]');
        return this;
    }

    shouldBeVisible() {
        cy.contains(this.lastName).should('be.visible')
        return this;
    }
    


}
export default AddUserPage