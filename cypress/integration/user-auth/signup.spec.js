/// <reference types="cypress" />

import {SignUp} from '../../page-objects/user-auth/signup'

const faker = require('faker')

describe('User Auth - SignUp', function(){

    const signupPage = new SignUp()
    const unregisteredEmail1 = faker.internet.email()
    const unregisteredEmail2 = faker.internet.email()

    beforeEach(function(){
        cy.fixture('userAuthData').as('userAuthData')

        cy.visit('/')
        cy.url().should('include', '/signIn')

        signupPage.btnBuatAkun().should('be.visible').click()
        cy.url().should('include', '/signUp')        
    })

        it('TC-SIGNUP-001', function(){
            signupPage.headerFormDaftar().should('be.visible').and('contain', 'Daftar')
            signupPage.fieldNamaDepan().should('be.visible').and('be.empty')
            signupPage.fieldNamaBelakang().should('be.visible').and('be.empty')
            signupPage.fieldEmail().should('be.visible').and('be.empty')
            signupPage.fieldPassword().should('be.visible').and('be.empty')
            signupPage.btnChecklist().should('not.be.checked')
            signupPage.btnDaftar().should('be.visible').and('be.disabled')
        })

        it('TC-SIGNUP-002', function(){
            signupPage.fieldNamaDepan().click()
            signupPage.fieldNamaBelakang().type(this.userAuthData.namaBelakang)
            signupPage.fieldEmail().type(this.userAuthData.validEmail)
            signupPage.fieldPassword().type(this.userAuthData.validPassword)
            signupPage.btnChecklist().check({force:true})
            signupPage.btnDaftar().should('be.visible').and('be.disabled')
            signupPage.alertField().should('be.visible').and('contain.text','Mohon masukan nama depan anda')
        })

        it('TC-SIGNUP-003', function(){
            signupPage.fieldNamaDepan().type(this.userAuthData.namaDepan)
            signupPage.fieldNamaBelakang().click()
            signupPage.fieldEmail().type(this.userAuthData.validEmail)
            signupPage.fieldPassword().type(this.userAuthData.validPassword)
            signupPage.btnChecklist().check({force:true})
            signupPage.btnDaftar().should('be.visible').and('be.disabled')
            signupPage.alertField().should('be.visible').and('contain.text','Mohon masukan nama belakang anda')
        })

        it('TC-SIGNUP-004', function(){
            signupPage.fieldNamaDepan().type(this.userAuthData.namaDepan)
            signupPage.fieldNamaBelakang().type(this.userAuthData.namaBelakang)
            signupPage.fieldEmail().click()
            signupPage.fieldPassword().type(this.userAuthData.validPassword)
            signupPage.btnChecklist().check({force:true})
            signupPage.btnDaftar().should('be.visible').and('be.disabled')
            signupPage.alertField().should('be.visible').and('contain.text','Mohon masukan email anda')
        })

        it('TC-SIGNUP-005', function(){
            signupPage.fieldEmail().type(this.userAuthData.invalidEmail)
            signupPage.alertField().should('be.visible').and('contain.text','Mohon masukan email dengan benar')
        })

        it('TC-SIGNUP-006', function(){
            signupPage.fieldNamaDepan().type(this.userAuthData.namaDepan)
            signupPage.fieldNamaBelakang().type(this.userAuthData.namaBelakang)
            signupPage.fieldEmail().type(this.userAuthData.validEmail)
            signupPage.fieldPassword().click()
            signupPage.btnChecklist().check({force:true})
            signupPage.btnDaftar().should('be.visible').and('be.disabled')
            signupPage.alertField().should('be.visible').and('contain.text','Mohon masukan password anda.')
        })

        it('TC-SIGNUP-007', function(){
            signupPage.fieldPassword().type(this.userAuthData.invalidPassword)
            signupPage.alertField().should('be.visible').and('contain.text','Minimal 6 karakter')
        })

        it('TC-SIGNUP-008', function(){
            signupPage.fieldNamaDepan().type(this.userAuthData.namaDepan)
            signupPage.fieldNamaBelakang().type(this.userAuthData.namaBelakang)
            signupPage.fieldEmail().type(this.userAuthData.validEmail)
            signupPage.fieldPassword().type(this.userAuthData.validPassword)
            signupPage.btnDaftar().should('be.visible').and('be.disabled')
        })

        it('TC-SIGNUP-009', function(){
            signupPage.fieldNamaDepan().type(this.userAuthData.namaDepan)
            signupPage.fieldNamaBelakang().type(this.userAuthData.namaBelakang)
            signupPage.fieldEmail().type(this.userAuthData.validEmail)
            signupPage.fieldPassword().type(this.userAuthData.validPassword)
            signupPage.btnChecklist().check({force:true})
            signupPage.btnDaftar().should('be.visible').and('be.enabled').click()
            cy.url().should('include', '/signUpComplete')
            signupPage.headerFormProfilBisnis().should('be.visible').and('contain', 'Profil Bisnis')
        })

        it('TC-SIGNUP-010', function(){
            cy.formDaftar()
            cy.url().should('include', '/signUpComplete')
            signupPage.headerFormProfilBisnis().should('contain', 'Profil Bisnis')
            signupPage.fieldNamaBisnis().should('be.visible').and('be.empty')
            signupPage.fieldDeskripsiBisnis().should('be.visible').and('be.empty')
            signupPage.fieldJenisBisnis().should('be.visible').and('be.empty')
            signupPage.fieldWebsite().should('be.visible').and('be.empty')
            signupPage.btnSelesai().should('be.visible').and('be.disabled')
            signupPage.btnLewati().should('be.visible')
        })

        it('TC-SIGNUP-011', function(){
            cy.formDaftar()
            signupPage.fieldNamaBisnis().click()
            signupPage.fieldDeskripsiBisnis().type(this.userAuthData.deskripsiBisnis)
            signupPage.fieldJenisBisnis().type(this.userAuthData.jenisBisnis)
            signupPage.fieldWebsite().type(this.userAuthData.website)
            signupPage.btnSelesai().should('be.visible').and('be.disabled')
            signupPage.alertField().should('be.visible').and('contain.text','Mohon masukan nama bisnis anda')
        })

        it('TC-SIGNUP-012', function(){
            cy.formDaftar()
            signupPage.fieldNamaBisnis().type(this.userAuthData.namaBisnis)
            signupPage.fieldDeskripsiBisnis().click()
            signupPage.fieldJenisBisnis().type(this.userAuthData.jenisBisnis)
            signupPage.fieldWebsite().type(this.userAuthData.website)
            signupPage.btnSelesai().should('be.visible').and('be.disabled')
            signupPage.alertField().should('be.visible').and('contain.text','Mohon masukan deskripsi bisnis anda')
        })

        it('TC-SIGNUP-013', function(){
            cy.formDaftar()
            signupPage.fieldNamaBisnis().type(this.userAuthData.namaBisnis)
            signupPage.fieldDeskripsiBisnis().type(this.userAuthData.deskripsiBisnis)
            signupPage.fieldJenisBisnis().click()
            signupPage.fieldWebsite().type(this.userAuthData.website)
            signupPage.btnSelesai().should('be.visible').and('be.disabled')
            signupPage.alertField().should('be.visible').and('contain.text','Mohon masukan jenis bisnis anda')
        })

        it('TC-SIGNUP-014', function(){
            cy.formDaftar()
            signupPage.fieldNamaBisnis().type(this.userAuthData.namaBisnis)
            signupPage.fieldDeskripsiBisnis().type(this.userAuthData.deskripsiBisnis)
            signupPage.fieldJenisBisnis().type(this.userAuthData.jenisBisnis)
            signupPage.fieldWebsite().click().tab() 
            signupPage.btnSelesai().should('be.visible').and('be.disabled')
            signupPage.alertField().should('be.visible').and('contain.text','Mohon masukan alamat website anda')
        })

        it('TC-SIGNUP-015', function(){
            cy.signupUnregisteredEmail(unregisteredEmail1)
            signupPage.btnLewati().click()
            cy.url().should('include', '/doSignUp')
            signupPage.headerCekEmail().should('contain', 'Cek email kamu')
            signupPage.emailForVerify().should('contain.text','Kami sudah mengirimkan email verifikasi ke ('+unregisteredEmail1+')')
            signupPage.resendEmail().should('be.visible')
        })

        it('TC-SIGNUP-016', function(){
            cy.signupRegisteredEmail()
            signupPage.btnLewati().click()
            signupPage.notifRegisteredEmail().should('be.visible')
        })

        it('TC-SIGNUP-017', function(){
            cy.signupUnregisteredEmail(unregisteredEmail2)
            cy.formProfilBisnis()
            signupPage.btnSelesai().click()
            cy.url().should('include', '/doSignUp')
            signupPage.headerCekEmail().should('be.visible').and('contain', 'Cek email kamu')
            signupPage.emailForVerify().should('contain.text','Kami sudah mengirimkan email verifikasi ke ('+unregisteredEmail2+')')
            signupPage.resendEmail().should('be.visible')
        })

        it('TC-SIGNUP-018', function(){
            cy.signupRegisteredEmail()
            cy.formProfilBisnis()
            signupPage.btnSelesai().click()
            signupPage.notifRegisteredEmail().should('be.visible')
        })
})