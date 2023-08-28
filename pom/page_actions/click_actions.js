import generalConfig from "../../cypress/fixtures/general_config";
import ContentCheck from "../page_checks/content_check";
import BrowserActions from "./browser_actions";

class ClickAction {
    /**
     * ClickAction Class.
     *
     * Represents a collection of click actions to be performed during end-to-end tests.
     * This class abstracts the direct interactions with elements, making tests more readable.
     */

    /**
     * Clicks on the first shop's "open map link" on town page to open the map modal.
     * Then checks if the shop's div.alpin-right (shop name, address and offer) is visible within the map modal.
     */
    clickMapLink() {
        cy.get('div.the_shop_pile:nth-child(1) div.map-link span')
            .click()

        cy.get('div.si-float-wrapper:nth-child(1) div.alpin-right a')
            .should('be.visible');
    }

    /**
     * Closes the shop's detail view inside the app-map-modal.
     * It finds and clicks the close button specific to the shop's detail.
     * Then checks if inside the app-map-modal is not visible anymore.
     */
    clickMapModalShopClose() {
        cy.get('div.si-float-wrapper:nth-child(1) div.close-button-map-detail')
            .click({force: true}); // todo hack: smt it can happen, during google maps is loading, that its not full in the view-port, because of animation

        cy.get('div.si-float-wrapper:nth-child(1)')
            .should('not.be.visible');
    }

    /**
     * Closes the entire map modal.
     * It finds and clicks the main close button of the map modal.
     * Then checks, if the app-map-modal is removed from the dom
     */
    clickMapModalClose() {
        cy.get('app-map-modal button.close')
            .click();

        cy.get('app-map-modal')
            .should('not.exist');
    }

    /**
     * Cookie consent aggrement
     * It finds and clicks the cookie consent agreement
     */
    clickAgreeToCookieConsent() {
        cy.get('app-cookie-consent a.btn-primary-custom')
            .click();
    }

    /**
     * For product selection page
     * changes the product category tab navigation product selection page
     */
    selectProductCategoryTab(category) {
        cy.wait(500);
        cy.get(`ul#equipment-tabs li:nth-child(${category})`)
            .should('be.visible')
            .click();
        cy.wait(500);
    }


    /**
     * For product selection page
     * about opening and closing the modal for mobile usage
     * clicks "add equipment" and opens the modal for later selecting products
     * the #id for selector is part of our frontend architecture, we use person_0, person_1, person_2 and so on...
     */
    // when the person has no product assigned
    openMobileProductSelectionModal(personNumber) {
        cy.wait(500);
        cy.get(`div.product#${personNumber} button`)
            .should('be.visible')
            .click({waitForAnimations: false}); // TODO: {waitForAnimations: false} fix for webkit is not a good idea
        cy.wait(1000);
    }

    // when the person has a product assigned already
    openMobileProductSelectionModalAssigned(personNumber) {
        cy.wait(500);
        cy.get(`div.product#${personNumber} div.user-name strong`)
            .should('be.visible')
            .click({waitForAnimations: false}); // TODO: {waitForAnimations: false} fix for webkit is not a good idea
        cy.wait(1500); // this timeout is important, because there is a feature which scrolls down to the product (only if the person has a product assigned already)
    }

    // closes the modal for product selection
    closeMobileProductSelectionModal(){
        cy.wait(500);
        cy.get(`app-product-list-modal button.back-button`)
            .should('be.visible')
            .click({waitForAnimations: false}); // TODO: {waitForAnimations: false} fix for webkit is not a good idea
    }


    /**
     * For product selection page dektop
     *
     * search for the right person and select
     */
    selectPersonProductSelectionDesktop(personNth){
        cy.wait(500);
        cy.get(`app-person-switcher div.person-wrapper:nth-child(${personNth})`)
            .should('be.visible')
            .click();
    }


    /**
     * For product selection page
     * clicks on the first product into product-item-list
     */
    addProduct(mainProduct) {
        cy.wait(500);
        cy.get(`div#product-item-list div.product-item:nth-child(${mainProduct}) button.btn-primary`)
            //.should('be.visible') todo: for mobile the issue is: we should first scroll to the product, otherwise its not visible and the test fails
            .click({waitForAnimations: false}); // TODO: {waitForAnimations: false} fix for webkit is not a good idea
    }

    /**
     * For product selection page
     * find the first product pill
     * adds the first product add-on item in the add-on list
     */
    addProductSubProduct(mainProduct, subProduct) {
        cy.wait(500);
        cy.get(`div#product-item-list div.product-item:nth-child(${mainProduct}) div.service:nth-child(${subProduct}) app-toggle`)
            //.should('be.visible') // todo: for mobile the issue is: we should first scroll to the product, otherwise its not visible and the test fails
            .click();
    }

    /**
     * For product selection page
     * clicks on the last product into product-item-list
     */
    addLastListedProduct() {
        cy.wait(500);
        cy.get('div#product-item-list div.product-item:nth-last-child button.btn-primary')
            .should('be.visible')
            .click();
    }

    /**
     * For product selection page
     * clicks on "add person" button
     * switch for desktop and mobile (different selectors)
     */
    addPersonButtonInProductSelection(){
        cy.wait(1000);
        if (generalConfig.viewportWidth < generalConfig.breakpoints.desktopSmall) {
            // mobile behave here
            cy.get(' button.add-person') // todo: if it is out of view-port, it will break!
                .should('be.visible')
                .click();
        } else {
            // desktop behave here
            cy.get('app-person-switcher button.btn') // todo: if it is out of view-port, it will break!
                .should('be.visible')
                .click();
        }
        cy.wait(2000); // we have to wait, otherwise when the product assignment process starts, we get in troubles.
    }

    /**
     * For product selection page
     * desktop: remove the last person of the app-person-switcher component, and in the cart also
     *
     */
    removePersonFromFromCart(personNumber){
        cy.wait(500);
        cy.get(`app-person-switcher div.person-wrapper:nth-child(${personNumber}) app-icon[name="bin"]`)
            .should('be.visible')
            .click()
            .log('Notice: last person removed successful');
    }

    /**
     * For product selection page
     * mobile: remove the last person of the app-person-switcher component, and in the cart also
     */
    removePersonFromFromCartMobile(personNumber){
        cy.wait(500);
        cy.get(`div.products div#${personNumber} app-icon[name="bin"]`) // todo: if it is out of view-port, it will break!
            .should('be.visible')
            .click()
            .log('Notice: last person removed successful');
    }

    /**
     * For product selection page
     * clicks on main continue button
     */
    clickMainContinueButton(){
        cy.wait(1500);
        cy.get('app-cart-sidebar button[type="button"].btn-primary.justify-content-center') // todo: if it is out of view-port, it will break... !
            .should('be.visible').click();
    }

    /**
     * For product selection page
     * ERROR handling: "To proceed, please select a product for each person."
     * TODO: error handling should be somewhere else, page_errors/errors.js
     */
    // NOTE:
    errorSelectProductForEachPerson(){
        cy.wait(500);
        cy.get('app-cart-sidebar div.has-error')
            .should('exist').log('ERROR handling: "To proceed, please select a product for each person." successful!');
    }



}


export default new ClickAction();