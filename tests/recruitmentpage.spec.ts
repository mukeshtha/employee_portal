import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { RecruitmentPage } from '../pages/recruitmentpages/recruitmentpage';
import validUser from '../testdata/validuser.json';


test('recruitmentpage test', async ({ page }) => {
    await page.goto(validUser['valid user'].url);
    await page.locator('input[name="username"]').fill(validUser['valid user'].username);
    await page.locator('input[name="password"]').fill(validUser['valid user'].password);
    await page.locator('button[type="submit"]').click();

    const homePage = new HomePage(page);
    await homePage.goToTimePage();
    const recruitmentPage = new RecruitmentPage(page);

    await recruitmentPage.goToCandidatesPage();
    await recruitmentPage.goToVacanciesPage();

   
});