export class analitik {

    jumlahUser() {
        return cy.get(':nth-child(1) > .v-card > .v-card__actions > .v-btn')
    }

    interaksiChatbot() {
        return cy.get(':nth-child(2) > .v-card > .v-card__actions > .v-btn > .v-btn__content')
    }

    pesanTidakTerjawab() {
        return cy.get(':nth-child(3) > .v-card > .v-card__actions > .v-btn > .v-btn__content')
    }

    pathFavorit() {
        return cy.get(':nth-child(4) > .v-card > .v-card__actions > .v-btn > .v-btn__content')
    }

}