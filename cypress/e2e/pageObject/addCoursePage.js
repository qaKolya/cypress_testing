import FakerUtils from "../utils/fakerUtils"


class AddCoursePage {

    courseName = FakerUtils.generateCourseName();
    category = FakerUtils.generateCategory();
    description = FakerUtils.generateDescription();
    code = FakerUtils.generateCode();

    clickAddCourse() {
        cy.get('.hidden-phone').contains('a', 'Add course').click();
        return this;
    }

    enterCourseName() {
        cy.get('input[name="name"]').type(this.courseName);
        return this;
    }

    clickCategoryDrpd() {
        cy.get('span.select2-arrow').eq(0).click();
        return this;
    }

    setCategory() {
        cy.get('.select2-result-label').contains('Samples').click();
        return this;
    }

    enterDescription() {
        cy.get('textarea[name="description"]').type(this.description);
        return this;
    }

    clickSave() {
        cy.get('input[name="submit_course"]').click();
        return this;
    }

    clickCourseAfterSave() {
        cy.get('a[href*="/course/edit/id:"]').contains('Course').click();
        return this;
    }

    clickGoToCourseContent() {
        cy.get('a.btn.btn-primary.dropdown-toggle').eq(1).click();
        return this;
    }

    clickDelete() {
        cy.get('#tl-delete-course').click();
        cy.get('#tl-confirm-submit').click()
        return this;
    }

    clickCode() {
        cy.get('#show-coursecode').click({force: true})
        return this;
    }

    enterCode() {
        cy.get('input[name="course_code"]').type(this.code);
        return this;
    }
}

export default AddCoursePage