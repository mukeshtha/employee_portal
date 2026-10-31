import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { AdminPage } from '../pages/adminpages/adminpage';
import validUser from '../testdata/validuser.json';


test('adminpage test', async ({ page }) => {
    await page.goto(validUser['valid user'].url);
    await page.locator('input[name="username"]').fill(validUser['valid user'].username);
    await page.locator('input[name="password"]').fill(validUser['valid user'].password);
    await page.locator('button[type="submit"]').click();

    const homePage = new HomePage(page);
    await homePage.goToAdminPage();
    const adminPage = new AdminPage(page);

    adminPage.addUser();
    // adminPage.goToUserManagementPage();
    // adminPage.goToJobPage();
    // adminPage.goToOrganizationPage();
    // adminPage.goToQualificationsPage();
    // adminPage.goToNationalitiesPage();
    // adminPage.goToCorporateBrandingPage();
    // adminPage.goToConfigurationPage();

   
});