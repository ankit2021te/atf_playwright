import {test,expect} from '../page-objects/fixtures';

test('should login using pom with fixtures and moved login common steps in POM class of login-page @refactor', async ({page, loginPage})=>{
    
    await page.goto("https://binaryville.com/account");
    await loginPage.login('test@example.com','pass123');
    expect(page.url()).toContain('pass123');
})