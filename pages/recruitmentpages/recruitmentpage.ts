import {Page, Locator} from 'playwright';

export class RecruitmentPage {

    readonly page: Page;
    readonly candidates: Locator;
    readonly vacancies: Locator;  
    
    
    
    
  
    constructor(page: Page) {
        this.page = page;
        this.candidates = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Candidates' });
        this.vacancies = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Vacancies' });
       

    }
async getWelcomeMessage() {
    return await this.page.getByRole('heading', { name: 'Dashboard' }).textContent();
}

    async goToCandidatesPage() : Promise<void> {
        await this.candidates.click();
    };

    async goToVacanciesPage() : Promise<void> {
        await this.vacancies.click();
    };
}
