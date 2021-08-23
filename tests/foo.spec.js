const { test, expect } = require('@playwright/test');
const { lunchDBPage } = require('../pages/lunchDBPage');
test.describe('', () => {
    let page;
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    login = new lunchDBPage(page);
    await login.goto();
}); 
test('basic test', async ({}) => {

});
});