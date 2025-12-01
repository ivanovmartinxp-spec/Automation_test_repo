
import {test} from '../fixtures/login_fixtures';
//log in checks
test('User Can log in Successfully', async ({adminPage, adminLoginPage})=>{
    await adminLoginPage.waitForVisible();
    await adminLoginPage.login({
        username: 'admin',
        password: 'password',
    });
    await adminPage.waitForVisible
    await adminPage.assertPageVisible();
});

test("User Can log out successfully", async ({adminPage,adminLoginPage})=>{
    
    await adminLoginPage.waitForVisible();
    await adminLoginPage.login({
        username: 'admin',
        password: 'password',
    });
    await adminPage.waitForVisible
    await adminPage.assertPageVisible();

    await adminPage.logout();
    await adminLoginPage.assertLogInPageIsVisible();
})

test('User can navigate to the hotel app home page form the log in screen', async ({adminPage, adminLoginPage})=>{
    await adminLoginPage.waitForVisible();
    //return to hotel app homepage
    await adminLoginPage.returnToHomePageApp();
    await adminPage.waitForHomePageVisible();
    await adminPage.assertHomePageVisible();

});

test('Use can return to hotel app homepage after log in', async ({adminPage, adminLoginPage})=>{
    await adminLoginPage.waitForVisible();
    await adminLoginPage.login({
        username: 'admin',
        password: 'password',
    });
    await adminPage.waitForVisible
    await adminPage.assertPageVisible();
    //return to hotel app homepage
    await adminLoginPage.returnToHomePageApp();
    await adminPage.waitForHomePageVisible();
    await adminPage.assertHomePageVisible();

});
