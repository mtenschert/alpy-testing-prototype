/**
 * Provides validation methods for different aspects of forms.
 * Primarily targets checks and validations related to form input values, states, and behavior.
 *
 * @class
 */
class FormCheck {

    /**
     * Validates that the location search input field of the ski rental form has the expected value.
     * This field can represent towns, shops, countries, etc.
     *
     * @param {string} searchTerm - The expected value present in the location search input field.
     */
    checkFormLocationSearchInput(searchTerm) {
        cy.get('input#searchform_value').should('have.value', searchTerm);
    }

    // more methods/checks here...

}

export default new FormCheck();
