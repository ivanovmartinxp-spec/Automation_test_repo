
import {test} from '../fixtures/login_fixtures';

test('User Can log in Successfully', async ({adminPage, adminLoginPage})=>{
    await adminLoginPage.waitForVisible();
    await adminLoginPage.correctLogin();
    await adminPage.assertPageVisible();
});

test("User Can log out successfully", async ({adminPage,adminLoginPage})=>{
    await adminLoginPage.waitForVisible();
    await adminLoginPage.correctLogin();
    await adminPage.assertPageVisible();

    await adminPage.logout();
    await adminLoginPage.assertLogInPageIsVisible();
})

test('Invalid credentials error is displayed when username is incorrect',async({adminLoginPage})=>{
    await adminLoginPage.waitForVisible();
    await adminLoginPage.incorrectUsername();
    await adminLoginPage.assertInvalidLoginMsg();
});

test('Invalid credentials error is displayed when password is incorrect',async({adminLoginPage})=>{
    await adminLoginPage.waitForVisible();
    await adminLoginPage.incorrectPassword();
    await adminLoginPage.assertInvalidLoginMsg();
});

