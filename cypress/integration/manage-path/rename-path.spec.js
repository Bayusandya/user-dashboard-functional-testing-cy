/// <reference types="cypress" />

import { managePath } from "../../page-objects/manage-path";
const faker = require('faker');

const pathPage = new managePath();
const akunLogin = require('../../fixtures/accountDev.json')
const namaPath = faker.lorem.words()

describe('Manage Path - Rename Path', function () {

    beforeEach(function () {
        cy.visit('/');
        cy.login(akunLogin.vuturaDemo, akunLogin.password);
        pathPage.chooseBot().eq(1).click()
        pathPage.chooseIconPath().click()
    });

    it('TC-RenamePath-001', function () {
        pathPage.btnThreeDots().eq(0).click()
        cy.contains('Rename Path').click();
        pathPage.headerModal().should('be.visible').and('contain.text', 'Update Path Name')
        pathPage.fieldNamaPath().clear()
        pathPage.btnSimpan().click()
        pathPage.alert().should('be.visible').and('contain.text', 'Harap masukkan Nama Path')
    });

    it('TC-RenamePath-002', function () {
        pathPage.btnThreeDots().eq(0).click()
        cy.contains('Rename Path').click();
        pathPage.headerModal().should('be.visible').and('contain.text', 'Update Path Name')
        pathPage.fieldNamaPath().clear().type(namaPath)
        pathPage.btnSimpan().click()
        pathPage.alert().should('be.visible').and('contain.text', 'Berhasil Path  berhasil dirubah')
    });

    it('TC-RenamePath-003', function () {
        pathPage.btnThreeDots().eq(0).click()
        cy.contains('Rename Path').click();
        pathPage.headerModal().should('be.visible').and('contain.text', 'Update Path Name')
        pathPage.fieldNamaPath().clear().type('greeting')
        pathPage.btnSimpan().click()
        //pathPage.alert().should('be.visible').and('contain.text', 'Berhasil Path  berhasil dirubah')
    });
})