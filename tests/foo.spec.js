const { test, expect } = require('@playwright/test');
const { lunchDBPage } = require('../pages/lunchDBPage');
const { dashboardPage } = require('../pages/dashboardPage');

test.describe('', () => {
    let page;
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        login = new lunchDBPage(page);
        await login.goto();
    }
); 
    test.beforeEach(async () => {
        dashboard = new dashboardPage(page);
    }); 
    test('Test message when maximum dish amount is added', async () => {
        await dashboard.gotoDay('Ketvirtadienis');
        await dashboard.gotoProvider('Green tiekejas');
        await page.click('.dish-card.flex.ma-2.v-card.v-card--hover .v-card__text');
        for (let i = 0; i < 10; i++) {
            await page.click('.dish-card.flex.ma-2.v-card.v-card--hover .v-card__text', { button: 'right'});
            await page.click('text=Pridėti papildomą patiekalą');
        }
        const error = await page.isVisible('div.v-snack__content');
        expect(error).toBe(true);
    });
   
   
});

