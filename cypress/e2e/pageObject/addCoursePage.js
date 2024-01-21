import FakerUtils from "../utils/fakerUtils"


class AddCoursePage {

    courseName = FakerUtils.generateCourseName();
    category = FakerUtils.generateCategory();
    description = FakerUtils.generateDescription();

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

    clickCode() {
        cy.get('#show-coursecode').click()
        return this;
    }
}

export default AddCoursePage