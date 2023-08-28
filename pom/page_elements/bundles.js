
// todo: to add or remove main or sub products, we should use an array to add more then only 1 of these items

import generalConfig from "../../cypress/fixtures/general_config";
import ClickActions from "../page_actions/click_actions";
import BrowserActions from "../page_actions/browser_actions";

class Bundles {

    /**
     * This bundle contains all necessary actions to perform assigning a product or sub product to a person
     * It deals with multiple viewport width mobile/desktop
     *
     * contains the following actions:
     *
     * Mobile view only: needs to open a modal before we are able to add products
     * Changes product category tab menu
     * If needed, select the person (even when its not the active one)
     * If needed, select a sub product ()
     * If needed, add a main product
     * Can click product and sub product without assigning it to the person
     */
    selectPersonSelectProductSelectSubProduct(settings) {

        if (settings.viewportWidth < settings.breakPoint) {
            // mobile behave here

            if (settings.runAddPersonBehavior === false) {
                // false: we open a product assigment modal - (if true -> the modal for product assignment opens by default

                /**
                 * This function selects finds and activate the selected person by opening the modal for product selection for mobiles
                 *
                 */
                if (settings.personHasProductAssignedAlready) {
                    // already assigned variant

                    ClickActions.openMobileProductSelectionModalAssigned(settings.selectPersonMobile);
                } else {
                    // run the unassigned variant

                    ClickActions.openMobileProductSelectionModal(settings.selectPersonMobile);
                }
            }

            if (settings.productCategory) {
                // true: opens the nth-child for product categories
                // false: doesn't run this method

                // crucial for mobile: scroll up event, if a person has a product assigned already, the frontend auto scrolls to the person. As a consequence we have to scroll up and make sure, the whole menu is visible.
                BrowserActions.scrollTopEvent('app-product-list-modal');
                ClickActions.selectProductCategoryTab(settings.productCategory);
            }

            // adds the sub product
            if (settings.subProduct){
                ClickActions.addProductSubProduct(settings.mainProduct, settings.subProduct);
            }

            // switches assign the product or not
            if (settings.assignMainProductPerson){
                // adds the main product into the cart
                ClickActions.addProduct(settings.mainProduct);
            }

            // closes the product selection modal for mobile
            ClickActions.closeMobileProductSelectionModal();
        } else {
            // desktop behave here

            /**
             * This function finds and select the person by clicking on the person list (left) for desktop
             *
             * False means, we use the the currently selected person
             */
            if (settings.selectPerson) {
                // we change/select the person
                ClickActions.selectPersonProductSelectionDesktop(settings.selectPerson);
            }

            if (settings.productCategory) {
                // true: opens the nth-child for product categories
                // false: doesn't run this method, we use the default product category one

                ClickActions.selectProductCategoryTab(settings.productCategory);
            }

            // adds the sub product
            if (settings.subProduct){
                ClickActions.addProductSubProduct(settings.mainProduct, settings.subProduct);
            }

            // switches assign the product or not
            if (settings.assignMainProductPerson){
                // adds the main product into the cart
                ClickActions.addProduct(settings.mainProduct);
            }
        }
    }










    /**
     * This bundle contains all necessary actions to perform removing a product or sub product or a person
     * It deals with multiple viewport width mobile/desktop
     *
     * contains the following actions:
     *
     * Mobile view only: needs to open a modal before we are able to remove products
     * Changes product category tab menu
     * Can deactivate a sub product
     * Can remove the assignment from the main product
     * Can delete the person
     */
    removePersonProductSubProduct(settings) {

        if (settings.viewportWidth < settings.breakPoint) {
            // mobile behave here

            /**
             * This function selects finds and activate the selected person by opening the modal for product selection for mobiles
             *
             */
            if (settings.personHasProductAssignedAlready) {
                // already assigned variant

                ClickActions.openMobileProductSelectionModalAssigned(settings.selectPersonMobile);
            } else {
                // run the unassigned variant

                ClickActions.openMobileProductSelectionModal(settings.selectPersonMobile);
            }


            if (settings.productCategory) {
                // true: opens the nth-child for product categories
                // false: doesn't run this method

                // crucial for mobile: scroll up event, if a person has a product assigned already, the frontend auto scrolls to the person. As a consequence we have to scroll up and make sure, the whole menu is visible.
                BrowserActions.scrollTopEvent('app-product-list-modal');
                ClickActions.selectProductCategoryTab(settings.productCategory);
            }

            // remove the sub product
            if (settings.subProduct){
                ClickActions.addProductSubProduct(settings.mainProduct, settings.subProduct); // todo: wording "add" should be changed in "click"
            }

            // switches assign the product or not
            if (settings.assignMainProductPerson){
                // adds the main product into the cart
                ClickActions.addProduct(settings.mainProduct); // todo: wording "add" should be changed in "click"
            }

            // closes the product selection modal for mobile
            ClickActions.closeMobileProductSelectionModal();
        } else {
            // desktop behave here

            /**
             * This function finds and select the person by clicking on the person list (left) for desktop
             *
             * False means, we use the the currently selected person
             */
            if (settings.selectPerson) {
                // we change/select the person
                ClickActions.selectPersonProductSelectionDesktop(settings.selectPerson);
            }

            if (settings.productCategory) {
                // true: opens the nth-child for product categories
                // false: doesn't run this method, we use the default product category one

                ClickActions.selectProductCategoryTab(settings.productCategory);
            }

            // remove the sub product
            if (settings.subProduct){
                ClickActions.addProductSubProduct(settings.mainProduct, settings.subProduct);
            }

            // switches assign the product or not
            if (settings.assignMainProductPerson){
                // remove the main product into the cart
                ClickActions.addProduct(settings.mainProduct);
            }
        }
    }


}

export default new Bundles();
