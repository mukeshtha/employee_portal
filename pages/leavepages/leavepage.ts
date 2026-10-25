import {Page, Locator} from 'playwright';

export class LeavePage {

    readonly page: Page;
    readonly apply: Locator;
    readonly myleave: Locator;  
    readonly entitlements: Locator;
    readonly reports: Locator;
    readonly configure: Locator;
    readonly leavelist: Locator;
    readonly leaveassign: Locator;
    
    
  
    constructor(page: Page) {
        this.page = page;
        this.apply = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Apply ' });
        this.myleave = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'My Leave ' });
        this.entitlements = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Entitlements ' });
        this.reports = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Reports ' });
        this.configure = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Configure ' });
        this.leavelist = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Leave List ' });
        this.leaveassign = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Leave Assign ' });

    }
async getWelcomeMessage() {
    return await this.page.getByRole('heading', { name: 'Dashboard' }).textContent();
}

    async goToApplyPage() : Promise<void> {
        await this.apply.click();
    };

    async goToMyLeavePage() : Promise<void> {
        await this.myleave.click();
    };

    async goToEntitlementsPage() : Promise<void> {
        await this.entitlements.click();
    };

    async goToReportsPage() : Promise<void> {
        await this.reports.click();
    };

    async goToConfigurePage() : Promise<void> {
        await this.configure.click();
    };

    async goToLeaveListPage() : Promise<void> {
        await this.leavelist.click();
    };

    async goToLeaveAssignPage() : Promise<void> {
        await this.leaveassign.click();
    };
}
