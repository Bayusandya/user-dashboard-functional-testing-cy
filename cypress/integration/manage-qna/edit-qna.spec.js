/// <reference types="cypress" />

import "cypress-file-upload"
import { chooseBot } from '../../page-objects/choose-bot'
import { sidebar } from '../../page-objects/sidebar'
import { qna } from '../../page-objects/manage-qna/qna'

describe('Manage Qna - Edit Qna', function () {

    const bot = new chooseBot()
    const qnaPage = new qna()
    const btnSidebar = new sidebar()
    const qnaData = require('../../fixtures/qna.json')

    beforeEach(function () {

        cy.visit('/')

        cy.fixture('userAuthData').then((userAuthData) => {
            const email = userAuthData.registeredEmail2
            const password = userAuthData.registeredPassword2
            cy.login(email, password)
        })

        // eq1 = bot pertama
        // eq2 = bot kedua
        // eq3 = dst ..
        bot.chooseBot().eq(1).click()

        btnSidebar.btnQna().click()

    })

    // Edit QnA when user click on Simpan button without doing any modification
    it('TC-EditQnA-001', function () {
        qnaPage.tableQ().eq(2).click()
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Dialog diperbarui')
    })

    // Edit QnA when user add Pertanyaan & Respon Chatbot(text / image / path)
    it('TC-EditQnA-002', function () {
        qnaPage.tableQ().eq(2).click()
        qnaPage.deleteTextQna().eq(0).click()
        qnaPage.deleteTextQna().eq(0).click()
        qnaPage.qnaQuestion().type(qnaData.editQtext)
        qnaPage.btnTambahQuestion().click()
        qnaPage.btnTextResponse().click()
        qnaPage.fieldTextResponse().type(qnaData.editAtext)
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Dialog diperbarui')
    })

    // Edit QnA when user only add Pertanyaan
    it('TC-EditQnA-003', function () {
        qnaPage.tableQ().eq(2).click()
        qnaPage.qnaQuestion().type(qnaData.editQtext)
        qnaPage.btnTambahQuestion().click()
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Dialog diperbarui')
    })

    // Edit QnA when user only add Respon Chatbot with Text
    it('TC-EditQnA-004', function () {
        qnaPage.tableQ().eq(2).click()
        qnaPage.btnTextResponse().click()
        qnaPage.fieldTextResponse().type(qnaData.editAtext)
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Dialog diperbarui')
    })

    // Edit QnA when user only add Respon Chatbot with URL Image
    it('TC-EditQnA-005', function () {
        qnaPage.tableQ().eq(2).click()
        qnaPage.btnImgAnswer().click()
        qnaPage.btnClickForUpload().click()
        qnaPage.fieldLinkAddress()
            .clear().type(qnaData.imgUrlJpgHttp)
        qnaPage.doneInputUrlAddress().click()
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Dialog diperbarui')
    })

    // Edit QnA when user only add Respon Chatbot with File Image
    it('TC-EditQnA-006', function () {
        const fileUpload = 'file-upload/png-500kb.png'
        qnaPage.tableQ().eq(2).click()
        qnaPage.btnImgAnswer().click()
        qnaPage.btnClickForUpload().click()
        qnaPage.menuImgType().click()
        qnaPage.ImgTypeFile().click()
        qnaPage.chooseFile().attachFile(fileUpload)
        qnaPage.doneInputUrlAddress().click()
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Dialog diperbarui')
    })

    // Edit QnA when user only add Respon Chatbot with Path
    it('TC-EditQnA-007', function () {
        qnaPage.tableQ().eq(2).click()
        qnaPage.btnPathResponse().click()
        qnaPage.comboBoxChoosePath().click()
        qnaPage.chooseGreetingPath().eq(0).click()
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Dialog diperbarui')
    })

    // Edit QnA when user edit existing Pertanyaan & Respon Chatbot
    it('TC-EditQnA-008', function () {
        qnaPage.tableQ().eq(2).click()
        qnaPage.qnaQuestion().type(qnaData.q1)
        qnaPage.fieldTextResponse().type(qnaData.a1)
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Dialog diperbarui')
    })

    // Edit QnA when user only edit existing Pertanyaan
    it('TC-EditQnA-009', function () {
        qnaPage.tableQ().eq(2).click()
        qnaPage.qnaQuestion().type(qnaData.q1)
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Dialog diperbarui')
    })

    // Edit QnA when user only edit existing Respon Chatbot(text)
    it('TC-EditQnA-010', function () {
        qnaPage.tableQ().eq(2).click()
        qnaPage.fieldTextResponse().type(qnaData.a1)
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Dialog diperbarui')
    })

    // Edit QnA when user only edit existing Respon Chatbot(url image)
    it('TC-EditQnA-011', function () {
        qnaPage.tableQ().eq(2).click()
        qnaPage.btnClickForUpload().click()
        qnaPage.fieldLinkAddress()
            .clear().type(qnaData.imgUrlJpgHttp)
        qnaPage.doneInputUrlAddress().click()
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Dialog diperbarui')
    })

    // Edit QnA when user only edit existing Respon Chatbot(file image)
    it('TC-EditQnA-012', function () {
        qnaPage.tableQ().eq(2).click()
        qnaPage.btnClickForUpload().click()
        qnaPage.menuImgType().click()
        qnaPage.ImgTypeFile().click()
        qnaPage.chooseFile().attachFile(fileUpload)
        qnaPage.doneInputUrlAddress().click()
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Dialog diperbarui')
    })

    // Edit QnA when user only edit existing Respon Chatbot(path)
    it('TC-EditQnA-013', function () {
        qnaPage.tableQ().eq(2).click()
        qnaPage.comboBoxChoosePath().click()
        qnaPage.chooseGreetingPath().eq(3).click()
        qnaPage.simpanQna().click()
    })

    // Edit QnA when user delete existing Pertanyaan & Respon Chatbot(Pertanyaan & Respon > 1)
    it('TC-EditQnA-014', function () {
        qnaPage.tableQ().eq(2).click()
        qnaPage.deleteTextQna().eq(0).click()
        qnaPage.deleteTextQna().eq(0).click()
        qnaPage.qnaQuestion().type(qnaData.editQtext)
        qnaPage.btnTambahQuestion().click()
        qnaPage.btnTextResponse().click()
        qnaPage.fieldTextResponse().type(qnaData.editAtext)
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Dialog diperbarui')
    })

})