(function (global) {
	var EE;

	if (!global.APP) {
		global.APP = {};
	}

	EE = function () {
		//store the listeners somewhere
		this.listeners = {};
	};

	EE.prototype.on = function (eventName, listener, context) {
		if( !this.listeners(eventName)) {
			this.listeners[eventName] = [];
		}
		// listener.apply( context );
//			this.listeners[eventName].push(listener.bind(context));
		this.listeners[eventName].push({
			listener: listener,
			context: context || window
		});
		
		return function () {
			this.listener[eventName];
		};
	};

	EE.prototype.emit = function (eventName) {
			if( this.listeners(eventName)) {
				this.listeners[eventName].forEach(function (listenerData) {
					listenerData.listener.apply(listenerData.context);
				}
				
			}
	};

	var ee = new EE();
    ee.on('click');
	ee.on('otherEvent');
	
  var customCtx = { key: value }
//
	var removeListener = ee.on('test', function (arg1, arg2) {
		console.log(arg1, arg2); //1, 2
		console.log(this.key); //value
	}, customCtx);
//
	ee.emit('test', 1, 2);
//
	removeListener(); //removes my listener from the event emitter;
//
	ee.emit('test'); //nothing will execute

	global.APP.EventEmitter = EE;

}(window));
