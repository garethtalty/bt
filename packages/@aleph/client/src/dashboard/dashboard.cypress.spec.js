const app = 'http://localhost:9000';

describe('dashboard', function() {
  it('displays some info cards for the available services', function() {
    cy.visit(app);
    cy.get('[data-testid=service-card]').should('be.visible');
  });
});
