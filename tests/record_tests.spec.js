import { test, expect } from '@playwright/test';

test('first recorded test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standarrd_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});

//import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://saucelabs.com/');
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Sign in' }).click();
//   const page1 = await page1Promise;
//   await page1.getByRole('textbox', { name: 'User Name' }).click();
//   await page1.getByRole('textbox', { name: 'User Name' }).fill('hello');
//   await page1.getByRole('textbox', { name: 'Password' }).click();
//   await page1.getByRole('textbox', { name: 'Password' }).fill('12345');
// });