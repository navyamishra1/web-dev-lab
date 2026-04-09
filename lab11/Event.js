// Import events module
const EventEmitter = require('events');

// Create emitter object
const eventEmitter = new EventEmitter();

// Listener 1
eventEmitter.on('greet', (name) => {
    console.log(`Hello ${name}!`);
});

// Listener 2
eventEmitter.on('greet', (name) => {
    console.log(`Welcome ${name}!`);
});

// Custom event emit
eventEmitter.emit('greet', 'Navya');

// Another event
eventEmitter.on('dataReceived', (data) => {
    console.log('Data received:', data);
});

// Emit second event
eventEmitter.emit('dataReceived', { id: 1, message: "Hello Event" });