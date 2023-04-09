// Define the ParkingLot class
class ParkingLot {
    // Constructor takes the capacity of the parking lot as an argument
    constructor(capacity) {
        // Set the capacity of the parking lot
        this.capacity = capacity;
        // Initialize an array of slots with the given capacity, filled with null
        this.slots = new Array(capacity).fill(null);
        // Initialize a map to store registration numbers and their corresponding slots
        this.registrationMap = new Map();
        // Initialize a map to store colors and an array of slots with cars of that color
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

// Export the ParkingLot class so it can be used in other files
module.exports = ParkingLot;