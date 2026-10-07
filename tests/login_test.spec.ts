import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import logindata from '../testdata/logindata.json';

test('login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.login(logindata['valid user'].username, logindata['valid user'].password);
    //await loginPage.verifyLoginSuccess();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

});

test('invalid login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.login(logindata['invalid user'].username, logindata['invalid user'].password);
    //await loginPage.verifyLoginSuccess();
    
    await expect(loginPage.errorMessage).toBeVisible();
});