export class chooseBot {

    btnBot() {
        return cy.get('#bot-list > .px-4 > .row > :nth-child(1) > .d-flex')
        // return cy.get("div[class='clickable d-flex flex-row pl-3 pl-sm-5 py-3 py-sm-3']")
    }

    bytest() {
        return cy.get(':nth-child(2) > .pr-2 > .clickable')
    }

    // eq1 = bot pertama
    // eq2 = bot kedua
    // eq3 = dst ..
    chooseBot() {
        return cy.get('div[class="clickable d-flex flex-row pl-3 pl-sm-5 py-3 py-sm-3"]');
    }

}