export class SignUp {

    btnBuatAkun(){
        return cy.get('a[href="/signUp"]')
    }

    headerFormDaftar(){
        return cy.get('div[class="title"]')
    }

    fieldNamaDepan(){
        return cy.get('#signup-nama-depan')
    }

    fieldNamaBelakang(){
        return cy.get('#signup-nama-belakang')
    }

    fieldEmail(){
        return cy.get('#signup-email')
    }

    fieldPassword(){
        return cy.get('#signup-password')
    }

    btnChecklist(){
        return cy.get('#signup-snk')
    }

    btnDaftar(){
        return cy.get('#signup-daftar-btn')
    }

    headerFormProfilBisnis(){
        return cy.get('div[class="title text-left"]')
    }

    fieldNamaBisnis(){
        return cy.get('#signup-nama-bisnis')
    }

    fieldDeskripsiBisnis(){
        return cy.get('#signup-desk-bisnis')
    }

    fieldJenisBisnis(){
        return cy.get('#signup-jenis-bisnis')
    }

    fieldWebsite(){
        return cy.get('#signup-website')
    }

    alertField(){
        return cy.get('.v-messages__message')
    }

    btnSelesai(){
        return cy.get("#signup-selesai")
    }

    btnLewati(){
        return cy.get('div[class="text-center vutura-color body-2"]')
    }

    headerCekEmail(){
        return cy.get('div[class="title font-weight-bold text-left"]')
    }

    emailForVerify(){
        return cy.get('div[class="body-1 mb-6"]')
    }

    notifRegisteredEmail(){
        return cy.contains('Email already registered')
    }

    resendEmail(){
        return cy.get('button[type="button"]')
    }

}