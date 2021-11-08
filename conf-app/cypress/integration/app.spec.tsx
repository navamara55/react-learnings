/// <reference types="cypress" />
it('should require all fields', () => {
  cy.visit('http://localhost:3000');
  cy.findByText('Title is Required.').should('not.exist');
  cy.findByText('Abstract is Required.').should('not.exist');
  cy.findByText('Submit talk').click();
  // handle validation
  cy.findByText('Title is Required.'); // fails the test case if the element is not found in the DOM
  cy.findByText('Abstract is Required.'); 
})

it("should should save talk submission form", () => {
  cy.visit("http://localhost:3000");
  cy.findByLabelText("Title").type("React Intro");
  cy.findByLabelText("Abstract").type("Intro to React");
  cy.findByText('Submit talk').click();
  // assert form should be empty
  cy.findByLabelText("Title").should('have.value','');
  cy.findByLabelText("Abstract").should('have.value','');
  // Expect submitted talk to display
  cy.findByText('React Intro');
});
