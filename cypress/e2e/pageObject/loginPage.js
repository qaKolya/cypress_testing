class Login{

    emailOrUserName(){
        return cy.get('input[name="login"]');
    }
    password(){
        return cy.get('input[type="password"]');
    }
    loginBTN(){
        return cy.get('input[name="submit"]');
    }
    toAdmin(){
        return cy.contains('Go to the Administrator dashboard');
    }
}
export default Login