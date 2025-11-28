import {Locator, Page, expect} from '@playwright/test';

export class booking_Form_Component{
    private readonly page: Page;

    private readonly bookingForm: Locator;
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

    private readonly totalPrice: Locator;


    constructor(page:Page){
        this.page = page;

        this.bookingForm = page.locator('.card-body').filter({hasText: 'Book This Room'});

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

        this.successMessage = this.bookingForm.getByText('Booking Successful!');

        this.errorMessage = this.bookingForm.locator('.alert alert-danger');

        

        this.totalPrice = this.bookingForm.locator('.d-flex justify-content-between fw-bold')
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

    async correctBookingDetails( params: {
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '07123456789',
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.fill(email);
        await this.phoneBooking.fill(phone);
    }

    async emptyFirstNameDetails(params: {
        firstName: ''
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '07123456789',
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.fill(email);
        await this.phoneBooking.fill(phone);
    }

    async incorrectFirstNameDetails(params: {
        firstName: 'te'
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '07123456789',
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.fill(email);
        await this.phoneBooking.fill(phone);
    }

    async emptyLastNameDetails(params:{
        firstName: 'John',
        lastName: '',
        email: 'john.smith@test.com',
        phone: '07123456789',
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.fill(email);
        await this.phoneBooking.fill(phone);
    }


    async incorrectLastNameDetails(params:{
        firstName: 'John',
        lastName: 'te',
        email: 'john.smith@test.com',
        phone: '07123456789',
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.fill(email);
        await this.phoneBooking.fill(phone);
    }
    
    async emptyEmailDetails(params:{
        firstName: 'John',
        lastName: 'Smith',
        email: '',
        phone: '07123456789',
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.fill(email);
        await this.phoneBooking.fill(phone);
    }

    async incorrectEmailDetails(params:{
        firstName: 'John',
        lastName: 'Smith',
        email: 'test',
        phone: '07123456789',
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.fill(email);
        await this.phoneBooking.fill(phone);
    }

    async emptyPhoneDetails(params:{
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '',
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.fill(email);
        await this.phoneBooking.fill(phone);
    }

    async incorrectPhoneDetails(params:{
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '12345',
    }){
        const{firstName, lastName, email, phone} = params;
        await this.firstNameBooking.fill(firstName);
        await this.lastNameBooking.fill(lastName);
        await this.emailBooking.fill(email);
        await this.phoneBooking.fill(phone);
    }


    async assertTotalPriceOnCorrectReservation(){
        await expect(this.totalPrice).toHaveText('£740')
    }


    async reserveButton(){
        await this.reserveBooking.click();

    }


    async assertReservationSuccess(){
        await expect(this.successMessage).toBeVisible();
    }
    async assertEmptyBookingFirstName(){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('Firstname should not be blank')
    }
    async assertIncorrectFName(){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('size must be between 3 and 18')
    }
    
    async assertEmptyLastNameError(){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('Lastname should not be blank')
    }   
    async assertIncorrectLastNameError(){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('size must be between 3 and 30')
    }
    async assertEmptyEmailError(){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('must not be empty')
    }

    async assertIncorrectEmailError(){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('must be a well-formed email address')
    }
    async assertEmptyPhoneError(){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('must not be empty')
    }
    
    async assertIncorrectPhoneError(){
        await expect(this.errorMessage).toBeVisible();
         await expect(this.errorMessage).toHaveText('size must be between 11 and 21')
    }   

}