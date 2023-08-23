export default {
    viewportWidth: 1500, // 360 for staticPages test
    viewportHeight: 800, // 800 for staticPages test
    breakpoints: {
        mobileSmall: 320,   // min support, usable
        mobileMedium: 360,   // support mobile devices
        desktopSmall: 1200,   // breakpoint for desktop
        desktopMedium: 1500,    // desktop
        desktopLarge: 2000,    // desktop
    },
    protocol: "https://",
    subdomain: 'www', // beta.
    domain: {
        'de': ['alpinresorts.com', 'pistenfuchs.de'],
        'en': ['alpinresorts.com', 'snowbrainer.com', 'best-price-ski-rental.com', 'skidiscount.co.uk', 'slopefox.co.uk'],
        'fr': ['alpinresorts.com', 'location-ski-moins-cher.com', 'skidiscount.fr', 'simplytoski.fr'],
        'nl': ['alpinresorts.com'],
        'it': ['alpinresorts.com'],
        'sk': ['alpinresorts.com'],
        'cz': ['alpinresorts.com'],
        'pl': ['alpinresorts.com'],
        'dk': ['alpinresorts.com'],
        'es': ['alpinresorts.com']
    }
};