import{Page, expect} from '@playwright/test';

export abstract class home_Page{
    protected readonly page: Page;
    readonly path: string | null = null;


    constructor(page: Page){
        this.page = page;
        
    }



async goto(pathOverride?: string){
    const url = pathOverride ?? this.path;
    if(!url) throw new Error('No URL provided for this page!');
    await this.page.goto(url);
}

async assertURLContains(fragment:string){
    await expect(this.page).toHaveURL(new RegExp(fragment));
}
}


