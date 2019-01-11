const EventEmitter = require('events');

class LetterEmitter extends EventEmitter {
  read(str) {
    // split the string
    str.split('')
      .filter(char => char !== ' ')
      .forEach((letter, offset) => {
        // forEach letter in string emit a letter event
        // pass along some data like { letter: 'e', offset: 1 }
        this.emit('letter', { letter, offset });
      });

    this.emit('end');
    // after reaching the end emit and end event
  }
}

module.exports = LetterEmitter;


