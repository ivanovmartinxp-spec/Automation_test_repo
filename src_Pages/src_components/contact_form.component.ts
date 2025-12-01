import {Locator, Page, expect} from '@playwright/test';

export class contact_Form_Component{
    private readonly page: Page;
    private readonly contactForm: Locator;

    private readonly nameInput: Locator;
    private readonly emailInput: Locator;
    private readonly phoneInput: Locator;
    private readonly subjectInput: Locator;
    private readonly messageInput: Locator;

    private readonly contactSubmit: Locator;

    private readonly successMessage: Locator;
    private readonly errorMessage: Locator;

    constructor(page:Page){
        this.page=page;
        this.contactForm = page.locator('.col-lg-8').filter({hasText: 'Send Us a Message'});

        this.nameInput = this.contactForm.getByRole('textbox', {name: 'Name'});
        this.emailInput= this.contactForm.getByRole('textbox', {name: 'Email'});
        this.phoneInput = this.contactForm.getByRole('textbox', {name: 'Phone'});
        this.subjectInput = this.contactForm.getByRole('textbox', {name: 'Subject'});
        this.messageInput = this.contactForm.getByTestId('ContactDescription');

        this.contactSubmit = this.contactForm.getByRole('button', {name:'Submit'});

        this.successMessage = this.contactForm.locator('.alert alert-success');
        this.errorMessage = this.contactForm.locator('.alert alert-danger');


    }

    async waitForVisible(){
        await this.contactForm.waitFor({state:'visible'});
    }
    
    async submitContactForm(params:{
        name: string;
        email: string;
        phone: string;
        subject: string;
        description: string;
    }){
        const {name,email,phone,subject,description}=params;
        await this.nameInput.click();
        await this.nameInput.fill(name);
        await this.emailInput.click();
        await this.emailInput.fill(email)
        await this.phoneInput.click();
        await this.phoneInput.fill(phone);
        await this.subjectInput.click();
        await this.subjectInput.fill(subject);
        await this.messageInput.click();
        await this.messageInput.fill(description);
        await this.contactSubmit.click();
    }

    /*async emptyContactFormName(params:{
        name: string;
        email: string;
        phone: string;
        subject: string;
        description: string;
    }){
        const {name,email,phone,subject,description}=params;
        await this.nameInput.click();
        await this.nameInput.fill('');
        await this.emailInput.click();
        await this.emailInput.fill('john@test.com')
        await this.phoneInput.click();
        await this.phoneInput.fill("07123456789");
        await this.subjectInput.click();
        await this.subjectInput.fill('Example Subject');
        await this.messageInput.click();
        await this.messageInput.fill('This is an example message for testing purposes only!!');
        await this.contactSubmit.click();
    }

    async emptyContactFormEmail(params:{
        name: string;
        email: string;
        phone: string;
        subject: string;
        description: string;
    }){
        const {name,email,phone,subject,description}=params;
        await this.nameInput.click();
        await this.nameInput.fill('John');
        await this.emailInput.click();
        await this.emailInput.fill('')
        await this.phoneInput.click();
        await this.phoneInput.fill("07123456789");
        await this.subjectInput.click();
        await this.subjectInput.fill('Example Subject');
        await this.messageInput.click();
        await this.messageInput.fill('This is an example message for testing purposes only!!');
        await this.contactSubmit.click();
    }

    async incorrectContactFormEmail(params:{
        name: string;
        email: string;
        phone: string;
        subject: string;
        description: string;
    }){
        const {name,email,phone,subject,description}=params;
        await this.nameInput.click();
        await this.nameInput.fill('John');
        await this.emailInput.click();
        await this.emailInput.fill('hgfgh')
        await this.phoneInput.click();
        await this.phoneInput.fill("07123456789");
        await this.subjectInput.click();
        await this.subjectInput.fill('Example Subject');
        await this.messageInput.click();
        await this.messageInput.fill('This is an example message for testing purposes only!!');
        await this.contactSubmit.click();
    }


    async emptyContactFormPhone(params:{
        name: string;
        email: string;
        phone: string;
        subject: string;
        description: string;
    }){
        const {name,email,phone,subject,description}=params;
        await this.nameInput.click();
        await this.nameInput.fill('John');
        await this.emailInput.click();
        await this.emailInput.fill('john@test.com')
        await this.phoneInput.click();
        await this.phoneInput.fill('');
        await this.subjectInput.click();
        await this.subjectInput.fill('Example Subject');
        await this.messageInput.click();
        await this.messageInput.fill('This is an example message for testing purposes only!!');
        await this.contactSubmit.click();
    }

    async incorrectContactFormPhone(params:{
        name: string;
        email: string;
        phone: string;
        subject: string;
        description: string;
    }){
        const {name,email,phone,subject,description}=params;
        await this.nameInput.click();
        await this.nameInput.fill('John');
        await this.emailInput.click();
        await this.emailInput.fill('john@test.com')
        await this.phoneInput.click();
        await this.phoneInput.fill('65456');
        await this.subjectInput.click();
        await this.subjectInput.fill('Example Subject');
        await this.messageInput.click();
        await this.messageInput.fill('This is an example message for testing purposes only!!');
        await this.contactSubmit.click();
    }



    async emptyContactFormSubject(params:{
        name: string;
        email: string;
        phone: string;
        subject: string;
        description: string;
    }){
        const {name,email,phone,subject,description}=params;
        await this.nameInput.click();
        await this.nameInput.fill('John');
        await this.emailInput.click();
        await this.emailInput.fill('john@test.com')
        await this.phoneInput.click();
        await this.phoneInput.fill("07123456789");
        await this.subjectInput.click();
        await this.subjectInput.fill('');
        await this.messageInput.click();
        await this.messageInput.fill('This is an example message for testing purposes only!!');
        await this.contactSubmit.click();
    }


    async incorrectContactFormSubject(params:{
        name: string;
        email: string;
        phone: string;
        subject: string;
        description: string;
    }){
        const {name,email,phone,subject,description}=params;
        await this.nameInput.click();
        await this.nameInput.fill('John');
        await this.emailInput.click();
        await this.emailInput.fill('john@test.com')
        await this.phoneInput.click();
        await this.phoneInput.fill("07123456789");
        await this.subjectInput.click();
        await this.subjectInput.fill('tre');
        await this.messageInput.click();
        await this.messageInput.fill('This is an example message for testing purposes only!!');
        await this.contactSubmit.click();
    }

    async emptyContactFormDescription(params:{
        name: string;
        email: string;
        phone: string;
        subject: string;
        description: string;
    }){
        const {name,email,phone,subject,description}=params;
        await this.nameInput.click();
        await this.nameInput.fill('John');
        await this.emailInput.click();
        await this.emailInput.fill('john@test.com')
        await this.phoneInput.click();
        await this.phoneInput.fill("07123456789");
        await this.subjectInput.click();
        await this.subjectInput.fill('Example Subject');
        await this.messageInput.click();
        await this.messageInput.fill('');
        await this.contactSubmit.click();
    }

    async incorrectContactFormDescription(params:{
        name: string;
        email: string;
        phone: string;
        subject: string;
        description: string;
    }){
        const {name,email,phone,subject,description}=params;
        await this.nameInput.click();
        await this.nameInput.fill('John');
        await this.emailInput.click();
        await this.emailInput.fill('john@test.com')
        await this.phoneInput.click();
        await this.phoneInput.fill("07123456789");
        await this.subjectInput.click();
        await this.subjectInput.fill('Example Subject');
        await this.messageInput.click();
        await this.messageInput.fill('test');
        await this.contactSubmit.click();
    }*/
    
    async assertMessageSubmitted(){
        await expect(this.successMessage).toBeVisible();
    }

    async assertEmptyContactName(){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('Name may not be blank')
    }

    async assertEmptyContactEmail(){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('Email may not be blank')
    }

    async assertIncorrectContactEmail(){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('must be a well-formed email address')
    }

     async assertEmptyContactPhone(){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('Phone may not be blank')
    }

    async assertIncorrectContactPhone(){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('Phone must be between 11 and 21 characters.')
    }

   
    async assertEmptyContactSubject(){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('Subject may not be blank')
    }

    async assertIncorrectContactSubject(){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('Subject must be between 5 and 100 characters.')
    }
   
    async assertEmptyContactDescription(){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('Message may not be blank')
    }
    async assertIncorrectContactDescription(){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('Message must be between 20 and 2000 characters.')
    }
}