import testCases from '../../cypress/fixtures/test_cases';
import generalConfig from "../../cypress/fixtures/general_config";


/**
 * This code block iterates over each test case within the `testCases` object and will execute all test cases in a forEach loop.
 *
 * The `testCases` object contains various individual test scenarios, for instance: `testCase1`, `testCase2`, and so on.
 * Each of these test cases possesses distinct properties such as `viewport`, `lang`, among others,
 * which are utilized to guide the flow of the test.
 *
 * Within this forEach loop, each individual test case is referred to as `currentTestCase`,
 * which allows for accessing the specific properties of that particular test scenario.
 *
 * For example:
 * If the `testCases` object has two test scenarios (e.g. `testCase1` and `testCase2`),
 * the contents within this loop will be executed separately for each of these test cases.
 */
export function runTestsViaAllTestCasesAllPlattormsInAllLanguageTemplate(testFunction) {
    Object.values(testCases).forEach(currentTestCase => {

        /**
         * Iterates over the viewports defined in the `testCases.viewport` object.
         * The `testCases.viewport` is an object where each key is a name representing the viewport (e.g., 'mobile360')
         * and each value is an array containing two elements: width and height respectively.
         * we run here every viewport in a for forEach loop
         *
         * For each viewport:
         * - `viewportName` captures the key (i.e., the name of the viewport).
         * - `dimensions` captures the value (i.e., the [width, height] array for that viewport).
         */
        Object.entries(currentTestCase.viewport).forEach(([viewportName, dimensions]) => {
            const width = dimensions[0];
            const height = dimensions[1];

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
                        beforeEach(() => {
                            cy.viewport(width, height);
                        });
                        testFunction(domain, currentTestCase, viewportName);
                    });
                });
            } else {
                it('No domains found for given language', () => {
                    cy.log('No domains found for given language');
                });
            }
        });
    });
}