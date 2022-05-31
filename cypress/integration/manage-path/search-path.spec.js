/// <reference types="cypress" />

import { managePath } from "../../page-objects/manage-path";

const pathPage = new managePath();
const akunLogin = require('../../fixtures/accountDev.json')

describe('Manage Path - Search Path', function () {

    it('TC-SearchPath-001', function () {
        cy.visit('/');
        cy.login(akunLogin.vuturaDemo, akunLogin.password);
        pathPage.chooseBot().eq(1).click()
        pathPage.chooseIconPath().click()
        cy.wait(1000);
        pathPage.fieldSearch().type('greeting')
        pathPage.listPath().should('be.visible').and('contain', 'GREETING')
    });
})