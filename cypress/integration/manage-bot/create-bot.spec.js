/// <reference types="cypress" />

import { manageBot } from '../../page-objects/manage-bot'

const faker = require('faker')
const akunDev = require('../../fixtures/accountDev.json')
const botPage = new manageBot()
const namaBot = faker.commerce.product()
const deskripsiBot = faker.commerce.productName()
const randomBotTemplate = Math.floor(Math.random() * 10)

describe('Manage Bot - Create Bot (001-007)', function () {

    const randomAvaTemplate = Math.ceil(Math.random() * 7)

    beforeEach(function () {

        cy.visit('/')
        cy.login(akunDev.vuturaDemo, akunDev.vuturaDemo)
        cy.url().should('include', 'bot')
        botPage.btnCreate().first().should('be.visible').click()
    })

    it('TC-CreateBot-001', function () {
        botPage.headerForm().should('be.visible').and('contain.text', 'Buat Chatbot')
        botPage.fieldNamaBot().should('be.visible').and('be.empty')
        botPage.fieldDeskripsiBot().should('be.visible').and('be.empty')
        botPage.btnBatal().should('be.visible').and('contain.text', 'Batal')
        botPage.btnBuatBot().should('be.visible').and('contain.text', 'Buat Chatbot').click()
        botPage.alert().should('be.visible').and('contain.text', 'Mohon lengkapi data sesuai format.')
    })

    it('TC-CreateBot-002', function () {
        botPage.fieldNamaBot().type(namaBot)
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Mohon lengkapi data sesuai format.')
    })

    it('TC-CreateBot-003', function () {
        botPage.fieldDeskripsiBot().type(deskripsiBot)
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Mohon lengkapi data sesuai format.')
    })

    it('TC-CreateBot-004', function () {
        botPage.fieldNamaBot().type(namaBot)
        botPage.fieldDeskripsiBot().type(deskripsiBot)
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Chatbot Anda berhasil dibuat')
        botPage.listBot().last().should('contain.text', namaBot)
    })

    it('TC-CreateBot-005', function () {
        cy.get('.avatar-container').eq(randomAvaTemplate).click()
        botPage.displayAva().should('have.attr', 'src').and('include', 'https://storage.googleapis.com/vutura/assets/images/')
        botPage.fieldNamaBot().type(namaBot)
        botPage.fieldDeskripsiBot().type(deskripsiBot)
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Chatbot Anda berhasil dibuat')
        botPage.listBot().last().should('contain.text', namaBot)
    })

    it('TC-CreateBot-006', function () {
        botPage.checkboxTemplate().check({ force: true }).should('be.checked')
        botPage.fieldBotTemplate().should('be.visible')
        botPage.btnBatal().should('be.visible')
        botPage.btnBuatBot().should('be.visible').click()
        botPage.alert().should('be.visible').and('contain.text', 'Mohon lengkapi data sesuai format.')
    })

    it('TC-CreateBot-007', function () {
        botPage.checkboxTemplate().check({ force: true }).should('be.checked')
        botPage.fieldBotTemplate().click()
        botPage.listTemplate().should('be.visible').children().eq(randomBotTemplate).scrollIntoView().click()
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Chatbot Anda berhasil dibuat')
        botPage.listBot().last().find('div > img').should('have.attr', 'src').and('contain', 'bot_logo.png')
    })
})

describe('Manage Bot - Create Bot (008-017)', function () {

    beforeEach(function () {
        cy.visit('/')
    })

    it('TC-CreateBot-008', function () {
        cy.login(akunDev.expired, akunDev.password)
        botPage.btnCreate().first().should('be.visible').click()
        botPage.fieldNamaBot().type(namaBot)
        botPage.fieldDeskripsiBot().type(deskripsiBot)
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Payment Required')
    })

    it('TC-CreateBot-009', function () {
        cy.login(akunDev.expired, akunDev.password)
        botPage.btnCreate().first().should('be.visible').click()
        botPage.checkboxTemplate().check({ force: true }).should('be.checked')
        botPage.fieldBotTemplate().click()
        botPage.listTemplate().should('be.visible').children().eq(randomBotTemplate).scrollIntoView().click()
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Payment Required')
    })

    it('TC-CreateBot-010', function () {
        cy.login(akunDev.starter, akunDev.password)
        botPage.btnCreate().first().should('be.visible').click()
        botPage.fieldNamaBot().type(namaBot)
        botPage.fieldDeskripsiBot().type(deskripsiBot)
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Payment Required')
    })

    it('TC-CreateBot-011', function () {
        cy.login(akunDev.starter, akunDev.password)
        botPage.btnCreate().first().should('be.visible').click()
        botPage.checkboxTemplate().check({ force: true }).should('be.checked')
        botPage.fieldBotTemplate().click()
        botPage.listTemplate().should('be.visible').children().eq(randomBotTemplate).scrollIntoView().click()
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Payment Required')
    })

    it('TC-CreateBot-012', function () {
        cy.login(akunDev.plus, akunDev.password)
        botPage.btnCreate().first().should('be.visible').click()
        botPage.fieldNamaBot().type(namaBot)
        botPage.fieldDeskripsiBot().type(deskripsiBot)
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Payment Required')
    })

    it('TC-CreateBot-013', function () {
        cy.login(akunDev.plus, akunDev.password)
        botPage.btnCreate().first().should('be.visible').click()
        botPage.checkboxTemplate().check({ force: true }).should('be.checked')
        botPage.fieldBotTemplate().click()
        botPage.listTemplate().should('be.visible').children().eq(randomBotTemplate).scrollIntoView().click()
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Payment Required')
    })

    it('TC-CreateBot-014', function () {
        cy.login(akunDev.medium, akunDev.password)
        botPage.btnCreate().first().should('be.visible').click()
        botPage.fieldNamaBot().type(namaBot)
        botPage.fieldDeskripsiBot().type(deskripsiBot)
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Payment Required')
    })

    it('TC-CreateBot-015', function () {
        cy.login(akunDev.medium, akunDev.password)
        botPage.btnCreate().first().should('be.visible').click()
        botPage.checkboxTemplate().check({ force: true }).should('be.checked')
        botPage.fieldBotTemplate().click()
        botPage.listTemplate().should('be.visible').children().eq(randomBotTemplate).scrollIntoView().click()
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Payment Required')
    })

    it('TC-CreateBot-016', function () {
        cy.login(akunDev.vuturaDemo, akunDev.password)
        botPage.btnCreate().first().should('be.visible').click()
        botPage.fieldNamaBot().type(namaBot)
        botPage.fieldDeskripsiBot().type(deskripsiBot)
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Chatbot Anda berhasil dibuat')
        cy.get('table').should('be.visible')
        cy.get('tr').last().should('be.visible').and('contain.text', namaBot)
    })

    it('TC-CreateBot-017', function () {
        cy.login(akunDev.vuturaDemo, akunDev.password)
        botPage.btnCreate().first().should('be.visible').click()
        botPage.fieldNamaBot().type('bytestbot')
        botPage.fieldDeskripsiBot().type(deskripsiBot)
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Nama bot telah digunakan')
    })
})