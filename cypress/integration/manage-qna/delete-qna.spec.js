/// <reference types="cypress" />

import "cypress-file-upload"
import { chooseBot } from '../../page-objects/choose-bot'
import { sidebar } from '../../page-objects/sidebar'
import { qna } from '../../page-objects/manage-qna/qna'

describe('Manage Qna - Delete Qna', function () {

    const bot = new chooseBot()
    const qnaPage = new qna()
    const btnSidebar = new sidebar()

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

    // Delete 1 or more QnA from list QnA
    it.only('TC-DeleteQnA-001', function () {
        qnaPage.checkBoxQna().eq(5).click()
        qnaPage.deleteQna().click()
        qnaPage.confirmDelQna().click()
    })

    // Delete all QnA from list QnA
    it.only('TC-DeleteQnA-002', function () {
        qnaPage.checkBoxQna().eq(0).click()
        qnaPage.deleteQna().click()
        qnaPage.confirmDelQna().click()
    })

})