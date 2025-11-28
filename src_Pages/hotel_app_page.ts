import {Page} from '@playwright/test';
import { home_Page } from './home_page';
import{rooms_Component} from './src_components/rooms.component';
import{booking_Form_Component} from './src_components/booking_form.component';
import{contact_Form_Component} from './src_components/contact_form.component';
import{check_Availability_Component} from './src_components/check_availability.component';

export class hotel_app_Page extends home_Page{
    readonly path = "https://automationintesting.online/";

    readonly rooms: rooms_Component;
    readonly booking: booking_Form_Component;
    readonly contact: contact_Form_Component;
    readonly availability: check_Availability_Component;


    constructor(page: Page){
        super(page);


        this.rooms = new rooms_Component(page);
        this.booking = new booking_Form_Component(page);
        this.contact = new contact_Form_Component(page);
        this.availability = new check_Availability_Component(page);
    }

    async open(){
        await this.goto();
    }
}