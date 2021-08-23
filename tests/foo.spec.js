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
        await dashboard.goto();
    });
test('basic test', async () => {
    await dashboard.gotoDay('Antradienis');
}); 
});