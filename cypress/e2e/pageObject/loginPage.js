import config from "../../../config.json"

class Login{

    emailOrUserName(){
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
}
export default Login