
/*  NEXT STEPS
* todo for new_window: https://stackoverflow.com/questions/47749956/access-a-new-window-cypress-io
* Todo for viewport width we need a fixture, where we collect the break points for our 3 states,
* */

// page_actions
import FormActions from '../../pom/page_actions/form_actions';
import BrowserActions from "../../pom/page_actions/browser_actions";
import ClickActions from "../../pom/page_actions/click_actions";

// Checks
import UrlCheck from '../../pom/page_checks/url_check';
import ContentCheck from '../../pom/page_checks/content_check';

// Fixtures
import testCases from '../fixtures/test_cases.js';
import generalConfig from "../fixtures/general_config";


describe('End-to-End Test for static pages', () => {

    beforeEach(() => {
        cy.viewport(generalConfig.viewportWidth, generalConfig.viewportHeight);
    });

    it('Opens the additional offers page and opens the page from home page into a new window', () => {

        // open page and check
        cy.visit("https://www.alpinresorts.com/en/ski-rental/additional-offers").then(() => {
            ContentCheck.verifyAppHeaderLoaded()
        });

        /**
         * The end-to-end test for visiting the homepage and clicking on 'Additional Offers'.
         * The test switches between mobile and desktop views based on the value of `fixViewportWidth`.
         *
         * 1. Directly opens the Additional Offers page and verifies its content.
         * 2. Visits the homepage and conditionally navigates to the Additional Offers page based on viewport width.
         */
        // Navigate to the homepage.
        cy.visit("https://www.alpinresorts.com/en/ski-rental");


        if (generalConfig.viewportWidth >= generalConfig.breakpoints.desktopSmall) {
            // For desktop view.
            // Find the 'app-navigation' component and click on the 'Additional Offers' link.
            cy.get("app-navigation")
                .contains('Additional Offers')
                .click();
        } else {
            // For mobile view.
            // Click on the navigation trigger icon to expand the mobile menu.
            cy.get('header span.navigation-trigger')
                .click().then(() => {
                    cy.get("nav.nav-collapse")
                        .contains('Additional Offers')
                        .click({ force: true });
            });

            // Find the mobile navigation menu ('nav.nav-collapse') and click on the 'Additional Offers' link.
            cy.get("nav.nav-collapse")
                .contains('Additional Offers')
                .click({ force: true });
        }



    });

    /**
     * Test to validate the functionality of navigating to the group booking page.
     * The test:
     * 1. Directly opens the group booking page and verifies its content.
     * 2. Visits the homepage and conditionally navigates to the group booking page based on viewport width.
     */
    it('Opens the group booking page and opens the page from home page into a new window', () => {

        // Open the group booking page directly and check the content.
        cy.visit("https://www.alpinresorts.com/en/ski-rental/groups").then(() => {
            ContentCheck.verifyAppHeaderLoaded()
        });

        // Check navigation to the group booking page from the home page.
        cy.visit("https://www.alpinresorts.com/en/ski-rental");

        // Conditional navigation based on the viewport width.
        if (generalConfig.viewportWidth >= 1200) {
            // For desktop view.
            // Find the appropriate component or section and click on the 'Group bookings' link.
            cy.get("app-navigation")
                .contains('Group bookings')
                .click();
        } else {
            // For mobile view.
            // Click on the navigation trigger icon to expand the mobile menu.
            cy.get('header span.navigation-trigger')
                .click().then(() => {
                // Find the mobile navigation menu ('nav.nav-collapse') and click on the 'Group bookings' link.
                cy.get("nav.nav-collapse")
                    .contains('Group bookings')
                    .click({ force: true });
            });
        }
    });

    /**
     * Test to validate the functionality of navigating to the "Terms & conditions" page.
     * The test:
     * 1. Directly opens the "Terms & conditions" page and verifies its content.
     * 2. Visits the homepage and conditionally navigates to the "Terms & conditions" page based on viewport width.
     */
    it('Opens the Terms & conditions page and opens the page from home page into a new window', () => {

        // Open the "Terms & conditions" page directly and check the content.
        cy.visit("https://www.alpinresorts.com/en/terms").then(() => {
            ContentCheck.verifyAppHeaderLoaded()
        });

        // Navigate back to the home page.
        cy.visit("https://www.alpinresorts.com/en/ski-rental");

        // Conditional navigation to the "Terms & conditions" page based on the viewport width.
        if (generalConfig.viewportWidth >= 1200) {
            // For desktop view.
            // Find the appropriate navigation component and click on the 'Terms & conditions' link.
            cy.get("app-navigation")
                .contains('Terms & conditions')
                .click();
        } else {
            // For mobile view.
            // Click on the navigation trigger icon to expand the mobile menu.
            cy.get('header span.navigation-trigger')
                .click().then(() => {
                // Find the mobile navigation menu and click on the 'Terms & conditions' link.
                cy.get("nav.nav-collapse")
                    .contains('Terms & conditions')
                    .click({ force: true });
            });
        }
    });

    /**
     * Test to validate the functionality of navigating to the "Become a partner" page.
     * The test:
     * 1. Directly opens the "Become a partner" page and verifies its content.
     * 2. Visits the homepage and conditionally navigates to the "Become a partner" page based on viewport width.
     */
    it('Opens the Become a partner page and opens the page from home page into a new window', () => {

        // Open the "Become a partner" page directly and check the content.
        cy.visit("https://www.alpinresorts.com/en/partner").then(() => {
            ContentCheck.verifyAppHeaderLoaded()
        });

        // Navigate back to the home page.
        cy.visit("https://www.alpinresorts.com/en/ski-rental");

        // Conditional navigation to the "Become a partner" page based on the viewport width.
        if (generalConfig.viewportWidth >= 1200) {
            // For desktop view.
            // Find the appropriate navigation component and click on the 'Become a partner' link.
            cy.get("app-navigation")
                .contains('Become a partner')
                .click();
        } else {
            // For mobile view.
            // Click on the navigation trigger icon to expand the mobile menu.
            cy.get('header span.navigation-trigger')
                .click().then(() => {
                // Find the mobile navigation menu and click on the 'Become a partner' link.
                cy.get("nav.nav-collapse")
                    .contains('Become a partner')
                    .click({ force: true });
            });
        }
    });


});
