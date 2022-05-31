/// <reference types="cypress" />

import { managePath } from "../../page-objects/manage-path";
const faker = require('faker')

const pathPage = new managePath()
const akunLogin = require('../../fixtures/accountDevByPlan.json')
const namaPath = faker.lorem.words()


describe('Manage Path - Create Path (001-003)', function () {

    beforeEach(function () {

        cy.visit('/')
        cy.login(akunLogin.vuturaDemo, akunLogin.password)
        pathPage.chooseBot().eq(1).click()
        pathPage.chooseIconPath().click()
        pathPage.btnCreatePath().click()
    });

    it('TC-CreatePath-001', function () {
        pathPage.headerModal().should('be.visible').and('contain.text', 'Buat Path Baru')
        pathPage.fieldNamaPath().should('be.visible').and('be.empty')
        pathPage.btnBatal().should('be.visible').and('contain.text', 'Batal')
        pathPage.btnSimpan().should('be.visible').and('contain.text', 'Simpan').click()
        pathPage.alert().should('be.visible').and('contain.text', 'Harap masukkan Nama Path')
    });

    it('TC-CreatePath-002', function () {
        pathPage.fieldNamaPath().type(namaPath)
        pathPage.btnSimpan().click()
        pathPage.alert().should('be.visible').and('contain.text', 'Berhasil Path  berhasil dibuat')
        pathPage.listPath().last().scrollIntoView().should('be.visible').and('contain.text', namaPath.toUpperCase())
    });

    it('TC-CreatePath-003', function () {
        pathPage.fieldNamaPath().type('auth')
        pathPage.btnSimpan().click()
        //pathPage.alert().should('be.visible').and('contain.text', 'Berhasil Path  berhasil dibuat')
    });
})

describe('Manage Path - Create Path (004-007)', function () {

    beforeEach(function () {
        cy.visit('/')
    });

    it('TC-CreatePath-004', function () {
        cy.login(akunLogin.expired, akunLogin.password)
        pathPage.chooseBot().eq(0).click()
        pathPage.chooseIconPath().click()
        pathPage.btnCreatePath().click()
        pathPage.fieldNamaPath().type(namaPath)
        pathPage.btnSimpan().click()
        pathPage.alert().should('be.visible').and('contain.text', 'Upgrade Plan Required')
    });

    it('TC-CreatePath-005', function () {
        cy.login(akunLogin.starter, akunLogin.password)
        pathPage.chooseBot().eq(0).click()
        pathPage.chooseIconPath().click()

        cy.get('div[role="listbox"]').find('div[role="listitem"]').then(div => {
            const divCount = Cypress.$(div).length
            //pathPage.listPath().should('have.length', divCount)
            if (divCount < 14) {
                for (let i = 1; i <= (14 - divCount); i++) {
                    pathPage.btnCreatePath().click()
                    pathPage.fieldNamaPath().type(namaPath + i)
                    pathPage.btnSimpan().click()
                }
                pathPage.btnCreatePath().click()
                pathPage.fieldNamaPath().type(namaPath)
                pathPage.btnSimpan().click()
                pathPage.alert().should('be.visible').and('contain.text', 'Upgrade Plan Required')
            } else {
                pathPage.btnCreatePath().click()
                pathPage.fieldNamaPath().type(namaPath)
                pathPage.btnSimpan().click()
                pathPage.alert().should('be.visible').and('contain.text', 'Upgrade Plan Required')
            }
        })
    });

    it('TC-CreatePath-006', function () {
        cy.login(akunLogin.plus, akunLogin.password)
        pathPage.chooseBot().eq(0).click()
        pathPage.chooseIconPath().click()

        cy.get('div[role="listbox"]').find('div[role="listitem"]').then(div => {
            const divCount = Cypress.$(div).length
            //pathPage.listPath().should('have.length', divCount)
            if (divCount < 24) {
                for (let i = 1; i <= (24 - divCount); i++) {
                    pathPage.btnCreatePath().click()
                    pathPage.fieldNamaPath().type(namaPath + i)
                    pathPage.btnSimpan().click()
                }
                pathPage.btnCreatePath().click()
                pathPage.fieldNamaPath().type(namaPath)
                pathPage.btnSimpan().click()
                pathPage.alert().should('be.visible').and('contain.text', 'Upgrade Plan Required')
            } else {
                pathPage.btnCreatePath().click()
                pathPage.fieldNamaPath().type(namaPath)
                pathPage.btnSimpan().click()
                pathPage.alert().should('be.visible').and('contain.text', 'Upgrade Plan Required')
            }
        })
    });

    it('TC-CreatePath-007', function () {
        cy.login(akunLogin.medium, akunLogin.password)
        pathPage.chooseBot().eq(0).click()
        pathPage.chooseIconPath().click()

        cy.get('div[role="listbox"]').find('div[role="listitem"]').then(div => {
            const divCount = Cypress.$(div).length
            //pathPage.listPath().should('have.length', divCount)
            if (divCount < 34) {
                for (let i = 1; i <= (34 - divCount); i++) {
                    pathPage.btnCreatePath().click()
                    pathPage.fieldNamaPath().type(namaPath + i)
                    pathPage.btnSimpan().click()
                }
                cy.get('.v-responsive__content').eq(8).click()
                cy.contains('bot test 2').click()
                pathPage.btnCreatePath().click()
                pathPage.fieldNamaPath().type(namaPath)
                pathPage.btnSimpan().click()
                pathPage.alert().should('be.visible').and('contain.text', 'Upgrade Plan Required')
            } else {
                cy.get('.v-responsive__content').eq(8).click()
                cy.contains('bot test 2').click()
                pathPage.btnCreatePath().click()
                pathPage.fieldNamaPath().type(namaPath)
                pathPage.btnSimpan().click()
                pathPage.alert().should('be.visible').and('contain.text', 'Upgrade Plan Required')
            }
        })
    });
})