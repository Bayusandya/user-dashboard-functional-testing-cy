/// <reference types="cypress" />

import { manageBot } from '../../page-objects/manage-bot'
import "cypress-file-upload"
<<<<<<< HEAD

=======
import { chooseBot } from '../../page-objects/choose-bot'

describe('Manage Bot - Upload Avatar Bot', function () {
>>>>>>> devBayu

describe('Manage Bot - Upload Avatar Bot', function () {

<<<<<<< HEAD
    const botPage = new manageBot()
    const akunLogin = require('../../fixtures/userAuthData.json')

=======
>>>>>>> devBayu
    beforeEach(function () {

        cy.visit('/')
        cy.login(akunLogin.registeredEmail, akunLogin.registeredPassword)
        botPage.btnCreate().first().click()
    })

    it('TC-UploadAvaBot-001', function () {
        const fileUpload = 'file-upload/png-500kb.png'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('.mb-4 > img', { timeout: 10000 }).should('have.attr', 'src').and('include', 'https://storage.googleapis.com/vutura/assets/images/')
    })

    it('TC-UploadAvaBot-002', function () {
        const fileUpload = 'file-upload/png-1mb.png'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('div[role="alert"]').should('be.visible').and('contain', 'Ukuran file lebih dari 750 KB')
    })

    it('TC-UploadAvaBot-003', function () {
        const fileUpload = 'file-upload/jpg-500kb.jpg'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('.mb-4 > img', { timeout: 10000 }).should('have.attr', 'src').and('include', 'https://storage.googleapis.com/vutura/assets/images/')
    })

    it('TC-UploadAvaBot-004', function () {
        const fileUpload = 'file-upload/jpg-2mb.jpg'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('div[role="alert"]').should('be.visible').and('contain', 'Ukuran file lebih dari 750 KB')
    })

<<<<<<< HEAD
    it('TC-UploadAvaBot-005', function () {
        const fileUpload = 'file-upload/jpeg-300kb.jpeg'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('.mb-4 > img', { timeout: 10000 }).should('have.attr', 'src').and('include', 'https://storage.googleapis.com/vutura/assets/images/')
    })

    it('TC-UploadAvaBot-006', function () {
        const fileUpload = 'file-upload/jpeg-5mb.jpeg'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('div[role="alert"]').should('be.visible').and('contain', 'Ukuran file lebih dari 750 KB')
    })

=======
        cy.fixture('userAuthData').then((userAuthData) => {
            const email = userAuthData.registeredEmail
            const password = userAuthData.registeredPassword
            cy.login(email, password)
        })

        bot.btnBot().first().click()

    })

    it('TC-UploadAvaBot-001', function () {
        const fileUpload = 'file-upload/png-500kb.png'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('.mb-4 > img', { timeout: 10000 }).should('have.attr', 'src').and('include', 'https://storage.googleapis.com/vutura/assets/images/')
    })

    it('TC-UploadAvaBot-002', function () {
        const fileUpload = 'file-upload/png-1mb.png'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('div[role="alert"]').should('be.visible').and('contain', 'Ukuran file lebih dari 750 KB')
    })

    it('TC-UploadAvaBot-003', function () {
        const fileUpload = 'file-upload/jpg-500kb.jpg'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('.mb-4 > img', { timeout: 10000 }).should('have.attr', 'src').and('include', 'https://storage.googleapis.com/vutura/assets/images/')
    })

    it('TC-UploadAvaBot-004', function () {
        const fileUpload = 'file-upload/jpg-2mb.jpg'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('div[role="alert"]').should('be.visible').and('contain', 'Ukuran file lebih dari 750 KB')
    })

    it('TC-UploadAvaBot-005', function () {
        const fileUpload = 'file-upload/jpeg-300kb.jpeg'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('.mb-4 > img', { timeout: 10000 }).should('have.attr', 'src').and('include', 'https://storage.googleapis.com/vutura/assets/images/')
    })

    it('TC-UploadAvaBot-006', function () {
        const fileUpload = 'file-upload/jpeg-5mb.jpeg'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('div[role="alert"]').should('be.visible').and('contain', 'Ukuran file lebih dari 750 KB')
    })

>>>>>>> devBayu
    it('TC-UploadAvaBot-007', function () {
        const fileUpload = 'file-upload/svg-50kb.svg'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('div[role="alert"]').should('be.visible').and('contain', 'Harap pilih tipe file jpg, png, atau jpeg')
    })

    it('TC-UploadAvaBot-008', function () {
        const fileUpload = 'file-upload/svg-1mb.svg'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('div[role="alert"]').should('be.visible').and('contain', 'Harap pilih tipe file jpg, png, atau jpeg')
    })

    it('TC-UploadAvaBot-009', function () {
        const fileUpload = 'file-upload/docx-100kb.docx'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('div[role="alert"]').should('be.visible').and('contain', 'Harap pilih tipe file jpg, png, atau jpeg')
    })

    it('TC-UploadAvaBot-010', function () {
        const fileUpload = 'file-upload/docx-1mb.docx'
        cy.get('#fileInput').attachFile(fileUpload)
        cy.get('div[role="alert"]').should('be.visible').and('contain', 'Harap pilih tipe file jpg, png, atau jpeg')
    })
})