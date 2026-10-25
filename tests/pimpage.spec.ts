import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { PimPage } from '../pages/pimpages/pimpage';
import validUser from '../testdata/validuser.json';


test('pimpage test', async ({ page }) => {
    await page.goto(validUser['valid user'].url);
    await page.locator('input[name="username"]').fill(validUser['valid user'].username);
    await page.locator('input[name="password"]').fill(validUser['valid user'].password);
    await page.locator('button[type="submit"]').click();

    const homePage = new HomePage(page);
    await homePage.goToPIMPage();
    const pimPage = new PimPage(page);

    await pimPage.goToConfigurationPage();
    await pimPage.goToEmployeeListPage();
    await pimPage.goToAddEmployeePage();
    await pimPage.goToReportsPage();

   
});