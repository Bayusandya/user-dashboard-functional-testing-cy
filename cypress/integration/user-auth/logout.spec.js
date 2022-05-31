/// <reference types="cypress" />

import {Logout} from '../../page-objects/user-auth/logout'

describe('User Auth - Logout', function(){

    const logoutPage = new Logout()

    beforeEach(function(){

        cy.fixture('userAuthData').as('userAuthData')

        cy.visit('/')

        cy.get('@userAuthData').then((userAuthData)=>{
            const email = userAuthData.registeredEmail
            const password = userAuthData.registeredPassword
            cy.login(email,password)
        })
    })

        it('TC-Logout-001', function(){
            logoutPage.btnHamburger().should('be.visible').click()
            logoutPage.btnKeluar().should('be.visible').click()
            cy.url().should('include','signIn')
        })

        it('TC-Logout-002', function(){
            logoutPage.btnHamburger().should('be.visible').click()
            logoutPage.btnProfil().should('be.visible').click()
            logoutPage.hoverUsername().trigger('mouseover')
            logoutPage.btnLogout().click({force:true})
            cy.url().should('include','signIn')
        })

        it.only('TC-Logout-003', function(){
            logoutPage.btnBot().should('be.visible').click()
            cy.url().should('include','qna')
            logoutPage.hoverSetting().first().should('be.visible').click()
            logoutPage.btnSignout().should('be.visible').click()
            cy.url().should('include','signIn')
        })
})