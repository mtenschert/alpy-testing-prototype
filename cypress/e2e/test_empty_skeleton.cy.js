import testCases from '../fixtures/test_cases.js';
import generalConfig from "../fixtures/general_config";


/**
 * This code block iterates over each test case within the `testCases` object (test_cases.js).
 *
 * The `testCases` object contains various individual test scenarios, for instance: `testCase1`, `testCase2`, and so on.
 * Each of these test cases possesses distinct properties such as `viewport`, `lang`, among others,
 * which are utilized to guide the flow of the test.
 *
 * Within this loop, each individual test case is referred to as `currentTestCase`,
 * which allows for accessing the specific properties of that particular test scenario.
 *
 * For example:
 * If the `testCases` object has two test scenarios (e.g. `testCase1` and `testCase2`),
 * the contents within this loop will be executed separately for each of these test cases.
 */
Object.values(testCases).forEach(currentTestCase => {

    /**
     * Iterates over the viewports defined in the `testCases.viewport` object.
     * The `testCases.viewport` is an object where each key is a name representing the viewport (e.g., 'mobile360')
     * and each value is an array containing two elements: width and height respectively.
     *
     * For each viewport:
     * - `viewportName` captures the key (i.e., the name of the viewport).
     * - `dimensions` captures the value (i.e., the [width, height] array for that viewport).
     */
    Object.entries(currentTestCase.viewport).forEach(([viewportName, dimensions]) => {

        // Extracts the width from the dimensions array. It is the first element.
        const width = dimensions[0];

        // Extracts the height from the dimensions array. It is the second element.
        const height = dimensions[1];

        describe(`UI test "${currentTestCase.testName}" for shop search process ${viewportName} on all available platforms for test case lang ${currentTestCase.lang}`, () => {

            beforeEach(() => {
                cy.viewport(width, height);
            });

            const domainsForLanguage = generalConfig.domain[currentTestCase.lang];


            /**
             * This block of code checks if there are domains associated with the current test case's language.
             *
             * The variable `domainsForLanguage` fetches the list of domains based on the language specified
             * in the `currentTestCase` (from the outer loop). It extracts this list from the `generalConfig.domain` object.
             *
             * The condition `domainsForLanguage && domainsForLanguage.length` ensures two things:
             * 1. `domainsForLanguage` is not undefined or null.
             * 2. It has a non-zero length, implying that there are domains present for the given language.
             *
             * If the above conditions are met, the code then iterates over each domain in the `domainsForLanguage` array.
             * Each domain within this loop is referred to as `domain`.
             *
             * For instance:
             * If the current test case's language is 'en' and there are three associated domains,
             * the inner loop will execute its content for each of those three domains separately.
             */
            if (domainsForLanguage && domainsForLanguage.length) {
                domainsForLanguage.forEach(domain => {
                    describe(`UI test for ${domain}, from "${currentTestCase.testName}", on ${viewportName}`, () => {

                        // put all your tests here

                        it(`completes search form on home page and validates results on town page for ${domain}, from "${currentTestCase.testName}" in ${viewportName}`, () => {
                            let visitUrl = `${generalConfig.protocol}${generalConfig.subdomain}.${domain}/${currentTestCase.lang}/${currentTestCase.productPath}`;
                            // open page and check
                            cy.visit(visitUrl);
                        });

                        it(`landing on town page, then type in town again, dates and number of people, submit for ${domain}, from "${currentTestCase.testName}" in ${viewportName}`, () => {
                            let visitUrl = `${generalConfig.protocol}${generalConfig.subdomain}.${domain}/${currentTestCase.lang}/${currentTestCase.productPath}/${currentTestCase.townPath}`;
                            cy.visit(visitUrl);
                        });

                        it(`landing on town page, use and check the map feature for ${domain}, from "${currentTestCase.testName}" in ${viewportName}`, () => {
                            let visitUrl = `${generalConfig.protocol}${generalConfig.subdomain}.${domain}/${currentTestCase.lang}/${currentTestCase.productPath}/${currentTestCase.townPath}`;
                            cy.visit(visitUrl);
                        });
                    });
                });
            } else {
                it('No domains found for given language', () => {
                    cy.log('No domains found for given language');
                });
            }
        });
    });

});