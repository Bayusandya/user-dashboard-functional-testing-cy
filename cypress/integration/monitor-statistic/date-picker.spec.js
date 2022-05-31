/// <reference types="cypress" />

import { chooseBot } from '../../page-objects/choose-bot'
import { sidebar } from '../../page-objects/sidebar'
import { datePicker } from '../../page-objects/statistic-analitic/date-picker'

describe('TC Date Picker', function () {

    const bot = new chooseBot()
    const btnSidebar = new sidebar()
    const datePickerPage = new datePicker()

    beforeEach(function () {

        cy.fixture('userAuthData').as('userAuthData')

        cy.visit('/')

        cy.get('@userAuthData').then((userAuthData) => {
            const email = userAuthData.registeredEmail2
            const password = userAuthData.registeredPassword2
            cy.login(email, password)
        })
    })

    // Check that user able to select the date from the date picker by choose "Hari ini"
    it('TC-DatePicker-001', function () {
        bot.btnBot().next().click()
        btnSidebar.btnStatistic().click()
        datePickerPage.btnKalender().click()
        datePickerPage.btnHariIni().click()
        cy.wait(2000)
    })

    // Check that user able to select the date from the date picker by choose "Kemarin"
    it('TC-DatePicker-002', function () {
        bot.btnBot().next().click()
        btnSidebar.btnStatistic().click()
        datePickerPage.btnKalender().click()
        datePickerPage.btnKemarin().click()
        cy.wait(2000)
    })

    // Check that user able to select the date from the date picker by choose "Bulan ini"
    it('TC-DatePicker-003', function () {
        bot.btnBot().next().click()
        btnSidebar.btnStatistic().click()
        datePickerPage.btnKalender().click()
        datePickerPage.btnBulanIni().click()
        cy.wait(2000)
    })

    // Check that user able to select the date from the date picker by choose "Tahun ini"
    it('TC-DatePicker-004', function () {
        bot.btnBot().next().click()
        btnSidebar.btnStatistic().click()
        datePickerPage.btnKalender().click()
        datePickerPage.btnTahunIni().click()
        cy.wait(2000)
    })

    // Check that user able to select the date from the date picker by choose "Bulan kemarin"
    it('TC-DatePicker-005', function () {
        bot.btnBot().next().click()
        btnSidebar.btnStatistic().click()
        datePickerPage.btnKalender().click()
        datePickerPage.btnBulanKemarin().click()
        cy.wait(2000)
    })

    // Check that user able to select the date from the date picker by choose "Minggu kemarin"
    it('TC-DatePicker-006', function () {
        bot.btnBot().next().click()
        btnSidebar.btnStatistic().click()
        datePickerPage.btnKalender().click()
        datePickerPage.btnMingguKemarin().click()
        cy.wait(2000)
    })

    // Check that user able to select the date from the date picker by custom choose
    it.only('TC-DatePicker-007', function () {
        bot.btnBot().next().click()
        btnSidebar.btnStatistic().click()
        datePickerPage.btnKalender().click()
        datePickerPage.btnTanggal1().click()
        cy.wait(2000)
    })

})