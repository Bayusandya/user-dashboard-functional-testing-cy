export class jumlahUser {

    totalUser() {
        return cy.get(':nth-child(1) > .v-card > .v-card__text > .headline')
    }

    search() {
        return cy.get("div[class$='v-text-field__slot']")
    }

}