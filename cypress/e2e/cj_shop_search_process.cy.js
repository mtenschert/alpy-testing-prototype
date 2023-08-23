import testCases from '../fixtures/test_cases.js';
import generalConfig from "../fixtures/general_config";
import ContentCheck from "../../pom/page_checks/content_check";
import FormActions from "../../pom/page_actions/form_actions";
import FormCheck from "../../pom/page_checks/form_check";
import UrlCheck from "../../pom/page_checks/url_check";
import BrowserActions from "../../pom/page_actions/browser_actions";
import ClickActions from "../../pom/page_actions/click_actions";

import {runTestsViaAllTestCasesAllPlattormsInAllLanguageTemplate} from '../../pom/templates/templates.js';


runTestsViaAllTestCasesAllPlattormsInAllLanguageTemplate((domain, currentTestCase, viewportName) => {
    // Your specific tests go here, for example

    it(`completes search form on home page and validates results on town page for ${domain}, from "${currentTestCase.testName}" in ${viewportName}`, () => {
        let visitUrl = `${generalConfig.protocol}${generalConfig.subdomain}.${domain}/${currentTestCase.lang}/${currentTestCase.productPath}`;
        // open page and check
        cy.visit(visitUrl).then(() => {
            ContentCheck.verifyAppHeaderLoaded();
        });

        // Use Page Actions to interact with the form
        cy.wait(1500);
        FormActions.enterLocation(currentTestCase.townName);
        FormActions.selectDates(currentTestCase.startDate, currentTestCase.endDate);
        FormActions.selectNumberOfPeople(currentTestCase.searchFormFillOut.searchFormNumberOfPeople);
        FormActions.submitForm();

        // Use Page Verifications to validate behavior
        FormCheck.checkFormLocationSearchInput(currentTestCase.townName);
        UrlCheck.checkPath(currentTestCase.townPath);
        ContentCheck.shopsAtLeastLoadedCheck(currentTestCase.checkMinShopAmount);

        // Navigate Back & Forward, then verify again
        BrowserActions.goBackAndForth();
        FormCheck.checkFormLocationSearchInput(currentTestCase.townName);
        UrlCheck.checkPath(currentTestCase.townPath);
        ContentCheck.shopsAtLeastLoadedCheck(currentTestCase.checkMinShopAmount);
    });

    it(`landing on town page, then type in town again, dates and number of people, submit for ${domain}, from "${currentTestCase.testName}" in ${viewportName}`, () => {
        let visitUrl = `${generalConfig.protocol}${generalConfig.subdomain}.${domain}/${currentTestCase.lang}/${currentTestCase.productPath}/${currentTestCase.townPath}`;

        cy.visit(visitUrl).then(() => {
            ContentCheck.verifyAppHeaderLoaded();
            ContentCheck.shopsAtLeastLoadedCheck(currentTestCase.checkMinShopAmount);
        });

        // opens date picker, select a date, fill out number of people and submit
        cy.wait(2500);
        FormActions.openDatePickerViaStartDate();
        FormActions.selectDates(currentTestCase.startDate, currentTestCase.endDate);
        FormActions.selectNumberOfPeople(currentTestCase.searchFormFillOut.searchFormNumberOfPeople);
        FormActions.submitForm();

    });

    it(`landing on town page, use and check the map feature for ${domain}, from "${currentTestCase.testName}" in ${viewportName}`, () => {
        let visitUrl = `${generalConfig.protocol}${generalConfig.subdomain}.${domain}/${currentTestCase.lang}/${currentTestCase.productPath}/${currentTestCase.townPath}`;

        cy.visit(visitUrl).then(() => {
            ContentCheck.verifyAppHeaderLoaded();
            ContentCheck.shopsAtLeastLoadedCheck(currentTestCase.checkMinShopAmount);
        });

        // Opens map from the first shop, then closes the shop detail pill into the modal and then closes the whole modal
        cy.wait(2500);
        ClickActions.clickMapLink();
        ClickActions.clickMapModalShopClose();
        ClickActions.clickMapModalClose();

    });

    // Add more tests as needed
});