
// todo: only one product selection page test should be there
// todo: delete person should be implemented from ft_product_selection_page.cy.js - at the moment there is a switch. The switch has to go to the bundles class

import testCases from '../fixtures/test_cases.js';
import generalConfig from "../fixtures/general_config";
import ContentCheck from "../../pom/page_checks/content_check";
import FormActions from "../../pom/page_actions/form_actions";
import ClickActions from "../../pom/page_actions/click_actions";
import Bundles from "../../pom/page_elements/bundles";
import BrowserActions from "../../pom/page_actions/browser_actions";
import UrlCheck from "../../pom/page_checks/url_check";


describe(`UI test for testing select Person and adding products`, () => {
    beforeEach(() => {
        cy.viewport(generalConfig.viewportWidth, generalConfig.viewportHeight); // todo: the view-port variables from fixtures
    });

    it(`test I`, () => {
        let visitUrl = `https://www.alpinresorts.com/de/skiverleih/products?shopId=136`;

        // open page and check
        cy.visit(visitUrl).then(() => {
            ContentCheck.verifyAppHeaderLoaded();
        });

        // clicks the cookie consent agreement
        ClickActions.clickAgreeToCookieConsent();
        cy.log("Cookie consent agreed");

        // opens the date picker
        FormActions.openDatePickerViaClickOnBookingDateProductSelection();

        // select custom start and end-date
        FormActions.selectDates(testCases.testCase1.startDate, testCases.testCase1.endDate); // todo: we should use different start/end date as testCase1
        cy.log("date is set successfully");

        cy.log("opens person 1 for assignment");
        Bundles.selectPersonSelectProductSelectSubProduct({
            viewportWidth: generalConfig.viewportWidth,
            breakPoint: generalConfig.breakpoints.desktopSmall,
            selectPerson: 1, // Params: false = default, 1-10=nth-child for person dom element
            selectPersonMobile: 'person_0', // Params: person_0, person_1, person_3, and so on...
            runAddPersonBehavior: false, // Params: true means ClickAction.addPersonButtonInProductSelection() is given , false means, we don't added a person before run this method
            personHasProductAssignedAlready: false, // Params: true means has product assigned, false means no product assigned
            productCategory: 1, // Params: false = uses the given product category, number 1, 2, 3, 4, 5 (nth-child for product categories, ski, boots, snowboards, ...) opens the correct menu tab
            mainProduct: 1, // Params: number 1, 2, 3, 4, 5 (nth-child for product categories: 3-star, 4-star, 5-star, ...)
            subProduct: false, // Params: false means, no sub product needed, number 1, 2, 3, 4, 5 (nth-child for sub product: boots, helmets, damage & theft protection, ski depot, ...)
            assignMainProductPerson: true // Params: true means, we click the add product button, false means, we don't click the add product button
        });
        cy.log("person 1 has product assigned");

        cy.log("opens person 1 for adding only a sub product");
        Bundles.selectPersonSelectProductSelectSubProduct({
            viewportWidth: generalConfig.viewportWidth,
            breakPoint: generalConfig.breakpoints.desktopSmall,
            selectPerson: 1, // Params: false = currently active person, 1-10=nth-child for person dom element
            selectPersonMobile: 'person_0', // Params: person_0, person_1, person_3, and so on...
            runAddPersonBehavior: false, // Params: true means ClickAction.addPersonButtonInProductSelection() is given , false means, we don't added a person before run this method
            personHasProductAssignedAlready: true, // Params: true means has product assigned, false means no product assigned
            productCategory: 1, // Params: false = uses the given product category, number 1, 2, 3, 4, 5 (nth-child for product categories, ski, boots, snowboards, ...) opens the correct menu tab
            mainProduct: 1, // Params: number 1, 2, 3, 4, 5 (nth-child for product categories: 3-star, 4-star, 5-star, ...)
            subProduct: 3, // Params: false means, no sub product needed, number 1, 2, 3, 4, 5 (nth-child for sub product: boots, helmets, damage & theft protection, ski depot, ...)
            assignMainProductPerson: false // Params: true means, we click the add product button, false means, we don't click the add product button
        });
        cy.log("person 1 has now a sub product assigned");

        cy.log("opens person 1 for adding another sub product");
        Bundles.selectPersonSelectProductSelectSubProduct({
            viewportWidth: generalConfig.viewportWidth,
            breakPoint: generalConfig.breakpoints.desktopSmall,
            selectPerson: 1, // Params: false = currently active person, 1-10=nth-child for person dom element
            selectPersonMobile: 'person_0', // Params: person_0, person_1, person_3, and so on...
            runAddPersonBehavior: false, // Params: true means ClickAction.addPersonButtonInProductSelection() is given , false means, we don't added a person before run this method
            personHasProductAssignedAlready: true, // Params: true means has product assigned, false means no product assigned
            productCategory: 1, // Params: false = uses the given product category, number 1, 2, 3, 4, 5 (nth-child for product categories, ski, boots, snowboards, ...) opens the correct menu tab
            mainProduct: 1, // Params: number 1, 2, 3, 4, 5 (nth-child for product categories: 3-star, 4-star, 5-star, ...)
            subProduct: 1, // Params: false means, no sub product needed, number 1, 2, 3, 4, 5 (nth-child for sub product: boots, helmets, damage & theft protection, ski depot, ...)
            assignMainProductPerson: false // Params: true means, we click the add product button, false means, we don't click the add product button
        });
        cy.log("person 1 has now two sub products assigned");

        ClickActions.addPersonButtonInProductSelection();
        cy.log("adds person 2");

        cy.log("opens person 2 for assignment");
        Bundles.selectPersonSelectProductSelectSubProduct({
            viewportWidth: generalConfig.viewportWidth,
            breakPoint: generalConfig.breakpoints.desktopSmall,
            selectPerson: 2, // Params: false = currently active person, 1-10=nth-child for person dom element
            selectPersonMobile: 'person_1', // Params: person_0, person_1, person_3, and so on...
            runAddPersonBehavior: true, // Params: true means ClickAction.addPersonButtonInProductSelection() is given , false means, we don't added a person before run this method
            personHasProductAssignedAlready: false, // Params: true means has product assigned, false means no product assigned
            productCategory: 3, // Params: false = uses the given product category, number 1, 2, 3, 4, 5 (nth-child for product categories, ski, boots, snowboards, ...) opens the correct menu tab
            mainProduct: 1, // Params: number 1, 2, 3, 4, 5 (nth-child for product categories: 3-star, 4-star, 5-star, ...)
            subProduct: 2, // Params: false means, no sub product needed, number 1, 2, 3, 4, 5 (nth-child for sub product: boots, helmets, damage & theft protection, ski depot, ...)
            assignMainProductPerson: true // Params: true means, we click the add product button, false means, we don't click the add product button
        });
        cy.log("person 2 has product assigned");

        cy.log("opens person 2 again to do some stuff");
        Bundles.selectPersonSelectProductSelectSubProduct({
            viewportWidth: generalConfig.viewportWidth,
            breakPoint: generalConfig.breakpoints.desktopSmall,
            selectPerson: false, // Params: false = currently active person, 1-10=nth-child for person dom element
            selectPersonMobile: 'person_1', // Params: person_0, person_1, person_3, and so on...
            runAddPersonBehavior: false, // Params: true means ClickAction.addPersonButtonInProductSelection() is given , false means, we don't added a person before run this method
            personHasProductAssignedAlready: true, // Params: true means has product assigned, false means no product assigned
            productCategory: 2, // Params: false = uses the given product category, number 1, 2, 3, 4, 5 (nth-child for product categories, ski, boots, snowboards, ...) opens the correct menu tab
            mainProduct: 1, // Params: number 1, 2, 3, 4, 5 (nth-child for product categories: 3-star, 4-star, 5-star, ...)
            subProduct: 2, // Params: false means, no sub product needed, number 1, 2, 3, 4, 5 (nth-child for sub product: boots, helmets, damage & theft protection, ski depot, ...)
            assignMainProductPerson: false // Params: true means, we click the add product button, false means, we don't click the add product button
        });
        cy.log("we closed person 2 without any changes now another product assigned");

        cy.log("opens person 2 again to do some stuff");
        Bundles.selectPersonSelectProductSelectSubProduct({
            viewportWidth: generalConfig.viewportWidth,
            breakPoint: generalConfig.breakpoints.desktopSmall,
            selectPerson: 2, // Params: false = currently active person, 1-10=nth-child for person dom element
            selectPersonMobile: 'person_1', // Params: person_0, person_1, person_3, and so on...
            runAddPersonBehavior: false, // Params: true means ClickAction.addPersonButtonInProductSelection() is given , false means, we don't added a person before run this method
            personHasProductAssignedAlready: true, // Params: true means has product assigned, false means no product assigned
            productCategory: 2, // Params: false = uses the given product category, number 1, 2, 3, 4, 5 (nth-child for product categories, ski, boots, snowboards, ...) opens the correct menu tab
            mainProduct: 1, // Params: number 1, 2, 3, 4, 5 (nth-child for product categories: 3-star, 4-star, 5-star, ...)
            subProduct: 2, // Params: false means, no sub product needed, number 1, 2, 3, 4, 5 (nth-child for sub product: boots, helmets, damage & theft protection, ski depot, ...)
            assignMainProductPerson: true // Params: true means, we click the add product button, false means, we don't click the add product button
        });
        cy.log("we closed person 2, but this time we added another main product");

        ClickActions.addPersonButtonInProductSelection();
        cy.log("adds person 3");

        cy.log("opens person 3");
        Bundles.selectPersonSelectProductSelectSubProduct({
            viewportWidth: generalConfig.viewportWidth,
            breakPoint: generalConfig.breakpoints.desktopSmall,
            selectPerson: 3, // Params: false = currently active person, 1-10=nth-child for person dom element
            selectPersonMobile: 'person_2', // Params: person_0, person_1, person_3, and so on...
            runAddPersonBehavior: true, // Params: true means ClickAction.addPersonButtonInProductSelection() is given , false means, we don't added a person before run this method
            personHasProductAssignedAlready: false, // Params: true means has product assigned, false means no product assigned
            productCategory: 1, // Params: false = uses the given product category, number 1, 2, 3, 4, 5 (nth-child for product categories, ski, boots, snowboards, ...) opens the correct menu tab
            mainProduct: 5, // Params: number 1, 2, 3, 4, 5 (nth-child for product categories: 3-star, 4-star, 5-star, ...)
            subProduct: 3, // Params: false means, no sub product needed, number 1, 2, 3, 4, 5 (nth-child for sub product: boots, helmets, damage & theft protection, ski depot, ...)
            assignMainProductPerson: true // Params: true means, we click the add product button, false means, we don't click the add product button
        });
        cy.log("person 3 has a product assigned");

        cy.log("opens person 3");
        Bundles.removePersonProductSubProduct({
            viewportWidth: generalConfig.viewportWidth,
            breakPoint: generalConfig.breakpoints.desktopSmall,
            selectPerson: false, // For desktop: Params: false = currently active person, 1-10=nth-child for person dom element
            selectPersonMobile: 'person_2', // For mobile we always need this Params: person_0, person_1, person_3, and so on...
            runAddPersonBehavior: false, // Params: true means ClickAction.addPersonButtonInProductSelection() is given , false means, we don't added a person before run this method
            personHasProductAssignedAlready: true, // Params: true means has product assigned, false means no product assigned
            productCategory: 1, // Params: false = uses the given product category, number 1, 2, 3, 4, 5 (nth-child for product categories, ski, boots, snowboards, ...) opens the correct menu tab
            mainProduct: 5, // Params: number 1, 2, 3, 4, 5 (nth-child for product categories: 3-star, 4-star, 5-star, ...)
            subProduct: 3, // Params: false means, no sub product needed, number 1, 2, 3, 4, 5 (nth-child for sub product: boots, helmets, damage & theft protection, ski depot, ...)
            assignMainProductPerson: false // Params: true means, we click the remove product button, false means, we don't click the remove product button
        });
        cy.log("person 3 gets the subProduct removed");

        // adds person 4 into the cart
        ClickActions.addPersonButtonInProductSelection();

        cy.log("adds person 4");

        // closes the auto opened modal for mobile viewport
        if (generalConfig.viewportWidth < generalConfig.breakpoints.desktopSmall) {
            // mobile behave here
            ClickActions.closeMobileProductSelectionModal(); // closes the modal mobile
        }

        // clicks on main continue button and will run into an error (because the last added person has no product assigned)
        ClickActions.clickMainContinueButton();

        // checks if the error handling in product selection page is working correctly (every person has to have a product assigned)
        ClickActions.errorSelectProductForEachPerson();

        cy.log("start the assign process for person 4");
        Bundles.selectPersonSelectProductSelectSubProduct({
            viewportWidth: generalConfig.viewportWidth,
            breakPoint: generalConfig.breakpoints.desktopSmall,
            selectPerson: 4, // Params: false = currently active person, 1-10=nth-child for person dom element
            selectPersonMobile: 'person_3', // Params: person_0, person_1, person_3, and so on...
            runAddPersonBehavior: false, // Params: true means ClickAction.addPersonButtonInProductSelection() is given , false means, we don't added a person before run this method
            personHasProductAssignedAlready: false, // Params: true means has product assigned, false means no product assigned
            productCategory: 1, // Params: false = uses the given product category, number 1, 2, 3, 4, 5 (nth-child for product categories, ski, boots, snowboards, ...)
            mainProduct: 2, // Params: number 1, 2, 3, 4, 5 (nth-child for product categories: 3-star, 4-star, 5-star, ...)
            subProduct: false, // Params: false means, no sub product needed, number 1, 2, 3, 4, 5 (nth-child for sub product: boots, helmets, damage & theft protection, ski depot, ...)
            assignMainProductPerson: true // Params: true means, we click the add product button, false means, we don't click the add product button
        });
        cy.log("person 4 has a product assigned");

        cy.log("we click the main continue button");
        // clicks the continue button again, this time everything should be valid
        ClickActions.clickMainContinueButton(); // todo: after clicking the continue button, the modal can be come, or not - depends on localStorage and/or if Insurance is in the basket. At this test I trick it with back-button

        cy.log("we click on the browser back button");
        // we check go backwards browser history is working
        BrowserActions.goBack();
        cy.log("browser back button works");
        // todo: we need checks here

        // click the main continue button again, everything should be valid
        ClickActions.clickMainContinueButton();
        cy.log("we clicked main continue button");

        // we check the URL path from the checkout page
        UrlCheck.checkPathCheckout();
        cy.log("we are on checkout page");
        // todo: If necessary, we should check the length of the person and product information
    });

});