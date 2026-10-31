import {Page, Locator} from 'playwright';

export class AdminPage {

    readonly page: Page;
    readonly adduser: Locator;
    
  
    constructor(page: Page) {
        this.page = page;
        this.adduser = page.getByRole('button', { name: 'Add' });
    }

async addUser() : Promise<void> {
    await this.adduser.click();
}
}
