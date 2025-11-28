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

        this.availabilityForm = page.locator(".row g-3").filter({hasText: 'Check Availability & Book Your Stay'});
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
    

    async positiveAvailabilityCheck(){
        await this.checkInInput.click();
        await this.checkInInput.fill('20/12/2025');
        await this.checkOutInput.click();
        await this.checkOutInput.fill('27/12/2025');
    }

    

    async negativeAvailabilityCheck(){
        await this.checkInInput.click();
        await this.checkInInput.fill('27/12/2025');
        await this.checkOutInput.click();
        await this.checkOutInput.fill('20/12/2025');
    }

    async positiveCalendarAvCheck(){
        await this.checkInInput.click();
        await this.datePicker.getByText('7').click();
        await this.checkOutInput.click();
        await this.datePicker.getByText('14').click();
    }

    async negativeCalendarAvCheck(){
        await this.checkInInput.click();
        await this.datePicker.getByText('14').click();
        await this.checkOutInput.click();
        await this.datePicker.getByText('7').click();
    }

    async nextMonthCalendar(){
        await this.datePickerNextMonth.click();
        await this.datePicker.getByText('7').click();
        await this.datePicker.getByText('14').click();
    }

    async previousMonthCalendar(){
        await this.datePickerPreviousMonth.click();
        await this.datePicker.getByText('7').click();
        await this.datePicker.getByText('14').click();
    }


    async submitAvaliability(){
        await this.checkAvailabilityButton.click();
    }
}


// can have check out date with a date prior check in results in room price being negative
//check in 
//check out
//check availability 
//invalid dates 