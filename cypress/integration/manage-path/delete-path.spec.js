/// <reference types="cypress" />

import { managePath } from "../../page-objects/manage-path";

const akunLogin = require('../../fixtures/accountDev.json');
const pathPage = new managePath();

describe('Manage Path - Delete Path', function () {

    beforeEach(function () {
        cy.visit('/');
        cy.login(akunLogin.vuturaDemo, akunLogin.password);
        pathPage.chooseBot().eq(1).click();
        pathPage.chooseIconPath().click();
    });

    it('TC-DeletePath-001', function () {
        cy.get('div[role="listbox"]').find('div[role="listitem"]').then(div => {
            const divCount = Cypress.$(div).length;
            const randomPath = Math.floor(Math.random() * (divCount - 4));
            pathPage.btnThreeDots().eq(randomPath).click();
            cy.contains('Delete Path').click();
            pathPage.swalDelete().should('be.visible')
            cy.get('.swal2-confirm').click()
            pathPage.alert().should('be.visible').and('contain.text', 'Path berhasil dihapus');
        })
    });

    it('TC-DeletePath-003', function () {
        cy.get('div[role="listbox"]').find('div[role="listitem"]').then(div => {
            const divCount = Cypress.$(div).length;
            const randomPath = Math.floor(Math.random() * (divCount - 4));
            pathPage.btnThreeDots().eq(randomPath).click();
            cy.contains('Delete Path').click();
            pathPage.swalDelete().should('be.visible')
            cy.get('.swal2-cancel').click()
            pathPage.alert().should('be.visible').and('contain.text', 'Path anda batal dihapus');
        })
    });
})