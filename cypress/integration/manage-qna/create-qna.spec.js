/// <reference types="cypress" />

import "cypress-file-upload"
import { chooseBot } from '../../page-objects/choose-bot'
import { sidebar } from '../../page-objects/sidebar'
import { qna } from '../../page-objects/manage-qna/qna'

describe('Manage Qna - Create Qna', function () {

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

    // Create QnA by not filling up any data
    it('TC-CreateQna-001', function () {
        qnaPage.addQna().click()
        qnaPage.simpanQna().click()
        qnaPage.alertFailed().should('be.visible')
            .and('contain', 'Masukan Respon & Pertanyaan')
    })

    // Create QnA by only fill Pertanyaan
    it('TC-CreateQna-002', function () {
        qnaPage.addQna().click()
        qnaPage.qnaQuestion().type(qnaData.q1)
        qnaPage.btnTambahAnswer().click()
        qnaPage.simpanQna().click()
        qnaPage.alertFailedRespon().should('be.visible')
            .and('contain', 'Respon belum dimasukkan')
    })

    // Create QnA by only fill Respon Chatbot
    it('TC-CreateQna-003', function () {
        qnaPage.addQna().click()
        qnaPage.btnTextResponse().click()
        qnaPage.fieldTextResponse.type(qnaData.a1)
        qnaPage.simpanQna().click()
        qnaPage.alertFailed().should('be.visible')
            .and('contain', 'masukkan Pertanyaan & Respon')
    })

    // Create QnA by fill Pertanyaan & Jawaban with text
    it('TC-CreateQna-004', function () {
        qnaPage.addQna().click()
        qnaPage.qnaQuestion().type(qnaData.q1)
        qnaPage.btnTambahQuestion().click()
        qnaPage.btnTextResponse().click()
        qnaPage.fieldTextResponse().type(qnaData.a1)
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Sukses membuat QNA')
    })

    // Create QnA by fill Pertanyaan & Jawaban with image from url (http)
    it('TC-CreateQna-005', function () {
        qnaPage.addQna().click()
        qnaPage.qnaQuestion().type(qnaData.q1)
        qnaPage.btnTambahQuestion().click()
        qnaPage.btnImgAnswer().click()
        qnaPage.btnClickForUpload().click()
        qnaPage.fieldLinkAddress()
            .clear().type(qnaData.imgUrlJpgHttp)
        qnaPage.doneInputUrlAddress().click()
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Sukses membuat QNA')
    })

    // Create QnA by fill Pertanyaan & Jawaban with image from url (https)
    it('TC-CreateQna-006', function () {
        qnaPage.addQna().click()
        qnaPage.qnaQuestion().type(qnaData.q1)
        qnaPage.btnTambahQuestion().click()
        qnaPage.btnImgAnswer().click()
        qnaPage.btnClickForUpload().click()
        qnaPage.fieldLinkAddress()
            .clear().type(qnaData.imgUrlJpgHttps)
        qnaPage.doneInputUrlAddress().click()
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Sukses membuat QNA')
    })

    // Create QnA by fill Pertanyaan & Jawaban with image from file(.png < 750kb)
    it('TC-CreateQna-007', function () {
        const fileUpload = 'file-upload/png-500kb.png'
        qnaPage.addQna().click()
        qnaPage.qnaQuestion().type(qnaData.q1)
        qnaPage.btnTambahQuestion().click()
        qnaPage.btnImgAnswer().click()
        qnaPage.btnClickForUpload().click()
        qnaPage.menuImgType().click()
        qnaPage.ImgTypeFile().click()
        qnaPage.chooseFile().attachFile(fileUpload)
        qnaPage.doneInputUrlAddress().click()
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Sukses membuat QNA')
    })

    // Create QnA by fill Pertanyaan & Jawaban with image from file(.png > 750kb)
    it('TC-CreateQna-008', function () {
        const fileUpload = 'file-upload/png-1mb.png'
        qnaPage.addQna().click()
        qnaPage.qnaQuestion().type(qnaData.q1)
        qnaPage.btnTambahQuestion().click()
        qnaPage.btnImgAnswer().click()
        qnaPage.btnClickForUpload().click()
        qnaPage.menuImgType().click()
        qnaPage.ImgTypeFile().click()
        qnaPage.chooseFile().attachFile(fileUpload)
        qnaPage.doneInputUrlAddress().click()
        qnaPage.simpanQna().click()
        qnaPage.alertFailedUploadImg.should('be.visible')
            .and('contain', 'Ukuran file harus lebih kecil dari 750 kb')
    })

    // Create QnA by fill Pertanyaan & Jawaban with image from file(.jpg /.jpeg < 750kb)
    it('TC-CreateQna-009', function () {
        const fileUpload = 'file-upload/jpg-500kb.jpg'
        qnaPage.addQna().click()
        qnaPage.qnaQuestion().type(qnaData.q1)
        qnaPage.btnTambahQuestion().click()
        qnaPage.btnImgAnswer().click()
        qnaPage.btnClickForUpload().click()
        qnaPage.menuImgType().click()
        qnaPage.ImgTypeFile().click()
        // qnaPage.chooseFile()
        cy.get("input[placeholder='Choose File']").attachFile(fileUpload)
        qnaPage.doneInputUrlAddress().click()
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Sukses membuat QNA')
    })

    // Create QnA by fill Pertanyaan & Jawaban with image from file(.jpg /.jpeg > 750kb)
    it('TC-CreateQna-010', function () {
        const fileUpload = 'file-upload/jpg-2mb.jpg'
        qnaPage.addQna().click()
        qnaPage.qnaQuestion().type(qnaData.q1)
        qnaPage.btnTambahQuestion().click()
        qnaPage.btnImgAnswer().click()
        qnaPage.btnClickForUpload().click()
        qnaPage.menuImgType().click()
        qnaPage.ImgTypeFile().click()
        qnaPage.chooseFile().attachFile(fileUpload)
        qnaPage.doneInputUrlAddress().click()
        qnaPage.simpanQna().click()
        qnaPage.alertFailedUploadImg.should('be.visible')
            .and('contain', 'Ukuran file harus lebih kecil dari 750 kb')
    })

    // Create QnA by fill Pertanyaan & Jawaban with image from file(.bmp < 750kb)
    it('TC-CreateQna-011', function () {
        const fileUpload = 'file-upload/???.bmp'
        qnaPage.addQna().click()
        qnaPage.qnaQuestion().type(qnaData.q1)
        qnaPage.btnTambahQuestion().click()
        qnaPage.btnImgAnswer().click()
        qnaPage.btnClickForUpload().click()
        qnaPage.menuImgType().click()
        qnaPage.ImgTypeFile().click()
        qnaPage.chooseFile().attachFile(fileUpload)
        qnaPage.doneInputUrlAddress().click()
        qnaPage.simpanQna().click()
        qnaPage.alertFailedUploadImg.should('be.visible')
            .and('contain', '???')
    })

    // Create QnA by fill Pertanyaan & Jawaban with image from file(.bmp > 750kb)
    it('TC-CreateQna-012', function () {
        const fileUpload = 'file-upload/???.bmp'
        qnaPage.addQna().click()
        qnaPage.qnaQuestion().type(qnaData.q1)
        qnaPage.btnTambahQuestion().click()
        qnaPage.btnImgAnswer().click()
        qnaPage.btnClickForUpload().click()
        qnaPage.menuImgType().click()
        qnaPage.ImgTypeFile().click()
        qnaPage.chooseFile().attachFile(fileUpload)
        qnaPage.doneInputUrlAddress().click()
        qnaPage.simpanQna().click()
        qnaPage.alertFailedUploadImg.should('be.visible')
            .and('contain', '???')
    })

    // Create QnA by fill Pertanyaan & Jawaban with image from file(.gif /.tiff /.ico /.svg /.webp < 750kb)
    it('TC-CreateQna-013', function () {
        const fileUpload = 'file-upload/???.gif'
        qnaPage.addQna().click()
        qnaPage.qnaQuestion().type(qnaData.q1)
        qnaPage.btnTambahQuestion().click()
        qnaPage.btnImgAnswer().click()
        qnaPage.btnClickForUpload().click()
        qnaPage.menuImgType().click()
        qnaPage.ImgTypeFile().click()
        qnaPage.chooseFile().attachFile(fileUpload)
        qnaPage.doneInputUrlAddress().click()
        qnaPage.simpanQna().click()
        qnaPage.alertFailedUploadImg.should('be.visible')
            .and('contain', '???')
    })

    // Create QnA by fill Pertanyaan & Jawaban with image from file(.gif /.tiff /.ico /.svg /.webp > 750kb)
    it('TC-CreateQna-014', function () {
        const fileUpload = 'file-upload/???.gif'
        qnaPage.addQna().click()
        qnaPage.qnaQuestion().type(qnaData.q1)
        qnaPage.btnTambahQuestion().click()
        qnaPage.btnImgAnswer().click()
        qnaPage.btnClickForUpload().click()
        qnaPage.menuImgType().click()
        qnaPage.ImgTypeFile().click()
        qnaPage.chooseFile().attachFile(fileUpload)
        qnaPage.doneInputUrlAddress().click()
        qnaPage.simpanQna().click()
        qnaPage.alertFailedUploadImg.should('be.visible')
            .and('contain', '???')
    })

    // Create QnA by fill Pertanyaan & Jawaban with file types other than images(e.g.txt, doc, pdf, exe etc < 750kb)
    it('TC-CreateQna-015', function () {
        const fileUpload = 'file-upload/???.pdf'
        qnaPage.addQna().click()
        qnaPage.qnaQuestion().type(qnaData.q1)
        qnaPage.btnTambahQuestion().click()
        qnaPage.btnImgAnswer().click()
        qnaPage.btnClickForUpload().click()
        qnaPage.menuImgType().click()
        qnaPage.ImgTypeFile().click()
        qnaPage.chooseFile().attachFile(fileUpload)
        qnaPage.doneInputUrlAddress().click()
        qnaPage.simpanQna().click()
        qnaPage.alertFailedUploadImg.should('be.visible')
            .and('contain', '???')
    })

    // Create QnA by fill Pertanyaan & Jawaban with file types other than images (e.g. txt, doc, pdf, exe etc > 750kb)
    it('TC-CreateQna-016', function () {
        const fileUpload = 'file-upload/???.pdf'
        qnaPage.addQna().click()
        qnaPage.qnaQuestion().type(qnaData.q1)
        qnaPage.btnTambahQuestion().click()
        qnaPage.btnImgAnswer().click()
        qnaPage.btnClickForUpload().click()
        qnaPage.menuImgType().click()
        qnaPage.ImgTypeFile().click()
        qnaPage.chooseFile().attachFile(fileUpload)
        qnaPage.doneInputUrlAddress().click()
        qnaPage.simpanQna().click()
        qnaPage.alertFailedUploadImg.should('be.visible')
            .and('contain', '???')
    })

    // Create QnA by fill Pertanyaan & Jawaban with path
    it('TC-CreateQna-017', function () {
        qnaPage.addQna().click()
        qnaPage.qnaQuestion().type(qnaData.q1)
        qnaPage.btnTambahQuestion().click()
        qnaPage.btnPathResponse().click()
        qnaPage.comboBoxChoosePath().click()
        qnaPage.chooseGreetingPath().eq(0).click()
        qnaPage.simpanQna().click()
        qnaPage.alertSuccess().should('be.visible')
            .and('contain', 'Sukses membuat QNA')
    })

    // Create QnA in Expired Plan account
    // Create QnA in Starter Plan account and already have 5 QnA
    // Create QnA in Plus Plan account and already have 20 QnA
    // Create QnA in Medium Plan account and already have 30 QnA
})