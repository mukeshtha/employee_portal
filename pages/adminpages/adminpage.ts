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
        this.usermanagement = page.getByText('User Management', { exact: true });
        this.job = page.getByText('Job', { exact: true });
        this.organization = page.getByText('Organization', { exact: true });
        this.qualifications = page.getByText('Qualifications', { exact: true });
        this.nationalities = page.getByText('Nationalities', { exact: true });
        this.corporatebranding = page.getByText('Corporate Branding', { exact: true });
        this.configuration = page.getByText('Configuration', { exact: true });
    }
async getWelcomeMessage() {
    return await this.page.getByRole('heading', { name: 'Dashboard' }).textContent();
}

    async goToUserManagementPage() {
        await this.usermanagement.click();
    };

    async goToJobPage() {
        await this.job.click();
    };

    async goToOrganizationPage() {
        await this.organization.click();
    };

    async goToQualificationsPage() {
        await this.qualifications.click();
    };

    async goToNationalitiesPage() {
        await this.nationalities.click();
    };

    async goToCorporateBrandingPage() {
        await this.corporatebranding.click();
    };

    async goToConfigurationPage() {
        await this.configuration.click();
    };
}
