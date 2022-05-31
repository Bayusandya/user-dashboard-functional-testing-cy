export class managePath {

    chooseBot() {
        return cy.get('div[class="clickable d-flex flex-row pl-3 pl-sm-5 py-3 py-sm-3"]');
    }

    chooseIconPath() {
        return cy.get('#a5582');
    }

    btnCreatePath() {
        return cy.get('div[class="pb-0 col col-4"] > button');
    }

    headerModal() {
        return cy.get('span[class="title"]');
    }

    fieldNamaPath() {
        return cy.get('input[name="add-path"]');
    }

    btnBatal() {
        return cy.get('div[class="v-card__actions px-4"] > button').eq(0);
    }

    btnSimpan() {
        return cy.get('div[class="v-card__actions px-4"] > button').eq(1);
    }

    alert() {
        return cy.get('.vue-notification-template')
    }

    listPath() {
        return cy.get('div[role="listbox"] > div');
    }

    fieldSearch() {
        return cy.get('div[class="v-text-field__slot"] > input');
    }

    btnThreeDots() {
        return cy.get('div[role="listitem"] > button');
    }

    swalDelete() {
        return cy.get('.swal2-popup')
    }
}