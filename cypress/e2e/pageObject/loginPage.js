import config from "../../../config.json"

class Login{

    emailOrUserName(emailUserName){
        cy.get('input[name="login"]').type(config.defaultCredentials.username);
        return this;
    }
    enterPassword(){
        cy.get('input[type="password"]').type(config.defaultCredentials.password);
        return this;
    }
    
    clickLoginButton() {
        cy.get('input[name="submit"]').should('be.visible').click();
        return this;
    }
    toAdmin(){
        cy.contains('Go to the Administrator dashboard').click();
        return this;
    }

    shouldShowAdministrator() {
        cy.contains('Administrator').should('be.visible');
        return this; 
    }

    shouldBeAdminUrl() {
        cy.url().should('include', '/role:administrator');
        return this;
    }

    
}
export default Login