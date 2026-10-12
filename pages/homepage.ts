import {Page, Locator} from 'playwright';

export class HomePage {

    readonly page: Page;
    readonly adminTab: Locator;
    readonly pimTab: Locator;
    readonly leaveTab: Locator;
    readonly timeTab: Locator;
    readonly recruitmentTab: Locator;
    readonly myInfoTab: Locator;
    readonly performanceTab: Locator;
    readonly directoryTab: Locator;
readonly profileTab: Locator;
readonly logoutButton: Locator;
readonly searchInput: Locator;



    constructor(page: Page) {
        this.page = page;
            this.adminTab = page.getByText('Admin', { exact: true });
        this.pimTab = page.getByText('PIM', { exact: true });
        this.leaveTab = page.getByText('Leave', { exact: true });
        this.timeTab = page.getByText('Time', { exact: true });
        this.recruitmentTab = page.getByText('Recruitment', { exact: true });
        this.myInfoTab = page.getByText('My Info', { exact: true });
        this.performanceTab = page.getByText('Performance', { exact: true });
        this.directoryTab = page.getByText('Directory', { exact: true });
        this.profileTab=page.locator(".oxd-userdropdown-name");
        this.logoutButton = page.getByText('Logout', { exact: true });
        this.searchInput = page.getByPlaceholder('Search');
    }
async getWelcomeMessage() {
    return await this.page.getByRole('heading', { name: 'Dashboard' }).textContent();
}

    async goToAdminPage() {
        await this.adminTab.click();
    };

    async goToPIMPage() {
        await this.pimTab.click();
    };

    async goToLeavePage() {
        await this.leaveTab.click();
    };

    async goToTimePage() {
        await this.timeTab.click();
    };

    async goToRecruitmentPage() {
        await this.recruitmentTab.click();
    };

    async goToMyInfoPage() {
        await this.myInfoTab.click();
    };

    async goToPerformancePage() {
        await this.performanceTab.click();
    };

    async goToDirectoryPage() {
        await this.directoryTab.click();
    };

    async logout() {
        
        await this.profileTab.click();
        await this.logoutButton.click();
    }

}
