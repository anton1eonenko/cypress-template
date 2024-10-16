import { BasePage } from "../Pages/BasePage";

export class HeaderMenu extends BasePage {
    get Containers () {
        return {
            MainContainer: cy.get('[data-t-name="Header"]')
        };
    }

    get Buttons () {
        return {
            HilfeUndKontakt: this.Containers.MainContainer.get('[data-attr-value="Hilfe & Kontakt"]'),
            Karriere: this.Containers.MainContainer.get('[data-attr-value="Karriere"]'),
            UnternemensGruppe: this.Containers.MainContainerм.get('[data-attr-value="Unternehmensgruppe"]'),
            HinweisgeberSystem: this.Containers.MainContainer.get('[data-attr-value="Unternehmensgruppe"]'),
            Angebote: this.Containers.MainContainer.get('[data-attr-value="Angebote"]'),
            AldiOnlineshop: this.Containers.MainContainer.get('[data-attr-value="ALDI ONLINESHOP"]'),
            Prospekte: this.Containers.MainContainer.get('[data-attr-value="Prospekte"]'),
            Produkte: this.Containers.MainContainer.get('[data-attr-value="Produkte"]'),
            Rezepte: this.Containers.MainContainer.get('[data-attr-value="Rezepte"]'),
            ThemenWelten: this.Containers.MainContainer.get('[data-attr-value="Themenwelten"]')
        };
    }

    async abc () {
        this.Buttons.Prospekte.click();
    }
};
