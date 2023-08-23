/**
 * Provides utility methods for performing various browser-related actions.
 * Aims to encapsulate direct interactions with browser navigation, history, and other related functionalities.
 *
 * @class
 */
class BrowserActions {

    /**
     * Navigates one page backward in the browser's history and then immediately goes forward to the original page.
     * Useful for quickly testing the behavior of pages when navigating backward and forward.
     */
    goBackAndForth() {
        cy.go('back');
        cy.go('forward');
    }

    /**
     * Navigates one page backward in the browser's historye.
     * Useful for quickly testing the behavior of pages when navigating backward.
     */
    goBack() {
        cy.go('back');
    }

    // more methods/actions related to browser interactions here...

}

export default new BrowserActions();
