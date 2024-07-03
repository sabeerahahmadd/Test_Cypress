describe('Contact Us Form', () => {
    it('should display all the fields in the form', () => {
      //Using Custom command to visit csd website url
      cy.visitCSD();
      //Locating the contact Us form 
      cy.visitContactUsForm()
      //Locating the Full name field adn asserting that its visible
      cy.get('#__next > div > div:nth-child(2) > div.Home_container__bCOhY > div:nth-child(2) > div > div.contact-us-form_contact_form__SqDD_ > div.contact-us-form_form_wrapper__bx5bC > form > div:nth-child(1) > div:nth-child(1) > input').should('be.visible')
      cy.get('#__next > div > div:nth-child(2) > div.Home_container__bCOhY > div:nth-child(2) > div > div.contact-us-form_contact_form__SqDD_ > div.contact-us-form_form_wrapper__bx5bC > form > div:nth-child(1) > div:nth-child(2) > input').should('be.visible')
      cy.get('#category').should('be.visible')
        
      cy.get(':nth-child(2) > :nth-child(2) > .contact_input').should('be.visible')
      cy.get('[style="grid-template-columns: 1fr;"] > div > .contact_input').should('be.visible')
    })
  
    it('should provide success message on successfully submission', ()=>
    {
      cy.visitCSD();
      //Locating the contact Us form 
      cy.visitContactUsForm()
  
      //data driven for contact us form
      cy.fixture('contactUsForm.json').then((Testdata) => {
        const validContactUsData = Testdata.valid[0]
        //assignment of the content data 
        const Name = validContactUsData.Name;
      const Email = validContactUsData.Email;
      const Phone = validContactUsData.Phone;
      const Message = validContactUsData.Message;
      
     //locating the fields
      cy.get(':nth-child(1) > :nth-child(1) > .contact_input').should('be.visible')
        .type(Name)
  
        cy.get(':nth-child(1) > :nth-child(2) > .contact_input').should('be.visible')
        .type(Email)
  
        cy.get('#category').select('Retail')
  
        cy.get(':nth-child(2) > :nth-child(2) > .contact_input').should('be.visible')
          .type(Phone)
        cy.get('[style="grid-template-columns: 1fr;"] > div > .contact_input').should('be.visible')
          .type(Message)
           //locating the submit button and click
          cy.get('.btn_filled').should('be.visible')
            .click()
    })
   
  
  })
  })