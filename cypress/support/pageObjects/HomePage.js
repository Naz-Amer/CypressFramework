class HomePage{

    getEditBox(){
    return cy.get("input[name='name']:nth-child(2)")
    }

   getTwoWayDataBinding(){
    return cy.get("input[name='name']:nth-child(1)")
   }

   getGender(){
    return cy.get('select')
   }
    
   getEntrepreneurBtn(){
    return cy.get('#inlineRadio3')
   }

   getShopTab(){
    return cy.get(':nth-child(2) > .nav-link')
   }


}

// if we want to expose HomePage class we need to use 

export default HomePage;