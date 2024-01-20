class AddUserPage {


    addUserBtn() {
        return cy.get('.hidden-phone').contains('a', 'Add user');
    }

    firstNameInpt() {
        return cy.get('input[name="name"]');
    }
    lastNameInpt() {
        return cy.get('input[name="surname"]');
    }
    emailInpt() {
        return cy.get('input[name="email"]');
    }
    userNameInpt() {
        return cy.get('input[name="login"]');
    }
    descriptionInp() {
        return cy.get('textarea[name="description"]');
    }
    userTypeDrpd() {
        return cy.get('span.select2-arrow > b');
    }
    selectType() {
        return cy.contains('.select2-drop-active .select2-result-label', 'Trainer-Type');
    }
    timeZoneDrpd() {
        return cy.get('span.select2-arrow').eq(1);
    }
    selectTimeZone(){
        return cy.contains('div.select2-result-label', '(GMT -10:00) Hawaii');
    }
    langDrpd() {
        return cy.get('span.select2-arrow').eq(2);
    }
    selectLang() {
        return cy.contains('div.select2-result-label', 'Deutsch (German)');
    }
    excludeCheckBox() {
        return cy.get('input[name="restrict_email"]')
    }

    addUserSbmt() {
        return cy.get('input[type="submit"][data-loading-text="Saving..."]')
    }
    


}
export default AddUserPage