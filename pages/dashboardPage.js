const { expect } = require("@playwright/test");

exports.dashboardPage = class lunchDBPage {
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://lunch.devbstaging.com/');
    }

    async gotoDay(day) {
        await this.page.click('text=' + day);
    } 

    async gotoProvider(product)
    {
        await this.page.click('text=' + product)
    }
}