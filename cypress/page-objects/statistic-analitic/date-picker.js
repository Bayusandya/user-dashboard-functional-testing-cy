export class datePicker {

    btnKalender() {
        return cy.get(':nth-child(4) > .v-input__icon > .v-icon')
    }

    btnHariIni() {
        return cy.get('[data-range-key="Hari ini"]')
    }

    btnKemarin() {
        return cy.get('[data-range-key="Kemarin"]')
    }

    btnBulanIni() {
        return cy.get('[data-range-key="Bulan ini"]')
    }

    btnTahunIni() {
        return cy.get('[data-range-key="Tahun ini"]')
    }

    btnBulanKemarin() {
        return cy.get('[data-range-key="Bulan kemarin"]')
    }

    btnMingguKemarin() {
        return cy.get('[data-range-key="Minggu kemarin"]')
    }

    btnTanggal1() {
        return cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(2) > :nth-child(3)')
    }

    btnTanggal3() {
        return cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(2) > :nth-child(5)')
    }
}