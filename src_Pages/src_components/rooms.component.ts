import {Locator, Page, expect} from "@playwright/test";

export class rooms_Component{
    private readonly page: Page;
    private readonly roomSection: Locator;
    private readonly roomCards: Locator;

    constructor(page: Page){
        this.page =page;

        this.roomSection = page.locator('.row g-4')

        this.roomCards = this.roomSection.locator('.col-md-6 col-lg-4');
    }

    async waitForLoaded(){

        await this.roomSection.waitFor({state: 'visible'});
    }

    //single room locator
    private singleRoom(name: string): Locator{
        return this.roomCards.filter({hasText: 'Single'})
    }

    async singleRoomBooking(Single: string){
        const roomCard = this.singleRoom(Single);

        const bookButton = roomCard.getByRole('link', {name: 'Book Now'});

        await expect(roomCard).toBeVisible();
        await bookButton.click();
    }

    async viewSingleRoom(Single: string){
        const roomCard = this.singleRoom(Single);

        const bookButton = roomCard.getByRole('link', {name: 'View Details'});

        await expect(roomCard).toBeVisible();
        await bookButton.click();
    }

    async assertSingleRoomVisible(Single: string){
        await expect(this.singleRoom('Single')).toBeVisible();
    }


    //double room locator
    private doubleRoom(name: string): Locator{
        return this.roomCards.filter({hasText: 'Double'})
    }

    async doubleRoomBooking(Double: string){
        const roomCard = this.doubleRoom(Double);

        const bookButton = roomCard.getByRole('link', {name: 'Book Now'});

        await expect(roomCard).toBeVisible();
        await bookButton.click();
    }

    async viewDoubleRoom(Double: string){
        const roomCard = this.doubleRoom(Double);

        const bookButton = roomCard.getByRole('link', {name: 'View Details'});

        await expect(roomCard).toBeVisible();
        await bookButton.click();
    }

    async assertDoubleRoomVisible(Double: 'string'){
        await expect(this.doubleRoom('Double')).toBeVisible();
    }

     //suite room locator
    private suiteRoom(name: string): Locator{
        return this.roomCards.filter({hasText: 'Suite'})
    }

    async suiteRoomBooking(Suite: string){
        const roomCard = this.suiteRoom(Suite);

        const bookButton = roomCard.getByRole('link', {name: 'Book Now'});

        await expect(roomCard).toBeVisible();
        await bookButton.click();
    }

    async viewSuiteRoom(Suite: string){
        const roomCard = this.suiteRoom(Suite);

        const bookButton = roomCard.getByRole('link', {name: 'View Details'});

        await expect(roomCard).toBeVisible();
        await bookButton.click();
    }

    async assertSuiteRoomVisible(Suite: string){
        await expect(this.suiteRoom('Suite')).toBeVisible();
    }

    async getRoomsCount(): Promise<number>{
        return await this.roomCards.count();
    }
}