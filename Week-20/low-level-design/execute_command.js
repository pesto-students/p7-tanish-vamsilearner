const ParkingLot = require('./parking_lot'); // Import the ParkingLot class

// Define the executeCommand function, which takes the parkingLot instance, command, and args as arguments
function executeCommand(parkingLot, command, args) {
    // Switch on the given command to determine which operation to perform
    switch (command) {
        case 'create_parking_lot':
            parkingLot = new ParkingLot(args[0]);
            console.log(`Created a parking lot with ${args[0]} slots`);
            break;
        case 'park':
            parkingLot.park(args[0], args[1]);
            break;
        case 'leave':
            parkingLot.leave(args[0]);
            break;
        case 'status':
            parkingLot.status();
            break;
        case 'registration_numbers_for_cars_with_colour':
            parkingLot.registrationNumbersForCarsWithColor(args[0]);
            break;
        case 'slot_number_for_registration_number':
            parkingLot.slotNumberForRegistrationNumber(args[0]);
            break;
        case 'slot_numbers_for_cars_with_colour':
            parkingLot.slotNumbersForCarsWithColor(args[0]);
            break;
        default:
            console.log('Invalid Command');
            break;
    }

    return parkingLot; // Return the updated parkingLot instance
}

module.exports = executeCommand; //export file to use in other files