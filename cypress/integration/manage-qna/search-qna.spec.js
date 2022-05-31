/// <reference types="cypress" />

import "cypress-file-upload"
import { chooseBot } from '../../page-objects/choose-bot'
import { sidebar } from '../../page-objects/sidebar'
import { qna } from '../../page-objects/manage-qna/qna'

describe('Manage Qna - Search Qna', function () {

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

    // Search QnA by Pertanyaan
    it('TC-SearchQnA-001', function () {
        qnaPage.searchQna().type(qnaData.searchQ)
        qnaPage.tableQ().should('be.visible')
            .and('contain', 'debug')
    })

    // Search QnA by Respon Chatbot
    it('TC-SearchQnA-002', function () {
        qnaPage.searchQna().type(qnaData.searchA)
        qnaPage.tableQ().eq(1).should('be.visible')
            .and('contain', 'euid')
    })

    // Search QnA when there are no results
    it('TC-SearchQnA-003', function () {
        qnaPage.searchQna().type(qnaData.searchQNoData)
        qnaPage.noMatchRecords()
            .should('be.visible').and('contain', 'No matching records found')

    })
})