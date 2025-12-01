import {test} from '../fixtures/login_fixtures';

test('User can successfully create a new room', async ({adminLoginPage, adminPage, adminRoomsPage})=>{
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
        roomPrice: '10',
        roomWiFi: true,
        roomTV: true,
        roomViews: true,
        roomSafe: false,
        roomRadio: false,
        roomRefreshments: false,});

    await adminRoomsPage.getRoomsList();
    await adminRoomsPage.assertRoomIsVisible({
        roomId : '144',
    });


});


test ('User can successfully delete created rooms', async({adminLoginPage, adminPage, adminRoomsPage})=>{
    await adminLoginPage.waitForVisible();
    await adminLoginPage.login({
        username: 'admin',
        password: 'password',
    });
    await adminPage.assertPageVisible();

    await adminRoomsPage.createNewRoom({ 
        roomId: '201',
        roomType: 'Twin',
        roomAccess: 'true',
        roomPrice: '10',
        roomWiFi: true,
        roomTV: true,
        roomViews: true,
        roomSafe: false,
        roomRadio: false,
        roomRefreshments: false,});

    //check for created room
    await adminRoomsPage.assertRoomIsVisible({
        roomId : '201',
    });

    //check for the list of created rooms and delete the last created one
    await adminRoomsPage.getRoomsList();
    await adminRoomsPage.removeCreatedRoom();
    //check if last created room is deleted
    await adminRoomsPage.getRoomsList();
    await adminRoomsPage.assertRoomIsRemoved({
        deletedRoomId: '201'
    });
    
});

