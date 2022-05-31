/// <reference types="cypress" />

import "cypress-file-upload"
import { chooseBot } from '../../page-objects/choose-bot'
import { sidebar } from '../../page-objects/sidebar'
import { qna } from '../../page-objects/manage-qna/qna'

describe('Manage Qna - Pagination Qna', function () {

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

    // Pagination when 5 items per page
    it('TC-PaginationQnA-001', function () {
        qnaPage.menuJmlBaris().click()
        qnaPage.optionBaris().eq(0).click()
    })

    // Pagination when 10 items per page
    it('TC-PaginationQnA-002', function () {
        qnaPage.menuJmlBaris().click()
        qnaPage.optionBaris().eq(1).click()
    })

    // Pagination when 15 items per page
    it('TC-PaginationQnA-003', function () {
        qnaPage.menuJmlBaris().click()
        qnaPage.optionBaris().eq(2).click()
    })

    // Pagination when All item in one page
    it('TC-PaginationQnA-004', function () {
        qnaPage.menuJmlBaris().click()
        qnaPage.optionBaris().eq(3).click()
    })
})