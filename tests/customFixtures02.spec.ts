import {test as base,expect, Page} from '@playwright/test';

// Define the type of your custom fixture
type MyFixtures = {
  testData: { email: string; password: string };
authenticatedUser: Page;
};

const test = base.extend<MyFixtures>({
    testData: async({},use)=>{
        const data = {email: "test@example.com",password: "pass123"}
        await use(data);
    },

    authenticatedUser: [async({page,testData}, use)=>{
        await page.goto("https://binaryville.com/account/");
    const emailInput = page.getByRole("textbox",{name:"Email"});
    await emailInput.fill(testData.email);
    const passwordInput = page.getByRole("textbox",{name:"Password"});
    await passwordInput.fill(testData.password);

    const signInButton = page.getByRole("button",{name:"Sign in"});
    await signInButton.click();
    await use (page);
    },{auto:true}]
})

test("Should log in with test data", async({page, testData})=>{
    

    const url = page.url();
    expect(url).toContain(testData.password);
})