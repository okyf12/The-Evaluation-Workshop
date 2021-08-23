const { expect } = require("@playwright/test");

exports.lunchDBPage = class lunchDBPage {
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://lunch.devbstaging.com');
    }
   
}