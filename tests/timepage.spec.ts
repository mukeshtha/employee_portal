import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { TimePage } from '../pages/timepages/timepage';
import validUser from '../testdata/validuser.json';


test('timepage test', async ({ page }) => {
    await page.goto(validUser['valid user'].url);
    await page.locator('input[name="username"]').fill(validUser['valid user'].username);
    await page.locator('input[name="password"]').fill(validUser['valid user'].password);
    await page.locator('button[type="submit"]').click();

    const homePage = new HomePage(page);
    await homePage.goToTimePage();
    const timePage = new TimePage(page);

    await timePage.goToTimesheetsPage();
    await timePage.goToAttendancePage();
    await timePage.goToProjectInfoPage();
    await timePage.goToReportsPage();

   
});