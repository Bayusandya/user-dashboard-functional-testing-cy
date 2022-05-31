// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
import {SignUp} from '../page-objects/user-auth/signup'
import {Login} from '../page-objects/user-auth/login'

const signupPage = new SignUp()
const loginPage = new Login()
const userAuthData = require('../fixtures/userAuthData.json')

Cypress.Commands.add("formDaftar", () => {
    signupPage.fieldNamaDepan().type(userAuthData.namaDepan)
    signupPage.fieldNamaBelakang().type(userAuthData.namaBelakang)
    signupPage.fieldEmail().type(userAuthData.validEmail)
    signupPage.fieldPassword().type(userAuthData.validPassword)
    signupPage.btnChecklist().check({force : true})
    signupPage.btnDaftar().click()
})

Cypress.Commands.add("formProfilBisnis", () => {
    signupPage.fieldNamaBisnis().type(userAuthData.namaBisnis)
    signupPage.fieldDeskripsiBisnis().type(userAuthData.deskripsiBisnis)
    signupPage.fieldJenisBisnis().type(userAuthData.jenisBisnis)
    signupPage.fieldWebsite().type(userAuthData.website)
})

Cypress.Commands.add("signupUnregisteredEmail", (args) => {
    signupPage.fieldNamaDepan().type(userAuthData.namaDepan)
    signupPage.fieldNamaBelakang().type(userAuthData.namaBelakang)
    signupPage.fieldEmail().type(args)
    signupPage.fieldPassword().type(userAuthData.validPassword)
    signupPage.btnChecklist().check({force : true})
    signupPage.btnDaftar().click()
})

Cypress.Commands.add("signupRegisteredEmail", () => {
    signupPage.fieldNamaDepan().type(userAuthData.namaDepan)
    signupPage.fieldNamaBelakang().type(userAuthData.namaBelakang)
    signupPage.fieldEmail().type(userAuthData.registeredEmail)
    signupPage.fieldPassword().type(userAuthData.validPassword)
    signupPage.btnChecklist().check({force : true})
    signupPage.btnDaftar().click()
})

Cypress.Commands.add("login", (email,password) => {
    loginPage.fieldEmail().type(email)
    loginPage.fieldPassword().type(password)
    loginPage.btnMasuk().click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
