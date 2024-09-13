import { BasePage } from "./BasePage";
import { HeaderMenu } from "../Components/HeaderMenu";
import { Prospekte } from "../Components/Prospekte/Prospekte";

class PageManager {
    basePage: BasePage;
    headerMenu: HeaderMenu;
    prospekte: Prospekte

    constructor() {
        this.basePage = new BasePage();
        this.headerMenu = new HeaderMenu();
        this.prospekte = new Prospekte();
    };
};

export const pageManager = new PageManager();