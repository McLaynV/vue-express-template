import NotFound from './NotFound.vue'

describe('<NotFound />', () => {
    it('renders', () => {
        // see: https://test-utils.vuejs.org/guide/
        cy.mount(NotFound);
        cy.get('h1.title')
            .should('contain.text', 'Uh oh!');
        cy.get('h2.subtitle')
            .should('contain.text', "Looks like this page doesn't exist.");
        cy.get('h2.subtitle > router-link')
            .should('contain.text', "Click here to return to the homepage.");
    });
});