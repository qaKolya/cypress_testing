import Login from "../e2e/pageObject/loginPage";
import config from "../../config.json";



export function loginUser() {
    const login = new Login();
    cy.visit(config.baseUrl);
    login.emailOrUserName()
        .enterPassword()
        .clickLoginButton()
        .toAdmin()
        .shouldShowAdministrator()
}


export function checkTextContains(expectedText) {
    cy.contains(expectedText).should('be.visible');
}

export function assertUrl(expectedUrl) {
    cy.url().should('include', expectedUrl);
}