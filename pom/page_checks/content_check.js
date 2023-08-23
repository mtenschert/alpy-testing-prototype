/**
 * Represents a set of checks related to content on a page.
 * This class provides methods to verify different aspects of content, such as verifying
 * the minimum number of shops loaded on a page.
 *
 * @class
 */
class ContentCheck {

    /**
     * Checks if the loaded shops meet the minimum required number.
     *
     * @param {number} NumberOfShops - The minimum number of shops expected to be loaded.
     */
    shopsAtLeastLoadedCheck(NumberOfShops) {
        cy.get('div.shoplist > div.the_shop_pile').should('have.length.greaterThan', NumberOfShops);
    }

    /**
     * Check if the <header>  is loaded and visible on the page.
     * Ensures that the section is present in the DOM and not hidden via CSS (e.g., display: none).
     * If the <header> isn't found or isn't visible within the default timeout, the test will fail.
     *
     * @returns {void}
     */
    verifyAppHeaderLoaded() {
        cy.get('header>div').should('be.visible');
    }

}

export default new ContentCheck();