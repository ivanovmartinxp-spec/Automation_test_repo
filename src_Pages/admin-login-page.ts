import { Page, Locator, expect } from '@playwright/test';
import { home_Page } from './home_page';

 export class AdminLoginPage extends home_Page{
    readonly path = 'https://automationintesting.online/admin'

    private readonly loginFrom: Locator;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly logInButton: Locator;
    private readonly logInError: Locator;
    private readonly returnToHomepage: Locator

    constructor (page: Page){
        super(page);

        this.loginFrom = page.locator('.card').filter({hasText: 'Login'});
        this.usernameInput = page.getByRole('textbox', {name: 'Username'});
        this.passwordInput = page.getByRole('textbox', {name : 'Password'});
        this.logInButton = page.getByRole('button', {name : 'Login'});
        this.logInError = page.getByRole('alert').first();
        this.returnToHomepage = page.getByRole('link', {name: 'Front Page'});
    }

    async open(){
     await this.goto();
    }

    async waitForVisible(){
        await this.loginFrom.waitFor({state: 'visible'});
    }


    async login(params: {
        username: string,
        password: string,
    }){
        const{username, password} = params;
        await this.usernameInput.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.click();
        await this.passwordInput.fill(password);
        await this.logInButton.click();
    }

    /*async incorrectUsername(){
        await this.login('1admin', 'password');
    }

    async incorrectPassword(){
        await this.login('admin', '1password');
    }*/

    async assertInvalidLoginMsg(){
        await expect(this.logInError).toBeVisible();
        await expect(this.logInError).toHaveText('Invalid credentials')
    }

    async assertLogInPageIsVisible(){
        await expect(this.loginFrom).toBeVisible();

    }

    async returnToHomePageApp(){
        await this.returnToHomepage.click();
    }
 }