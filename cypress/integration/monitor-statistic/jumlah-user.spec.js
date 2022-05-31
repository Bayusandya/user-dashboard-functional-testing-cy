/// <reference types="cypress" />

import { chooseBot } from '../../page-objects/choose-bot'
import { sidebar } from '../../page-objects/sidebar'
import { analitik } from '../../page-objects/statistic-analitic/analitik'
import { jumlahUser } from '../../page-objects/statistic-analitic/jumlah-user'


describe('TC Jumlah User - Analitik', function () {

    const bot = new chooseBot()
    const btnSidebar = new sidebar()
    const analitikPage = new analitik()
    const jumlahUserPage = new jumlahUser()

    beforeEach(function () {

        cy.fixture('userAuthData').as('userAuthData')

        cy.fixture('analitik/querySearch').as('querySearch')

        cy.visit('/')

        cy.get('@userAuthData').then((userAuthData) => {
            const email = userAuthData.registeredEmail2
            const password = userAuthData.registeredPassword2
            cy.login(email, password)
        })
    })

    // Cek informasi jumlah total user
    it('TC-JumlahUser-001', function () {
        bot.btnBot().next().click()
        btnSidebar.btnStatistic().click()
        analitikPage.jumlahUser().click()
        jumlahUserPage.totalUser()
    })

    // Cek informasi jumlah total user yang menggunakan LINE
    it.only('TC-JumlahUser-002', function () {
        bot.btnBot().next().click()
        btnSidebar.btnStatistic().click()
        analitikPage.jumlahUser().click()
        jumlahUserPage.search().next().next().type(this.querySearch.line)
    })

    // Cek informasi jumlah total user yang menggunakan Telegram
    it('TC-JumlahUser-003', function () {
        bot.btnBot().next().click()
        btnSidebar.btnStatistic().click()
        analitikPage.jumlahUser().click()
        jumlahUserPage.search().type(this.querySearch.telegram)
    })

    // Cek informasi jumlah total user yang menggunakan Freshchat
    it('TC-JumlahUser-004', function () {
        bot.btnBot().next().click()
        btnSidebar.btnStatistic().click()
        analitikPage.jumlahUser().click()
        jumlahUserPage.search().type(this.querySearch.freshchat)
    })

    // Cek informasi jumlah total user yang menggunakan Facebook
    it('TC-JumlahUser-005', function () {
        bot.btnBot().next().click()
        btnSidebar.btnStatistic().click()
        analitikPage.jumlahUser().click()
        jumlahUserPage.search().type(this.querySearch.facebook)
    })

    // Cek informasi jumlah total user yang menggunakan Qiscus
    it('TC-JumlahUser-006', function () {
        bot.btnBot().next().click()
        btnSidebar.btnStatistic().click()
        analitikPage.jumlahUser().click()
        jumlahUserPage.search().type(this.querySearch.qiscus)
    })

    // Cek informasi jumlah total user yang menggunakan Qiscus Multichannel
    it('TC-JumlahUser-007', function () {
        bot.btnBot().next().click()
        btnSidebar.btnStatistic().click()
        analitikPage.jumlahUser().click()
        jumlahUserPage.search().type(this.querySearch.qismo)
    })

    // Cek informasi jumlah total user yang menggunakan ChatAja
    it('TC-JumlahUser-002', function () {
        bot.btnBot().next().click()
        btnSidebar.btnStatistic().click()
        analitikPage.jumlahUser().click()
        jumlahUserPage.search().type(this.querySearch.chataja)
    })

})