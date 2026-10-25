import {Page, Locator} from 'playwright';

export class TimePage {

    readonly page: Page;
    readonly timesheets: Locator;
    readonly attendance: Locator;  
    readonly reports: Locator;
    readonly projectinfo: Locator;
    
    
    
  
    constructor(page: Page) {
        this.page = page;
        this.timesheets = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Timesheets ' });
        this.attendance = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Attendance ' });
        this.reports = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Reports ' });
        this.projectinfo = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Project Info ' });
       

    }
async getWelcomeMessage() {
    return await this.page.getByRole('heading', { name: 'Dashboard' }).textContent();
}

    async goToTimesheetsPage() : Promise<void> {
        await this.timesheets.click();
    };

    async goToAttendancePage() : Promise<void> {
        await this.attendance.click();
    };

    async goToProjectInfoPage() : Promise<void> {
        await this.projectinfo.click();
    };

    async goToReportsPage() : Promise<void> {
        await this.reports.click();
    }
}
