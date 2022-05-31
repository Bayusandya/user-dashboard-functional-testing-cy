export class qna {

    addQna() {
        return cy.get('.v-card__text.py-0 > :nth-child(1) > :nth-child(1) > .v-btn > .v-btn__content')
    }

    simpanQna() {
        return cy.get('.font-white > .v-btn__content')
    }

    alertSuccess() {
        // return cy.get('.notification-content')
        return cy.get('.vue-notification-template')
    }

    alertFailed() {
        return cy.get('.swal2-popup.swal2-modal.swal2-show')
    }

    alertFailedRespon() {
        return cy.get("h2[id='swal2-title'] span")
    }

    qnaQuestion() {
        return cy.get('#qna-question')
    }

    btnTambahAnswer() {
        return cy.get('.v-input__append-outer > .v-btn > .v-btn__content')
    }

    btnTextResponse() {
        return cy.get('.row > :nth-child(2) > .v-btn > .v-btn__content')
    }

    fieldTextResponse() {
        return cy.get('#qna-text-answer')
    }

    btnTambahQuestion() {
        return cy.get('.v-input__append-outer > .v-btn > .v-btn__content')
    }

    btnImgAnswer() {
        return cy.get('.row > :nth-child(3) > .v-btn > .v-btn__content')
    }

    btnClickForUpload() {
        return cy.get('#previewImage > .v-responsive__content')
    }

    fieldLinkAddress() {
        return cy.get("input[placeholder='Enter URL']")
    }

    doneInputUrlAddress() {
        return cy.get('.mdi-check')
    }

    backgroundImgHttp() {
        return cy.get("'#previewImage > div').eq(1).should('have.attr', 'style').and('include', 'url(https://tinyjpg.com/images/social/website.jpg'")

    }

    backgroundImgHttps() {
        return cy.get("'#previewImage > div').eq(1).should('have.attr', 'style').and('include', 'url(https://tinyjpg.com/images/social/website.jpg'")
    }

    menuImgType() {
        return cy.get("div[class='v-input v-input--hide-details v-input--is-label-active v-input--is-dirty theme--light v-text-field v-text-field--is-booted v-text-field--enclosed v-text-field--outlined v-select'] i[class='v-icon notranslate mdi mdi-menu-down theme--light']")
    }

    ImgTypeFile() {
        return cy.get("div[aria-selected='false']")
    }

    chooseFile() {
        return cy.get("input[placeholder='Choose File']")
    }

    alertFailedUploadImg() {
        return cy.get('.vue-notification-template')
    }

    btnPathResponse() {
        return cy.get('[data-step="5"] > .v-btn > .v-btn__content')
    }

    comboBoxChoosePath() {
        return cy.get("div[role='combobox']")
    }

    chooseGreetingPath() {
        return cy.get("div[role='listbox']")
    }

    searchQna() {
        return cy.get("div[class='v-text-field__slot'] > input")
    }

    tableQ() {
        return cy.get("td[class='text-left']")
    }

    tableA() {
        return cy.get("td[class='text-start']")
    }

    noMatchRecords() {
        return cy.get("td[colspan='3']")
    }

    menuJmlBaris() {
        return cy.get("div[class='v-input__append-inner']")
    }

    optionBaris() {
        return cy.get("div[role='option']")
    }

    deleteTextQna() {
        return cy.get("button[class='v-icon notranslate delete-qna v-icon--link mdi mdi-trash-can-outline theme--light']")
    }

    checkBoxQna() {
        return cy.get("div[class='v-data-table__checkbox v-simple-checkbox']")
    }

    deleteQna() {
        return cy.get('.v-btn--depressed')
    }

    confirmDelQna() {
        return cy.get('.swal2-confirm')
    }

}