import {Page, Locator, expect} from '@playwright/test';
import { home_Page } from './home_page';

export class AdminPage extends home_Page{
    readonly path = 'https://automationintesting.online/admin/rooms'


    private readonly adminPage: Locator;
    private readonly adminTitle: Locator;
    
    //nav-bar 
    private readonly roomsTab: Locator;
    private readonly reportTab: Locator;
    private readonly brandingTab: Locator;
    private readonly messagesTab: Locator;
    private readonly homePageTab: Locator;
    private readonly logoutButton: Locator;

    constructor(page:Page){
        super(page);

        this.adminPage = page.locator('#root-container').filter({hasText: 'Restful Booker Platform Demo'});
        this.adminTitle = page.getByTitle('Restful Booker Platform Demo');

        this.roomsTab = page.getByRole('link', {name: 'Rooms'});
        this.reportTab = page.getByRole('link', {name: 'Report'});
        this.brandingTab = page.getByRole('link',{name: 'Branding'});
        this.messagesTab = page.getByRole('link', {name:'Messages'});

        this.homePageTab = page.getByRole('link', {name: 'Front Page'});
        this.logoutButton = page.getByRole('button', {name: 'Logout'});

    }

    async assertPageVisible(){
        await expect(this.adminPage).toBeVisible();
        await expect(this.adminTitle).toBeVisible();
    }

    async navigateToRoomsTab(){
        await this.roomsTab.click();
    }
    
    async navigateToReportsTab(){
        await this.reportTab.click();
    }

    async navigateToBrandingTab(){
        await this.brandingTab.click();
    }

    async navigateToMessagesTab(){
        await this.messagesTab.click();
    }

    async navigateToHomePage(){
        await this.homePageTab.click();
    }

    async logout(){
        await this.logoutButton.click();
    }
}