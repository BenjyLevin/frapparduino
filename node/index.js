var five = require("johnny-five"),
	board = new five.Board();
	device ={};

// off position of blender
var OFF_POS = 90;

// on position of blender
var ON_POS = 120;

// time to dispense
var TTD = 2000;

// time to fill
var TTF = 2000;

// time to dispense milk
var TTDM = 5000;

board.on("ready",function(){
	console.log("Board Ready");
	
	// set up relays
	device.bot1top = new five.Relay(1);
	device.bot1bot = new five.Relay(2);
	device.bot2top = new five.Relay(3);
	device.bot2bot = new five.Relay(4);
	device.bot3top = new five.Relay(5);
	device.bot3bot = new five.Relay(6);
	device.bot4top = new five.Relay(7);
	device.bot4bot = new five.Relay(8);
	device.bot5milk = new five.Relay(9);
	
	// set up servo
	device.servo = new five.Servo({
	    id: "MyServo",     // User defined id
	    pin: 10,           // Which pin is it attached to?
	    type: "standard",  // Default: "standard". Use "continuous" for continuous rotation servos
	    range: [0,180],    // Default: 0-180
	    fps: 100,          // Used to calculate rate of movement between positions
	    isInverted: false, // Invert all specified positions
	    startAt: ON_POS,       // Immediately move to a degree
	    center: false,      // overrides startAt if true and moves the servo to the center of the range
	    specs: {           // Is it running at 5V or 3.3V?
	      speed: five.Servo.Continuous.speeds["@5.0V"] 
	    }
	  });
	  // REPL for shell commands
	  this.repl.inject({
	    servo: servo,
	    bot1top : bot1top,
	  	bot2top : bot2top,
	  	bot3top : bot3top,
	  	bot4top : bot4top,
	  	bot5milk : bot5milk,
	  	bot1bot : bot1bot,
	  	bot2bot : bot2bot,
	  	bot3bot : bot3bot,
	  	bot4bot : bot4bot
	  });
	  console.log("Components initialized");
});

// mocha frap
function recipe1(){
	// coffee base
	dispense(bot1top,bot1bot);
	// frap coffee roast
	dispense(bot2top,bot2bot);
	// mocha syrup
	dispense(bot3top,bot3bot);
	// milk
	milk();
}
// caramel frap
function recipe2(){
	// coffee base
	dispense(bot1top,bot1bot);
	// frap coffee roast
	dispense(bot2top,bot2bot);
	// caramel syrup
	dispense(bot4top,bot4bot);
	// milk
	milk();
}
// coffee frap
function recipe3(){
	// coffee base
	dispense(bot1top,bot1bot);
	// frap coffee roast
	dispense(bot2top,bot2bot);
	// milk
	milk();
}
/*
// vanilla frap
function recipe4(){
}*/

function milk(){
	device.bot5milk.toggle();
	setTimeout(){function(){device.bot5milk.toggle(), TTDM}};
}
// dispense a bottle
function dispense(relaytop,relaybot){
	device[relaybot].toggle();
	setTimeout(function(){device[relaybot].toggle()},TTD);
	device[relaytop].toggle();
	setTimeout(function(){device[relaytop].toggle()},TTF);
}

// blender functions
function blender_on(){
	device.servo.to(ON_POS);	
}

function blender_off(){
	device.servo.to(OFF_POS);	
}

console.log("\n Connecting to the arduino...");

