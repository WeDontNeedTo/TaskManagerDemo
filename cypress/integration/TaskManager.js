describe('Task Manager' , () => {
    it('successfully loads', ()=>{
        cy.visit('http://localhost:3000')      
    })
    it('check btns behaviour', ()=>{
        cy.get('#buttons > #btnDo')
        .click({multiple:true})
        .should('have.value', 'Закрыть')
    
    cy.get('.status2')
        .each(($el)=>{
            expect($el).to.have.text('Выполнена ')
        })
        
    cy.get('#buttons > #btnClose')
        .click({multiple:true})
        .should('have.value', 'Эту задачу изменить нельзя')
    
    cy.get('.status3')
        .each(($el)=>{
            expect($el).to.have.text('Закрыта ')
        })
    })

    // it('focus on the search input', ()=>{
    //     cy.focused().should('have.class', 'form-search')
    // })
    it('search something', () => {
        const input = "Дизайн"
        cy.get('.form-search')
          .type(input)
          .get('tr')
          .should('have.length', 4)
      })
      it('search nothing', () => {
        cy.get('.form-search')
          .type('{enter}')
          .get('tr')
          .should('have.length', 9)
      })
})