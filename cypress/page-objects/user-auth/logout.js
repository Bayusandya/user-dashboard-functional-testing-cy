export class Logout{

    btnHamburger(){
        return cy.get('button[class="btn-menu pa-1"]')
    }

    btnKeluar(){
        return cy.contains('Keluar')
    }

    btnProfil(){
        return cy.contains('Profil')
    }

    hoverUsername(){
        return cy.get('.has-dropdown')
    }

    btnLogout(){
        return cy.contains('Logout')
    }

    btnBot(){
        return cy.get(':nth-child(2) > .pr-2 > .clickable')
    }

    hoverSetting(){
        return cy.get('.v-icon--link')
    }

    btnSignout(){
        return cy.contains('Sign out')
    }
}