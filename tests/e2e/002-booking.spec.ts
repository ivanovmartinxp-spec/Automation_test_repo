import {test} from '../fixtures/002-test_fixtures.spec';

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
    await hotelApp.rooms.singleRoomBooking('Single');
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.waitForVisible();
    await hotelApp.booking.assertFormIsVisible();
    await hotelApp.booking.emptyFirstNameDetails;
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.assertEmptyBookingFirstName();

})