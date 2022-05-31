export class manageBot {

    btnCreate() {
        return cy.get('div[class="col-sm-12 col-lg-4 col"] > div')
    }

    headerForm() {
        return cy.get('span[class="title mb-0"]')
    }
    fieldNamaBot() {
        return cy.get('input[type="text"]')
    }

    fieldDeskripsiBot() {
        return cy.get('textarea')
    }

    btnBatal() {
        return cy.get('button[class="text-none v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default"]')
    }

    btnBuatBot() {
        return cy.get('button[class="text-none white--text font-weight-regular v-btn v-btn--contained theme--light v-size--default"]')
    }

    messages() {
        return cy.get('.v-messages__message')
    }

    alert() {
        return cy.get('.v-alert__content')
    }

    listBot() {
        return cy.get('div[class="clickable d-flex flex-row pl-3 pl-sm-5 py-3 py-sm-3"]')
    }

    displayAva() {
        return cy.get('div[class="v-avatar mb-4 mb-sm-0"] > img')
    }

    checkboxTemplate() {
        return cy.get('input[type="checkbox"]')
    }

    fieldBotTemplate() {
        return cy.get('.v-select__selections')
    }

    listTemplate() {
        return cy.get('div[role="listbox"]')
    }

    btnThreeDots() {
        return cy.get('button[class="v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--default"]')
    }

    btnListThreeDots() {
        return cy.get('.v-list')
    }
}