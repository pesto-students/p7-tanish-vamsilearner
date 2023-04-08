class ParkingLot {
    constructor(capacity) {
        this.capacity = capacity;
        this.slots = new Array(capacity).fill(null);
        this.registrationMap = new Map();
        this.colorMap = new Map();
    }

    park(registrationNumber, color) {
        if (this.isFull()) {
            console.log('Sorry, parking lot is full');
            return;
        }

        let slot = this.getNextAvailableSlot();
        this.slots[slot] = { registrationNumber, color };
        this.registrationMap.set(registrationNumber, slot);
        if (this.colorMap.has(color)) {
            this.colorMap.get(color).push(slot);
        } else {
            this.colorMap.set(color, [slot]);
        }
        console.log(`Allocated slot number: ${slot + 1}`);
    }

    leave(slot) {
        if (!this.slots[slot - 1]) {
            console.log('Slot is already empty');
            return;
        }

        let { registrationNumber, color } = this.slots[slot - 1];
        this.slots[slot - 1] = null;
        this.registrationMap.delete(registrationNumber);
        let colorSlots = this.colorMap.get(color);
        colorSlots.splice(colorSlots.indexOf(slot - 1), 1);
        console.log(`Slot number ${slot} is free`);
    }

    status() {
        console.log('Slot No. Registration No Color');
        this.slots.forEach((slot, index) => {
            if (slot) {
                console.log(`${index + 1} ${slot.registrationNumber} ${slot.color}`);
            }
        });
    }

    registrationNumbersForCarsWithColor(color) {
        let colorSlots = this.colorMap.get(color);
        if (!colorSlots) {
            console.log('Not found');
            return;
        }

        let registrationNumbers = colorSlots
            .map(slot => this.slots[slot].registrationNumber)
            .join(', ');
        console.log(registrationNumbers);
    }

    slotNumberForRegistrationNumber(registrationNumber) {
        let slot = this.registrationMap.get(registrationNumber);
        if (slot === undefined) {
            console.log('Not found');
            return;
        }

        console.log(slot + 1);
    }

    slotNumbersForCarsWithColor(color) {
        let colorSlots = this.colorMap.get(color);
        if (!colorSlots) {
            console.log('Not found');
            return;
        }

        let slotNumbers = colorSlots.map(slot => slot + 1).join(', ');
        console.log(slotNumbers);
    }

    getNextAvailableSlot() {
        return this.slots.findIndex(slot => slot === null);
    }

    isFull() {
        return this.slots.every(slot => slot !== null);
    }
}

// Interactive Command Prompt
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let parkingLot = null;

rl.on('line', line => {
    let input = line.trim().split(/\s+/);
    let command = input.shift();
    executeCommand(command, input);
});

// File Input
const fs = require('fs');
const file = process.argv[2];

if (file) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;
        let lines = data.split('\n');
        lines.forEach(line => {
            let input = line.trim().split(/\s+/);
            let command = input.shift();
            executeCommand(command, input);
        });
    });
}

function executeCommand(command, args) {
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
}

// commands to check the status of the parking lot
// create_parking_lot 5
// park KA-01-HH-1234 White
// park KA-01-HH-9999 White
// status
// leave 1
// status

