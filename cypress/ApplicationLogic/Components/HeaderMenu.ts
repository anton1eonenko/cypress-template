import { BasePage } from "../Pages/BasePage";

export class HeaderMenu extends BasePage {
    get Containers () {
        return {
            MainContainer: cy.get('[data-t-name="Header"]')
        };
    }

    get Buttons () {
        return {
            HilfeUndKontakt: cy.get('[data-attr-value="Hilfe & Kontakt"]'),
            Karriere: cy.get('[data-attr-value="Karriere"]'),
            UnternemensGruppe: cy.get('[data-attr-value="Unternehmensgruppe"]'),
            HinweisgeberSystem: cy.get('[data-attr-value="Unternehmensgruppe"]'),
            Angebote: cy.get('[data-attr-value="Angebote"]'),
            AldiOnlineshop: cy.get('[data-attr-value="ALDI ONLINESHOP"]'),
            Prospekte: cy.get('[data-attr-value="Prospekte"]'),
            Produkte: cy.get('[data-attr-value="Produkte"]'),
            Rezepte: cy.get('[data-attr-value="Rezepte"]'),
            ThemenWelten: cy.get('[data-attr-value="Themenwelten"]')
        };
    }

    async abc () {
        this.Buttons.Prospekte.click();
    }
};