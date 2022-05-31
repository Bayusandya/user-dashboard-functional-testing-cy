/// <reference types="cypress" />

import {Login} from '../../page-objects/user-auth/login'

describe('User Auth - Login', function(){

    const loginPage = new Login()

    beforeEach(function(){
        cy.fixture('userAuthData').as('userAuthData')

        cy.visit('/')
    })

        it('TC-Login-001', function(){
            cy.url().should('include', 'signIn')
            loginPage.headerFormLogin().should('be.visible').and('contain','Masuk')
            loginPage.fieldEmail().should('be.visible').and('be.empty')
            loginPage.fieldPassword().should('be.visible').and('be.empty')
            loginPage.btnChecklist().should('not.be.checked')
            loginPage.btnMasuk().should('be.visible').and('be.disabled')
        })

        it('TC-Login-002', function(){
            loginPage.fieldEmail().click()
            loginPage.fieldPassword().type(this.userAuthData.registeredPassword)
            loginPage.btnMasuk().should('be.visible').and('be.disabled')
            loginPage.alert().should('be.visible').and('contain','Mohon masukan email anda')
        })

        it('TC-Login-003', function(){
            loginPage.fieldEmail().type(this.userAuthData.registeredEmail)
            loginPage.fieldPassword().click().tab()
            loginPage.btnMasuk().should('be.visible').and('be.disabled')
            loginPage.alert().should('be.visible').and('contain','Mohon masukan password anda')
        })

        it('TC-Login-004', function(){
            loginPage.fieldEmail().type(this.userAuthData.invalidEmail)
            loginPage.alert().should('be.visible').and('contain','Mohon masukan email dengan benar')
        })

        it('TC-Login-005', function(){
            loginPage.fieldEmail().type(this.userAuthData.unregisteredEmail)
            loginPage.fieldPassword().type(this.userAuthData.registeredPassword)
            loginPage.btnMasuk().should('be.enabled').click()
            loginPage.alertContent().should('be.visible').and('contain','Email yang Anda masukkan belum terdaftar')
        })

        it('TC-Login-006', function(){
            loginPage.fieldEmail().type(this.userAuthData.registeredEmail)
            loginPage.fieldPassword().type(this.userAuthData.wrongPassword)
            loginPage.btnMasuk().should('be.enabled').click()
            loginPage.alertContent().should('be.visible').and('contain','Password yang Anda masukkan salah')
        })

        it('TC-Login-007', function(){
            loginPage.fieldEmail().type(this.userAuthData.registeredEmail)
            loginPage.fieldPassword().type(this.userAuthData.registeredPassword)
            loginPage.btnMasuk().should('be.enabled').click()
            cy.url().should('include','bot')
            loginPage.welcomingMessage().should('be.visible').and('contain','Selamat datang di platform chatbot Vutura, mulai buat chatbot sekarang.')
            loginPage.headlineChatbot().should('be.visible').and('contain','Chatbot Anda')
            loginPage.btnTambahChatbot().should('be.visible')
        })
})