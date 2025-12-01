import {Locator, Page, expect} from '@playwright/test';

export class home_Page_Components{
    private readonly page: Page;

    private readonly HomePage :Locator;
    

    constructor(page: Page){
        this.page = page;

        this.HomePage = page.getByRole('heading', {name: 'Welcome to Shady Meadows B&B'});
    }


    async waitForVisible(){
        await this.HomePage.waitFor({state: 'visible'});
    }

    async assertHomePageVisible(){
        await expect(this.HomePage).toBeVisible();
    }
}

