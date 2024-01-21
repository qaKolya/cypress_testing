import Login from "../pageObject/loginPage"
import { loginUserAndNavigate } from "../../support/common_functions"
import { checkTextContains } from "../../support/common_functions"
import { assertUrl  } from "../../support/common_functions";


describe('Login', function () {
    

    before(function (){
        loginUserAndNavigate()
    });

    it('Sign in', function () {
        assertUrl('/role:administrator');
    })
})

