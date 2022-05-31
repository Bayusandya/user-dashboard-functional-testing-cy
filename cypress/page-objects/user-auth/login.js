export class Login{

    headerFormLogin(){
        return cy.get('.headline')
    }
    fieldEmail(){
        return cy.get('#email-login')
    }

    fieldPassword(){
        return cy.get('#password-login')
    }

    btnChecklist(){
        return cy.get('input[type=checkbox]')
    }

    btnMasuk(){
        return cy.get("#login-button")
    }

    alert(){
        return cy.get('.v-messages__message')
    }

    alertContent(){
        return cy.get('.v-alert__content')
    }

    welcomingMessage(){
        return cy.get('.body-1')
    }

    headlineChatbot(){
        return cy.get('div[class="title mb-2 mb-sm-5 white--text"]')
    }

    btnTambahChatbot(){
        return cy.get('div[tabindex="0"]')
    }
}