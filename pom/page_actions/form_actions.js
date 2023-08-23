import generalConfig from "../../cypress/fixtures/general_config";
import ClickActions from "./click_actions";

/**
 * Provides utility methods for performing various form-related actions.
 * Aims to encapsulate direct interactions with form elements, such as input fields, date pickers, buttons, and more.
 *
 * @class
 */
class FormActions {

    /**
     * Enters the specified location into a search input field.
     * Then typing in the location and waits for search results
     * Then click on the first result TODO here we should use 'contain' to search for the li of the location, it can happen then its the 3rd result...
     * NOTE: Consider fixtures for multilanguage support and handling different location names.
     *
     * @param {string} location - The name of the location to input into the search field.
     */
    enterLocation(location) {
        cy.get('input#searchform_value')
            .click()
            .type(location)
            .wait(1500)
            // Wait for the search results to appear
            .get('div.result-group', { timeout: 3000 }) // Wait up to 3 seconds for the results to appear. Adjust timeout as necessary.
            .first()
            .click();
    }


    /**
     * For product selection only
     * Switch for viewportWidth is less than desktop breakpoint (desktopSmall)
     * Open the Date picker via click on the booking date
     * then check, if the date picker opens
     */
    openDatePickerViaClickOnBookingDateProductSelection() {
        if (generalConfig.viewportWidth < generalConfig.breakpoints.desktopSmall) {
            // mobile behave here
            cy.get('div.js-calendar-range').click();
            cy.get('ngb-datepicker').should('be.visible');
        } else {
            // desktop behave here
            cy.get('strong.booking-date').click();
            cy.get('ngb-datepicker').should('be.visible');
        }
    }


    /**
     * For home-, town-, poi- pages only
     * Open the Date picker via click on the start date input field
     * then check, if the date picker opens
     */
    openDatePickerViaStartDate() {
        cy.get('app-date-picker #startDate').click();
        cy.get('ngb-datepicker').should('be.visible');
    }


    /**
     * Selects the specified start and end dates.
     * NOTE: The provided start and end dates should be fixtures or selector strings.
     * NOTE: method selectDates is in use on home-, town-, shop-, poi- and product selection page
     *
     * @param {string} startDate - The selector or fixture for the desired start date.
     * @param {string} endDate - The selector or fixture for the desired end date.
     */
    selectDates(startDate, endDate) {
        // Ensure the start date element is visible before clicking
        cy.get(startDate, { timeout: 1000 }).
        should('be.visible').click();

        // Ensure the end date element is visible before clicking
        cy.get(endDate, { timeout: 1000 })
            .should('be.visible').click();
    }

    /**
     * Inputs the specified number into a field for selecting the number of people.
     * NOTE: Additional checks are recommended to validate the correct behavior of related UI elements.
     *
     * @param {number} count - The number of people to input.
     */
    selectNumberOfPeople(count) {
        cy.get('input[name="search_adults"]')
            .type(count);
        // TODO we should also check if the quantity-up and quantity-down buttons are working correctly
    }

    /**
     * Submits the form by clicking the associated submit button.
     */
    submitForm() {
        cy.get('button[type="submit"]')
            .click({force: true}); // todo webkit-fix for submit button can lead to missing checks in other browsers, force: true
    }

}

export default new FormActions();