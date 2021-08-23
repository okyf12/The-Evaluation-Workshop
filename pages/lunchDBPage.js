const { expect } = require("@playwright/test");

exports.lunchDBPage = class lunchDBPage {
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://lunch.devbstaging.com/login-password');
        await this.page.fill('[aria-label="Email"]', "simas.markevicius@sourceryacademy.com" );
        await this.page.fill('[aria-label="Password"]', "nera svarbus32" );
        await this.page.click('.v-btn__content' );
    }
   
}