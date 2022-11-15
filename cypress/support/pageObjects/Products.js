class ProductsPage{

getCheckOutBtn(){
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}

getFinalCheckOutBtn(){
    return cy.get(':nth-child(4) > :nth-child(5) > .btn')
    
}

getInputLocation(){
    return cy.get("#country")
}

getUSALocaction(){
    return cy.get(':nth-child(8) > li > a')
}

getAgreeCheckBox(){
    return cy.get('.checkbox > label')
}

getPurchsase(){
    return cy.get('.ng-untouched > .btn')
}




}


export default ProductsPage;