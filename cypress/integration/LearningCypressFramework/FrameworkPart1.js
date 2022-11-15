/// <reference types="Cypress" />

import HomePage from "../../support/pageObjects/HomePage"
import Products from "../../support/pageObjects/Products"



describe('My Hook method',function(){

    before(function(){
        // runs once before all test in the block
        cy.fixture('DataExample1').then(function(data)
        {
            this.data = data

        })

    })

    it('Hook',function(){
        Cypress.config('defaultCommandTimeout',8000)

       const homePage = new HomePage()
       const productPage = new Products()

        cy.visit(Cypress.env('url'))
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntrepreneurBtn().should('be.disabled')
        homePage.getShopTab().click()
       
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
            
        });

        productPage.getCheckOutBtn().click()
        var sum =0
        cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{

            
            
            const amount = $el.text()
            var result = amount.split(" ")
            result = result[1].trim()
            sum=Number(sum)+Number(result)

        }).then(function(){
            cy.log(sum)
        })

        cy.get('h3 strong').then(function(element){

            const amount =element.text()
            var total = amount.split(" ")
            total = total[1].trim()
            expect(Number(total)).to.equal(sum)

        })
        
       

        
        productPage.getFinalCheckOutBtn().click()
        productPage.getInputLocation().type("U")
        productPage.getUSALocaction().click()
        productPage.getAgreeCheckBox().click()
        productPage.getPurchsase().click()

        // cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(element){
           
           


            // expect(element.includes("Success")).to.be.true
            
        })


    })
})