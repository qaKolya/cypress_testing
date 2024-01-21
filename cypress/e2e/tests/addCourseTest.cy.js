import AddCoursePage from "../pageObject/addCoursePage"
import { loginUser } from "../../support/common_functions"
import { checkTextContains } from "../../support/common_functions"



Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Adding course Test', function(){

    beforeEach(() => {
        loginUser()
    });

    it('Add simple course', () => {
        const course = new AddCoursePage();

        course.clickAddCourse()
            .enterCourseName()
            .clickCategoryDrpd()
            .setCategory()
            .enterDescription()
            .clickSave()
        checkTextContains(course.courseName)
    })

    it('Add course with code', () => {
        const course = new AddCoursePage();

        course.clickAddCourse()
            .enterCourseName()
            .clickCategoryDrpd()
            .setCategory()
            .enterDescription()
            .clickCode()
    })
})


