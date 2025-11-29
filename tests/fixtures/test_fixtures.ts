import {test as base, expect} from '@playwright/test';
import {hotel_app_Page} from '../../src_Pages/hotel_app_page';

type Pages = {
    hotelApp: hotel_app_Page;
};

export const test = base.extend<Pages>({
    hotelApp: async ({page},use) =>{
        const hotelApp = new hotel_app_Page(page);
        await hotelApp.open();
        await hotelApp.rooms.waitForLoaded();
        await use(hotelApp);
    }
});

export {expect};
