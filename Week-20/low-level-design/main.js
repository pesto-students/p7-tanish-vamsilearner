// Import required modules
const readline = require('readline');
const fs = require('fs');
const executeCommand = require('./execute_command');

// Initialize the parkingLot variable as null
let parkingLot = null;

// Create a readline interface for interactive command prompt
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Set the 'line' event listener on the readline interface
rl.on('line', line => {
    // Split the input line into command and arguments
    let input = line.trim().split(/\s+/);
    let command = input.shift();
    // Call the executeCommand function with the current parkingLot instance, command, and arguments
    parkingLot = executeCommand(parkingLot, command, input);
});

// Check if a file is provided as a command-line argument
const file = process.argv[2];

if (file) {
    // If a file is provided, read its content
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;
        // Split the file content into lines
        let lines = data.split('\n');
        // Iterate through each line
        lines.forEach(line => {
            // Split the line into command and arguments
            let input = line.trim().split(/\s+/);
            let command = input.shift();
            // Call the executeCommand function with the current parkingLot instance, command, and arguments
            parkingLot = executeCommand(parkingLot, command, input);
        });
    });
}


// commands to check the status of the parking lot
// create_parking_lot 6
// park KA-01-HH-1234 White
// park KA-01-HH-9999 White
// status
// leave 1
// park KA-01-BB-0001 Black
// park KA-01-HH-7777 Red
// registration_numbers_for_cars_with_colour White
// slot_numbers_for_cars_with_colour White
// slot_number_for_registration_number KA-01-HH-3141
// slot_number_for_registration_number KA-01-HH-1234