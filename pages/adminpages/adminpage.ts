import {Page, Locator} from 'playwright';

export class AdminPage {

    readonly page: Page;
    readonly usermanagement: Locator;
    readonly job: Locator;  
    readonly organization: Locator;
    readonly qualifications: Locator;
    readonly nationalities: Locator;
    readonly corporatebranding: Locator;
    readonly configuration: Locator;
    
  
    constructor(page: Page) {
        this.page = page;
        this.usermanagement = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'User Management ' });
        this.job = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Job ' });
        this.organization = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Organization ' });
        this.qualifications = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Qualifications' });
        this.nationalities = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Nationalities ' });
        this.corporatebranding = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Corporate Branding ' });
        this.configuration = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Configuration ' });
    }
async getWelcomeMessage() {
    return await this.page.getByRole('heading', { name: 'Dashboard' }).textContent();
}

    async goToUserManagementPage() : Promise<void> {
        await this.usermanagement.click();
    };

    async goToJobPage() : Promise<void> {
        await this.job.click();
    };

    async goToOrganizationPage() {
        await this.organization.click();
    };

    async goToQualificationsPage() : Promise<void> {
        await this.qualifications.click();
    };

    async goToNationalitiesPage() : Promise<void> {
        await this.nationalities.click();
    };

    async goToCorporateBrandingPage() : Promise<void> {
        await this.corporatebranding.click();
    };

    async goToConfigurationPage() : Promise<void> {
        await this.configuration.click();
    };
}
