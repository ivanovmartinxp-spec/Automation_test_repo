import {Locator, Page, expect} from '@playwright/test';

export class check_Availability_Component{
    private readonly page: Page;

    private readonly availabilityForm:Locator;
    private readonly checkInInput: Locator;
    private readonly checkOutInput: Locator;
    private readonly checkAvailabilityButton: Locator;
    private readonly datePicker: Locator;
    private readonly datePickerNextMonth: Locator;
    private readonly datePickerPreviousMonth: Locator;

    constructor(page: Page){
        this.page = page;

        this.availabilityForm = page.locator(".card-body p-4").filter({hasText: 'Check Availability & Book Your Stay'});
        this.checkInInput = this.availabilityForm.locator('.react-datepicker__input-container').nth(0);
        this.checkOutInput = this.availabilityForm.locator('.react-datepicker__input-container').nth(1);

        this.checkAvailabilityButton = this.availabilityForm.getByRole('button', {name: 'Check Availability'});

        this.datePicker = this.availabilityForm.locator('.react-datepicker');

        this.datePickerNextMonth = this.datePicker.locator('.react-datepicker__navigation react-datepicker__navigation--next')
        this.datePickerPreviousMonth = this.datePicker.locator('.react-datepicker__navigation react-datepicker__navigation--previous')
    }

    async waitForVisible(){
        await this.availabilityForm.waitFor({state: 'visible'});
    }
    

    async positiveAvailabilityCheck(params: {
        startDate: "20/12/2025'",
        endDate: "27/12/2025"
    }){
        const{startDate, endDate} = params;
        await this.checkInInput.click();
        await this.checkInInput.fill(startDate);
        await this.checkOutInput.click();
        await this.checkOutInput.fill(endDate);
    }

    

    async negativeAvailabilityCheck(params: {
        startDate: "27/12/2025'",
        endDate: "20/12/2025"
    }){
        const{startDate, endDate} = params;
        await this.checkInInput.click();
        await this.checkInInput.fill(startDate);
        await this.checkOutInput.click();
        await this.checkOutInput.fill(endDate);
    }

    async positiveCalendarAvCheck(params:{
        startDate: '7',
        endDate: '14'
    }){
        const{startDate, endDate} = params;
        await this.checkInInput.click();
        await this.datePicker.getByText(startDate).click();
        await this.checkOutInput.click();
        await this.datePicker.getByText(endDate).click();
    }

    async negativeCalendarAvCheck(params:{
        startDate: '14',    
        endDate: '7'
    }){
        const{startDate, endDate} = params;
        await this.checkInInput.click();
        await this.datePicker.getByText(startDate).click();
        await this.checkOutInput.click();
        await this.datePicker.getByText(endDate).click();
    }

    async nextMonthCalendar(params:{
        startDate: '7',
        endDate: '14'
    }){
        const{startDate, endDate} = params;
        await this.datePickerNextMonth.click();
        await this.datePicker.getByText(startDate).click();
        await this.datePicker.getByText(endDate).click();
    }

    async previousMonthCalendar(params:{
        startDate: '7',
        endDate: '14'
    }){
        const{startDate, endDate} = params;
        await this.datePickerPreviousMonth.click();
        await this.datePicker.getByText(startDate).click();
        await this.datePicker.getByText(endDate).click();
    }


    async submitAvailability(){
        await this.checkAvailabilityButton.click();
    }
}


// can have check out date with a date prior check in results in room price being negative
//check in 
//check out
//check availability 
//invalid dates 