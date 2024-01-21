import { loginUser } from "../../support/common_functions"
import { assertUrl  } from "../../support/common_functions";


describe('Login', function () {
    

    before(function (){
        loginUser()
    });

    it('Sign in', function () {
        assertUrl('/role:administrator');
    })
})

