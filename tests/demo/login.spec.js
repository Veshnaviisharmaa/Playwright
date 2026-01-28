import {test,expect} from '@playwright/test'
test('login test',async({page})=>{
    await page.goto('https://demo.applitools.com/');
    await page.pause();
    await page.locator('//input[@id="username"]').fill("admin");
    await page.locator('id=password').fill("12345");
    await page.locator('text=Sign in' ).click();
    await expect(page).toHaveURL('https://demo.applitools.com/app.html');
});

