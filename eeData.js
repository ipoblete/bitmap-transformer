const EventEmmiter = require('events');

const ee = new EventEmmiter();

ee.on('we did it with data', data => {
  console.log(data);
});

ee.emit('we did it with data', 'hello!');
