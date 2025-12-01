import {test as base} from '@playwright/test';
import { AdminLoginPage } from '../../src_Pages/admin-login-page';
import { AdminPage, AdminRoomsPage } from '../../src_Pages/admin-page';
import {home_Page_Components} from '../../src_Pages/src_components/home_page.components';


type AdminPages = {
    adminLoginPage : AdminLoginPage;
    adminPage : AdminPage;
    adminRoomsPage: AdminRoomsPage


}

export const test = base.extend<AdminPages>({
    adminLoginPage:async ({page},user)=> {
        const adminLoginPage = new AdminLoginPage(page);
        await adminLoginPage.open();
        await user(adminLoginPage);
    },

    adminPage:async ({page},use)=> {
        const adminPage = new AdminPage(page);
        await use(adminPage);
    },

    adminRoomsPage: async({page},use)=>{
        const adminRoomsPage = new AdminRoomsPage(page);
        await use(adminRoomsPage);
    }

});

export {expect} from '@playwright/test';