export class ForgotPassword{

    btnForgotPassword(){
        return cy.get('a[href="/forgotPassword"]')
    }

    headerFormLupaPassword(){
        return cy.get('p[class="headline font-weight-medium mb-5"]')
    }

    fieldEmail(){
        return cy.get('div[class="v-text-field__slot"] > input')
    }

    alertField(){
        return cy.get('.v-messages__message')
    }

    alertContent(){
        return cy.get('.v-alert__content')
    }

    btnKirim(){
        return cy.get('button[type="submit"]')
    }

    btnKembali(){
        return cy.get('a[href="/signin"]')
    }

    headerBantuan(){
        return cy.get('p[class="headline font-weight-medium mb-5"]')
    }

    emailForReset(){
        return cy.get('.col > :nth-child(2) > span')
    }

    btnResendEmail(){
        return cy.get(':nth-child(3) > .text-color')
    }

    btnDapatkanBantuan(){
        return cy.get('a[href="https://vutura.io/docs"]')
    }

    notifEmailTerkirim(){
        return cy.contains('Email atur ulang password berhasil dikirim ulang.')
    }
}