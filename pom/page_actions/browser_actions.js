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
        cy.wait(500);
        cy.go('back');
        cy.wait(1500);
    }

    /**
     * Scroll top event
     *
     * Get element via argument
     */
    scrollTopEvent(ElementSelector) {
        cy.get(`${ElementSelector}`)
            .scrollTo('top'); // todo: for mobile-view only, because if you open the mobile modal for a person, we scroll automatically to the product, the main navigation is not visible then...
    }


    /**
     * Scroll until the element comes into the view
     *
     * Get element via argument
     */
    scrollIntoView(ElementSelector) {
        cy.get(`${ElementSelector}`).scrollIntoView();
    }

}

export default new BrowserActions();
