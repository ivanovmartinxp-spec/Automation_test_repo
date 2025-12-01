import {test} from '../fixtures/login_fixtures';

test('Invalid credentials error is displayed when username is incorrect',async({adminLoginPage})=>{
    await adminLoginPage.waitForVisible();
    await adminLoginPage.login({
        username: 'qwerty',
        password: 'password',
    });
    await adminLoginPage.assertInvalidLoginMsg();
});

test('Invalid credentials error is displayed when password is incorrect',async({adminLoginPage})=>{
    await adminLoginPage.waitForVisible();
    await adminLoginPage.login({
        username: 'admin',
        password: '1234',
    });
    await adminLoginPage.assertInvalidLoginMsg();
});

test('Error is displayed when the username and password are left empty', async({adminLoginPage})=>{
    await adminLoginPage.waitForVisible();
    await adminLoginPage.login({
        username: '',
        password: '',
    });
    await adminLoginPage.assertInvalidLoginMsg();
});