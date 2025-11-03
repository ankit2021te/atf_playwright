import {expect,test,chromium} from '@playwright/test';


// withour using fixtures
test('Sign in button is visible', async ()=>{

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://binaryville.com/account');
    const signInButton = page.getByRole('button',{name:'Sign in'});
    await expect(signInButton).toBeVisible();

    await browser.close();

});

// with fixtures
test('Sign in button is visible with playwright fixtures', async ({page})=>{

    // const browser = await chromium.launch();
    // const page = await browser.newPage();

    await page.goto('https://binaryville.com/account');
    const signInButton = page.getByRole('button',{name:'Sign in'});
    await expect(signInButton).toBeVisible();

    // await browser.close();

});