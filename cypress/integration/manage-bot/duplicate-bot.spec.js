/// <reference types="cypress" />

import { manageBot } from '../../page-objects/manage-bot'
import "cypress-file-upload"
const faker = require('faker')
const akunDev = require('../../fixtures/accountDev.json')

const botPage = new manageBot()

describe('Manage Bot - Duplicate Bot (001-005)', function () {

    const randomAvaTemplate = Math.ceil(Math.random() * 7)
    const namaBot = faker.commerce.product()
    const deskripsiBot = faker.commerce.productName()

    beforeEach(function () {
        cy.visit('/')
        cy.login(akunDev.vuturaDemo, akunDev.password)
        botPage.btnThreeDots().last().click()
        botPage.btnListThreeDots().children().eq(1).click()
    })

    it('TC-DuplicateBot-001', function () {
        botPage.headerForm().should('be.visible').and('contain.text', 'Duplikasi Chatbot')
        botPage.displayAva().should('be.visible')
        botPage.fieldNamaBot().should('be.visible').invoke('val').should('not.be.empty').and('include', '_copy')
        botPage.fieldDeskripsiBot().should('be.visible').invoke('val').should('not.be.empty')
        botPage.btnBatal().should('be.visible').and('contain.text', 'Batal')
        botPage.btnBuatBot().should('be.visible').and('contain.text', 'Duplikasi Chatbot').click()
        botPage.alert().should('be.visible').and('contain.text', 'Chatbot Anda berhasil diduplikasi')
        botPage.listBot().last().should('contain.text', '_copy')
    })

    it('TC-DuplicateBot-002', function () {
        botPage.fieldNamaBot().clear().should('be.empty')
        botPage.messages().should('be.visible').and('contain.text', 'Nama harus diisi maksimal 30 karakter')
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Mohon lengkapi data sesuai format.')
    })

    it('TC-DuplicateBot-003', function () {
        botPage.fieldDeskripsiBot().clear().should('be.empty')
        botPage.messages().should('be.visible').and('contain.text', 'Deskripsi harus diisi maksimal 100 karakter')
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Mohon lengkapi data sesuai format.')
    })

    it('TC-DuplicateBot-004', function () {
        cy.get('.avatar-container').eq(randomAvaTemplate).click()
        botPage.displayAva().should('have.attr', 'src').and('include', 'https://storage.googleapis.com/vutura/assets/images/')
        botPage.fieldNamaBot().clear().type(namaBot)
        botPage.fieldDeskripsiBot().clear().type(deskripsiBot)
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Chatbot Anda berhasil diduplikasi')
    })

    it('TC-DuplicateBot-005', function () {
        const fileUpload = 'file-upload/png-500kb.png'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('.mb-4 > img', { timeout: 10000 }).should('have.attr', 'src').and('include', 'https://storage.googleapis.com/vutura/assets/images/')
        botPage.fieldNamaBot().clear().type(namaBot)
        botPage.fieldDeskripsiBot().clear().type(deskripsiBot)
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Chatbot Anda berhasil diduplikasi')
    })
})

describe('Manage Bot - Duplicate Bot (006-017)', function () {

    beforeEach(function () {
        cy.visit('/')
    })

    it('TC-DuplicateBot-006', function () {
        cy.login(akunDev.expired, akunDev.password)
        botPage.btnThreeDots().last().click()
        botPage.btnListThreeDots().children().eq(1).click()
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Payment Required')
    })

    it('TC-DuplicateBot-007', function () {
        cy.login(akunDev.starter, akunDev.password)
        botPage.btnThreeDots().last().click()
        botPage.btnListThreeDots().children().eq(1).click()
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Payment Required')
    })

    it('TC-DuplicateBot-008', function () {
        cy.login(akunDev.plus, akunDev.password)
        botPage.btnThreeDots().last().click()
        botPage.btnListThreeDots().children().eq(1).click()
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Payment Required')
    })

    it('TC-DuplicateBot-009', function () {
        cy.login(akunDev.medium, akunDev.password)
        botPage.btnThreeDots().last().click()
        botPage.btnListThreeDots().children().eq(1).click()
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Payment Required')
    })
})