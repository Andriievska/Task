describe('Amazon Laptop Search',()=>{
    it('Verify Title Page',()=>
    {
        cy.visit('https://www.amazon.com/')
        cy.title().should('eq','Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more')
    });

    it('Should enter laptop into search field',()=>{
        cy.get('#twotabsearchtextbox').type('laptop')
    })
    it('Should click on search btn',()=>{
        cy.get('.nav-search-submit').click()
    })
    it('Should contain title "Amazon.com: laptop" ',()=>{
        cy.title().should('contain','Amazon.com : laptop')
    })
    it('Should click on Sort by: Featured ',()=> {
        cy.get('.a-dropdown-prompt').click()
    })
    it('Should click on Newest Arrivals ',()=> {
        cy.get('li:nth-of-type(5) > .a-dropdown-link').click()
    })

});
