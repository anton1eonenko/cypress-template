import { BasePage } from "../../Pages/BasePage";

export class Prospekte extends BasePage {
    get Containers () {
        return {
            MainContainer: cy.get('[class="page__main"]'),
        };
    };

    get Elements () {
        return {
            BreadCrumbs: this.Containers.MainContainer.get('[data-t-name="Breadcrumb"]'),
        };
    };
};