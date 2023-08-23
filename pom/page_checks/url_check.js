/**
 * Provides validation methods for various URL-related checks.
 * Assists in validating segments, parameters, paths, and patterns present in the current URL.
 *
 * @class
 */
class UrlCheck {

    /**
     * Validates that the current URL includes the specified town path.
     * Useful for ensuring navigation to the correct town-specific page or segment.
     *
     * @param {string} townPath - The expected town path or segment in the URL.
     */
    checkPath(townPath) {
        cy.url().should('include', townPath);
    }

    /**
     * Validates that the current URL includes /payment/checkout path.
     *
     */
    checkPathCheckout() {
        cy.url().should('include', '/payment/checkout');
    }

}

export default new UrlCheck();
