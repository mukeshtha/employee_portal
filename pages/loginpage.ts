import {Page,Locator} from 'playwright';
import { HomePage } from './homepage';

export class LoginPage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly errorMessage1: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.errorMessage = page.getByRole('alert');
        this.errorMessage1 = page.getByRole('link', { name: 'Required' });
        
    }

    async goToLoginPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username: string, password: string) : Promise<HomePage> {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
        return new HomePage(this.page);

        }
    }

    // async verifyLoginSuccess() {
    //     await this.page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    // }

