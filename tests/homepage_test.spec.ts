import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import validUser from '../testdata/validuser.json';
import { Utils } from '../Utils/utils'; 

test('homepage test', async ({ page }) => {
    await page.goto(validUser['valid user'].url);
    await page.locator('input[name="username"]').fill(validUser['valid user'].username);
    await page.locator('input[name="password"]').fill(validUser['valid user'].password);
    await page.locator('button[type="submit"]').click();

    const homePage = new HomePage(page);
    await Utils.scrollToBottom(page); // Scroll to the bottom of the page
    // const welcomeMessage = await homePage.getWelcomeMessage();
    // console.log('Welcome message:', welcomeMessage);
    // await expect(welcomeMessage).toBe('Dashboard');
    
    await homePage.goToAdminPage();
    //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    await homePage.goToPIMPage();
   // await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
    await homePage.goToLeavePage();
    //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
    await homePage.goToTimePage();
    //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/time/attendance');
    await homePage.goToRecruitmentPage();
    //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewJobs');
    await homePage.goToMyInfoPage();
    //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewMyDetails');
    await homePage.goToPerformancePage();
   // await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/performance/employeeReview');
    await homePage.goToDirectoryPage();
   // await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory');
    await homePage.logout();
   // await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewMyDetails');

});