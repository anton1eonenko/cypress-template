
export class Expect { 
    ExpectElementIsVisible (locator) {
        locator.should('be.visible');
    };

    ExpectElementContainsText(locator, exRes: string) {
        locator.should('contain.text', exRes);
    };

    ExpectUrlContainsEndpoint(endPoint: string) {
        cy.url().should('contain', endPoint);
    };
};

export default new Expect();