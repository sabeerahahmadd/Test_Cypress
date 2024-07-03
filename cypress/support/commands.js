// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('visitCSD', () => {
    //Visit the csd website
    cy.visit('https://stixor-public-website.csd.gov.pk/');
  });


  Cypress.Commands.add('visitContactUsForm', ()=>{
    //Locating the nav bar hamburger
    cy.get('.navbar_menu_btn__Oz9BB > img').should('be.visible').click()
    //Locating the contact us form nav option 
    cy.get('body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.mui-style-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorRight.mui-style-1ab2xsx > div > ul > a:nth-child(12) > li').should('be.visible')
      .click()
    //Asserting the contact us page
    cy.url('should', '/contact-us')
  })