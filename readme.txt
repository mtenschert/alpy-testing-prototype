
Commands:

1. run only dedicated tests on browserstack
browserstack-cypress run --spec cypress/e2e/ft_product_selection_page.cy.js





Installation routine:

This stack should be working (checked on compatibility)

node server		info		https://www.browserstack.com/docs/automate/cypress/supported-versions, https://docs.cypress.io/guides/getting-started/installing-cypress#Nodejs
			download	https://nodejs.org/en/blog/release/v16.13.2
			check		node -v									
			type		global
			version		16.13.2

cypress 12.17.1		info:		https://www.browserstack.com/docs/automate/cypress/supported-versions
			npm command	npm install cypress@12.17.1 --save-dev
			check		npx cypress -v
			open		npx cypress open
			type		local

browserstack cli	downloa: 	npm install -g browserstack-cypress-cli@1.25.0 --save-dev
			check		npx browserstack-cypress --version
			type		global
			init		browserstack-cypress init
			version		1.25.0
			safari/support	https://www.browserstack.com/release-notes/en/support-of-basic-authentication-on-safari-4
			browser/support	https://www.browserstack.com/list-of-browsers-and-platforms/cypress_testing

NOT INSTALLED:
playwright-webkit	info		https://docs.cypress.io/guides/guides/launching-browsers#WebKit-Experimental
			video		https://www.youtube.com/watch?v=WJcjNFjYmoM
			issues list	https://github.com/cypress-io/cypress/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22experiment%3A+webkit%22
			npm		install --save-dev playwright-webkit	
			check