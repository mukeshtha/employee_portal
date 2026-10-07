import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test('login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.login('Admin', 'admin123');
    //await loginPage.verifyLoginSuccess();
});