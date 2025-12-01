import {test} from '../fixtures/test_fixtures';


test('User Can Book A Single Room Successfully', async ({hotelApp})=>{
    await hotelApp.rooms.singleRoomBooking('Single');
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.waitForVisible();
    await hotelApp.booking.assertFormIsVisible();

   await hotelApp.booking.fillBookingDetails({
        firstName: 'John',
        lastName: 'Smith',
        email: 'test@test.com',
        phone: '07123456789',
   })
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.assertReservationSuccess();

})



//page currently bugs on reservation submit when rooms are booked for those dates aleready
test('User can book a room for a specific date', async ({hotelApp})=>{
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


test('User can book a room for a specific date for future month', async ({hotelApp})=>{
    await hotelApp.rooms.waitForLoaded();
    await hotelApp.availability.nextMonthCalendar({
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


test("User can book a Double Room Successfully", async ({hotelApp})=>{
    await hotelApp.rooms.singleRoomBooking('Double');
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.waitForVisible();
    await hotelApp.booking.assertFormIsVisible();

   await hotelApp.booking.fillBookingDetails({
        firstName: 'John',
        lastName: 'Smith',
        email: 'test@test.com',
        phone: '07123456789',
   })
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.assertReservationSuccess();

})


test("User can book a Suite Room Successfully", async ({hotelApp})=>{
    await hotelApp.rooms.singleRoomBooking('Suite');
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.waitForVisible();
    await hotelApp.booking.assertFormIsVisible();

   await hotelApp.booking.fillBookingDetails({
        firstName: 'John',
        lastName: 'Smith',
        email: 'test@test.com',
        phone: '07123456789',
   })
    await hotelApp.booking.reserveButton();

    await hotelApp.booking.assertReservationSuccess();

})

