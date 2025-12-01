import {test} from '../fixtures/login_fixtures';

test('Error is received when room information is empty', async ({adminLoginPage, adminPage, adminRoomsPage})=>{
    await adminLoginPage.waitForVisible();
    await adminLoginPage.login({
        username: 'admin',
        password: 'password',
    });
    await adminPage.assertPageVisible();

    await adminRoomsPage.missingRoomInformationSubmit();
    await adminRoomsPage.assertMissingRoomInformation();

});

test('Error is received when only room number is missing', async ({adminLoginPage, adminPage, adminRoomsPage})=>{
    await adminLoginPage.waitForVisible();
    await adminLoginPage.login({
        username: 'admin',
        password: 'password',
    });
    await adminPage.assertPageVisible();

    await adminRoomsPage.createNewRoom({ 
        roomId: '',
        roomType: 'Twin',
        roomAccess: 'true',
        roomPrice: '10',
        roomWiFi: true,
        roomTV: true,
        roomViews: true,
        roomSafe: false,
        roomRadio: false,
        roomRefreshments: false,});

    await adminRoomsPage.assertMissingRoomNumber();
});

test('Error is received when only room price is missing', async ({adminLoginPage, adminPage, adminRoomsPage})=>{
    await adminLoginPage.waitForVisible();
    await adminLoginPage.login({
        username: 'admin',
        password: 'password',
    });
    await adminPage.assertPageVisible();

    await adminRoomsPage.createNewRoom({ 
        roomId: '144',
        roomType: 'Twin',
        roomAccess: 'true',
        roomPrice: '',
        roomWiFi: true,
        roomTV: true,
        roomViews: true,
        roomSafe: false,
        roomRadio: false,
        roomRefreshments: false,});

    await adminRoomsPage.assertMissingRoomPrice();
});


test('Error is received when room price is set to 0', async ({adminLoginPage, adminPage, adminRoomsPage})=>{
    await adminLoginPage.waitForVisible();
    await adminLoginPage.login({
        username: 'admin',
        password: 'password',
    });
    await adminPage.assertPageVisible();

    await adminRoomsPage.createNewRoom({ 
        roomId: '144',
        roomType: 'Twin',
        roomAccess: 'true',
        roomPrice: '0',
        roomWiFi: true,
        roomTV: true,
        roomViews: true,
        roomSafe: false,
        roomRadio: false,
        roomRefreshments: false,});

    await adminRoomsPage.assertMissingRoomPrice();
});