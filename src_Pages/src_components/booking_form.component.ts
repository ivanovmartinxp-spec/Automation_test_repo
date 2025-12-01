import {Locator, Page, expect} from '@playwright/test';

export class booking_Form_Component{
    private readonly page: Page;

    private readonly bookingForm: Locator;
    private readonly bookingConfirm: Locator;
    private readonly firstNameBooking: Locator;
    private readonly lastNameBooking: Locator;
    private readonly emailBooking: Locator;
    private readonly phoneBooking: Locator;
    //private readonly checkInBooking: Locator;
    //private readonly checkOutBooking: Locator;
    private readonly todayBooking: Locator;
    private readonly nextMonthBooking: Locator;
    private readonly previousMonthBooking: Locator;
    private readonly reserveBooking: Locator;
    private readonly successMessage: Locator;
    
   
    private readonly errorMessage: Locator;

    private readonly roomPrice: Locator;
    private readonly roomType: Locator;
    private readonly roomDesc: Locator;
    private readonly homePage: Locator;
    private readonly returnHomePage: Locator;


    constructor(page:Page){
        this.page = page;

        this.bookingForm = page.locator('.card-body').filter({hasText: 'Book This Room'});
        this.bookingConfirm = page.locator('.card-body').filter({hasText: 'Booking Confirmed'})

        this.firstNameBooking = this.bookingForm.getByRole('textbox', {name: 'Firstname'});
        this.lastNameBooking = this.bookingForm.getByRole('textbox', {name: 'Lastname'});
        this.emailBooking = this.bookingForm.getByRole('textbox', {name: 'Email'});
        this.phoneBooking = this.bookingForm.getByRole('textbox', {name: 'Phone'});

        //this.checkInBooking = this.bookingForm.locator('.rbc-month-view');
        //this.checkOutBooking = this.bookingForm.locator('.rbc-month-view');

        this.todayBooking = this.bookingForm.getByRole('button', {name:'Today'});
        this.nextMonthBooking = this.bookingForm.getByRole('button', {name: 'Next'});
        this.previousMonthBooking = this.bookingForm.getByRole('button', {name: 'Back'});

        this.reserveBooking = this.bookingForm.getByRole('button',{name:'Reserve Now'})

        this.successMessage = this.page.locator('.card-body').filter({hasText: 'Booking Confirmed'});

        this.returnHomePage = this.bookingConfirm.getByRole('link', {name: 'Return home'})

        this.errorMessage = this.bookingForm.getByRole('alert');


        this.roomType = page.getByRole('heading', {name: "Single Room"});
        this.roomPrice = page.getByText('Price Summary')
        this.roomDesc = page.locator('.mb-4');
        this.homePage = page.getByRole('link', {name: 'Home'});
    }


    async waitForVisible(){
        await this.bookingForm.waitFor({state: 'visible'});
    }
    
    async bookingToday(){
        await this.todayBooking.click();
    }
    async bookingNextMonth(){
        await this.nextMonthBooking.click();
    }

    async bookingPreviousMonth(){
        await this.previousMonthBooking.click();
    }

     async assertRoomTypeContains(roomType: string){
            await expect(this.roomType).toContainText(roomType);
        }

        async assertPriceIsVisible(){
            await expect(this.roomPrice).toBeVisible();
        }

         async returnToHomePage(){
            await this.homePage.click();
        }

        private roomDescriptionFilter(Description:string): Locator{
         return this.roomDesc.filter({hasText: 'Room Description'})
        }

        async roomDescription(Description:string){
            const roomDesc = this.roomDescriptionFilter(Description);
            await expect(roomDesc).toBeVisible();
        }


    async fillBookingDetails( params: {
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.click();
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.click();
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.click();
        await this.emailBooking.fill(email);
        await this.phoneBooking.click();
        await this.phoneBooking.fill(phone);
    }

    /*async emptyFirstNameDetails(params: {
        firstName: '',
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '07123456789',
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.click();
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.click();
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.click();
        await this.emailBooking.fill(email);
        await this.phoneBooking.click();
        await this.phoneBooking.fill(phone);
    }

    async incorrectFirstNameDetails(params: {
        firstName: 'te'
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '07123456789',
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.click();
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.click();
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.click();
        await this.emailBooking.fill(email);
        await this.phoneBooking.click();
        await this.phoneBooking.fill(phone);
    }

    async emptyLastNameDetails(params:{
        firstName: 'John',
        lastName: '',
        email: 'john.smith@test.com',
        phone: '07123456789',
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.click();
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.click();
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.click();
        await this.emailBooking.fill(email);
        await this.phoneBooking.click();
        await this.phoneBooking.fill(phone);
    }


    async incorrectLastNameDetails(params:{
        firstName: 'John',
        lastName: 'te',
        email: 'john.smith@test.com',
        phone: '07123456789',
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.click();
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.click();
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.click();
        await this.emailBooking.fill(email);
        await this.phoneBooking.click();
        await this.phoneBooking.fill(phone);
    }
    
    async emptyEmailDetails(params:{
        firstName: 'John',
        lastName: 'Smith',
        email: '',
        phone: '07123456789',
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.click();
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.click();
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.click();
        await this.emailBooking.fill(email);
        await this.phoneBooking.click();
        await this.phoneBooking.fill(phone);
    }

    async incorrectEmailDetails(params:{
        firstName: 'John',
        lastName: 'Smith',
        email: 'test',
        phone: '07123456789',
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.click();
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.click();
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.click();
        await this.emailBooking.fill(email);
        await this.phoneBooking.click();
        await this.phoneBooking.fill(phone);
    }

    async emptyPhoneDetails(params:{
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '',
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.click();
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.click();
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.click();
        await this.emailBooking.fill(email);
        await this.phoneBooking.click();
        await this.phoneBooking.fill(phone);
    }

    async incorrectPhoneDetails(params:{
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '12345',
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.click();
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.click();
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.click();
        await this.emailBooking.fill(email);
        await this.phoneBooking.click();
        await this.phoneBooking.fill(phone);
    }*/


    async assertTotalPriceOnCorrectReservation(){
        await expect(this.roomPrice).toHaveText('£740')
    }


    async reserveButton(){
        await this.reserveBooking.click();

    }

    async assertFormIsVisible(){
        console.log(await this.bookingForm.allTextContents());
        await expect(this.firstNameBooking).toBeVisible();
        //await expect(this.firstNameBooking).toContainText('Firstname')
    }

    async assertReservationSuccess(){
        await expect(this.successMessage).toBeVisible();
    }

    async assertReturnHomeIsVisible(){
        await expect(this.returnHomePage).toBeVisible();
    }

    async assertErrorVisible(){
        await expect(this.errorMessage).toBeVisible();
    }

    async assertEmptyBookingFirstName(){
        console.log(await this.bookingForm.allTextContents());
        await expect(this.errorMessage).toBeVisible();
        console.log(await this.errorMessage.allTextContents());
        
        await expect(this.errorMessage).toContainText('Firstname should not be blank')
    }
    async assertIncorrectFName(){
        console.log(await this.bookingForm.allTextContents());
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText('size must be between 3 and 18')
    }
    
    async assertEmptyLastNameError(){
        console.log(await this.bookingForm.allTextContents());
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText('Lastname should not be blank')
    }   
    async assertIncorrectLastNameError(){
        console.log(await this.bookingForm.allTextContents());
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText('size must be between 3 and 30')
    }
    async assertEmptyEmailError(){
        console.log(await this.bookingForm.allTextContents());
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText('must not be empty')
    }

    async assertIncorrectEmailError(){
        console.log(await this.bookingForm.allTextContents());
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText('must be a well-formed email address')
    }
    async assertEmptyPhoneError(){
        console.log(await this.bookingForm.allTextContents());
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText('must not be empty')
    }
    
    async assertIncorrectPhoneError(){
        console.log(await this.bookingForm.allTextContents());
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText('size must be between 11 and 21')
    }   



}