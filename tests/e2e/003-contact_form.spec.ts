import {test} from '../fixtures/test_fixtures';


test('users can successfully fill in an submit a contact form', async ({hotelApp})=>{
   await hotelApp.contact.waitForVisible();
   await hotelApp.contact.submitContactForm({
        name: 'John',
        email: 'test@test.com',
        phone: '07123456789',
        subject: 'Test Subject',
        description: 'Test Description for the purposes of testing this field!',
   });

   await hotelApp.contact.assertMessageSubmitted({
        name: 'John',
        subjectText: 'Test Subject',
   });

});

