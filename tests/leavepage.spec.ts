import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { LeavePage } from '../pages/leavepages/leavepage';
import validUser from '../testdata/validuser.json';


test('leavepage test', async ({ page }) => {
    await page.goto(validUser['valid user'].url);
    await page.locator('input[name="username"]').fill(validUser['valid user'].username);
    await page.locator('input[name="password"]').fill(validUser['valid user'].password);
    await page.locator('button[type="submit"]').click();

    const homePage = new HomePage(page);
    await homePage.goToLeavePage();
    const leavePage = new LeavePage(page);

    await leavePage.goToApplyPage();
    await leavePage.goToMyLeavePage();
    await leavePage.goToEntitlementsPage();
    await leavePage.goToReportsPage();

   
});