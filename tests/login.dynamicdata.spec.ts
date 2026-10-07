import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import loginData from '../testdata/logindatanew.json';

loginData.forEach((data) => {
  if (!data.run) return;

  test(`login test for ${data.username}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.login(data.username, data.password);

    if (data.expected === "Login successful") {
      await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    } else if (data.expected === "Invalid credentials") {
      await expect(loginPage.errorMessage).toBeVisible();
    } else if (data.expected === "Invalid credentials") {
      await expect(loginPage.errorMessage1!).toBeVisible();
    }
    
  });
});

