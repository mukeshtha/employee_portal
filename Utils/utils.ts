import {Page} from "@playwright/test";

export class Utils {
 
    static async scrollToBottom(page: Page): Promise<void> {
        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
    }
}   

