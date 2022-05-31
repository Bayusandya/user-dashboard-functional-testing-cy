/// <reference types="cypress" />

import { managePath } from "../../page-objects/manage-path";
const faker = require('faker')

const pathPage = new managePath();
const akunLogin = require('../../fixtures/accountDev.json')
const namaPath = faker.lorem.words()

describe('Manage Path - Duplicate Path', function () {

    beforeEach(function () {
        cy.visit('/');
    });

    it('TC-DuplicatePath-001', function () {
        cy.login(akunLogin.vuturaDemo, akunLogin.password);
        pathPage.chooseBot().eq(1).click()
        pathPage.chooseIconPath().click()

        cy.get('div[role="listbox"]').find('div[role="listitem"]').then(div => {
            const divCount = Cypress.$(div).length;
            const randomPath = Math.floor(Math.random() * (divCount - 4));
            pathPage.btnThreeDots().eq(randomPath).click();
        })
        cy.contains('Duplicate Path').click();
        pathPage.alert().should('be.visible').and('contain.text', 'Path berhasil diduplikasi');
        pathPage.listPath().last().scrollIntoView().should('be.visible').and('contain', 'COPY');
    });

    it('TC-DuplicatePath-002', function () {
        cy.login(akunLogin.expired, akunLogin.password);
        pathPage.chooseBot().eq(0).click()
        pathPage.chooseIconPath().click()

        cy.get('div[role="listbox"]').find('div[role="listitem"]').then(div => {
            const divCount = Cypress.$(div).length;
            const randomPath = Math.floor(Math.random() * (divCount - 4));
            pathPage.btnThreeDots().eq(randomPath).click();
        })
        cy.contains('Duplicate Path').click();
        pathPage.alert().should('be.visible').and('contain.text', 'Upgrade Plan Required');
    });

    it('TC-DuplicatePath-003', function () {
        cy.login(akunLogin.starter, akunLogin.password);
        pathPage.chooseBot().eq(0).click()
        pathPage.chooseIconPath().click()

        cy.get('div[role="listbox"]').find('div[role="listitem"]').then(div => {
            const divCount = Cypress.$(div).length;

            if (divCount < 14) {
                for (let i = 1; i <= (14 - divCount); i++) {
                    pathPage.btnCreatePath().click()
                    pathPage.fieldNamaPath().type(namaPath + i)
                    pathPage.btnSimpan().click()
                }
                const randomPath = Math.floor(Math.random() * (divCount - 4));
                cy.wait(1000);
                pathPage.btnThreeDots().eq(randomPath).click();
                cy.contains('Duplicate Path').click();
                pathPage.alert().should('be.visible').and('contain.text', 'Upgrade Plan Required');
            } else {
                const randomPath = Math.floor(Math.random() * (divCount - 4));
                pathPage.btnThreeDots().eq(randomPath).click();
                cy.contains('Duplicate Path').click();
                pathPage.alert().should('be.visible').and('contain.text', 'Upgrade Plan Required');
            }
        })
    });

    it('TC-DuplicatePath-004', function () {
        cy.login(akunLogin.plus, akunLogin.password);
        pathPage.chooseBot().eq(0).click()
        pathPage.chooseIconPath().click()

        cy.get('div[role="listbox"]').find('div[role="listitem"]').then(div => {
            const divCount = Cypress.$(div).length;

            if (divCount < 24) {
                for (let i = 1; i <= (24 - divCount); i++) {
                    pathPage.btnCreatePath().click()
                    pathPage.fieldNamaPath().type(namaPath + i)
                    pathPage.btnSimpan().click()
                }
                const randomPath = Math.floor(Math.random() * (divCount - 4));
                cy.wait(1000);
                pathPage.btnThreeDots().eq(randomPath).click();
                cy.contains('Duplicate Path').click();
                pathPage.alert().should('be.visible').and('contain.text', 'Upgrade Plan Required');
            } else {
                const randomPath = Math.floor(Math.random() * (divCount - 4));
                pathPage.btnThreeDots().eq(randomPath).click();
                cy.contains('Duplicate Path').click();
                pathPage.alert().should('be.visible').and('contain.text', 'Upgrade Plan Required');
            }
        })
    });

    it('TC-DuplicatePath-005', function () {
        cy.login(akunLogin.medium, akunLogin.password);
        pathPage.chooseBot().eq(0).click()
        pathPage.chooseIconPath().click()

        cy.get('div[role="listbox"]').find('div[role="listitem"]').then(div => {
            const divCount = Cypress.$(div).length;

            if (divCount < 34) {
                for (let i = 1; i <= (33 - divCount); i++) {
                    pathPage.btnCreatePath().click()
                    pathPage.fieldNamaPath().type(namaPath + i)
                    pathPage.btnSimpan().click()
                }
                cy.get('.v-responsive__content').eq(8).click()
                cy.contains('bot test 2').click()
                pathPage.btnCreatePath().click()
                pathPage.fieldNamaPath().type(namaPath)
                pathPage.btnSimpan().click()
                cy.wait(1000);
                pathPage.btnThreeDots().eq(0).click();
                cy.contains('Duplicate Path').click();
                pathPage.alert().should('be.visible').and('contain.text', 'Upgrade Plan Required');
            } else {
                const randomPath = Math.floor(Math.random() * (divCount - 4));
                pathPage.btnThreeDots().eq(randomPath).click();
                cy.contains('Duplicate Path').click();
                pathPage.alert().should('be.visible').and('contain.text', 'Upgrade Plan Required');
            }
        })
    });
})