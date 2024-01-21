import Login from "../e2e/pageObject/loginPage";
import config from "../../config.json";



export function loginUserAndNavigate() {
    const login = new Login();
    cy.visit(config.baseUrl);
    login.emailOrUserName()
        .enterPassword()
        .clickLoginButton()
        .toAdmin()
        .shouldShowAdministrator()
}


export function checkTextContains(expectedText) {
    // cy.get(selector).should('contain.text', expectedText);
    cy.contains(expectedText).should('be.visible');
}

export function assertUrl(expectedUrl) {
    cy.url().should('include', expectedUrl);
}