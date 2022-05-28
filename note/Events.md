# Events

Every action on a computer is an event. Like when a connection is made or a file is opened.

Objects in Node.js can fire events,like the readStream object fires events when opening and closing a file:

## Events

In addition, all event properties and methods are an instance of an EventEmitter [object.To](http://object.To) be able to access these properties and methods, create an EventEmitter object:

```bash
var events = require('events');
var eventEmitter = new events.EventEmitter();
```

### assign events handlers to your own events

To fire an event, use the `emit()` method.

```javascript
var eventEmitter = new events.EventEmitter();

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
```
