import {test} from '../fixtures/test_fixtures';


test('User Can Book A Single Room Successfully', async ({hotelApp})=>{
    await hotelApp.rooms.singleRoomBooking('Single');
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.waitForVisible();
    await hotelApp.booking.assertFormIsVisible();

    await hotelApp.booking.correctBookingDetails;
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.assertReservationSuccess();

})


test('Error is received when Booking Form Name is incorrect or empty', async ({hotelApp})=>{
    await hotelApp.rooms.waitForLoaded();
    await hotelApp.availability.submitAvailability();
    await hotelApp.rooms.singleRoomBooking('Single');
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.waitForVisible();
    await hotelApp.booking.assertFormIsVisible();

    await hotelApp.booking.emptyFirstNameDetails({
        firstName: '',
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '07123456789',
    });
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.assertEmptyBookingFirstName();

}) 

//page currently bugs on reservation submit when rooms are booked for those dates aleready
test('User can book a room for a specific date', async ({hotelApp})=>{
    await hotelApp.rooms.waitForLoaded();
    await hotelApp.availability.positiveCalendarAvCheck({ startDate: '8',
        endDate: '9'});
    await hotelApp.availability.submitAvailability();
    await hotelApp.rooms.singleRoomBooking('Single');
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.waitForVisible();
    await hotelApp.booking.assertFormIsVisible();
    await hotelApp.booking.correctBookingDetails({
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@test.com',
        phone: '07123456789',
    })

    await hotelApp.booking.reserveButton();
    await hotelApp.booking.assertReservationSuccess();
    await hotelApp.booking.assertReturnHomeIsVisible();

})