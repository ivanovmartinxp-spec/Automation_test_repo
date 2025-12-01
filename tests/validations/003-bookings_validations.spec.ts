import {test} from '../fixtures/test_fixtures';

test('Error is received when Booking Form Name is incorrect or empty', async ({hotelApp})=>{
    await hotelApp.rooms.waitForLoaded();
    await hotelApp.availability.submitAvailability();
    await hotelApp.rooms.singleRoomBooking('Single');
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.waitForVisible();
    await hotelApp.booking.assertFormIsVisible();

    await hotelApp.booking.fillBookingDetails({
        firstName: '',
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '07123456789',
    });
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.assertEmptyBookingFirstName();

    await hotelApp.booking.fillBookingDetails({
        firstName: 'Te',
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '07123456789',
    });

    await hotelApp.booking.reserveButton();

    await hotelApp.booking.assertIncorrectFName();

}) 

test('Error is received when Last name Is incorrect or empty', async ({hotelApp})=>{
await hotelApp.rooms.waitForLoaded();
    await hotelApp.availability.submitAvailability();
    await hotelApp.rooms.singleRoomBooking('Single');
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.waitForVisible();
    await hotelApp.booking.assertFormIsVisible();

    await hotelApp.booking.fillBookingDetails({
        firstName: 'John',
        lastName: '',
        email: 'john.smith@test.com',
        phone: '07123456789',
    });
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.assertEmptyLastNameError();

    await hotelApp.booking.fillBookingDetails({
        firstName: 'John',
        lastName: 'Te',
        email: 'john.smith@test.com',
        phone: '07123456789',
    });

    await hotelApp.booking.reserveButton();

    await hotelApp.booking.assertIncorrectLastNameError();

}) 

test('Error is received when email Is incorrect or empty', async ({hotelApp})=>{
await hotelApp.rooms.waitForLoaded();
    await hotelApp.availability.submitAvailability();
    await hotelApp.rooms.singleRoomBooking('Single');
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.waitForVisible();
    await hotelApp.booking.assertFormIsVisible();

    await hotelApp.booking.fillBookingDetails({
        firstName: 'John',
        lastName: 'Smith',
        email: '',
        phone: '07123456789',
    });
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.assertEmptyEmailError();

    await hotelApp.booking.fillBookingDetails({
        firstName: 'John',
        lastName: 'Smith',
        email: 'john',
        phone: '07123456789',
    });

    await hotelApp.booking.reserveButton();

    await hotelApp.booking.assertIncorrectEmailError();

}) 

test('Error is received when phone is incorrect or empty', async ({hotelApp})=>{
await hotelApp.rooms.waitForLoaded();
    await hotelApp.availability.submitAvailability();
    await hotelApp.rooms.singleRoomBooking('Single');
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.waitForVisible();
    await hotelApp.booking.assertFormIsVisible();

    await hotelApp.booking.fillBookingDetails({
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '',
    });
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.assertEmptyPhoneError();

    await hotelApp.booking.fillBookingDetails({
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '071',
    });

    await hotelApp.booking.reserveButton();

    await hotelApp.booking.assertIncorrectPhoneError();

}) 


test('User can not book a room for a specific date more than once', async ({hotelApp})=>{
    await hotelApp.rooms.waitForLoaded();
    //first booking
    await hotelApp.availability.calendarAvailabilityCheck({ 
        startDate: '8',
        endDate: '9'});
    await hotelApp.availability.submitAvailability();
    await hotelApp.rooms.singleRoomBooking('Single');
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.waitForVisible();
    await hotelApp.booking.assertFormIsVisible();
    await hotelApp.booking.fillBookingDetails({
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '07123456789',
    })

    await hotelApp.booking.reserveButton();
    await hotelApp.booking.assertReservationSuccess();
    await hotelApp.booking.assertReturnHomeIsVisible();
    await hotelApp.booking.returnToHomePage();

    //second booking for the same date and same details
    await hotelApp.rooms.waitForLoaded();
    await hotelApp.availability.calendarAvailabilityCheck({ 
        startDate: '8',
        endDate: '9'});
    await hotelApp.availability.submitAvailability();
    await hotelApp.rooms.singleRoomBooking('Single');
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.waitForVisible();
    await hotelApp.booking.assertFormIsVisible();
    await hotelApp.booking.fillBookingDetails({
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '07123456789',
    })

    await hotelApp.booking.reserveButton();
    await hotelApp.booking.assertReservationSuccess();
    await hotelApp.booking.assertReturnHomeIsVisible();
})

//users can book for previous month, should not be the case
test('User can not book a room for a specific date for past month', async ({hotelApp})=>{
    await hotelApp.rooms.waitForLoaded();
    await hotelApp.availability.previousMonthCalendar({
        startDate: '14',
        endDate: '17',
    })
    await hotelApp.availability.submitAvailability();
    await hotelApp.rooms.singleRoomBooking('Single');
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.waitForVisible();
    await hotelApp.booking.assertFormIsVisible();
    await hotelApp.booking.fillBookingDetails({
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '07123456789',
    })

    await hotelApp.booking.reserveButton();
    await hotelApp.booking.assertReservationSuccess();
    await hotelApp.booking.assertReturnHomeIsVisible();

})