const { test, expect } = require('@playwright/test');
const { lunchDBPage } = require('../pages/lunchDBPage');
test.describe('', () => {
    let page;
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        login = new lunchDBPage(page);
        // await login.goto();
    });
    test.beforeEach(async () => {
        await login.goto();
    })
    test('basic test', async () => {
        // await page.isVisible('.v-list__tile v-list__tile--link theme--light')
        await page.goto('https://lunch.devbstaging.com');
        const kin = await page.$('div.dish-card');
        console.log(kin);

        expect(true).toBe(true);
    });
    test('test', async()=>{

        // Click text=checkAntradienis >> :nth-match(div, 3)
        await page.click('text=checkAntradienis >> :nth-match(div, 3)');
        expect(page.url()).toBe('https://lunch.devbstaging.com/dishes/tuesday/Amber%20Grill');

        // Click text=Cepelinai jėga
        await page.click('text=Cepelinai jėga');
        expect(page.url()).toBe('https://lunch.devbstaging.com/dishes/tuesday/Cepelinai%20j%C4%97ga');

        // Click text=account_circle6euro_symbol1.00timercheck
        await page.click('text=account_circle6euro_symbol1.00timercheck');

        // Click text=account_circle6euro_symbol1.00timercheck
        await page.click('text=account_circle6euro_symbol1.00timercheck', {
            button: 'right'
        });

        // Click text=Pridėti papildomą patiekalą
        await page.click('text=Pridėti papildomą patiekalą');

        // Click text=account_circle6euro_symbol1.00timercheck
        await page.click('text=account_circle6euro_symbol1.00timercheck', {
            button: 'right'
        });

        // Click text=Pridėti papildomą patiekalą
        await page.click('text=Pridėti papildomą patiekalą');

        // Click text=account_circle0euro_symbol0.10
        await page.click('text=account_circle0euro_symbol0.10', {
            button: 'right'
        });

        // Click text=Pridėti papildomą patiekalą
        await page.click('text=Pridėti papildomą patiekalą');

        // Click button:has-text("5.10 €send")
        await page.click('button:has-text("5.10 €send")');
    });
});

