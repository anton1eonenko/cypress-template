import { pageManager } from "../ApplicationLogic/Pages/PageManager";
import expect from '../actions/expect';
import uiEndpoints from "../enums/UiEndpoins";
import expectData from "../enums/ExpectData";

describe('template spec', () => {
  it('passes', async () => {
    cy.visit('/')
    pageManager.headerMenu.Buttons.Prospekte.click();
    expect.ExpectElementIsVisible(pageManager.prospekte.Elements.BreadCrumbs);
    expect.ExpectElementContainsText(pageManager.prospekte.Elements.BreadCrumbs, expectData.Prospekte);
    expect.ExpectUrlContainsEndpoint(uiEndpoints.prospekte);
  });
})