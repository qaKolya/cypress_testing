import AddCoursePage from "../pageObject/addCoursePage"
import "../../support/commands"
import { assertUrl, loginUser } from "../../support/common_functions"
import { checkTextContains } from "../../support/common_functions"



Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Adding course Test', function(){

    const course = new AddCoursePage();
    
    beforeEach(() => {
        loginUser()
    });

    it('Add simple course', () => {
        course.clickAddCourse()
            .enterCourseName()
            .clickCategoryDrpd()
            .setCategory()
            .enterDescription()
        cy.handleNotification()
        course.clickSave()
        checkTextContains(course.courseName)
    })

    it('Add course and delete', () => {
        course.clickAddCourse()
            .enterCourseName()
            .clickCategoryDrpd()
            .setCategory()
            .enterDescription()
        cy.handleNotification()
        course.clickSave()
        checkTextContains(course.courseName)
        course.clickCourseAfterSave()
            .clickGoToCourseContent()
            .clickDelete()
        assertUrl('https://kolya.talentlms.com/course/index')
    })

    it('Add course with code', () => {
        course.clickAddCourse()
            .enterCourseName()
            .clickCategoryDrpd()
            .setCategory()
            .enterDescription()
            .clickCode()
            .enterCode()
        cy.handleNotification()
        course.clickSave()
        checkTextContains(course.courseName)
    })
})


