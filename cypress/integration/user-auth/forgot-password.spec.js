/// <reference types="cypress" />

import {ForgotPassword} from '../../page-objects/user-auth/forgotPassword'

const faker = require('faker')

describe('User Auth - Forgot Password', function(){

    const forgotPasswordPage = new ForgotPassword()
    const unregisteredEmail = faker.internet.email()

    beforeEach(function(){
        cy.fixture('userAuthData').as('userAuthData')

        cy.visit('/')
        cy.url().should('include', '/signIn')

        forgotPasswordPage.btnForgotPassword().should('be.visible').click()
        cy.url().should('include','/forgotPassword')
    })

        it('TC-ForgotPassword-001', function(){
            forgotPasswordPage.headerFormLupaPassword().should('be.visible').and('contain','Lupa password?')
            forgotPasswordPage.fieldEmail().should('be.visible').and('be.empty')
            forgotPasswordPage.btnKirim().should('be.visible').and('be.disabled')
            forgotPasswordPage.btnKembali().should('be.visible')
        })

        it('TC-ForgotPassword-002', function(){
            cy.wait(1000)
            forgotPasswordPage.fieldEmail().click().tab()
            forgotPasswordPage.btnKirim().should('be.visible').and('be.disabled')
            forgotPasswordPage.alertField().should('be.visible').and('contain.text','Mohon masukan email anda')
        })

        it('TC-ForgotPassword-003', function(){
            cy.wait(1000)
            forgotPasswordPage.fieldEmail().type(this.userAuthData.invalidEmail)
            forgotPasswordPage.btnKirim().should('be.visible').and('be.disabled')
            forgotPasswordPage.alertField().should('be.visible').and('contain.text','Mohon masukan email dengan benar')
        })

        it('TC-ForgotPassword-004', function(){
            cy.wait(1000)
            forgotPasswordPage.fieldEmail().type(unregisteredEmail)
            forgotPasswordPage.btnKirim().should('be.visible').and('be.enabled').click()
            forgotPasswordPage.alertContent().should('be.visible').and('contain.text','Email diatas tidak terdaftar')
        })

        it('TC-ForgotPassword-005', function(){
            cy.wait(1000)
            forgotPasswordPage.fieldEmail().type(this.userAuthData.registeredEmail)
            forgotPasswordPage.btnKirim().should('be.visible').and('be.enabled').click()
            cy.url().should('include','/forgotPasswordHelper')
            forgotPasswordPage.headerBantuan().should('be.visible').and('contain','Bantuan sudah dikirim')
            forgotPasswordPage.emailForReset().should('contain', this.userAuthData.registeredEmail)
            forgotPasswordPage.btnResendEmail().should('be.visible')
            forgotPasswordPage.btnDapatkanBantuan().should('be.visible')
            forgotPasswordPage.btnKembali().should('be.visible')
        })

        it('TC-ForgotPassword-006', function(){
            cy.wait(1000)
            forgotPasswordPage.fieldEmail().type(this.userAuthData.registeredEmail)
            forgotPasswordPage.btnKirim().should('be.visible').and('be.enabled').click()
            forgotPasswordPage.btnResendEmail().should('be.visible').click()
            forgotPasswordPage.notifEmailTerkirim().should('be.visible')
        })
})