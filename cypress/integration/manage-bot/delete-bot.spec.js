/// <reference types="cypress" />

import { manageBot } from '../../page-objects/manage-bot'

describe('Manage Bot - Delete Bot', function () {

    const botPage = new manageBot()
    const akunLogin = require('../../fixtures/accountDev.json')

    it('TC-DeleteBot-001', function () {
        cy.visit('/')
        cy.login(akunLogin.vuturaDemo, akunLogin.password)
        botPage.btnThreeDots().last().click()
        botPage.btnListThreeDots().children().eq(2).click()
        cy.get('.v-dialog--active').should('be.visible')
        botPage.btnBatal().should('be.visible')
        botPage.btnBuatBot().should('be.visible').click()
        botPage.alert().should('be.visible').and('include.text', 'berhasil dihapus')
    })
})