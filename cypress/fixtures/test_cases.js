export default {
    testCase1: {
        testName: "testCase1",
        personalDetails: {
            name: "Manuel",
            surname: "Tenschert",
            email: "mt@alpinresorts.com",
            customerCountry: "AT"
        },
        lang: "en", // IN USE
        viewport: { // IN USE
            //'mobile360': [360, 800],
            'mobile390': [390, 844],
            'tablet768': [768, 1024],
            //'tablet1024': [1024, 768],
            //'desktop1920': [1920, 1080],
            //'desktop1280': [1280, 720],
        },
        startDate: "[aria-label=\"24-12-2023\"]", // IN USE
        endDate: "[aria-label=\"27-12-2023\"]", // IN USE
        searchFormFillOut: { // Refactor - NOT IN USE
            startDate: "[aria-label=\"24-12-2023\"]", // Refactor - NOT IN USE
            endDate: "[aria-label=\"27-12-2023\"]", // Refactor - NOT IN USE
            searchFormNumberOfPeople: "2", // Refactor - NOT IN USE
            searchFormAges: [ // Refactor - NOT IN USE
                36, // Refactor - NOT IN USE
                36 // Refactor - NOT IN USE
            ],
            promoCode: "ALPISKI",
            couponCode: "",
        },
        productPath: "ski-rental", // IN USE
        townPath: "austria/tyrol/soelden", // IN USE
        townName: "Sölden", // IN USE
        checkMinShopAmount: 10, // IN USE
        hasBookingParameters: "false",
        hasCart: "false",
        bindingAdjustmentsMandatory:  {
            'firstname': false,
            'lastname': false,
            'birthday': false,
            'weight': false,
            'height': false,
            'shoeSize': false,
            'skill': false
        },
        persons: {
            1: {
                bindingAdjustmentsInput: {
                    'firstname': 'Manuel',
                    'lastname': 'Tenschert',
                    'birthday': {
                        day: 21,
                        month: 2,
                        year: 1984
                    },
                    'weight': 73,
                    'height': 175,
                    'shoeSize': 44,
                    'skill': 'advanced' // beginner, advanced, expert
                },
                products: {
                    // Add product details here for person 1
                }
            },
            2: {
                bindingAdjustmentsInput: {
                    'firstname': 'Jane',
                    'lastname': 'Doe',
                    'birthday': {
                        day: 15,
                        month: 6,
                        year: 1990
                    },
                    'weight': 60,
                    'height': 165,
                    'shoeSize': 39,
                    'skill': 'beginner'
                },
                products: {
                    // Add product details here for person 2
                }
            }
        }
    },
    testCase2: {
        testName: "testCase2",
        personalDetails: {
            name: "Sasha",
            surname: "Rostovtseva",
            email: "test2@test.com",
            customerCountry: null // This field wasn't provided for testCase2, but I'm retaining it for structure consistency
        },
        lang: "es",
        viewport: {
            //'mobile360': [360, 800],
            //'mobile390': [390, 844],
            //'tablet768': [768, 1024],
            'tablet1024': [1024, 768],
            'desktop1920': [1920, 1080],
            'desktop1280': [1280, 720],
        },
        startDate: "[aria-label=\"24-12-2023\"]",
        endDate: "[aria-label=\"27-12-2023\"]",
        searchFormFillOut: {
            startDate: "[aria-label=\"24-12-2023\"]",
            endDate: "[aria-label=\"27-12-2023\"]",
            searchFormNumberOfPeople: "2", // not in use
            searchFormAges: [36, 36],
            promoCode: "ALPISKI",
            couponCode: "", // This wasn't provided but I'm retaining it for structure consistency
        },
        productPath: "alquiler-de-esquis",
        townPath: "suiza/wallis/zermatt",
        townName: "Zermatt",
        checkMinShopAmount: 7,
        hasBookingParameters: "false",
        hasCart: "false",
        bindingAdjustmentsMandatory: {
            'firstname': false,
            'lastname': false,
            'birthday': false,
            'weight': false,
            'height': false,
            'shoeSize': false,
            'skill': false
        },
        persons: {
            1: {
                bindingAdjustmentsInput: {
                    'firstname': 'Manuel',
                    'lastname': 'Tenschert',
                    'birthday': {
                        day: 21,
                        month: 2,
                        year: 1984
                    },
                    'weight': 73,
                    'height': 175,
                    'shoeSize': 44,
                    'skill': 'advanced' // beginner, advanced, expert
                },
                products: {
                    // Add product details here for person 1
                }
            },
            2: {
                bindingAdjustmentsInput: {
                    'firstname': 'Jane',
                    'lastname': 'Doe',
                    'birthday': {
                        day: 15,
                        month: 6,
                        year: 1990
                    },
                    'weight': 60,
                    'height': 165,
                    'shoeSize': 39,
                    'skill': 'beginner'
                },
                products: {
                    // Add product details here for person 2
                }
            }
        }
    }
};
