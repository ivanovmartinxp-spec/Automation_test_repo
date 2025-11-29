import {test as base} from '@playwright/test';
import { AdminLoginPage } from '../../src_Pages/admin-login-page';
import { AdminPage } from '../../src_Pages/admin-page';


type AdminPages = {
    adminLoginPage : AdminLoginPage;
    adminPage : AdminPage;


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

});

export {expect} from '@playwright/test';