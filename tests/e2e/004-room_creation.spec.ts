
import { AdminLoginPage } from '../../src_Pages/admin-login-page';
import { AdminRoomsPage } from '../../src_Pages/admin-page';
import {test} from '../fixtures/login_fixtures';

test('User can successfully create a new room', async ({adminLoginPage, adminPage, adminRoomsPage})=>{
    await adminLoginPage.waitForVisible();
    await adminLoginPage.correctLogin();
    await adminPage.assertPageVisible();

    await adminRoomsPage.createNewRoom();
    await adminRoomsPage.assertRoomIsVisible('144');

});


test ('User can successfully delete created rooms', async({adminLoginPage, adminPage, adminRoomsPage})=>{
    await adminLoginPage.waitForVisible();
    await adminLoginPage.correctLogin();
    await adminPage.assertPageVisible();

    await adminRoomsPage.createNewRoom();
    await adminRoomsPage.assertRoomIsVisible('144');

    await adminRoomsPage.removeCreatedRoom();
    await adminRoomsPage.assertRoomIsRemoved();
});

