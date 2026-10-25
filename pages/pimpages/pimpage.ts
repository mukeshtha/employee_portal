import {Page, Locator} from 'playwright';

export class PimPage {

    readonly page: Page;
    readonly configuration: Locator;
    readonly employeelist: Locator;  
    readonly addemployee: Locator;
    readonly reports: Locator;
    
    
  
    constructor(page: Page) {
        this.page = page;
        this.configuration = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Configuration ' });
        this.employeelist = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Employee List ' });
        this.addemployee = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Add Employee ' });
        this.reports = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Reports ' });
    
    }
async getWelcomeMessage() {
    return await this.page.getByRole('heading', { name: 'Dashboard' }).textContent();
}

    async goToConfigurationPage() : Promise<void> {
        await this.configuration.click();
    };

    async goToEmployeeListPage() : Promise<void> {
        await this.employeelist.click();
    };

    async goToAddEmployeePage() : Promise<void> {
        await this.addemployee.click();
    };

    async goToReportsPage() : Promise<void> {
        await this.reports.click();
    };
}
