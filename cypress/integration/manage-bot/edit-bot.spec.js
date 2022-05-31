/// <reference types="cypress" />

import { manageBot } from '../../page-objects/manage-bot'
import "cypress-file-upload"
const faker = require('faker')
const akunLogin = require('../../fixtures/accountDev.json')

describe('Manage Bot - Edit Bot', function () {

    const botPage = new manageBot()
    const randomAvaTemplate = Math.ceil(Math.random() * 7)
    const namaBot = faker.commerce.product()
    const deskripsiBot = faker.commerce.productName()

    beforeEach(function () {
        cy.visit('/')
        cy.login(akunLogin.vuturaDemo, akunLogin.password)
        botPage.btnThreeDots().last().click()
        botPage.btnListThreeDots().children().eq(0).click()
    })

    it('TC-EditBot-001', function () {
        botPage.headerForm().should('be.visible').and('contain.text', 'Ubah Chatbot')
        botPage.fieldNamaBot().should('be.visible').invoke('val').should('not.be.empty')
        botPage.fieldDeskripsiBot().should('be.visible').invoke('val').should('not.be.empty')
        botPage.btnBatal().should('be.visible').and('contain.text', 'Batal')
        botPage.btnBuatBot().should('be.visible').and('contain.text', 'Ubah Chatbot').click()
        botPage.alert().should('be.visible').and('contain.text', 'Chatbot Anda berhasil diubah')
    })

    it('TC-EditBot-002', function () {
        botPage.fieldNamaBot().clear().should('be.empty')
        botPage.messages().should('be.visible').and('contain.text', 'Nama harus diisi maksimal 30 karakter')
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Mohon lengkapi data sesuai format.')
    })

    it('TC-EditBot-003', function () {
        botPage.fieldDeskripsiBot().clear().should('be.empty')
        botPage.messages().should('be.visible').and('contain.text', 'Deskripsi harus diisi maksimal 100 karakter')
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Mohon lengkapi data sesuai format.')
    })

    it('TC-EditBot-004', function () {
        cy.get('.avatar-container').eq(randomAvaTemplate).click()
        botPage.displayAva().should('have.attr', 'src').and('include', 'https://storage.googleapis.com/vutura/assets/images/')
        botPage.fieldNamaBot().clear().type(namaBot)
        botPage.fieldDeskripsiBot().clear().type(deskripsiBot)
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Chatbot Anda berhasil diubah')
    })

    it('TC-EditBot-005', function () {
        const fileUpload = 'file-upload/png-500kb.png'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('.mb-4 > img', { timeout: 10000 }).should('have.attr', 'src').and('include', 'https://storage.googleapis.com/vutura/assets/images/')
        botPage.fieldNamaBot().clear().type(namaBot)
        botPage.fieldDeskripsiBot().clear().type(deskripsiBot)
        botPage.btnBuatBot().click()
        botPage.alert().should('be.visible').and('contain.text', 'Chatbot Anda berhasil diubah')
    })
})