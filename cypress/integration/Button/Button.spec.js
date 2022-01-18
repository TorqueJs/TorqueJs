/// <reference types="cypress" />

// const getIframeDocument = () => cy.get("#storybook-preview-iframe").its("0.contentDocument").should("exist");

// const getIframeBody = () => getIframeDocument().its("body").should("not.be.undefined").then(cy.wrap);

describe('Torque Button', () => {

    it('should navigate and access the iframe', () => {
        cy.visit('http://localhost:6006/iframe.html?id=torquebutton--torque-button');
        cy.get('.sc-bdVaJa').should('exist');
    })
});