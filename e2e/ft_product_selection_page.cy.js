
// todo: add products and subproducts: we can add the selector via nth-chiild: div.service:nth-child(1). would be then testcases.currentTestcase.persons[1].products.productListItem, as a 2 for example). 2 stands for 4* ski in the list, which is the second element of the siblings
// todo: architecture idea: we should have cj for customer journey, and function_check_whatever (home, town, ps, checkout...) for all features
// todo: for function_check_shop_search: currency switcher
// todo: delete a product and add another one
// todo: add subproducts
// todo: change the product category (method) and fixtures (we need a snowboard...)
// todo: add name
// todo: delete a person
// todo: all forms validation has to be checked. Missing selected products. 100 Euro rule for delivery shops.
// todo: whats to do with ski lengths shops
// todo: change the age category and add product
// todo: model overview - only desktop...
// todo:

import testCases from '../fixtures/test_cases.js';
import generalConfig from "../fixtures/general_config";
import ContentCheck from "../../pom/page_checks/content_check";
import FormActions from "../../pom/page_actions/form_actions";
import UrlCheck from "../../pom/page_checks/url_check";
import BrowserActions from "../../pom/page_actions/browser_actions";
import ClickActions from "../../pom/page_actions/click_actions";


describe(`UI feature test for PS`, () => {
    beforeEach(() => {
        cy.viewport(generalConfig.viewportWidth, generalConfig.viewportHeight); // todo: the view-port variables from fixtures
    });

    it(`UI test for first PS test`, () => {
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

        /**
         * Switch for multiple viewport width mobile/desktop
         * Mobile view needs to open a modal before we are able to add products, or fill out name, changing product category tab menu and so on...
         */
        if (generalConfig.viewportWidth < generalConfig.breakpoints.desktopSmall) {
            // mobile behave here
            ClickActions.openMobileProductSelectionModal('person_0'); // person_0 for the first person
            // adds the first listed sub-product
            ClickActions.addProductSubProduct(1, 1); // 1 = first main product, the 1 first sub-product
            // adds the first listed product into the cart
            ClickActions.addProduct(1);
        } else {
            // desktop behave here
            // adds the first listed sub-product
            ClickActions.addProductSubProduct(1, 1);
            // adds the first listed product into the cart
            ClickActions.addProduct(1);
        }

        cy.log("person 1 has a product assigned");

        // adds another person to the cart
        ClickActions.addPersonButtonInProductSelection();

        // adds the first listed sub-product
        ClickActions.addProductSubProduct(1, 1);
        // adds the first listed product into the cart
        ClickActions.addProduct(1);

        cy.log("person 2 has a product assigned");

        /**
         * For mobile, opens up the modal first -> has to go into the elements page...
         */
        if (generalConfig.viewportWidth < generalConfig.breakpoints.desktopSmall) {
            // mobile behave here
            ClickActions.openMobileProductSelectionModalAssigned('person_1'); // person_1 for the second person, opens the modal, wait until loaded and automated scrolling is done
        }

        /**
         * For mobile, opens scrolls up, otherwise the navigation wouldn't be visible...
         */
        if (generalConfig.viewportWidth < generalConfig.breakpoints.desktopSmall) {
            // mobile behave here
            // scroll up event, otherwise the category tab wouldn't be visible
            BrowserActions.scrollTopEvent('app-product-list-modal');
        }

        // opens the second tab in the product category menu
        ClickActions.selectProductCategoryTab(2);

        // adds the first listed product into the cart
        ClickActions.addProduct(1);

        cy.log("person 2 has now two main products assigned");

        // adds another person into the cart
        ClickActions.addPersonButtonInProductSelection();
        // select the first product category tab (ski, boots, helmets, ...)

        cy.log("add person 3");

        if (generalConfig.viewportWidth < generalConfig.breakpoints.desktopSmall) {
            // mobile behave here
            ClickActions.closeMobileProductSelectionModal(); // closes the modal mobile
        }


        // clicks on main continue button and will run into an error (because the last added person has no product assigned)
        ClickActions.clickMainContinueButton();

        // checks if the error handling in product selection page is working correctly (every person has to have a product assigned)
        ClickActions.errorSelectProductForEachPerson();

        if (generalConfig.viewportWidth < generalConfig.breakpoints.desktopSmall) {
            // mobile behave here
            console.log("mobile");
            ClickActions.openMobileProductSelectionModal('person_2'); // person_2 for the third person
        }

        // clicks the first tab in the product category tab menu
        ClickActions.selectProductCategoryTab(1);

        // adds a main and a subproduct into the basket for the 3rd person
        ClickActions.addProduct(1);
        ClickActions.addProductSubProduct(1, 1);

        cy.log("Person 3 has a product assigned");

        // clicks the continue button again, this time everything should be valid
        ClickActions.clickMainContinueButton(); // todo: after clicking the continue button, the modal can be come, or not - depends on localStorage and/or if Insurance is in the basket. At this test I trick it with back-button

        // we check go backwards browser history is working
        BrowserActions.goBack();
        // todo: we need checks here

        // delete a person
        // crucial: scroll up event, because if you have more people in the cart, after you scroll down to continue, go back via browser function, the person-pills (left) are out of view
        BrowserActions.scrollIntoView('div.product-wrapper');
        if (generalConfig.viewportWidth < generalConfig.breakpoints.desktopSmall) {
            // mobile behave here
            ClickActions.removePersonFromFromCartMobile('person_2'); // deletes person 3
        } else {
            // desktop behave here
            // we remove the last person from the cart/person-list
            ClickActions.removePersonFromFromCart(3); // deletes 2 for person 3
            // todo: we should check if the person length = 2 now
        }

        cy.log("Person 3 is deleted");

        // click the main continue button again, everything should be valid
        ClickActions.clickMainContinueButton();

        // we check the URL path from the checkout page
        UrlCheck.checkPathCheckout();
        // todo: If necessary, we should check the length of the person and product information


    });

});

/*

runTestsViaAllTestCasesAllPlattormsInAllLanguageTemplate((domain, currentTestCase, viewportName) => {
    // Your specific tests go here, for example:

    it(`test ${domain}, from "${currentTestCase.testName}" in ${viewportName}`, () => {
        let visitUrl = `${generalConfig.protocol}${generalConfig.subdomain}.${domain}/${currentTestCase.lang}/${currentTestCase.productPath}`;
        // open page and check
        cy.visit(visitUrl).then(() => {
            ContentCheck.verifyAppHeaderLoaded();
        });
    });

    // Add more tests as needed
});

 */