// const {hello,helloworld}=require('./demo/hello');
// console.log(hello());
// console.log(helloworld());

import{test,expect} from '@playwright/test';
test('my first test',async ({page})=>{
await page.goto('https://www.google.com')
await expect(page).toHaveTitle("Google");
})