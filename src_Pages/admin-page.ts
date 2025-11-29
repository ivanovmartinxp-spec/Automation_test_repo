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
        this.adminTitle = page.getByText('Restful Booker Platform Demo');

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


export class AdminRoomsPage extends AdminPage{
    readonly path = 'https://automationintesting.online/admin/rooms';

    private readonly createRoomForm: Locator;
    private readonly roomIdInput: Locator;
    private readonly roomTypeSelect: Locator;
    private readonly roomAccessible: Locator;
    private readonly roomPriceInput: Locator;
    private readonly roomWiFi: Locator;
    private readonly roomTV: Locator;
    private readonly roomRadio: Locator;
    private readonly roomRefreshments: Locator;
    private readonly roomSafe: Locator;
    private readonly roomViews: Locator;
    private readonly createRoomButton: Locator;

    private readonly deleteCreatedRoom:Locator;
    private readonly roomCreationError: Locator;

    private readonly roomsTableContainer: Locator;
    private readonly createdRoomsList: Locator;


    constructor (page:Page){
        super (page);
        
        this.createRoomForm = page.locator('.root-container').first();
        this.roomIdInput = page.getByTestId('roomName').last();
        this.roomTypeSelect = page.locator('#type').last();
        this.roomAccessible = page.locator('#accessible').last();
        this.roomPriceInput = page.locator('#roomPrice').last();
        this.roomWiFi = page.getByRole('checkbox', {name : 'WiFi'}).last();
        this.roomTV = page.getByRole('checkbox', {name : 'TV'}).last();
        this.roomRadio = page.getByRole('checkbox', {name : 'Radio'}).last();
        this.roomRefreshments = page.getByRole('checkbox', {name : 'Refreshments'}).last();
        this.roomSafe = page.getByRole('checkbox', {name : 'Safe'}).last();
        this.roomViews = page.getByRole('checkbox', {name : 'Views'}).last();
        this.createRoomButton = page.getByRole('button', {name : "Create"});
        this.roomCreationError = page.getByRole('alert');

        this.deleteCreatedRoom = page.locator('.roomDelete').last();
        this.roomsTableContainer = page.locator('.container');
        this.createdRoomsList = page.getByTestId('roomlisting');
    }

    async open(){
        await this.goto();
        await this.waitForAdminRoomsLoad();
    }
    async waitForAdminRoomsLoad(){
        await expect(this.createRoomForm).toBeVisible();
        await expect(this.createdRoomsList).toBeVisible();
        await expect(this.roomsTableContainer).toBeVisible();
    }

    async createNewRoom(){
        
        await this.roomIdInput.fill('144');
        await this.roomTypeSelect.selectOption('Twin');
        await this.roomAccessible.selectOption('true');
        await this.roomPriceInput.fill('500');
        await this.roomWiFi.click();
        await this.roomTV.click();
        await this.roomViews.click();

        await this.createRoomButton.click();
    }

    private roomItemById(id: string): Locator{
        return this.createdRoomsList.filter({hasText: '144'});
    }

    async assertRoomIsVisible (id:string){
        await expect(this.roomItemById('144')).toBeVisible();
    }

    async getRoomsList():Promise<number>{
        return this.createdRoomsList.count();
    }

    async assertMissingRoomInformation(){
        await expect(this.roomCreationError).toBeVisible();
    }

    async missingRoomInformation(){
         await this.createRoomButton.click();
    }

    async removeCreatedRoom(){
        await this.deleteCreatedRoom.click()
    }

    async assertRoomIsRemoved (){
        const deletedRoom = this.roomItemById('144')
        await expect(deletedRoom).toHaveCount(0);
        //await expect(this.roomItemById('144')).toHaveCount(0);
    }

}