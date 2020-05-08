describe('Task Manager' , () => {
    it('successfully loads', ()=>{
        cy.visit('http://localhost:3001')

        
        
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
})