import {test} from '../fixtures/test_fixtures';

//accepts single character names ?
test('error is displayed when contact form name is empty', async ({hotelApp})=>{
    await hotelApp.contact.waitForVisible();
    await hotelApp.contact.submitContactForm({
        name: '',
        email: 'test@test.com',
        phone: '07123456789',
        subject: 'Test Subject',
        description: 'Test Description for the purposes of testing this field!',
   });

    await hotelApp.contact.assertEmptyContactName();

})


test('error is displayed when contact form email is empty or incorrect', async ({hotelApp})=>{
    await hotelApp.contact.waitForVisible();
    await hotelApp.contact.submitContactForm({
        name: 'John',
        email: '',
        phone: '07123456789',
        subject: 'Test Subject',
        description: 'Test Description for the purposes of testing this field!',
   });

    await hotelApp.contact.assertEmptyContactEmail();

    await hotelApp.contact.submitContactForm({
        name: 'John',
        email: 'test',
        phone: '07123456789',
        subject: 'Test Subject',
        description: 'Test Description for the purposes of testing this field!',
   });
   await hotelApp.contact.assertIncorrectContactEmail();


   
})

test('error is displayed when contact form phone is empty or incorrect', async ({hotelApp})=>{
    await hotelApp.contact.waitForVisible();
    await hotelApp.contact.submitContactForm({
        name: 'John',
        email: 'test@test.com',
        phone: '',
        subject: 'Test Subject',
        description: 'Test Description for the purposes of testing this field!',
   });

    await hotelApp.contact.assertEmptyContactPhone();

    await hotelApp.contact.submitContactForm({
        name: 'John',
        email: 'test@test.com',
        phone: '1234',
        subject: 'Test Subject',
        description: 'Test Description for the purposes of testing this field!',
   });
   await hotelApp.contact.assertIncorrectContactPhone();
   
})

test('error is displayed when contact form subject is empty or incorrect', async ({hotelApp})=>{
    await hotelApp.contact.waitForVisible();
    await hotelApp.contact.submitContactForm({
        name: 'John',
        email: 'test@test.com',
        phone: '07123456789',
        subject: '',
        description: 'Test Description for the purposes of testing this field!',
   });

    await hotelApp.contact.assertEmptyContactSubject();

    await hotelApp.contact.submitContactForm({
        name: 'John',
        email: 'test@test.com',
        phone: '07123456789',
        subject: 'Te',
        description: 'Test Description for the purposes of testing this field!',
   });
   await hotelApp.contact.assertIncorrectContactSubject();
   
})

test('error is displayed when contact form description is empty or incorrect', async ({hotelApp})=>{
    await hotelApp.contact.waitForVisible();
    await hotelApp.contact.submitContactForm({
        name: 'John',
        email: 'test@test.com',
        phone: '07123456789',
        subject: 'Test Subject',
        description: '',
   });

    await hotelApp.contact.assertEmptyContactDescription();

    await hotelApp.contact.submitContactForm({
        name: 'John',
        email: 'test@test.com',
        phone: '07123456789',
        subject: 'Test Subject',
        description: 'Te',
   });
   await hotelApp.contact.assertIncorrectContactDescription();
   
})